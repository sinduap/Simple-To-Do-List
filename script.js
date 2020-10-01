/*
var add = document.getElementById("add");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createElement() {
  var li = document.createElement("li");
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
var input = document.getElementById("input");
var add = document.getElementById("add");
var toDolist = document.querySelector("ul");
var span = document.createElement("span");

//Manipulate dom

// Input new to do ke to do list menggunakan tombol add
add.addEventListener("click", addByClick);

// Input new to do ke to do list menggunakan enter
input.addEventListener("keypress", addByPressEnter);

function refresh() {
  var del = document.querySelectorAll("span");
  for (i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
      var list = this.parentNode;
      list.remove();
    });
  }
}

function addByClick() {
  if (input.value !== "") {
    //Buat element li
    var newToDo = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(" x"));
    //Masukkan text input ke element li
    newToDo.appendChild(document.createTextNode(input.value));
    //Masukkan element li ke ul
    toDolist.appendChild(newToDo);
    newToDo.appendChild(span);
    //Bersihkan input
    input.value = "";
    refresh();
  }
}

function addByPressEnter(event) {
  if (input.value !== "" && event.keyCode === 13) {
    var newToDo = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(" x"));
    //Masukkan text input ke element li
    newToDo.appendChild(document.createTextNode(input.value));
    //Masukkan element li ke ul
    toDolist.appendChild(newToDo);
    newToDo.appendChild(span);
    //Bersihkan input
    input.value = "";
    refresh();
  }
}

refresh();
