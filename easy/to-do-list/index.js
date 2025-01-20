const addButton = document.querySelector(".add-button");
const addTaskInput = document.querySelector(".add-task");
const toDoList = document.querySelector(".to-do ol");

let taskArray = [];

function formatId(taskName) {
  return taskName.trim().toLowerCase().replace(/\s+/g, "-");
}

function renderTasks() {
  toDoList.innerHTML = "";

  taskArray.forEach((task) => {
    const taskItem = document.createElement("li");

    const taskLabel = document.createElement("label");
    taskLabel.setAttribute("for", task.taskId);
    taskLabel.textContent = task.taskName;

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.setAttribute("id", task.taskId);
    taskCheckbox.setAttribute("value", task.taskValue);
    taskCheckbox.addEventListener("change", () => toggleTask(task.taskId));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(task.taskId));

    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(deleteButton);

    toDoList.appendChild(taskItem);
  });
}

function addTask() {
  if (!newTask) return;

  for (index in taskArray) {
    if (taskArray[index].taskName === newTask) {
      alert("Task is already added, add a new task");
      return;
    }
  }

  taskArray.push({
    taskName: newTask,
    taskValue: formatId(newTask),
    taskId: formatId(newTask),
  });

  addTaskInput.value = "";
  newTask = null;
  renderTasks();
}

function deleteTask(taskId) {
  taskArray = taskArray.filter((task) => task.taskId !== taskId);
  renderTasks();
}

function toggleTask(taskId) {
  const taskCheckbox = document.getElementById(taskId);
  const taskLabel = taskCheckbox.parentElement.querySelector("label");

  if (taskCheckbox.checked) {
    taskLabel.style.textDecoration = "line-through";
  } else {
    taskLabel.style.textDecoration = "none";
  }
}

addTaskInput.addEventListener("input", (e) => {
  newTask = e.target.value;
});

addButton.addEventListener("click", addTask);
renderTasks();
