# Plan de sprint - TaskEdu

**Duracion propuesta:** dos semanas. **Cantidad de sprints:** uno, segun la guia de la actividad.

## Objetivo del sprint

Entregar una primera version de TaskEdu con registro de actividades, consulta de tareas, cambio de estado y filtros, junto con pruebas automatizadas y ejecucion de CI en GitHub Actions.

## Orden propuesto del backlog

1. HU-01 - Registrar tarea (3 puntos).
2. HU-02 - Consultar tareas (2 puntos).
3. HU-03 - Cambiar el estado y conservarlo al recargar (3 puntos).
4. HU-04 - Filtrar por estado (2 puntos).
5. Configurar/confirmar pruebas automatizadas y CI (2 puntos).
6. Revision de codigo y refactorizacion (2 puntos).

**Estimacion inicial propuesta:** 14 puntos. Ajusten la estimacion segun el acuerdo real del equipo.

## Responsabilidades

Completar los nombres reales del CIPA. La guia permite rotar los roles.

| Rol | Responsable | Tareas principales |
|---|---|---|
| Product Owner | [nombre] | Aclarar las historias y priorizar el backlog. |
| Scrum Master | [nombre] | Dar seguimiento, coordinar revisiones y ayudar a resolver bloqueos. |
| Desarrollador | [nombre] | Implementar funcionalidades, ramas y cambios. |
| Responsable de pruebas | [nombre] | Ejecutar las pruebas, guardar evidencias y comprobar los criterios. |

## Practicas del equipo

- Crear una rama por historia: `feature/HU-01`, `feature/HU-02`, `feature/HU-03` y `feature/HU-04`.
- Utilizar mensajes de commit descriptivos, por ejemplo `feat: agregar formulario de tareas` o `test: validar cambio de estado`.
- Hacer al menos una historia mediante programacion en pareja y registrar cual fue, quienes participaron y que aprendieron.
- Abrir pull requests y pedir revision a otro integrante antes de integrar los cambios.
- Ejecutar `npm test` antes de solicitar la revision.

## Criterio de terminado

Una tarjeta se considera terminada cuando cumple los criterios de aceptacion, el codigo esta en el repositorio, fue revisada por otro integrante, las pruebas pasan, no hay errores criticos y Trello tiene evidencias adjuntas.
