// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addTodo);

// functions
function addTodo(event) {
  // prevents form from submitting/ refreshing
  event.preventDefault();
  // to do div -> parent element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li -> child element
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
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
}
