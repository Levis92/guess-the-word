const WORD = "hejsan";
let inputBox;
let inputElem;

document.addEventListener("DOMContentLoaded", () => {
  inputBox = document.getElementById("input-box");

  addInputFields(WORD);

  inputElem = Array.prototype.slice.call(
    inputBox.getElementsByTagName("input")
  );
});

function addInputFields(word) {
  for (var i = 0; i < word.length; i++) {
    let textField = document.createElement("input");
    textField.type = "text";
    textField.setAttribute("maxlength", 1);
    textField.setAttribute("onkeypress", "keyEvent(event)");
    inputBox.appendChild(textField);
  }
}

function keyEvent(event) {
  let value = event.key;
  let index = inputElem.indexOf(event.srcElement);
  let elem = event.target;
  if (value.toLowerCase() != WORD.charAt(index)) {
    elem.style = "background-color: red; color: white";
    setTimeout(() => {
      elem.style = "background-color: white; color: initial";
      for (var i = 0; i < inputElem.length; i++) {
        inputElem[i].value = "";
      }
      elem.value = "";
    }, 1000);
  }
}
