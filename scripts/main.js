const WORD = "ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn";
const headingList = [
  "HE is coming...",
  "Bathe in HIS glory...",
  "Let HIM devour you...",
  "Praise HIM...",
  "Our saviour from this life...",
  "Praise HIM... Praise HIM..."
];
let inputBox;
let inputElem;
let body;

document.addEventListener("DOMContentLoaded", () => {
  inputBox = document.getElementById("input-box");
  body = document.getElementsByTagName("body")[0];
  addInputFields(WORD);
  alternateTitle();
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
    inputElem[0].focus();
    setTimeout(() => {
      elem.classList.remove("wrong-letter");
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
  if (WORD.toLowerCase() === word) {
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

function alternateTitle() {
  const heading = document.getElementsByTagName("h1")[0];
  let index = 0;
  setInterval(() => {
    heading.innerHTML = headingList[index];
    index++;
    if (index === headingList.length) index = 0;
  }, 10000);
}
