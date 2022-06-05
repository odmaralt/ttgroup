const signupPage = document.getElementById("signupPage");

const box = document.createElement("div");
box.id = "box";
signupPage.append(box);

const container = document.createElement("div");
container.id = "container";
box.append(container);

const header = document.createElement("h1");
header.id = "logo";
header.innerText = "T&T Group";
container.append(header);

const contain = document.createElement("div");
contain.id = "contain";
container.append(contain);

const firstLastName = document.createElement("div");
firstLastName.classList.add("firstLastName");
contain.append(firstLastName);

const firstName = document.createElement("div");
firstName.id = "firstName";
firstLastName.append(firstName);

const firstNameInput = document.createElement("input");
firstNameInput.id = "firstNameInput";
firstNameInput.placeholder = "First Name*";
firstName.append(firstNameInput);

const span = document.createElement("span");
span.id = "span";
firstName.append(span);

const lastNameInput = document.createElement("input");
lastNameInput.id = "lastNameInput";
lastNameInput.placeholder = "Last Name*";
firstName.append(lastNameInput);

const email = document.createElement("div");
email.id = "email";
contain.append(email);

const emailInput = document.createElement("input");
emailInput.id = "emailInput";
emailInput.placeholder = "Email*";
email.append(emailInput);

const password = document.createElement("div");
password.id = "password";
contain.append(password);

const passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.placeholder = "Create a password*";
passwordInput.setAttribute("type", "password");
password.append(passwordInput);

const required = document.createElement("span");
required.id = "required1";
required.innerText = "Please fill out all required fields.";
container.append(required);

const signUpButton = document.createElement("button");
signUpButton.id = "signUpButton";
signUpButton.type = "submit";
signUpButton.innerText = "Sign Up";
container.append(signUpButton);

const haveAcc = document.createElement("p");
haveAcc.id = "haveAcc";
haveAcc.innerText = "Already have an account? ";
container.append(haveAcc);

const login = document.createElement("a");
login.id = "logIn";
login.href = "../index.html";
login.innerText = "Log In";
haveAcc.append(login);

const image = document.createElement("img");
image.id = "signupImage";
image.src =
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";
signupPage.append(image);

const firstNameInput1 = document.getElementById("firstNameInput");
const lastNameInput1 = document.getElementById("lastNameInput");
const email1 = document.getElementById("emailInput");
const password1 = document.getElementById("passwordInput");
const button1 = document.getElementById("signUpButton");
const requireFirstName = document.getElementById("required1");

function validateFirstName(value) {
  if (value === "") {
    requireFirstName.style.display = "flex";
  } else {
    requireFirstName.style.display = "none";
  }
}
button1.addEventListener("click", function () {
  validateFirstName(
    firstNameInput1.value &&
      lastNameInput1.value &&
      email1.value &&
      password1.value
  );
});
