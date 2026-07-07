// data.js (Para tu repositorio en GitHub Pages)

const testData = [
  {
    serie: 1,
    title: "Serie I - Información",
    timeLimit: 120, // 2 minutos
    instructions: "Ponga la letra correspondiente a la palabra que complete correctamente la oración.",
    example: "Ejemplo:\nEl iniciador de nuestra guerra de independencia fue:\na) Morelos\nb) Zaragoza\nc) Iturbide\nd) Hidalgo\n\nRespuesta correcta: (d)",
    questions: [
      { id: "S1_Q1", text: "1. La gasolina se extrae de:", options: { A: "granos", B: "petróleo", C: "trementina", D: "semilla" } },
      { id: "S1_Q2", text: "2. Una tonelada tiene:", options: { A: "1000 Kg.", B: "2000 Kg.", C: "3000 Kg.", D: "4000 Kg." } },
      { id: "S1_Q3", text: "3. La mayoría de nuestras exportaciones salen por:", options: { A: "Mazatlán", B: "Acapulco", C: "Progreso", D: "Veracruz" } },
      { id: "S1_Q4", text: "4. El nervio óptico sirve para:", options: { A: "ver", B: "oír", C: "probar", D: "sentir" } },
      { id: "S1_Q5", text: "5. El café es una especie de:", options: { A: "corteza", B: "fruto", C: "hojas", D: "raíz" } },
      { id: "S1_Q6", text: "6. El jamón es carne de:", options: { A: "carnero", B: "vaca", C: "gallina", D: "cerdo" } },
      { id: "S1_Q7", text: "7. La laringe está en:", options: { A: "abdomen", B: "cabeza", C: "garganta", D: "espalda" } },
      { id: "S1_Q8", text: "8. La guillotina causa:", options: { A: "muerte", B: "enfermedad", C: "fiebre", D: "malestar" } },
      { id: "S1_Q9", text: "9. La grúa se usa para:", options: { A: "perforar", B: "cortar", C: "levantar", D: "exprimir" } },
      { id: "S1_Q10", text: "10. Una figura de seis lados se llama:", options: { A: "pentágono", B: "paralelogramo", C: "hexágono", D: "trapecio" } },
      { id: "S1_Q11", text: "11. El kilowatt mide:", options: { A: "lluvia", B: "viento", C: "electricidad", D: "presión" } },
      { id: "S1_Q12", text: "12. La pauta se usa en:", options: { A: "agricultura", B: "música", C: "fotografía", D: "escenografía" } },
      { id: "S1_Q13", text: "13. Las esmeraldas son:", options: { A: "azules", B: "verdes", C: "rojas", D: "amarillas" } },
      { id: "S1_Q14", text: "14. El metro es aproximadamente igual a:", options: { A: "pie", B: "pulgada", C: "yarda", D: "milla" } },
      { id: "S1_Q15", text: "15. Las esponjas se obtienen de:", options: { A: "animales", B: "hierbas", C: "bosques", D: "minas" } },
      { id: "S1_Q16", text: "16. Fraude es un término usado en:", options: { A: "medicina", B: "teología", C: "leyes", D: "pedagogía" } }
    ]
  },
  {
    serie: 2,
    title: "Serie II - Juicio",
    timeLimit: 120, // 2 minutos
    instructions: "Ponga la letra correspondiente a la palabra que complete la oración.",
    example: "Ejemplo:\n¿Por qué compramos relojes? Porque:\na) Nos gusta oírlos sonar\nb) Tienen manecillas\nc) Nos indican las horas\n\nRespuesta correcta: (c)",
    questions: [
      { id: "S2_Q1", text: "1. Si la Tierra estuviera más cerca del Sol:", options: { A: "las estrellas desaparecerían", B: "los meses serían más largos", C: "la Tierra estaría más caliente" } },
      { id: "S2_Q2", text: "2. Los rayos de una rueda están frecuentemente hechos de nogal porque:", options: { A: "el nogal es fuerte", B: "se corta fácilmente", C: "coge bien la pintura" } },
      { id: "S2_Q3", text: "3. Un tren se detiene con más dificultad que un automóvil porque:", options: { A: "tiene más ruedas", B: "es más pesado", C: "sus frenos no son buenos" } },
      { id: "S2_Q4", text: "4. El dicho 'A golpecitos se derriba un roble' quiere decir:", options: { A: "que los robles son débiles", B: "que son mejores los golpes pequeños", C: "que el esfuerzo constante logra resultados sorprendentes" } },
      { id: "S2_Q5", text: "5. El dicho 'Una olla vigilada nunca hierve' quiere decir:", options: { A: "que no debemos vigilarla cuando está en el fuego", B: "que tarda en hervir", C: "que el tiempo se alarga cuando esperamos algo" } },
      { id: "S2_Q6", text: "6. El dicho 'Siembra pasto mientras haya sol' quiere decir:", options: { A: "que el pasto se siembra en verano", B: "que debemos aprovechar nuestras oportunidades", C: "que el pasto no debe cortarse en la noche" } },
      { id: "S2_Q7", text: "7. El dicho 'Zapatero a tus zapatos' quiere decir:", options: { A: "que un zapatero no debe abandonar sus zapatos", B: "que los zapateros no deben estar ociosos", C: "que debemos trabajar en lo que podamos hacer mejor" } },
      { id: "S2_Q8", text: "8. El dicho 'La cuña para que apriete tiene que ser del mismo palo' quiere decir:", options: { A: "que el palo sirve para apretar", B: "que las cuñas siempre son de madera", C: "nos exigen más las personas que nos conocen" } },
      { id: "S2_Q9", text: "9. Un acorazado de acero flota porque:", options: { A: "la máquina lo hace flotar", B: "porque tiene grandes espacios huecos", C: "contiene algo de madera" } },
      { id: "S2_Q10", text: "10. Las plumas de las alas ayudan al pájaro a volar porque:", options: { A: "las alas ofrecen una amplia superficie ligera", B: "mantiene el aire fuera del cuerpo", C: "disminuyen su peso" } },
      { id: "S2_Q11", text: "11. El dicho 'Una golondrina no hace verano' quiere decir:", options: { A: "que las golondrinas regresan", B: "que un simple dato no es suficiente", C: "que los pájaros se agregan a nuestros placeres del verano" } }
    ]
  },
  {
    serie: 3,
    title: "Serie III - Vocabulario",
    timeLimit: 120, // 2 minutos
    instructions: "Cuando las dos palabras signifiquen lo mismo, ponga la letra I (igual); cuando signifiquen lo opuesto, ponga la letra O (opuesto).",
    example: "Ejemplos:\ntirar - arrojar ( I )\nnorte - sur ( O )",
    questions: [
      { id: "S3_Q1", text: "1. salado - dulce", options: { I: "I", O: "O" } },
      { id: "S3_Q2", text: "2. alegrarse - regocijarse", options: { I: "I", O: "O" } },
      { id: "S3_Q3", text: "3. mayor - menor", options: { I: "I", O: "O" } },
      { id: "S3_Q4", text: "4. sentarse - pararse", options: { I: "I", O: "O" } },
      { id: "S3_Q5", text: "5. desperdiciar - aprovechar", options: { I: "I", O: "O" } },
      { id: "S3_Q6", text: "6. conceder - negar", options: { I: "I", O: "O" } },
      { id: "S3_Q7", text: "7. tónico - estimulante", options: { I: "I", O: "O" } },
      { id: "S3_Q8", text: "8. rebajar - denigrar", options: { I: "I", O: "O" } },
      { id: "S3_Q9", text: "9. prohibir - permitir", options: { I: "I", O: "O" } },
      { id: "S3_Q10", text: "10. osado - audaz", options: { I: "I", O: "O" } },
      { id: "S3_Q11", text: "11. arrebatado - prudente", options: { I: "I", O: "O" } },
      { id: "S3_Q12", text: "12. obtuso - agudo", options: { I: "I", O: "O" } },
      { id: "S3_Q13", text: "13. inepto - experto", options: { I: "I", O: "O" } },
      { id: "S3_Q14", text: "14. esquivar - huir", options: { I: "I", O: "O" } },
      { id: "S3_Q15", text: "15. rebelarse - someterse", options: { I: "I", O: "O" } },
      { id: "S3_Q16", text: "16. monotonía - variedad", options: { I: "I", O: "O" } },
      { id: "S3_Q17", text: "17. confrontar - consolar", options: { I: "I", O: "O" } },
      { id: "S3_Q18", text: "18. expeler - retener", options: { I: "I", O: "O" } },
      { id: "S3_Q19", text: "19. dócil - sumiso", options: { I: "I", O: "O" } },
      { id: "S3_Q20", text: "20. transitorio - permanente", options: { I: "I", O: "O" } },
      { id: "S3_Q21", text: "21. seguridad - riesgo", options: { I: "I", O: "O" } },
      { id: "S3_Q22", text: "22. aprobar - objetar", options: { I: "I", O: "O" } },
      { id: "S3_Q23", text: "23. expeler - arrojar", options: { I: "I", O: "O" } },
      { id: "S3_Q24", text: "24. engaño - impostura", options: { I: "I", O: "O" } },
      { id: "S3_Q25", text: "25. mitigar - apaciguar", options: { I: "I", O: "O" } },
      { id: "S3_Q26", text: "26. incitar - aplacar", options: { I: "I", O: "O" } },
      { id: "S3_Q27", text: "27. reverencia - veneración", options: { I: "I", O: "O" } },
      { id: "S3_Q28", text: "28. sobriedad - frugalidad", options: { I: "I", O: "O" } },
      { id: "S3_Q29", text: "29. aumentar - menguar", options: { I: "I", O: "O" } },
      { id: "S3_Q30", text: "30. incitar - instigar", options: { I: "I", O: "O" } }
    ]
  },
  {
    serie: 4,
    title: "Serie IV - Síntesis",
    timeLimit: 180, // 3 minutos
    instructions: "Anote las letras correspondientes a las DOS palabras que indican algo que SIEMPRE TIENE EL SUJETO. (Seleccione dos opciones por pregunta).",
    example: "Ejemplo:\nUn hombre tiene siempre:\na) cuerpo\nb) gorra\nc) guantes\nd) boca\ne) dinero\n\nRespuesta correcta: (a) y (d)",
    questions: [
      { id: "S4_Q1", inputType: "checkbox", text: "1. Un CIRCULO tiene siempre:", options: { A: "altura", B: "circunferencia", C: "latitud", D: "longitud", E: "radio" } },
      { id: "S4_Q2", inputType: "checkbox", text: "2. Un PAJARO tiene siempre:", options: { A: "huesos", B: "huevos", C: "pico", D: "nido", E: "canto" } },
      { id: "S4_Q3", inputType: "checkbox", text: "3. La MUSICA tiene siempre:", options: { A: "oyente", B: "piano", C: "ritmo", D: "sonido", E: "violín" } },
      { id: "S4_Q4", inputType: "checkbox", text: "4. Un BANQUETE tiene siempre:", options: { A: "alimentos", B: "música", C: "personas", D: "discursos", E: "anfitrión" } },
      { id: "S4_Q5", inputType: "checkbox", text: "5. Un CABALLO tiene siempre:", options: { A: "arnés", B: "casco", C: "herradura", D: "establo", E: "cola" } },
      { id: "S4_Q6", inputType: "checkbox", text: "6. Un JUEGO tiene siempre:", options: { A: "cartas", B: "multas", C: "jugadores", D: "castigos", E: "reglas" } },
      { id: "S4_Q7", inputType: "checkbox", text: "7. Un OBJETO tiene siempre:", options: { A: "calor", B: "tamaño", C: "sabor", D: "valor", E: "peso" } },
      { id: "S4_Q8", inputType: "checkbox", text: "8. Una CONVERSACIÓN tiene siempre:", options: { A: "acuerdos", B: "personas", C: "preguntas", D: "ingenio", E: "palabras" } },
      { id: "S4_Q9", inputType: "checkbox", text: "9. Una DEUDA tiene siempre:", options: { A: "acreedor", B: "deudor", C: "interés", D: "hipoteca", E: "pago" } },
      { id: "S4_Q10", inputType: "checkbox", text: "10. Un CIUDADANO tiene siempre:", options: { A: "país", B: "ocupación", C: "derechos", D: "propiedad", E: "voto" } },
      { id: "S4_Q11", inputType: "checkbox", text: "11. Un MUSEO tiene siempre:", options: { A: "animales", B: "orden", C: "colecciones", D: "minerales", E: "visitantes" } },
      { id: "S4_Q12", inputType: "checkbox", text: "12. Un COMPROMISO implica siempre:", options: { A: "obligación", B: "acuerdo", C: "amistad", D: "respeto", E: "satisfacción" } },
      { id: "S4_Q13", inputType: "checkbox", text: "13. Un BOSQUE tiene siempre:", options: { A: "animales", B: "flores", C: "sombras", D: "maleza", E: "árboles" } },
      { id: "S4_Q14", inputType: "checkbox", text: "14. Los OBSTÁCULOS tienen siempre:", options: { A: "dificultad", B: "desaliento", C: "fracaso", D: "impedimento", E: "estímulo" } },
      { id: "S4_Q15", inputType: "checkbox", text: "15. El ABORRECIMIENTO tiene siempre:", options: { A: "aversión", B: "desagrado", C: "temor", D: "ira", E: "timidez" } },
      { id: "S4_Q16", inputType: "checkbox", text: "16. Una REVISTA tiene siempre:", options: { A: "anuncios", B: "papel", C: "fotografías", D: "grabados", E: "impresión" } },
      { id: "S4_Q17", inputType: "checkbox", text: "17. La CONTROVERSIA implica siempre:", options: { A: "argumentos", B: "desacuerdos", C: "aversión", D: "gritos", E: "derrota" } },
      { id: "S4_Q18", inputType: "checkbox", text: "18. Un BARCO tiene siempre:", options: { A: "maquinaria", B: "cañones", C: "quilla", D: "timón", E: "velas" } }
    ]
  },
  {
    serie: 5,
    title: "Serie V - Concentración",
    timeLimit: 300, // 5 minutos
    instructions: "Encuentre las respuestas a los siguientes problemas matemáticos lo más pronto posible. (Use papel y lápiz si es necesario). Escriba su respuesta exacta con número (ej: 20, 1/4, etc).",
    example: "Ejemplo:\nA 2 por 5 pesos, ¿Cuántos lápices pueden comprarse con 50 pesos?\n\nRespuesta correcta: 20",
    questions: [
      { id: "S5_Q1", inputType: "text", text: "1. A 2 por 5 pesos ¿Cuántos lápices pueden comprarse con 50 pesos?" },
      { id: "S5_Q2", inputType: "text", text: "2. ¿Cuántas horas tardaría un automóvil en recorrer 660 kilómetros a la velocidad de 60 kilómetros por hora?" },
      { id: "S5_Q3", inputType: "text", text: "3. Si un hombre gana $200.00 diarios y gasta $140.00 ¿Cuántos días tardará en ahorrar $3,000.00?" },
      { id: "S5_Q4", inputType: "text", text: "4. Si dos pasteles cuestan $600 ¿Cuántos pesos cuesta la sexta parte de un pastel?" },
      { id: "S5_Q5", inputType: "text", text: "5. ¿Cuántas veces más es 2 x 3 x 4 x 6 que 3 x 4?" },
      { id: "S5_Q6", inputType: "text", text: "6. ¿Cuánto es el 15% de $120.00?" },
      { id: "S5_Q7", inputType: "text", text: "7. El cuatro por ciento de $1,000.00 es igual al ocho por ciento ¿de qué cantidad?" },
      { id: "S5_Q8", inputType: "text", text: "8. La capacidad de un refrigerador rectangular es de 48 metros cúbicos. Si tiene seis metros de largo por cuatro de ancho ¿cuál es su altura?" },
      { id: "S5_Q9", inputType: "text", text: "9. Si 7 hombres hacen un pozo de 40 metros en 2 días ¿cuántos hombres se necesitan para hacerlo en medio día?" },
      { id: "S5_Q10", inputType: "text", text: "10. A tiene $180.00; B tiene 2/3 de lo que tiene A y C 1/2 de lo que tiene B, ¿cuánto tienen todos juntos?" },
      { id: "S5_Q11", inputType: "text", text: "11. Si un hombre corre 100 metros en 10 segundos ¿cuántos metros correrá como promedio 1/5 de segundo?" },
      { id: "S5_Q12", inputType: "text", text: "12. Un hombre gasta 1/4 de su sueldo en casa y alimentos y 4/8 en otros gastos ¿qué tanto por ciento de su sueldo ahorra?" }
    ]
  },
  {
    serie: 6,
    title: "Serie VI - Análisis",
    timeLimit: 120, // 2 minutos
    instructions: "Anote la contestación correcta (SI o NO) como lo muestran los ejemplos.",
    example: "Ejemplos:\nSe hace el carbón de la madera ( SI )\nTienen todos los hombres 1.70 mts. de altura ( NO )",
    questions: [
      { id: "S6_Q1", text: "1. La higiene es esencial para la salud.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q2", text: "2. Los taquígrafos usan el microscopio.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q3", text: "3. Los tiranos son justos con sus inferiores.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q4", text: "4. Las personas desamparadas están sujetas con frecuencia a la caridad.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q5", text: "5. Las personas venerables son por lo común respetadas.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q6", text: "6. Es el escorbuto un medicamento.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q7", text: "7. Es la amonestación una clase de instrumento musical.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q8", text: "8. Son los colores opacos preferidos para las banderas nacionales.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q9", text: "9. Las cosas misteriosas son a veces pavorosas.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q10", text: "10. Personas conscientes cometen alguna vez errores.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q11", text: "11. Son carnívoros los carneros.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q12", text: "12. Se dan asignaturas a los caballos.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q13", text: "13. Las cartas anónimas llevan alguna vez firma de quien las escribe.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q14", text: "14. Son discontinuos los sonidos intermitentes.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q15", text: "15. Las enfermedades estimulan el buen juicio.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q16", text: "16. Son siempre perversos los hechos premeditados.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q17", text: "17. El contacto social tiende a reducir la timidez.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q18", text: "18. Son enfermas las personas que tienen mal carácter.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q19", text: "19. Se caracteriza generalmente el rencor por la persistencia.", options: { SI: "SI", NO: "NO" } },
      { id: "S6_Q20", text: "20. Meticuloso quiere decir lo mismo que cuidadoso.", options: { SI: "SI", NO: "NO" } }
    ]
  },
  {
    serie: 7,
    title: "Serie VII - Abstracción",
    timeLimit: 120, // 2 minutos
    instructions: "Seleccione la palabra que complete correctamente la analogía.",
    example: "Ejemplo:\nEl OÍDO es a OÍR como el OJO es a:\na) mesa\nb) ver\nc) mano\nd) jugar\n\nRespuesta correcta: (b)",
    questions: [
      { id: "S7_Q1", text: "1. ABRIGO es a USAR como PAN es a:", options: { A: "comer", B: "hambre", C: "agua", D: "cocinar" } },
      { id: "S7_Q2", text: "2. SEMANA es a MES como MES es a:", options: { A: "año", B: "hora", C: "minuto", D: "siglo" } },
      { id: "S7_Q3", text: "3. LEÓN es a ANIMAL como ROSA es a:", options: { A: "olor", B: "hoja", C: "planta", D: "espina" } },
      { id: "S7_Q4", text: "4. LIBERTAD es a INDEPENDENCIA como CAUTIVERIO es a:", options: { A: "negro", B: "esclavitud", C: "libre", D: "sufrir" } },
      { id: "S7_Q5", text: "5. DECIR es a DIJO como ESTAR es a:", options: { A: "cantar", B: "estuvo", C: "hablando", D: "cantó" } },
      { id: "S7_Q6", text: "6. LUNES es a MARTES como VIERNES es a:", options: { A: "semana", B: "jueves", C: "día", D: "sábado" } },
      { id: "S7_Q7", text: "7. PLOMO es a PESADO como CORCHO es a:", options: { A: "botella", B: "peso", C: "ligero", D: "flotar" } },
      { id: "S7_Q8", text: "8. ÉXITO es a ALEGRÍA como FRACASO es a:", options: { A: "tristeza", B: "suerte", C: "fracasar", D: "trabajo" } },
      { id: "S7_Q9", text: "9. GATO es a TIGRE como PERRO es a:", options: { A: "lobo", B: "ladrido", C: "mordida", D: "agarrar" } },
      { id: "S7_Q10", text: "10. 4 es a 16 como 5 es a:", options: { A: "7", B: "45", C: "35", D: "25" } },
      { id: "S7_Q11", text: "11. LLORAR es a REÍR como TRISTE es a:", options: { A: "muerte", B: "alegre", C: "mortaja", D: "llorar" } },
      { id: "S7_Q12", text: "12. VENENO es a MUERTE como ALIMENTO es a:", options: { A: "comer", B: "pájaro", C: "vida", D: "malo" } },
      { id: "S7_Q13", text: "13. 1 es a 3 como 9 es a:", options: { A: "18", B: "27", C: "36", D: "45" } },
      { id: "S7_Q14", text: "14. ALIMENTO es a HAMBRE como AGUA es a:", options: { A: "beber", B: "claro", C: "sed", D: "puro" } },
      { id: "S7_Q15", text: "15. AQUÍ es a ALLÍ como ESTE es a:", options: { A: "estos", B: "aquel", C: "ese", D: "entonces" } },
      { id: "S7_Q16", text: "16. TIGRE es a PELO como TRUCHA es a:", options: { A: "agua", B: "pez", C: "escama", D: "nadar" } },
      { id: "S7_Q17", text: "17. PERVERTIDO es a DEPRAVADO como INCORRUPTO es a:", options: { A: "patria", B: "honrado", C: "canción", D: "estudio" } },
      { id: "S7_Q18", text: "18. B es a D como SEGUNDO es a:", options: { A: "tercero", B: "último", C: "cuarto", D: "posterior" } },
      { id: "S7_Q19", text: "19. ESTADO es a GOBERNADOR como EJERCITO es a:", options: { A: "marina", B: "soldado", C: "general", D: "sargento" } },
      { id: "S7_Q20", text: "20. SUJETO es a predicado como NOMBRE es a:", options: { A: "pronombre", B: "adverbio", C: "verbo", D: "adjetivo" } }
    ]
  },
  {
    serie: 8,
    title: "Serie VIII - Planeación",
    timeLimit: 180, // 3 minutos
    instructions: "Las palabras de las siguientes oraciones están mezcladas. Ordénelas mentalmente. Si el significado de la oración es VERDADERO, anote V; si es FALSO, anote F.",
    example: "Ejemplos:\noír son los para oídos ( V )\ncomer para pólvora la es buena ( F )",
    questions: [
      { id: "S8_Q1", text: "1. con crecen los niños edad la", options: { V: "V", F: "F" } },
      { id: "S8_Q2", text: "2. buena mar beber el para agua de es", options: { V: "V", F: "F" } },
      { id: "S8_Q3", text: "3. lo es paz la guerra opuesto la a", options: { V: "V", F: "F" } },
      { id: "S8_Q4", text: "4. caballos automóvil un que caminan los despacio más", options: { V: "V", F: "F" } },
      { id: "S8_Q5", text: "5. consejo a veces es buen seguir un difícil", options: { V: "V", F: "F" } },
      { id: "S8_Q6", text: "6. cuatrocientas todas páginas contienen libros los", options: { V: "V", F: "F" } },
      { id: "S8_Q7", text: "7. crecen las que fresas el más roble", options: { V: "V", F: "F" } },
      { id: "S8_Q8", text: "8. verdadera comparada no puede amistad ser la", options: { V: "V", F: "F" } },
      { id: "S8_Q9", text: "9. envidia la perjudiciales gula son y la", options: { V: "V", F: "F" } },
      { id: "S8_Q10", text: "10. nunca acciones premiadas las deben buenas ser", options: { V: "V", F: "F" } },
      { id: "S8_Q11", text: "11. exteriores engañan nunca apariencias las nos", options: { V: "V", F: "F" } },
      { id: "S8_Q12", text: "12. nunca es hombres los que acciones demuestran un lo", options: { V: "V", F: "F" } },
      { id: "S8_Q13", text: "13. ciertas siempre muerte de causan clase enfermedades", options: { V: "V", F: "F" } },
      { id: "S8_Q14", text: "14. odio indeseables aversión sentimientos el son y la", options: { V: "V", F: "F" } },
      { id: "S8_Q15", text: "15. frecuentemente por juzgar podemos acciones hombres nosotros sus a los", options: { V: "V", F: "F" } },
      { id: "S8_Q16", text: "16. una son sábana sarampión enfermedades y el", options: { V: "V", F: "F" } },
      { id: "S8_Q17", text: "17. nunca que descuidados los tropiezan son", options: { V: "V", F: "F" } }
    ]
  },
  {
    serie: 9,
    title: "Serie IX - Organización",
    timeLimit: 120, // 2 minutos
    instructions: "Ponga la letra de la palabra que NO corresponda con las demás del renglón.",
    example: "Ejemplo:\na) bala\nb) cañón\nc) pistola\nd) espada\ne) lápiz\n\nRespuesta correcta: (e)",
    questions: [
      { id: "S9_Q1", text: "1. a) saltar b) correr c) brincar d) pararse e) caminar", options: { A: "saltar", B: "correr", C: "brincar", D: "pararse", E: "caminar" } },
      { id: "S9_Q2", text: "2. a) monarquía b) comunista c) demócrata d) anarquista e) católico", options: { A: "monarquía", B: "comunista", C: "demócrata", D: "anarquista", E: "católico" } },
      { id: "S9_Q3", text: "3. a) muerte b) duelo c) paseo d) pobreza e) tristeza", options: { A: "muerte", B: "duelo", C: "paseo", D: "pobreza", E: "tristeza" } },
      { id: "S9_Q4", text: "4. a) carpintero b) doctor c) abogado d) ingeniero e) profesor", options: { A: "carpintero", B: "doctor", C: "abogado", D: "ingeniero", E: "profesor" } },
      { id: "S9_Q5", text: "5. a) cama b) silla c) plato d) sofá e) mesa", options: { A: "cama", B: "silla", C: "plato", D: "sofá", E: "mesa" } },
      { id: "S9_Q6", text: "6. a) Francisco b) Santiago c) Juan d) Sara e) Guillermo", options: { A: "Francisco", B: "Santiago", C: "Juan", D: "Sara", E: "Guillermo" } },
      { id: "S9_Q7", text: "7. a) duro b) áspero c) liso d) suave e) dulce", options: { A: "duro", B: "áspero", C: "liso", D: "suave", E: "dulce" } },
      { id: "S9_Q8", text: "8. a) digestión b) oído c) vista d) olfato e) tacto", options: { A: "digestión", B: "oído", C: "vista", D: "olfato", E: "tacto" } },
      { id: "S9_Q9", text: "9. a) automóvil b) bicicleta c) guayín d) telégrafo e) tren", options: { A: "automóvil", B: "bicicleta", C: "guayín", D: "telégrafo", E: "tren" } },
      { id: "S9_Q10", text: "10. a) abajo b) acá c) reciente d) arriba e) allá", options: { A: "abajo", B: "acá", C: "reciente", D: "arriba", E: "allá" } },
      { id: "S9_Q11", text: "11. a) Hidalgo b) Morelos c) Bravo d) Matamoros e) Bolívar", options: { A: "Hidalgo", B: "Morelos", C: "Bravo", D: "Matamoros", E: "Bolívar" } },
      { id: "S9_Q12", text: "12. a) danés b) galgo c) buldog d) pequinés e) longhorn", options: { A: "danés", B: "galgo", C: "buldog", D: "pequinés", E: "longhorn" } },
      { id: "S9_Q13", text: "13. a) tela b) algodón c) lino d) seda e) lana", options: { A: "tela", B: "algodón", C: "lino", D: "seda", E: "lana" } },
      { id: "S9_Q14", text: "14. a) ira b) odio c) alegría d) piedad e) razonamiento", options: { A: "ira", B: "odio", C: "alegría", D: "piedad", E: "razonamiento" } },
      { id: "S9_Q15", text: "15. a) Edison b) Franklin c) Marconi d) Fulton e) Shakespeare", options: { A: "Edison", B: "Franklin", C: "Marconi", D: "Fulton", E: "Shakespeare" } },
      { id: "S9_Q16", text: "16. a) mariposa b) halcón c) avestruz d) petirrojo e) golondrina", options: { A: "mariposa", B: "halcón", C: "avestruz", D: "petirrojo", E: "golondrina" } },
      { id: "S9_Q17", text: "17. a) dar b) prestar c) perder d) ahorrar e) derrochar", options: { A: "dar", B: "prestar", C: "perder", D: "ahorrar", E: "derrochar" } },
      { id: "S9_Q18", text: "18. a) Australia b) Cuba c) Córcega d) Irlanda e) España", options: { A: "Australia", B: "Cuba", C: "Córcega", D: "Irlanda", E: "España" } }
    ]
  },
  {
    serie: 10,
    title: "Serie X - Atención",
    timeLimit: 240, // 4 minutos
    instructions: "Procure encontrar la forma en que están hechas las series de números. Después, escriba los DOS números que faltan juntos separados por un guión.",
    example: "Ejemplos:\n5, 10, 15, 20... faltan: 25 y 30 (Escribir: 25-30)\n20, 18, 16, 14, 12... faltan: 10 y 8 (Escribir: 10-8)",
    questions: [
      { id: "S10_Q1", inputType: "text", text: "1. 8, 7, 6, 5, 4, 3, __, __" },
      { id: "S10_Q2", inputType: "text", text: "2. 3, 8, 13, 18, 23, 28, __, __" },
      { id: "S10_Q3", inputType: "text", text: "3. 1, 2, 4, 8, 16, 32, __, __" },
      { id: "S10_Q4", inputType: "text", text: "4. 8, 8, 6, 6, 4, 4, __, __" },
      { id: "S10_Q5", inputType: "text", text: "5. 11 3/4, 12, 12 1/4, 12 1/2, 12 3/4, __, __" },
      { id: "S10_Q6", inputType: "text", text: "6. 8, 9, 12, 13, 16, 17, __, __" },
      { id: "S10_Q7", inputType: "text", text: "7. 16, 8, 4, 2, 1, 1/2, __, __" },
      { id: "S10_Q8", inputType: "text", text: "8. 31.3, 40.3, 49.3, 58.3, 67.3, 76.3, __, __" },
      { id: "S10_Q9", inputType: "text", text: "9. 3, 5, 4, 6, 5, 7, __, __" },
      { id: "S10_Q10", inputType: "text", text: "10. 7, 11, 15, 16, 20, 24, 25, 29, __, __" },
      { id: "S10_Q11", inputType: "text", text: "11. 1/25, 1/5, 1, 5, __, __" }
    ]
  }
];
