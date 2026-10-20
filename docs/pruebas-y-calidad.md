# Pruebas y calidad de TaskEdu

## Pruebas automatizadas incluidas

La suite esta en `tests/task-manager.test.js` y se ejecuta con `npm test`.

| Tipo | Caso cubierto | Resultado de la ejecucion local |
|---|---|---|
| Unitaria | Crear tarea con titulo, asignatura, fecha y estado inicial | Aprobada |
| Unitaria | Rechazar titulo vacio o compuesto solo por espacios | Aprobada |
| Unitaria | Limpiar espacios de los campos de texto | Aprobada |
| Unitaria | Consultar todas las tareas | Aprobada |
| Unitaria | Cambiar estado y regresar al estado anterior | Aprobada |
| Unitaria | Manejar un identificador inexistente | Aprobada |
| Unitaria | Filtrar pendientes y terminadas | Aprobada |
| Unitaria | Calcular la cantidad de tareas pendientes | Aprobada |
| Integracion | Crear una tarea, filtrar y marcarla como terminada | Aprobada |
| Aceptacion | Comprobar el flujo principal de las historias HU-01 a HU-04 | Aprobada |

Estas pruebas ejecutan la logica de tareas. Ademas, realiza las comprobaciones manuales siguientes en el navegador y guarda capturas para la entrega.

## Pruebas manuales que debe completar el equipo

| ID | Pasos | Resultado esperado | Evidencia |
|---|---|---|---|
| M-01 | Intentar guardar con titulo vacio | No se guarda y aparece un mensaje de validacion | Captura del formulario y mensaje |
| M-02 | Registrar una tarea con los tres campos | La tarea aparece en la lista y se muestra la confirmacion | Captura de la tarea creada |
| M-03 | Abrir la aplicacion sin tareas o filtrar un estado sin resultados | Aparece un mensaje informativo | Captura del estado vacio |
| M-04 | Marcar una tarea como terminada y actualizar la pagina | El estado sigue como Terminada al recargar | Capturas antes y despues de recargar |
| M-05 | Seleccionar Todas, Pendientes y Terminadas | Cada filtro muestra solo las tareas correspondientes | Una captura por filtro |
| M-06 | Subir cambios al repositorio de GitHub | GitHub Actions ejecuta las pruebas y muestra el estado final | Captura de Actions |

## Resultado registrado de la suite local

En la ejecucion realizada durante la preparacion del proyecto, `npm test` finalizo con **10 pruebas aprobadas y 0 fallidas**. GitHub Actions todavia necesita ejecutarse despues de subir el proyecto al repositorio del equipo; la evidencia de esa ejecucion debe obtenerse en la pestana **Actions** del repositorio real.
