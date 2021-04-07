// Pin maker
function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
// display generated pin
function generatePin() {
  const input = document.getElementById("display-one");
  input.value = getPin();
}

// handle calculator button
const buttonsContainer = document.getElementById("digits-container");
buttonsContainer.addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    //   handle not a number
    if (digit === "C") {
      const typedInput = document.getElementById("typed-pin");
      typedInput.value = "";
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});

function verifyPin() {
  const actualPin = document.getElementById("display-one").value;
  const typedPin = document.getElementById("typed-pin").value;
  if (actualPin === typedPin) {
    matchStatus("block", "none");
  } else {
    matchStatus("none", "block");
  }
}

function matchStatus(success, unsuccess) {
  const correct = document.getElementById("success");
  correct.style.display = success;
  const incorrect = document.getElementById("unsuccess");
  incorrect.style.display = unsuccess;
}
