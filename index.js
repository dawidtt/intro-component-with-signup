const pathToForm = document.querySelector("form");
pathToForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
function formSubmit() {
  const fName = document.querySelector("#fName");
  const lName = document.querySelector("#lName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const errorMsg1 = document.querySelector(".error-message-1");
  const errorMsg2 = document.querySelector(".error-message-2");
  const errorMsg3 = document.querySelector(".error-message-3");
  const errorMsg4 = document.querySelector(".error-message-4");

  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const checkEmail = reg.test(email.value);

  if (!fName.value) {
    fName.classList.add("error");
    fName.placeholder = "";
    errorMsg1.innerText = "First Name cannot be empty";
  } else {
    fName.classList.remove("error");
    fName.placeholder = "First Name";
    errorMsg1.innerText = "";
  }
  if (!lName.value) {
    lName.classList.add("error");
    lName.placeholder = "";
    errorMsg2.innerText = "Last Name cannot be empty";
  } else {
    lName.classList.remove("error");
    lName.placeholder = "Last Name";
    errorMsg2.innerText = "";
  }
  if (!checkEmail) {
    email.classList.add("error");
    email.placeholder = "email@example/com";
    errorMsg3.innerText = "Looks like this is not an email";
  } else {
    email.classList.remove("error");
    email.placeholder = "Email Address";
    errorMsg3.innerText = "";
  }
  if (!password.value) {
    password.classList.add("error");
    password.placeholder = "";
    errorMsg4.innerText = "Password cannot be empty";
  } else {
    password.classList.remove("error");
    password.placeholder = "Password";
    errorMsg4.innerText = "";
  }
}
