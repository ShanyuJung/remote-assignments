const button = document.getElementById("computeBtn");
const input = document.getElementById("numsInput");
const warning = document.getElementById("warningText");
const result = document.getElementById("resultText");
button.addEventListener("click", maxNumFunc);

//Find the max number of array by for loop
function max(numbers) {
  let maxNum;
  if (numbers.length == 1) {
    maxNum = numbers[0];
  } else {
    maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNum) {
        maxNum = numbers[i];
      } else {
        maxNum = maxNum;
      }
    }
  }
  return maxNum;
}

//Assignment Example console result
console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

//Handle input array and window content
function maxNumFunc() {
  //format warning text and resultText
  warning.textContent = "";
  result.textContent = "";

  //check user has enter something
  if (input.value == "") {
    warning.textContent = "Please enter at least one number";
    // console.log("Please enter at least one number");
    return;
  }

  //check user enter only numbers, and convert input value to an array
  let enteredArr = input.value.split(" ").join("").split(",");
  console.log(enteredArr);
  for (let i = 0; i < enteredArr.length; i++) {
    if (isNaN(enteredArr[i])) {
      warning.textContent = `Something went wrong, please make sure you enter only numbers ,and separate them by "," `;
      return;
    }
  }
  for (let i = 0; i < enteredArr.length; i++) {
    enteredArr[i] = Number(enteredArr[i]);
  }

  //Show the max number in HTML
  let displayMaxNum = max(enteredArr);
  result.textContent = `The max number of array is ${displayMaxNum}`;
}
