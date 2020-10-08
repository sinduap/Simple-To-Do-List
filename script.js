const addButton = document.getElementById("add");
const inputBox = document.getElementById("input");
const todoList = document.querySelector("ul");
const list = document.querySelectorAll("li");
const del = document.querySelectorAll(".del");

const isValidInput = () => inputBox.value !== "";

const createList = () => {
  //buat variabel newtodo dan masukkan element li
  let newTodo = document.createElement("li"); //<li></li>
  //tambahkan value inputBox kedalam variable newtodo
  newTodo.appendChild(document.createTextNode(`${inputBox.value} `)); //<li>input</li>
  //tambahkan newtodo kedalam todoList
  let delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("x"));
  delButton.addEventListener("click", () => {
    delButton.parentNode.remove();
  });
  newTodo.appendChild(delButton);
  newTodo.addEventListener("click", () => {
    newTodo.classList.toggle("done");
  });
  todoList.appendChild(newTodo);
  inputBox.value = "";
};

const addListByClick = () => {
  if (isValidInput()) {
    createList();
  }
};

const addListByEnter = (e) => {
  if (isValidInput() && e.keyCode === 13) {
    createList();
  }
};

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    list[i].classList.toggle("done");
  });
  del[i].addEventListener("click", () => {
    del[i].parentNode.remove();
  });
}

addButton.addEventListener("click", addListByClick);

inputBox.addEventListener("keypress", addListByEnter);
