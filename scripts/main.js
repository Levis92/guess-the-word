//let WORD = "ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn";
let WORD = "hejsan";
let inputBox;
let inputElem;
let body;

document.addEventListener("DOMContentLoaded", () => {
  inputBox = document.getElementById("input-box");
  body = document.getElementsByTagName("body")[0];
  //addWordInput();
  addInputFields(WORD);

  inputElem = Array.prototype.slice.call(
    inputBox.getElementsByTagName("input")
  );
  inputElem[0].focus();
});

function addInputFields(word) {
  for (var i = 0; i < word.length; i++) {
    let textField = document.createElement("input");
    textField.type = "text";
    textField.value = "";
    textField.setAttribute("maxlength", 1);
    textField.setAttribute("onkeypress", "keyEvent(event)");
    inputBox.appendChild(textField);
  }
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
    }
  }
}

function addWordInput() {
  let input = document.createElement("input");
  input.type = "text";
  let button = document.createElement("button");
  // in progress...
}
