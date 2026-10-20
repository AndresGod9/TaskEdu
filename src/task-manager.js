/** Funciones independientes para administrar las tareas de TaskEdu. */

export const TASK_STATUS = Object.freeze({
  PENDING: 'pending',
  COMPLETED: 'completed',
});

export function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateTaskInput(input) {
  const title = normalizeText(input?.title);
  const subject = normalizeText(input?.subject);
  const dueDate = normalizeText(input?.dueDate);
  const errors = [];

  if (!title) errors.push('Escribe el titulo de la tarea.');
  if (!subject) errors.push('Escribe la asignatura.');
  if (!dueDate) errors.push('Selecciona la fecha de entrega.');

  return { valid: errors.length === 0, errors, value: { title, subject, dueDate } };
}

export function createTask(input, idFactory = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`) {
  const validation = validateTaskInput(input);
  if (!validation.valid) {
    const error = new Error(validation.errors.join(' '));
    error.name = 'TaskValidationError';
    error.details = validation.errors;
    throw error;
  }

  return {
    id: idFactory(),
    title: validation.value.title,
    subject: validation.value.subject,
    dueDate: validation.value.dueDate,
    status: TASK_STATUS.PENDING,
    createdAt: new Date().toISOString(),
  };
}

export function changeTaskStatus(tasks, taskId) {
  let found = false;
  const updatedTasks = tasks.map((task) => {
    if (task.id !== taskId) return task;
    found = true;
    const status = task.status === TASK_STATUS.COMPLETED ? TASK_STATUS.PENDING : TASK_STATUS.COMPLETED;
    return { ...task, status };
  });
  return { tasks: updatedTasks, found };
}

export function filterTasks(tasks, filter = 'all') {
  if (filter === TASK_STATUS.PENDING || filter === TASK_STATUS.COMPLETED) {
    return tasks.filter((task) => task.status === filter);
  }
  return [...tasks];
}

export function countPendingTasks(tasks) {
  return tasks.filter((task) => task.status === TASK_STATUS.PENDING).length;
}

export function formatDueDate(value) {
  if (!value) return 'Sin fecha';
  // Se parsea como fecha local para evitar que la zona horaria cambie el dia mostrado.
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}
