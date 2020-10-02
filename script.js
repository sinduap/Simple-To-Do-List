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
var delButton = document.createElement("button");

//Manipulate dom

// Input new to do ke to do list menggunakan tombol add
add.addEventListener("click", addByClick);

// Input new to do ke to do list menggunakan enter
input.addEventListener("keypress", addByPressEnter);

function refresh() {
  var del = document.getElementsByClassName("del");
  var checked = document.querySelectorAll("li");
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
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
  var newToDo = document.createElement("li");
  var delButton = document.createElement("button");
  delButton.appendChild(document.createTextNode("x"));
  delButton.classList.value = "del";
  //Masukkan text input ke element li
  newToDo.appendChild(document.createTextNode(input.value));
  //Masukkan element li ke ul
  toDolist.appendChild(newToDo);
  newToDo.appendChild(delButton);
  //Bersihkan input
  input.value = "";
  refresh();
}

refresh();
