let WORD;
let inputBox;
let inputElem;
let body;

document.addEventListener("DOMContentLoaded", () => {
  inputBox = document.getElementById("input-box");
  body = document.getElementsByTagName("body")[0];
  addWordInput();
});

function addInputFields(word) {
  for (var i = 0; i < word.length; i++) {
    let textField = document.createElement("input");
    textField.type = "text";
    textField.value = "";
    textField.setAttribute("maxlength", 1);
    textField.onkeypress = keyEvent;
    inputBox.appendChild(textField);
  }
  inputElem = Array.prototype.slice.call(
    inputBox.getElementsByTagName("input")
  );
  inputElem[0].focus();
}

function keyEvent(event) {
  let value = event.key;
  let index = inputElem.indexOf(event.srcElement);
  let elem = event.target;
  elem.value = value;
  nextIndex = index + 1;
  if (nextIndex < inputElem.length) {
    inputElem[index + 1].focus();
  }
  if (value.toLowerCase() != WORD.charAt(index)) {
    elem.classList.add("wrong-letter");
    setTimeout(() => {
      elem.classList.remove("wrong-letter");
      inputElem[0].focus();
      for (var i = 0; i < inputElem.length; i++) {
        inputElem[i].value = "";
      }
      elem.value = "";
    }, 1000);
  }
  let word = "";
  for (var i = 0; i < inputElem.length; i++) {
    let val = inputElem[i].value;
    if (val != null && val != "") {
      word += val.toLowerCase();
    } else word += " ";
  }
  if (WORD === word) {
    let textElem = document.createElement("h2");
    textElem.id = "winner-message";
    let text = document.createTextNode(
      "Congratulations!!! That is the correct word!"
    );
    textElem.appendChild(text);
    body.appendChild(textElem);
    for (var i = 0; i < inputElem.length; i++) {
      inputElem[i].classList.add("correct-letter");
      inputElem[i].disabled = true;
    }
  }
}

function addWordInput() {
  let container = document.createElement("form");
  container.id = "user-input-box";
  let input = document.createElement("input");
  input.type = "text";
  input.id = "choose-word";
  input.placeholder = "Choose a word...";
  let button = document.createElement("button");
  button.onclick = startGame;
  let text = document.createTextNode("Start");
  button.appendChild(text);
  container.appendChild(input);
  container.appendChild(button);
  inputBox.appendChild(container);
  input.focus();
}

function startGame() {
  WORD = document.getElementById("choose-word").value.toLowerCase();
  let box = document.getElementById("user-input-box");
  inputBox.removeChild(box);
  addInputFields(WORD);
}
