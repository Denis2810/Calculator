let Operand = document.querySelector(".operand");
let Number = document.querySelector(".secondNr");
let Operator = document.querySelector(".operator");
let Result = document.querySelector(".result");
let numbers = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".operation");
let equal = document.querySelector(".equal");
let deleteButton = document.querySelector(".delete");
let clearBtn = document.querySelector(".clear");
//CONDITIILE DE INCEPUT
let array = [];
Operand.innerHTML = 0;
Number.innerHTML = 0;
let operatorrr = false;
Result.innerHTML = 0;
//FUNCTIA DE ADAUGARE A CIFREI
function addNumbers(choices) {
  Operand.style.display = "flex";
  Result.style.display = "none";
  Number.style.display = "none";
  Result.innerHTML = 0;
  if (operatorrr == false) {
    Operand.innerHTML = Operand.innerHTML.toString().replace(/^0+/, "");
    Operand.innerHTML = Operand.innerHTML + choices;
    array = array + choices;
  }
  if (operatorrr == true) {
    Number.style.display = "flex";
    Number.innerHTML = Number.innerHTML.toString().replace(/^0+/, "");
    Number.innerHTML = Number.innerHTML + choices;
    array = array + choices;
  }
}
//FUNCTIE DE ADAUGARE A VIRGULEI
function addPoint(point) {
  if (operatorrr == false) {
    Operand.innerHTML = Operand.innerHTML + point;
    array = array + point;
  }
  if (operatorrr == true) {
    Number.innerHTML = Number.innerHTML + point;
    array = array + point;
  }
}
//FUNCTIE DE ADAUGARE A OPERATORULUI
function addOperation(operator) {
  Operator.innerHTML = operator;
  Operator.style.display = "flex";
  operatorrr = true;
  array = array + operator;
}
//FUNCTIE DE RETURNARE A REZULTATULUI
function result() {
  if (Operator.innerHTML == "+") {
    Result.innerHTML =
      parseFloat(Operand.innerHTML) + parseFloat(Number.innerHTML);
    Result.style.display = "flex";
    Operator.style.display = "none";
    Operand.style.display = "none";
    Number.style.display = "none";
  }
  if (Operator.innerHTML == "-") {
    Result.innerHTML =
      parseFloat(Operand.innerHTML) - parseFloat(Number.innerHTML);
    Result.style.display = "flex";
    Operator.style.display = "none";
    Operand.style.display = "none";
    Number.style.display = "none";
  }
  if (Operator.innerHTML == "X") {
    Result.innerHTML =
      parseFloat(Operand.innerHTML) * parseFloat(Number.innerHTML);
    Result.style.display = "flex";
    Operator.style.display = "none";
    Operand.style.display = "none";
    Number.style.display = "none";
  }
  if (Operator.innerHTML == "%") {
    Result.innerHTML =
      (parseFloat(Operand.innerHTML) / parseFloat(Number.innerHTML)) * 100;
    Result.style.display = "flex";
    Operator.style.display = "none";
    Operand.style.display = "none";
    Number.style.display = "none";
  }
  if (Operator.innerHTML == "÷") {
    Result.innerHTML =
      parseFloat(Operand.innerHTML) / parseFloat(Number.innerHTML);
    Result.style.display = "flex";
    Operator.style.display = "none";
    Operand.style.display = "none";
    Number.style.display = "none";
  }
  Operand.innerHTML = 0;
  Number.innerHTML = 0;
  operatorrr = false;
}

function eraseCharacter() {
  Operand.innerHTML = 0;
  Number.innerHTML = 0;
  Number.style.display = "none";
  Operator.style.display = "none";
  operatorrr = false;
  Result.innerHTML = 0;
}
