const form = document.getElementById("calculator-form");
const leftMember = document.getElementById("left-member");
const rightMember = document.getElementById("right-member");
const operator = document.getElementById("operator");

function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!isPositiveInteger(leftMember.value) || !isPositiveInteger(rightMember.value)) {
    alert("Error :(");
    return;
  }

  const left = Number(leftMember.value);
  const right = Number(rightMember.value);

  if ((operator.value === "/" || operator.value === "%") && right === 0) {
    alert("It's over 9000!");
    return;
  }

  let result;

  if (operator.value === "+") {
    result = left + right;
  } else if (operator.value === "-") {
    result = left - right;
  } else if (operator.value === "*") {
    result = left * right;
  } else if (operator.value === "/") {
    result = left / right;
  } else {
    result = left % right;
  }

  alert(result);
  console.log(result);
});

setInterval(() => {
  alert("Please, use me...");
}, 30000);
