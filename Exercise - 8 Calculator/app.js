const output = document.querySelector(".output");
const vals = document.querySelectorAll(".val");

var ans = 0;
var outputString = "";
var firstVal = 0;
var secondVal = 0;
var flag = true;
var op = "";

vals.forEach((val) => {
  val.addEventListener("click", () => {
    value = val.getAttribute("data-val");
    if (value == "c") {
      flag = true;
      outputString = "";
      output.innerHTML = 0;
    } else if (value == "x" || value == "-" || value == "+" || value == "/") {
      op = value;
      flag = false;
      firstVal = Number(outputString);
      outputString = "";
      output.innerHTML = value;
    } else if (value == "=") {
      secondVal = Number(outputString);
      //   console.log(firstVal);
      //   console.log(firstVal * secondVal);
      outputString = answer(firstVal, secondVal, op);
      output.innerHTML = outputString;
    } else {
      outputString += value;
      output.innerHTML = outputString;
    }
  });
});

const answer = (f, s, op) => {
  if (op == "x") {
    return f * s;
  } else if (op == "+") {
    return f + s;
  } else if (op == "-") {
    return f - s;
  } else {
    return f / s;
  }
};
