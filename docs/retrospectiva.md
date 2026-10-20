# Informe breve de retrospectiva - TaskEdu

## Resultado del sprint

- **Historias terminadas:** HU-01, Registrar tarea, y la actividad de revisión de código y control de versiones, de acuerdo con el estado actual de Trello.
- **Historias pendientes:** HU-02, Consultar tareas; HU-03, Cambiar estado de tarea; y HU-04, Filtrar tareas. Deben verificarse sus criterios de aceptación antes de marcarlas como terminadas.
- **Resultado de las pruebas:** Las pruebas automatizadas anteriores estaban aprobadas. Se agregó una prueba para rechazar títulos de más de 100 caracteres. **Confirmar el número final de pruebas aprobadas y fallidas después de integrar el cambio.**
- **Resultado de integración continua:** GitHub Actions aparece en verde después de la integración del Pull Request.

## ¿Qué funcionó bien?

La organización del código en archivos separados facilitó la revisión de la validación de tareas. También fue útil utilizar GitHub para trabajar con ramas, revisar los cambios mediante un Pull Request y ejecutar comprobaciones automáticas antes de integrar el código a la rama principal.

Trello permitió organizar las historias de usuario y visualizar el avance del proyecto.

## ¿Qué dificultad encontramos?

Durante el trabajo fue necesario aprender a crear ramas, editar archivos en GitHub y realizar una revisión formal del código. También fue importante comprobar que la nueva validación no reemplazara las validaciones que ya existían.

**Completar con otra dificultad real del equipo, si la hubo.**

## ¿Qué aprendimos?

Aprendimos a utilizar ramas para separar cambios, crear Pull Requests para solicitar revisiones y usar GitHub Actions para comprobar automáticamente el proyecto. También comprendimos que una mejora debe acompañarse de una prueba que permita verificar su comportamiento.

## Acción concreta para el siguiente sprint

Antes de finalizar una historia de usuario, revisaremos sus criterios de aceptación, ejecutaremos las pruebas correspondientes y adjuntaremos las evidencias en Trello. Además, mantendremos actualizados los responsables y el estado de cada tarjeta.
