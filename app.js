// Worketers · Evalúa. Preguntas y tiempos originales; guardado confirmado y reintentos seguros.
const $=id=>document.getElementById(id);
let state={id:'',index:0,answers:{},draft:{},deadline:0,phase:'instructions'},clock,expiryClock,sending=false,advancing=false;
const draftKey='worketers_eval_draft_v1';
function persist(){try{sessionStorage.setItem(draftKey,JSON.stringify(state));}catch{/* La sesión puede continuar si el navegador no permite almacenamiento. */}}
function show(id){['login-screen','instruction-screen','test-screen','finish-screen'].forEach(x=>$(x).hidden=x!==id);window.scrollTo(0,0);}
function error(message){$('error-message').textContent=message;$('error-message').hidden=false;}
function restore(id){try{const s=JSON.parse(sessionStorage.getItem(draftKey));if(s&&s.id===id&&Number.isInteger(s.index)&&s.index>=0&&s.index<=10){state=s;return true;}}catch{}return false;}
$('total-minutes').textContent=Math.round(testData.reduce((n,s)=>n+s.timeLimit,0)/60);
const invitation=new URLSearchParams(location.search).get('id');if(invitation)$('candidate-id').value=invitation;
$('candidate-login').addEventListener('submit',async e=>{
 e.preventDefault();const id=$('candidate-id').value.trim();if(!id)return;const btn=$('btn-validate');btn.disabled=true;btn.textContent='Verificando invitación…';$('error-message').hidden=true;
 try{const r=await api('validate',{id});if(r.completed){showCompleted(true);return;}
   if(!restore(id))state={id,index:0,answers:{},draft:{},deadline:0,phase:'instructions'};
   state.expiresAt=r.expiresAt;persist();$('invitation-validity').textContent='Completa y envía tu evaluación antes del '+new Date(r.expiresAt).toLocaleString('es-MX',{timeZone:'America/Mexico_City',dateStyle:'medium',timeStyle:'short'})+' (Ciudad de México).';$('invitation-validity').hidden=false;clearInterval(expiryClock);expiryClock=setInterval(checkExpiry,1000);if(checkExpiry())return;
   if(state.index>=testData.length)await send();else if(state.phase==='test')renderSerie();else instructions();
 }catch(err){if(err.code==='INVITATION_EXPIRED')showExpired();else error(err.message);}finally{btn.disabled=false;btn.textContent='Continuar →';}
});
function instructions(){clearInterval(clock);state.phase='instructions';state.deadline=0;persist();const s=testData[state.index];$('inst-title').textContent=s.title;$('inst-step').textContent=`Serie ${state.index+1} de ${testData.length}`;$('inst-progress').style.width=`${state.index/testData.length*100}%`;$('inst-time').textContent=`${Math.floor(s.timeLimit/60)} min ${s.timeLimit%60?`${s.timeLimit%60} s`:''}`;$('inst-text').textContent=s.instructions;$('inst-example').textContent=s.example||'';show('instruction-screen');}
$('btn-start-timer').addEventListener('click',()=>{if(checkExpiry())return;state.phase='test';state.deadline=Date.now()+testData[state.index].timeLimit*1000;state.draft={};persist();renderSerie();});
function renderSerie(){
 clearInterval(clock);const s=testData[state.index];$('serie-title').textContent=s.title;$('test-step').textContent=`SERIE ${state.index+1} DE ${testData.length}`;
 $('questions-container').innerHTML=s.questions.map((q,i)=>{
 const selected=state.draft[q.id]||[];const type=q.inputType==='checkbox'?'checkbox':'radio';
 const field=q.inputType==='text'?`<label class="fine" for="${esc(q.id)}">Escribe tu respuesta</label><input type="text" id="${esc(q.id)}" name="${esc(q.id)}" value="${esc(selected[0]||'')}" autocomplete="off" maxlength="80" placeholder="Tu respuesta">`:`<div class="options">${Object.entries(q.options||{}).map(([k,v])=>`<label class="option"><input type="${type}" name="${esc(q.id)}" value="${esc(k)}" ${selected.includes(k)?'checked':''}><span>${esc(k)}${k===v?'':') '+esc(v)}</span></label>`).join('')}</div>`;
 return `<fieldset class="question-block"><legend>${esc(q.text)}</legend>${field}</fieldset>`;
 }).join('');
 show('test-screen');updateCount();tick();if(state.phase==='test')clock=setInterval(tick,250);
}
function collect(){const s=testData[state.index];if(!s)return;for(const q of s.questions){state.draft[q.id]=Array.from(document.getElementsByName(q.id)).filter(x=>q.inputType==='text'||x.checked).map(x=>x.value.trim());}persist();updateCount();}
function updateCount(){const n=Object.values(state.draft).filter(a=>a.some(v=>v!=='')).length;$('answer-count').textContent=`${n} de ${testData[state.index].questions.length} respondidas`;}
$('answers-form').addEventListener('input',e=>{if(e.target.type==='text')e.target.value=e.target.value.replace(/[^0-9 .\-/]/g,'');collect();});
$('answers-form').addEventListener('change',e=>{const q=testData[state.index].questions.find(q=>q.id===e.target.name);if(q&&q.inputType==='checkbox'){const checked=Array.from(document.getElementsByName(q.id)).filter(x=>x.checked);if(checked.length>2){e.target.checked=false;}}collect();});
function tick(){if(state.phase!=='test')return;const n=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));$('timer-display').textContent=`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;const box=$('timer-display').parentElement;box.classList.toggle('warning',n<=30&&n>10);box.classList.toggle('urgent',n<=10);if(!n)advance();}
document.addEventListener('visibilitychange',()=>{if(!document.hidden){if(checkExpiry())return;if(state.phase==='test')tick();}});
$('answers-form').addEventListener('submit',e=>{e.preventDefault();$('confirm-series').showModal();});
$('cancel-series').addEventListener('click',()=>$('confirm-series').close());
$('confirm-next').addEventListener('click',()=>advance());
function advance(){if(advancing||state.phase!=='test')return;advancing=true;$('confirm-series').close();clearInterval(clock);collect();const s=testData[state.index];state.answers['S'+s.serie]=s.questions.map(q=>(state.draft[q.id]||[]).join(q.inputType==='checkbox'?' ':'')).join(',');state.index++;state.draft={};state.deadline=0;state.phase='instructions';persist();advancing=false;if(state.index<testData.length)instructions();else send();}
async function send(){if(sending||checkExpiry())return;sending=true;state.phase='sending';persist();show('finish-screen');$('finish-title').textContent='Guardando tu evaluación';$('finish-message').textContent='Mantén esta página abierta mientras confirmamos el guardado.';$('btn-retry').hidden=true;
 try{const r=await api('submit',{id:state.id,answers:state.answers});if(!r.saved)throw Error('No recibimos confirmación de guardado.');try{sessionStorage.removeItem(draftKey);}catch{}showCompleted(false);}
 catch(err){if(err.code==='INVITATION_EXPIRED'){showExpired();return;}$('finish-title').textContent='Vamos a intentarlo de nuevo';$('finish-message').textContent=err.message+' Tus respuestas se conservan en esta pestaña. Pulsa reintentar sin volver a responder.';$('btn-retry').hidden=false;}
 finally{sending=false;}
}
function showCompleted(previous){state.phase='completed';clearInterval(clock);clearInterval(expiryClock);show('finish-screen');$('finish-eyebrow').textContent='EVALUACIÓN COMPLETADA';$('finish-title').textContent=previous?'Esta evaluación ya está registrada':'Gracias por compartir tu talento';$('finish-message').textContent=previous?'La invitación ya fue utilizada. Si necesitas otra evaluación, contacta al equipo.':'El servidor confirmó que tus respuestas quedaron guardadas. El equipo autorizado revisará tus resultados. Ya puedes cerrar esta ventana.';$('btn-retry').hidden=true;$('finish-reference').textContent='Worketers · Evalúa | Tu siguiente paso lo acompaña nuestro equipo.';}
$('btn-retry').addEventListener('click',send);
function checkExpiry(){if(state.expiresAt&&!['completed','expired'].includes(state.phase)&&Date.parse(state.expiresAt)<=Date.now()){showExpired();return true;}return state.phase==='expired';}
function showExpired(){clearInterval(clock);clearInterval(expiryClock);state.phase='expired';persist();$('confirm-series').close();show('finish-screen');document.querySelector('.success-icon').textContent='⌛';$('finish-eyebrow').textContent='VIGENCIA DE 24 HORAS';$('finish-title').textContent='Esta invitación ya venció';$('finish-message').textContent='El plazo para entregar la evaluación terminó. Contacta al equipo para recibir una nueva invitación.';$('btn-retry').hidden=true;$('finish-reference').textContent='La fecha de vencimiento se comprueba en el servidor.';}
