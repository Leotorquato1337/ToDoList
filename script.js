const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, insira uma tarefa!");
    return;
  }

  const taskItem = document.createElement("li");


  const checkbox = document.createElement("span");
  checkbox.classList.add("checkbox");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.addEventListener("change", () => toggleTaskCompleted(taskItem, inputCheckbox));
  checkbox.appendChild(inputCheckbox);


  const taskDescription = document.createElement("span");
  taskDescription.textContent = taskText;
  

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = '<i class="fas fa-trash"></i>';  // Ícone de lixeira

  removeBtn.onclick = function () {
    taskList.removeChild(taskItem);
  };


  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);


  taskInput.value = "";
}


function toggleTaskCompleted(taskItem, checkbox) {
  if (checkbox.checked) {
    taskItem.classList.add("completed");
  } else {
    taskItem.classList.remove("completed");
  }
}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
