import {
  TASK_STATUS,
  changeTaskStatus,
  countPendingTasks,
  createTask,
  filterTasks,
  formatDueDate,
} from './task-manager.js';

const STORAGE_KEY = 'taskedu.tasks.v1';
const form = document.querySelector('#task-form');
const titleInput = document.querySelector('#task-title');
const subjectInput = document.querySelector('#task-subject');
const dateInput = document.querySelector('#task-date');
const filterSelect = document.querySelector('#task-filter');
const taskList = document.querySelector('#task-list');
const emptyState = document.querySelector('#empty-state');
const statusMessage = document.querySelector('#status-message');
const pendingCount = document.querySelector('#pending-count');
const taskCount = document.querySelector('#task-count');
const filterDescription = document.querySelector('#filter-description');

let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter(isValidStoredTask) : [];
  } catch {
    return [];
  }
}

function isValidStoredTask(task) {
  return Boolean(
    task && typeof task.id === 'string' && typeof task.title === 'string' &&
    typeof task.subject === 'string' && typeof task.dueDate === 'string' &&
    [TASK_STATUS.PENDING, TASK_STATUS.COMPLETED].includes(task.status),
  );
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch {
    showMessage('No se pudieron guardar los cambios en este navegador. Revisa el espacio disponible o la configuracion de almacenamiento.', true);
    return false;
  }
}

function showMessage(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.classList.toggle('error', isError);
  statusMessage.hidden = false;
}

function clearMessage() {
  statusMessage.hidden = true;
  statusMessage.textContent = '';
  statusMessage.classList.remove('error');
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createTaskCard(task) {
  const isCompleted = task.status === TASK_STATUS.COMPLETED;
  const card = document.createElement('article');
  card.className = `task-card${isCompleted ? ' completed' : ''}`;

  const main = document.createElement('div');
  main.className = 'task-main';
  main.append(createTextElement('h3', 'task-title', task.title));
  main.append(createTextElement('p', 'task-meta', task.subject));

  const due = createTextElement('span', 'task-due', `Entrega: ${formatDueDate(task.dueDate)}`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [year, month, day] = task.dueDate.split('-').map(Number);
  const dueDate = new Date(year, month - 1, day);
  if (!isCompleted && dueDate < today) due.classList.add('overdue');
  main.append(due);
  main.append(createTextElement('span', 'task-status', isCompleted ? 'Terminada' : 'Pendiente'));

  const actions = document.createElement('div');
  actions.className = 'task-actions';
  const toggleButton = createTextElement('button', 'button-small', isCompleted ? 'Marcar pendiente' : 'Marcar terminada');
  toggleButton.type = 'button';
  toggleButton.setAttribute('aria-label', `${isCompleted ? 'Marcar como pendiente' : 'Marcar como terminada'}: ${task.title}`);
  toggleButton.addEventListener('click', () => toggleTask(task.id));
  actions.append(toggleButton);

  card.append(main, actions);
  return card;
}

function renderTasks() {
  const filtered = filterTasks(tasks, filterSelect.value);
  taskList.replaceChildren(...filtered.map(createTaskCard));
  emptyState.hidden = filtered.length > 0;
  if (filtered.length === 0) {
    const heading = emptyState.querySelector('h3');
    const copy = emptyState.querySelector('p');
    if (tasks.length === 0) {
      heading.textContent = 'Aun no hay tareas';
      copy.textContent = 'Agrega tu primera actividad en el formulario para verla aqui.';
    } else {
      heading.textContent = 'No hay tareas con este filtro';
      copy.textContent = 'Prueba otra opcion para consultar tus actividades.';
    }
  }

  pendingCount.textContent = String(countPendingTasks(tasks));
  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? 'tarea' : 'tareas'}`;
  const descriptions = {
    all: 'Todas las actividades',
    pending: 'Actividades por completar',
    completed: 'Actividades finalizadas',
  };
  filterDescription.textContent = descriptions[filterSelect.value] ?? descriptions.all;
}

function toggleTask(taskId) {
  const result = changeTaskStatus(tasks, taskId);
  if (!result.found) {
    showMessage('No se encontro esa tarea. Actualiza la lista e intentalo de nuevo.', true);
    return;
  }
  const previousTasks = tasks;
  tasks = result.tasks;
  if (saveTasks()) {
    const updated = tasks.find((task) => task.id === taskId);
    showMessage(`La tarea "${updated.title}" quedo ${updated.status === TASK_STATUS.COMPLETED ? 'terminada' : 'pendiente'}.`);
  } else {
    tasks = previousTasks;
  }
  renderTasks();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearMessage();
  const input = {
    title: titleInput.value,
    subject: subjectInput.value,
    dueDate: dateInput.value,
  };

  try {
    const task = createTask(input);
    tasks = [task, ...tasks];
    if (!saveTasks()) {
      tasks = tasks.filter((item) => item.id !== task.id);
      renderTasks();
      return;
    }
    form.reset();
    showMessage(`Tarea "${task.title}" guardada correctamente.`);
    filterSelect.value = 'all';
    renderTasks();
    titleInput.focus();
  } catch (error) {
    showMessage(error.message || 'Revisa la informacion e intentalo de nuevo.', true);
    if (!titleInput.value.trim()) titleInput.focus();
  }
});

filterSelect.addEventListener('change', renderTasks);
renderTasks();
