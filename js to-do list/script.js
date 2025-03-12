const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = []; // Array to store tasks

// Function to load tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks in the list
function renderTasks() {
  taskList.innerHTML = ''; // Clear the list

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
      <div class="actions">
        <button class="completeButton" data-index="${index}">${task.completed ? 'Undo' : 'Complete'}</button>
        <button class="editButton" data-index="${index}">Edit</button>
        <button class="deleteButton" data-index="${index}">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
}

// Function to mark a task as complete
function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Function to edit a task
function editTask(index) {
  const newText = prompt('Enter new task text:', tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Event listeners
addButton.addEventListener('click', addTask);

taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('completeButton')) {
    const index = target.dataset.index;
    completeTask(index);
  } else if (target.classList.contains('editButton')) {
    const index = target.dataset.index;
    editTask(index);
  } else if (target.classList.contains('deleteButton')) {
    const index = target.dataset.index;
    deleteTask(index);
  }
});

// Load tasks on page load
loadTasks();