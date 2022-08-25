const defaultSummary = document.getElementById("defaultSummary");
const sumBtn = document.getElementById("sumBtn");
const sumInput = document.getElementById("sumInput");
const resultText = document.getElementById("resultText");
sumBtn.addEventListener("click", calSummary);

function exampleReqHandler() {
  const res = {};
  res.resText = this.responseText;
  res.resArr = res.resText.split("+");
  res.sumResult = sum(res.resArr);
  defaultSummary.textContent += ` ${res.resText} = ${res.sumResult}`;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i]);
  }
  return result;
}

function requestHandler(url, func) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", func);
  xhr.open("GET", url);
  xhr.send();
}

function userReqHandler() {
  const res = {};
  res.resText = this.responseText;
  res.resArr = res.resText.split("+");
  res.sumResult = sum(res.resArr);
  if (Number.isInteger(res.sumResult)) {
    resultText.textContent = `Summary result: ${res.resText} = ${res.sumResult}`;
  } else if (res.resText == "Lack of Parameter") {
    resultText.textContent = `Please enter an integer!`;
  } else {
    resultText.textContent = `Something went wrong!`;
  }
}

function calSummary() {
  const url = `http://localhost:3000/getData?number=${sumInput.value}`;
  requestHandler(url, userReqHandler);
}

requestHandler("http://localhost:3000/getData?number=10", exampleReqHandler);
