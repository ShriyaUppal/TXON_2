const display = document.querySelector("input[name=display]");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLastCharacter() {
  const currentValue = display.value;
  display.value = currentValue.substring(0, currentValue.length - 1);
}

function calculateResult() {
  const result = eval(display.value);
  display.value = result;
}

function init() {
  document.querySelectorAll("input[type=button]").forEach(element => {
    switch (element.value) {     
      case "AC":
        element.addEventListener("click", clearDisplay);
        break;
      case "DE":
        element.addEventListener("click", deleteLastCharacter);
        break;
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        element.addEventListener("click", function() {
          appendValue(" " + element.value + " ");
        });
        break;
      case "=":
        element.addEventListener("click", calculateResult);
        break;
      default:
        element.addEventListener("click", function() {
          appendValue(element.value)
        });
    }
  });
}

init();
