/*
let add = document.getElementById("add");
let input = document.getElementById("input");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

function addListEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createElement();
  }
}

add.addEventListener("click", addListClick);

input.addEventListener("keypress", addListEnter);
*/

//Select dom
let input = document.getElementById("input");
let add = document.getElementById("add");
let toDolist = document.querySelector("ul");
let delButton = document.createElement("button");

//Manipulate dom

// Input new to do ke to do list menggunakan tombol add
add.addEventListener("click", addByClick);

// Input new to do ke to do list menggunakan enter
input.addEventListener("keypress", addByPressEnter);

function deleteList() {
  let del = document.getElementsByClassName("del");
  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
}

function doneList() {
  let checked = document.querySelectorAll("li");
  for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", function () {
      this.classList.toggle("done");
    });
  }
}

function addByClick() {
  if (input.value !== "") {
    inject();
  }
}

function addByPressEnter(event) {
  if (input.value !== "" && event.keyCode === 13) {
    inject();
  }
}

function inject() {
  //Buat element li
  let newToDo = document.createElement("li");
  let delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("x"));
  delButton.classList.value = "del";
  //Masukkan text input ke element li
  newToDo.appendChild(document.createTextNode(input.value));
  //Masukkan element li ke ul
  toDolist.appendChild(newToDo);
  newToDo.appendChild(delButton);
  //Bersihkan input
  input.value = "";
  deleteList();
  doneList();
}

deleteList();
doneList();
