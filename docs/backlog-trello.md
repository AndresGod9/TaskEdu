# Contenido para crear el tablero de Trello

## Listas obligatorias

Crea las listas en este orden: **Product Backlog**, **Sprint Backlog**, **En desarrollo**, **Revision de codigo**, **Pruebas** y **Terminado**.

## Tarjetas iniciales

Copia cada historia como una tarjeta. Los nombres de responsables y las fechas deben completarse con los datos reales del CIPA.

### HU-01 - Registrar tarea
- **Historia:** Como estudiante, quiero registrar una actividad academica, para recordar que debo entregar.
- **Criterios de aceptacion:** registra titulo, asignatura y fecha; rechaza un titulo vacio; muestra un mensaje de confirmacion.
- **Prioridad:** Alta.
- **Estimacion:** 3 puntos.
- **Responsable:** Esteban Sampayo.
- **Checklist:** formulario creado; validaciones probadas; confirmacion visible; revision por otro integrante; pruebas satisfactorias.
- **Fecha de entrega:** 2 de noviembre de 2026.
- **Rama:** `feature/HU-01`.
- **Evidencia de pruebas:** resultado de `npm test` y verificacion manual del formulario.

### HU-02 - Consultar tareas
- **Historia:** Como estudiante, quiero visualizar las tareas registradas, para conocer mis compromisos academicos.
- **Criterios de aceptacion:** muestra todas las tareas; cada una indica asignatura, fecha y estado; muestra un mensaje si no hay tareas.
- **Prioridad:** Alta.
- **Estimacion:** 2 puntos.
- **Responsable:** Andres Vasquez.
- **Checklist:** lista visible; asignatura, fecha y estado visibles; mensaje de lista vacia; revision de codigo; pruebas satisfactorias.
- **Fecha de entrega:** 2 de noviembre de 2026.
- **Rama:** `feature/HU-02`.
- **Evidencia de pruebas:** prueba de lista y captura de la aplicacion con tareas y sin tareas.

### HU-03 - Cambiar el estado
- **Historia:** Como estudiante, quiero marcar una tarea como terminada, para controlar mi avance.
- **Criterios de aceptacion:** cambia de "Pendiente" a "Terminada"; el cambio se ve de inmediato; el estado se conserva al actualizar la aplicacion.
- **Prioridad:** Alta.
- **Estimacion:** 3 puntos.
- **Responsable:** Daniel Rojas.
- **Checklist:** boton cambia estado; resumen se actualiza; persistencia verificada tras recargar; revision de codigo; pruebas satisfactorias.
- **Fecha de entrega:** 2 de noviembre de 2026.
- **Rama:** `feature/HU-03`.
- **Evidencia de pruebas:** prueba automatica de cambio de estado y captura antes/despues de recargar.

### HU-04 - Filtrar tareas
- **Historia:** Como estudiante, quiero filtrar las tareas por estado, para concentrarme en las actividades pendientes.
- **Criterios de aceptacion:** permite elegir "Todas", "Pendientes" o "Terminadas"; los resultados corresponden al filtro elegido.
- **Prioridad:** Media.
- **Estimacion:** 2 puntos.
- **Responsable:** Andres Escobar.
- **Checklist:** selector visible; filtro Todas verificado; Pendientes verificado; Terminadas verificado; revision de codigo; pruebas satisfactorias.
- **Fecha de entrega:** 2 de noviembre de 2026.
- **Rama:** `feature/HU-04`.
- **Evidencia de pruebas:** pruebas automaticas de filtros y captura de cada filtro.

### Tarjeta tecnica - Pruebas y CI
- **Descripcion:** configurar pruebas automaticas y GitHub Actions para que descargue el codigo y ejecute la suite de pruebas.
- **Prioridad:** Alta.
- **Estimacion:** 2 puntos.
- **Responsable:** Ronald Payares.
- **Checklist:** `npm test` funciona localmente; workflow anadido; push realizado; resultado visible en Actions; enlace/captura adjunto.
- **Fecha de entrega:** 2 de noviembre de 2026.
- **Rama:** `feature/CI-tests`.

### Tarjeta tecnica - Revision y refactorizacion
- **Descripcion:** revisar el codigo con otro integrante y documentar una mejora interna que no cambie el comportamiento.
- **Prioridad:** Media.
- **Estimacion:** 2 puntos.
- **Responsable:** Esteban Sampayo.
- **Checklist:** pull request creado; otro integrante revisa; cambio aprobado; pruebas pasan despues de la refactorizacion; evidencia adjunta.
- **Fecha de entrega:** 2 de noviembre de 2026.

## Etiquetas recomendadas

- **Alta prioridad**: HU-01, HU-02, HU-03 y CI.
- **Mejora**: refactorizacion o mejoras visuales.
- **Pruebas pendientes**: tarjeta en espera de validacion.
- **Bloqueada**: solo si existe una dependencia real sin resolver.
- **Error**: para defectos encontrados durante las pruebas.

## Reglas de flujo

- Mueve una tarjeta a **En desarrollo** cuando se empiece a trabajar en ella.
- Pasala a **Revision de codigo** cuando exista un cambio listo para revisar.
- Muevela a **Pruebas** despues de la revision.
- Solo pasa a **Terminado** cuando cumpla todos los criterios de aceptacion, el codigo este en GitHub, alguien distinto haya revisado los cambios, las pruebas pasen, no haya errores criticos y la tarjeta tenga sus evidencias.
