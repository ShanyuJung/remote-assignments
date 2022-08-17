const button = document.getElementById("computeBtn");
const input = document.getElementById("numsInput");
const warning = document.getElementById("warningText");
const result = document.getElementById("resultText");
button.addEventListener("click", max);

function max(numbers) {
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
  let enteredArr = input.value.trim().split(",");
  let numArr = enteredArr.map(function (x) {
    return parseInt(x, 10);
  });
  if (numArr.includes(NaN)) {
    warning.textContent = `Something went wrong, please make sure you enter only numbers ,and separate them by "," `;
    // console.log("NAN");
    return;
  }

  //Find the max number of array by for loop
  let maxNum;
  if (numArr.length == 1) {
    maxNum = numArr[0];
  } else {
    maxNum = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i] > maxNum) {
        maxNum = numArr[i];
      } else {
        maxNum = maxNum;
      }
    }
  }
  // console.log(maxNum)
  //Show the max number in HTML
  result.textContent = `The max number of array is ${maxNum}`;
}
