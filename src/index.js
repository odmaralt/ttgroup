const loginPage = document.getElementById("loginPage");

let forgetPassword = false;

const box = document.createElement("div");
box.id = "box";
loginPage.append(box);

const container = document.createElement("div");
container.id = "container";
box.append(container);

const header = document.createElement("h1");
header.id = "logo";
header.innerText = "T&T Group";
container.append(header);

const bin = document.createElement("div");
bin.id = "bin";
container.append(bin);

const email = document.createElement("div");
email.classList.add("email");
bin.append(email);

const emailInput = document.createElement("input");
emailInput.id = "emailInput";
emailInput.placeholder = "Email*";
email.append(emailInput);

const password = document.createElement("div");
password.classList.add("password");
bin.append(password);

const passwordInput = document.createElement("input");
passwordInput.id = "passwordInput";
passwordInput.setAttribute("type", "password");
passwordInput.placeholder = "Password*";
password.append(passwordInput);

const forgotPassword = document.createElement("a");
forgotPassword.id = "forgotPass";
forgotPassword.innerText = "Forgot your password?";
bin.append(forgotPassword);

const loginButton = document.createElement("button");
loginButton.id = "loginButton";
loginButton.innerText = "Log In";
container.append(loginButton);

const dontHaveAcc = document.createElement("p");
dontHaveAcc.id = "noAcc";
dontHaveAcc.innerText = "Don't have an account? ";
container.append(dontHaveAcc);

const signUp = document.createElement("a");
signUp.id = "signUp";
signUp.href = "./registerPage/index.html";
signUp.innerText = "Sign Up";
dontHaveAcc.append(signUp);

const image = document.createElement("img");
image.id = "loginImage";
image.src =
  "https://images.unsplash.com/photo-1556597249-cd6a997737df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80";
loginPage.append(image);

const required = document.createElement("span");
required.id = "required1";
required.innerText = "Please enter your email.";
email.append(required);

const required2 = document.createElement("span");
required2.id = "required2";
required2.innerText = "Please enter your password.";
password.append(required2);

const email1 = document.getElementById("emailInput");
const password1 = document.getElementById("passwordInput");
const button1 = document.getElementById("loginButton");
const requireEmail = document.getElementById("required1");
const requirePassword = document.getElementById("required2");

function validateFirstName(value) {
  if (value === "") {
    requireEmail.style.display = "block";
  } else {
    requireEmail.style.display = "none";
  }
}

function validatePassword(value) {
  if (value === "") {
    requirePassword.style.display = "block";
  } else {
    requirePassword.style.display = "none";
  }
}
button1.addEventListener("click", function () {
  validateFirstName(email1.value);
  validatePassword(password1.value);
});

forgotPassword.addEventListener("click", () => {
  bin.style.display = "none";
  loginButton.innerText = "Reset Password";
  loginButton.style.textTransform = "none";
  forgetPassword = true;
  const enterEmail = document.createElement("input");
  enterEmail.id = "emailInput";
  enterEmail.placeholder = "Email";
  header.append(enterEmail);
});
