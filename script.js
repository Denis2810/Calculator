let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        if (display.innerText) {
          display.innerText = "";
        } else {
          alert("The display is already empty!");
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        } else {
          display.innerText =
            "No input, please press C in order to clear the display.";
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        display.innerText = display.innerText + e.target.innerText;
    }
  });
});

function clearBox() {
  display.innerText = "";
}
