# Refactorizacion y revision de codigo

## Organizacion aplicada

La logica de las tareas esta separada de la interfaz:

- `src/task-manager.js` contiene funciones pequenas para validar y crear tareas, cambiar su estado, filtrarlas y contar pendientes.
- `src/app.js` administra los eventos de la pagina, muestra mensajes, actualiza el DOM y guarda/recupera datos de `localStorage`.
- `tests/task-manager.test.js` verifica el comportamiento de la logica con pruebas automatizadas.

Esta separacion reduce la mezcla entre presentacion y reglas de la aplicacion, hace que las funciones de tareas puedan probarse sin abrir el navegador y facilita el mantenimiento. Las pruebas automatizadas cubren el comportamiento esperado tras esta organizacion.

## Evidencia para la actividad

Para que la refactorizacion quede reflejada en el proceso de equipo, crea una rama, registra el cambio con un mensaje como `refactor: separar la logica de tareas de la interfaz`, abre un pull request y pide a otro integrante que revise el codigo. Adjunta a la tarjeta de Trello el enlace del pull request y el resultado exitoso de `npm test`.

> La revision por otro integrante debe realizarse con el CIPA en el repositorio real; este documento no reemplaza esa revision ni el enlace de evidencia.
