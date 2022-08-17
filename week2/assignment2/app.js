const button = document.getElementById("computeBtn");
const inputOne = document.getElementById("numInputOne");
const inputTwo = document.getElementById("numInputTwo");
const inputOperator = document.getElementById("operatorInput");
const warning = document.getElementById("warningText");
const result = document.getElementById("resultText");
button.addEventListener("click", calculateHandler);

function calculate(args) {
  let calResult;
  if (args.op === "+") {
    calResult = Number(args.n1) + Number(args.n2);
  } else if (args.op === "-") {
    calResult = Number(args.n1) - Number(args.n2);
  } else {
    calResult = "Not supported";
  }
  return calResult;
}

console.log(calculate({ n1: 2, n2: 3, op: "+" })); // result to 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // result to 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // result to 'Not supported'

function calculateHandler() {
  //format warning text and resultText
  warning.textContent = "";
  result.textContent = "";
  const calObj = { n1: 0, n2: 0, op: "" };
  inputOne.style.backgroundColor = "#fff";
  inputTwo.style.backgroundColor = "#fff";
  inputOperator.style.backgroundColor = "#fff";

  let n1Value = inputOne.value;
  let n2Value = inputTwo.value;
  let operator = inputOperator.value;
  let calResult;
  let warningText = "";
  warningText = "";

  //Check user entered n1,n2 and operator, and make sure n1,n2 are numbers
  if (n1Value == "" || n2Value == "" || operator == "") {
    warningText += "Please enter numbers.";
    if (n1Value == "") {
      inputOne.style.backgroundColor = "#FFB6C1";
    }
    if (n2Value == "") {
      inputTwo.style.backgroundColor = "#FFB6C1";
    }
    if (operator == "") {
      inputOperator.style.backgroundColor = "#FFB6C1";
      warningText += "Please enter an operator.";
    }
    warning.textContent = warningText;
    return;
  } else if (isNaN(n1Value) || isNaN(n2Value)) {
    warning.textContent = "Please enter valid number.";
    if (isNaN(n1Value)) {
      inputOne.style.backgroundColor = "#FFB6C1";
    }
    if (isNaN(n2Value)) {
      inputTwo.style.backgroundColor = "#FFB6C1";
    }
    return;
  }

  calObj.n1 = n1Value;
  calObj.n2 = n2Value;
  calObj.op = operator;

  // console.log(calObj);
  calResult = calculate(calObj);
  result.textContent = calResult;
  if (calResult === "Not supported") {
    result.style.fontSize = "18px";
    warning.textContent = "Operator is not supported";
  } else {
    result.style.fontSize = "32px";
  }
}
