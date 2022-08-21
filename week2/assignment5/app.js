const button = document.getElementById("computeBtn");
const input = document.getElementById("numsInput");
const sumInput = document.getElementById("sumInput");
const warning = document.getElementById("warningText");
const result = document.getElementById("resultText");
button.addEventListener("click", myFunc);

//Algorithm Practice
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const anotherNum = target - nums[i];

    if (anotherNum in map) {
      return [map[anotherNum], i];
    }

    map[nums[i]] = i;
  }

  return null;
}

//Assignment Example console result
console.log(twoSum([2, 7, 11, 5], 9));

//Handle input array and window content
function myFunc() {
  //format warning text and resultText
  warning.textContent = "";
  result.textContent = "";
  result.style.color = "black";
  input.style.backgroundColor = "#fff";
  sumInput.style.backgroundColor = "#fff";

  //check user has enter something
  if (input.value == "" || sumInput.value == "") {
    if (input.value == "") {
      warning.textContent += "Please enter some numbers into first input.";
      input.style.backgroundColor = "#FFB6C1";
    }

    if (sumInput.value == "") {
      warning.textContent += "Please enter a number into second input.";
      sumInput.style.backgroundColor = "#FFB6C1";
    }
    // console.log("Please enter at least one number");
    return;
  }

  //check user enter only numbers, and convert input value to an array
  let enteredArr = input.value
    .split(" ")
    .join("")
    .split(",")
    .filter((item) => {
      return item !== "";
    });

  if (enteredArr.length < 2) {
    warning.textContent += `Something went wrong, please make sure you enter more than one numbers, and separate them by "," `;
    input.style.backgroundColor = "#FFB6C1";
    return;
  }

  for (let i = 0; i < enteredArr.length; i++) {
    if (isNaN(enteredArr[i])) {
      warning.textContent += `Something went wrong, please make sure you enter only numbers, and separate them by "," `;
      input.style.backgroundColor = "#FFB6C1";
      return;
    }
  }
  for (let i = 0; i < enteredArr.length; i++) {
    enteredArr[i] = Number(enteredArr[i]);
    if (!Number.isInteger(enteredArr[i])) {
      warning.textContent = `Something went wrong, please make sure you enter only Integers`;
      return;
    }
  }

  let sumNumber = sumInput.value;

  //Show the max number in HTML
  let displayResult = twoSum(enteredArr, sumNumber);
  if (displayResult == null) {
    result.textContent = "Try another array or summary!";
    result.style.color = "red";
  } else {
    result.textContent = `Result: [${displayResult}]`;
  }
}
