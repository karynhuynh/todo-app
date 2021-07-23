const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// adding the to do
function addTodo(event) {
  // prevents form from submitting/ refreshing
  event.preventDefault();
  // to do div -> parent element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li -> child element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // checkmark button -> child element
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  // trash button -> child element
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  // append to list -> child element
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

// delete to do
todoList.addEventListener("click", deleteCheck);

function deleteCheck(event) {
  const item = event.target;
  // delete to do by clicking on the trash button
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    // add animation
    todo.classList.add("fall");

    todo.addEventListener("transitionend", removeTodo);
    function removeTodo() {
      todo.remove();
    }
  }
  // marking a to do as complete
  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// filter the to dos

const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("change", filterTodo);

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// save the to dos to local storage

function saveLocalTodos(todo) {}
