import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TASK_STATUS,
  changeTaskStatus,
  countPendingTasks,
  createTask,
  filterTasks,
  validateTaskInput,
} from '../src/task-manager.js';

const sampleInput = { title: 'Entregar taller', subject: 'Programacion', dueDate: '2026-11-02' };
const fixedId = () => 'task-1';

 test('HU-01: crea una tarea con los campos y estado inicial esperados', () => {
  const task = createTask(sampleInput, fixedId);
  assert.equal(task.id, 'task-1');
  assert.equal(task.title, 'Entregar taller');
  assert.equal(task.subject, 'Programacion');
  assert.equal(task.dueDate, '2026-11-02');
  assert.equal(task.status, TASK_STATUS.PENDING);
  assert.ok(task.createdAt);
});

test('HU-01: rechaza un titulo vacio o compuesto solo por espacios', () => {
  assert.equal(validateTaskInput({ ...sampleInput, title: '   ' }).valid, false);
  assert.throws(() => createTask({ ...sampleInput, title: '   ' }, fixedId), { name: 'TaskValidationError' });
});

test('HU-01: limpia espacios en los campos de texto', () => {
  const task = createTask({ ...sampleInput, title: '  Entregar taller  ', subject: ' Programacion ' }, fixedId);
  assert.equal(task.title, 'Entregar taller');
  assert.equal(task.subject, 'Programacion');
});

test('HU-02: el filtro Todas devuelve las tareas registradas', () => {
  const tasks = [
    { id: '1', status: TASK_STATUS.PENDING },
    { id: '2', status: TASK_STATUS.COMPLETED },
  ];
  assert.equal(filterTasks(tasks, 'all').length, 2);
});

test('HU-03: cambia de Pendiente a Terminada y permite volver a Pendiente', () => {
  const tasks = [{ id: '1', status: TASK_STATUS.PENDING, title: 'Tarea' }];
  const completed = changeTaskStatus(tasks, '1');
  assert.equal(completed.found, true);
  assert.equal(completed.tasks[0].status, TASK_STATUS.COMPLETED);
  const pendingAgain = changeTaskStatus(completed.tasks, '1');
  assert.equal(pendingAgain.tasks[0].status, TASK_STATUS.PENDING);
});

test('HU-03: no altera tareas cuando el identificador no existe', () => {
  const tasks = [{ id: '1', status: TASK_STATUS.PENDING }];
  const result = changeTaskStatus(tasks, 'missing');
  assert.equal(result.found, false);
  assert.deepEqual(result.tasks, tasks);
});

test('HU-04: filtra correctamente las tareas pendientes y terminadas', () => {
  const tasks = [
    { id: '1', status: TASK_STATUS.PENDING },
    { id: '2', status: TASK_STATUS.COMPLETED },
    { id: '3', status: TASK_STATUS.PENDING },
  ];
  assert.deepEqual(filterTasks(tasks, TASK_STATUS.PENDING).map((task) => task.id), ['1', '3']);
  assert.deepEqual(filterTasks(tasks, TASK_STATUS.COMPLETED).map((task) => task.id), ['2']);
});

test('actualiza el conteo de tareas pendientes', () => {
  const tasks = [
    { id: '1', status: TASK_STATUS.PENDING },
    { id: '2', status: TASK_STATUS.COMPLETED },
    { id: '3', status: TASK_STATUS.PENDING },
  ];
  assert.equal(countPendingTasks(tasks), 2);
});

test('prueba de integracion: una tarea creada puede filtrarse y marcarse como terminada', () => {
  const created = createTask(sampleInput, fixedId);
  const storedTasks = [created];
  assert.equal(filterTasks(storedTasks, TASK_STATUS.PENDING).length, 1);
  const result = changeTaskStatus(storedTasks, created.id);
  assert.equal(filterTasks(result.tasks, TASK_STATUS.COMPLETED).length, 1);
  assert.equal(countPendingTasks(result.tasks), 0);
});

test('prueba de aceptacion: se satisfacen los criterios principales de HU-01 a HU-04', () => {
  const tasks = [];
  const task = createTask(sampleInput, fixedId);
  tasks.push(task);
  assert.equal(task.title, 'Entregar taller');
  assert.equal(filterTasks(tasks, 'all').length, 1);
  assert.equal(filterTasks(tasks, TASK_STATUS.PENDING).length, 1);
  const result = changeTaskStatus(tasks, task.id);
  assert.equal(result.tasks[0].status, TASK_STATUS.COMPLETED);
  assert.equal(filterTasks(result.tasks, TASK_STATUS.COMPLETED).length, 1);
});

test('HU-01: rechaza titulos de mas de 100 caracteres', () => {
  const longTitle = 'A'.repeat(101);

  const validation = validateTaskInput({
    ...sampleInput,
    title: longTitle,
  });

  assert.equal(validation.valid, false);
  assert.ok(
    validation.errors.some((error) =>
      error.includes('100 caracteres')
    )
  );
});
