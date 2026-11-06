# Worketers · Evalúa

Portal de evaluación psicométrica con identidad común Worketers.

- Candidatos: `https://worketers.github.io/psicometricos/`
- Administración: `https://worketers.github.io/psicometricos/admin.html`
- Muestra pública: `https://worketers.github.io/psicometricos/demo.html` (datos ficticios).

El frente permanece en GitHub Pages. Apps Script recibe las respuestas y conserva los datos en la hoja privada. No se publican expedientes, correos autorizados, identificadores de hoja ni claves de calificación en este repositorio.

## Uso

Administración entra con un código temporal enviado a su correo autorizado. Desde el panel crea una invitación y copia el enlace para compartirlo personalmente. No se envían invitaciones automáticamente. La sesión dura hasta dos horas; el código dura diez minutos y tiene intentos limitados.

La persona evaluada abre su enlace, revisa instrucciones y responde las diez series. Los tiempos y reactivos originales se conservan. La pestaña guarda un borrador de sesión y el reloj usa una hora límite. El envío exige confirmación del servidor y permite reintentos sin duplicar respuestas. No se promete recuperación entre dispositivos ni después de cerrar definitivamente la sesión del navegador.

El panel incluye avance general, búsqueda, filtros, expediente, barras por área, respuestas registradas y reporte PDF. Las barras muestran puntos sobre el máximo de cada serie; no son percentiles. Los resultados del baremo heredado requieren interpretación profesional y no constituyen por sí solos un diagnóstico ni una decisión de contratación.

## Mantenimiento

`style.css` contiene las variables comunes `--wk-primary`, `--wk-action`, `--wk-ink` y `--wk-background`. El encabezado usa tres niveles: marca Worketers, módulo Evalúa y función Psicométricos. Esta estructura coincide con Worketers · Talento / Reclutamiento.

`config.js` declara únicamente el endpoint público. La administración se autentica y autoriza en el servidor, nunca por ocultar botones. El servidor no forma parte de este repositorio público. Los folios anteriores se conservan por compatibilidad; los nuevos enlaces usan identificadores aleatorios.

Comprobación local: `node check.mjs`. Publicación: GitHub Pages, rama main, carpeta raíz. El servidor de Apps Script se versiona y publica de manera independiente.

La muestra `demo.html` no consulta la hoja y sus datos no representan a personas reales.
