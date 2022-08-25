const usernameInput = document.getElementById("usernameInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  if (usernameInput.value == "") {
    alert("Please enter your name");
    return;
  }

  const url = `http://localhost:3000/trackName?name=${usernameInput.value}`;
  requestHandler(url, redirectHandler);
}

function requestHandler(url, func) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", func);
  xhr.open("GET", url);
  xhr.send();
}

function redirectHandler() {
  window.location.replace("http://localhost:3000/myName");
}
