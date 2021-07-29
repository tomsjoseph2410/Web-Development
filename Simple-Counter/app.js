var updatedCounter = 0;

function onClick() {
  updatedCounter += 1;

  document.getElementById("countertext").innerHTML = updatedCounter;

  if (updatedCounter === 10) {
    alert("Congrats on completing " + 10 + " problems");
  }
}

function onClick2() {
  updatedCounter -= 1;

  if (updatedCounter < 0) {
    updatedCounter = 0;
  }

  document.getElementById("countertext").innerHTML = updatedCounter;
}

function onClick3() {
  updatedCounter = 0;

  document.getElementById("countertext").innerHTML = updatedCounter;
}
