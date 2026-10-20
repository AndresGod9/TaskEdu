# TaskEdu - Gestor de tareas academicas

Para instrucciones paso a paso en Windows, empieza por el archivo `GUIA-INICIO.txt`.

TaskEdu es una aplicacion web sencilla para registrar actividades academicas, consultar fechas de entrega, marcar tareas como terminadas y filtrar la lista por estado. Se preparo para el ejercicio practico integrador de la Unidad 3: Implementacion agil de proyectos.

## Funcionalidades incluidas

- **HU-01 - Registrar tarea:** guarda titulo, asignatura y fecha de entrega. Valida campos vacios y muestra un mensaje de confirmacion.
- **HU-02 - Consultar tareas:** muestra las actividades registradas con asignatura, fecha y estado. Si no hay resultados, informa al usuario.
- **HU-03 - Cambiar estado:** permite pasar de "Pendiente" a "Terminada" y volver a pendiente. Los cambios se guardan en el almacenamiento local del navegador.
- **HU-04 - Filtrar tareas:** permite consultar "Todas", "Pendientes" o "Terminadas".

## Tecnologias

- HTML, CSS y JavaScript con modulos nativos.
- `localStorage` para conservar los datos en el mismo navegador.
- Node.js y el ejecutor de pruebas integrado `node:test`.
- Git y GitHub para control de versiones y colaboracion.
- GitHub Actions para ejecutar las pruebas al hacer `push` o abrir una solicitud de cambio.

No se necesitan dependencias externas para ejecutar la aplicacion o sus pruebas.

## Como ejecutar TaskEdu

1. Instala Node.js 18 o superior si aun no lo tienes.
2. Descarga o clona este repositorio.
3. En la carpeta del proyecto, ejecuta:

   ```bash
   npm test
   ```

4. Para abrir la aplicacion, inicia un servidor web local desde la carpeta del proyecto. Una opcion, si tienes Python instalado, es:

   ```bash
   python -m http.server 8000
   ```

5. Abre `http://localhost:8000` en el navegador.

Tambien puedes usar la extension **Live Server** en Visual Studio Code. No se recomienda abrir `index.html` directamente con `file://`, ya que los modulos JavaScript pueden quedar bloqueados por el navegador.

## Estructura del repositorio

```text
TaskEdu/
+-- .github/workflows/ci.yml
+-- docs/
|   +-- backlog-trello.md
|   +-- plan-sprint.md
|   +-- retrospectiva.md
|   +-- checklist-evidencias.md
|   +-- presentacion-5-minutos.md
+-- src/
|   +-- app.js
|   +-- task-manager.js
+-- tests/
|   +-- task-manager.test.js
+-- index.html
+-- styles.css
+-- package.json
+-- README.md
```

## Pruebas y calidad

Las pruebas automatizadas incluyen validacion del titulo, creacion de una tarea, cambio de estado, filtros, conteo de pendientes, integracion entre operaciones y una prueba de aceptacion basada en las cuatro historias de usuario. Para ejecutarlas: `npm test`.

El flujo de GitHub Actions esta en `.github/workflows/ci.yml`. Despues de subir el proyecto a GitHub y hacer `push` a `main` (o abrir un pull request hacia `main`), la pestana **Actions** mostrara el resultado real del proceso.

## Decisiones y limites

- Las tareas se guardan en `localStorage`: estan disponibles en el mismo navegador y dispositivo. Esta version no sincroniza datos entre dispositivos ni tiene usuarios o inicio de sesion.
- La revision de codigo entre companeros se realiza mediante pull requests de GitHub; debe quedar registrada como parte del trabajo del equipo.
- Las capturas de Trello, GitHub Actions y la presentacion final deben obtenerse de las cuentas reales del equipo. No se incluyen capturas inventadas.

## Uso del tablero de Trello

Consulta [`docs/backlog-trello.md`](docs/backlog-trello.md) para las listas, tarjetas, prioridades, estimaciones y criterios de aceptacion. Completa los responsables y las fechas con los integrantes reales del CIPA.
