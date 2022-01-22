const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoInput = todoForm.querySelector("input");
let todos = [];
const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const todoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoInput.value = "";
  todos.push(todoObj);
  paintTodo(todoObj);
  saveTodo();
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((ele) => ele.id !== parseInt(li.id));
  li.remove();
  saveTodo();
  console.log(todos);
}

function paintTodo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

//Logic Start
todoForm.addEventListener("submit", todoSubmit);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((element) => {
    paintTodo(element);
  });
}
