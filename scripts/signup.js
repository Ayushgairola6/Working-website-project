const firstName = document.querySelector("#first-name");
const LastName = document.querySelector("#last-name");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const firstNameError = document.getElementById("firstName-msg");
const lastNameError = document.getElementById("lastName-msg");
const dobError = document.getElementById("dob-msg");
const emailError = document.getElementById("email-msg");

const errorMessage = document.querySelector("#error-msg");
const sumbitBtn = document.querySelector("#btn");
function showError() {
  sumbitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let isValid = true;
    if (firstName.value == "") {
      firstNameError.style.display = "block";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }
    if (LastName.value == "") {
      lastNameError.style.display = "block";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }
    if (dob.value == "") {
      dobError.style.display = "block";
      isValid = false;
    } else {
      dobError.style.display = "none";
    }
    if (email.value == "") {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
    if (isValid) {
    }
  });
}
showError();
