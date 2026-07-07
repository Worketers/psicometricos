// app.js - KBS Edition

const API_URL = "https://script.google.com/macros/s/AKfycbyhP7V1uyVhb30bvhUseT9_j37jKHbMhmGHA-UolVSyAP6nHD0eDItszWuyVX5OWNWw/exec";

let currentSerieIndex = 0;
let respuestasCandidato = {};
let timerInterval;
let candidateID = "";

// Elementos del DOM
const loginScreen = document.getElementById('login-screen');
const instructionScreen = document.getElementById('instruction-screen');
const testScreen = document.getElementById('test-screen');
const finishScreen = document.getElementById('finish-screen');

const btnValidate = document.getElementById('btn-validate');
const inputCandidateId = document.getElementById('candidate-id');
const errorMessage = document.getElementById('error-message');
const btnStartTimer = document.getElementById('btn-start-timer');
const btnNextSerie = document.getElementById('btn-next-serie');

// --- 1. VALIDACIÓN DEL CANDIDATO ---
btnValidate.addEventListener('click', async () => {
    candidateID = inputCandidateId.value.trim();
    if (!candidateID) {
        showError("Por favor ingresa un ID válido.");
        return;
    }

    btnValidate.innerText = "Validando...";
    btnValidate.disabled = true;

    try {
        const response = await fetch(`${API_URL}?id=${candidateID}`);
        const data = await response.json();

        if (data.valid) {
            loginScreen.style.display = 'none';
            showInstructions(); // Mandamos a la sala de espera de la Serie I
        } else {
            showError(data.message || "ID no válido o prueba ya completada.");
        }
    } catch (error) {
        showError("Error de conexión con el servidor.");
    } finally {
        btnValidate.innerText = "Comenzar Prueba";
        btnValidate.disabled = false;
    }
});

function showError(msg) {
    errorMessage.innerText = msg;
    errorMessage.style.display = 'block';
    setTimeout(() => errorMessage.style.display = 'none', 4000);
}

// --- 2. SALA DE ESPERA (INSTRUCCIONES) ---
function showInstructions() {
    testScreen.style.display = 'none';
    instructionScreen.style.display = 'block';
    clearInterval(timerInterval); // Detenemos cualquier reloj fantasma

    const currentSerie = testData[currentSerieIndex];
    
    document.getElementById('inst-title').innerText = currentSerie.title;
    document.getElementById('inst-text').innerText = currentSerie.instructions;
    document.getElementById('inst-example').innerText = currentSerie.example || "";
    
    const minutes = Math.floor(currentSerie.timeLimit / 60);
    const seconds = currentSerie.timeLimit % 60;
    document.getElementById('inst-time').innerText = `${minutes} min ${seconds} seg`;
    
    window.scrollTo(0, 0);
}

// Botón para arrancar el tiempo desde la sala de espera
btnStartTimer.addEventListener('click', () => {
    instructionScreen.style.display = 'none';
    testScreen.style.display = 'block';
    startSerie();
});

// --- 3. RENDERIZADO DE LA SERIE ---
function startSerie() {
    const currentSerie = testData[currentSerieIndex];
    document.getElementById('serie-title').innerText = currentSerie.title;
    
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    currentSerie.questions.forEach((q) => {
        let html = `<div class="question-block"><p><strong>${q.text}</strong></p>`;
        
        // Si es pregunta de matemáticas/números (Series V y X)
        if (q.inputType === "text") {
            // Permitimos: Números (0-9), espacios ( ), puntos (.), diagonales (/) y guiones (-)
            // Bloqueamos: Todo tipo de letras y demás símbolos
            let restricciones = `oninput="this.value = this.value.replace(/[^0-9 .\\-\\/]/g, '')"`;
            
            html += `<input type="text" name="${q.id}" placeholder="Tu respuesta..." ${restricciones} autocomplete="off">`;
        } 
        // Si es de opción múltiple
        else if (q.options) {
            const inputType = q.inputType === "checkbox" ? "checkbox" : "radio";
            for (const [key, value] of Object.entries(q.options)) {
                let textoMostrar = (key === value) ? `${key})` : `${key}) ${value}`;
                html += `<label><input type="${inputType}" name="${q.id}" value="${key}"> ${textoMostrar}</label><br>`;
            }
        }
        
        html += `</div>`;
        container.innerHTML += html;
    });

    window.scrollTo(0, 0);
    startTimer(currentSerie.timeLimit);
}

// --- 4. RECOLECCIÓN DE RESPUESTAS ---
btnNextSerie.addEventListener('click', autoSubmitSerie);

function autoSubmitSerie() {
    clearInterval(timerInterval);
    const currentSerie = testData[currentSerieIndex];
    let respuestasDeEstaSerie = [];

    currentSerie.questions.forEach((q) => {
        if (q.inputType === "text") {
            const inputEl = document.querySelector(`input[name="${q.id}"]`);
            respuestasDeEstaSerie.push(inputEl ? inputEl.value.trim() : "");
        } else if (q.inputType === "checkbox") {
            const selected = document.querySelectorAll(`input[name="${q.id}"]:checked`);
            let values = Array.from(selected).map(el => el.value);
            respuestasDeEstaSerie.push(values.join(' ')); 
        } else {
            const selected = document.querySelector(`input[name="${q.id}"]:checked`);
            respuestasDeEstaSerie.push(selected ? selected.value : "");
        }
    });

    // Guardar las respuestas en el objeto global
    respuestasCandidato[`S${currentSerie.serie}`] = respuestasDeEstaSerie.join(',');

    currentSerieIndex++;
    
    // Si hay más series, regresamos a la sala de espera. Si no, enviamos.
    if (currentSerieIndex < testData.length) {
        showInstructions();
    } else {
        enviarExamenFinal();
    }
}

// --- 5. TEMPORIZADOR Y MOTOR VISUAL ---
function startTimer(secondsLeft) {
    const display = document.getElementById('timer-display');
    
    // Colores iniciales
    display.classList.remove('glow-yellow', 'glow-red');
    display.classList.add('glow-green');

    timerInterval = setInterval(() => {
        secondsLeft--;
        
        let minutes = Math.floor(secondsLeft / 60);
        let seconds = secondsLeft % 60;
        
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        
        display.innerText = `${minutes}:${seconds}`;

        // Alertas visuales de tiempo
        if (secondsLeft <= 30 && secondsLeft > 10) {
            display.classList.replace('glow-green', 'glow-yellow');
        } else if (secondsLeft <= 10) {
            display.classList.replace('glow-yellow', 'glow-red');
        }

        // Se acabó el tiempo
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            autoSubmitSerie();
        }
    }, 1000);
}

// --- 6. ENVÍO FINAL AL SERVIDOR ---
async function enviarExamenFinal() {
    testScreen.style.display = 'none';
    instructionScreen.style.display = 'none';
    
    // Mostramos pantalla de carga
    document.querySelector('.hyperion-wrapper').innerHTML = `
        <div class="card" style="text-align: center;">
            <h2 class="glow-yellow">Enviando resultados...</h2>
            <p>Por favor no cierres esta ventana.</p>
        </div>
    `;

    const payload = {
        id: candidateID,
        respuestas: respuestasCandidato
    };

    try {
        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // Pantalla de Éxito
        document.querySelector('.hyperion-wrapper').innerHTML = `
            <div class="card" style="text-align: center;">
                <h2 class="glow-green">¡Evaluación Completada!</h2>
                <p>Tus respuestas han sido enviadas exitosamente al equipo de KBS.</p>
                <p>Ya puedes cerrar esta ventana.</p>
            </div>
        `;
    } catch (error) {
        document.querySelector('.hyperion-wrapper').innerHTML = `
            <div class="card" style="text-align: center;">
                <h2 class="glow-red">Ocurrió un problema</h2>
                <p>No pudimos conectar con el servidor, pero tus respuestas están a salvo. Por favor avisa a Recursos Humanos.</p>
            </div>
        `;
    }
}
