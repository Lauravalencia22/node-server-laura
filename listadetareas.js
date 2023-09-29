const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Ingrese la descripción de la tarea: ', (description) => {
    tasks.push({ description, completed: false });
    console.log('Tarea añadida.');
    displayTasks();
  });
}

function deleteTask() {
  displayTasks();
  rl.question('Ingrese el número de tarea que desea eliminar: ', (taskNumber) => {
    if (taskNumber >= 0 && taskNumber < tasks.length) {
      tasks.splice(taskNumber, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Número de tarea inválido.');
    }
    displayTasks();
  });
}

function completeTask() {
  displayTasks();
  rl.question('Ingrese el número de tarea que desea marcar como completada: ', (taskNumber) => {
    if (taskNumber >= 0 && taskNumber < tasks.length) {
      tasks[taskNumber].completed = true;
      console.log('Tarea completada.');
    } else {
      console.log('Número de tarea inválido.');
    }
    displayTasks();
  });
}

function displayTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? '[X]' : '[ ]';
    console.log(`${index}. ${status} ${task.description}`);
  });
  showOptions();
}

function showOptions() {
  console.log('\nOpciones:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Marcar tarea como completada');
  console.log('4. Salir');
  rl.question('Seleccione una opción (1/2/3/4): ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        showOptions();
    }
  });
}

showOptions();

