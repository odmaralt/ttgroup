const box = document.getElementById("box");

const navBar = document.createElement("div");
navBar.classList.add("navBar");
box.append(navBar);

const navHome = document.createElement("a");
navHome.href = "../homepage/home.html";
navHome.innerText = "Home";
navBar.append(navHome);

const navProjects = document.createElement("a");
navProjects.href = "../projectPage/project.html";
navProjects.innerText = "Projects";
navBar.append(navProjects);

const navGoals = document.createElement("a");
navGoals.href = "goals.html";
navGoals.innerText = "Goals";
navGoals.classList.add("active");
navBar.append(navGoals);

const navServices = document.createElement("a");
navServices.href = "../servicesPage/services.html";
navServices.innerText = "Services";
navBar.append(navServices);

const navContact = document.createElement("a");
navContact.href = "../contactPage/contact.html";
navContact.innerText = "Contact";
navBar.append(navContact);

const navLogo = document.createElement("h1");
navLogo.id = "logo";
navLogo.innerText = "TNT Group";
navBar.append(navLogo);

const border = document.createElement("div");
border.id = "border";
box.append(border);

const header1 = document.createElement("h1");
header1.classList.add("header");
header1.id = "space"
header1.innerText = "Our Goals";
border.append(header1);

const goals = document.createElement("div");
goals.id = "goals";
border.append(goals);

const recognizes = document.createElement("span");
recognizes.id = "recognize";
recognizes.innerText = "Recognize";
goals.append(recognizes);

const establishs = document.createElement("span");
establishs.id = "establish";
establishs.innerText = "Establish";
goals.append(establishs);

const strives = document.createElement("span");
strives.id = "strive";
strives.innerText = "Strive";
goals.append(strives);

// const fulfills = document.createElement("span");
// fulfills.id = "fulfill";
// fulfills.innerText = "Fulfill";
// goals.append(fulfills);

const rightSide = document.createElement("div");
rightSide.id = "rightSide";
box.append(rightSide);

const header2 = document.createElement("p");
header2.classList.add("header");
header2.innerText = "Recognize Needs";
rightSide.append(header2);

const recognize1 = document.createElement("p");
recognize1.id = "recognize1";
recognize1.innerText =
  "One of our values as a company is to recognize the costumers needs. We believe it is important to communicate customer to contracter to figure out what exactly is needed for the project to be a success. We can assure that T&T group provides excellent price, timeliness, quality, experience and responsiveness.";
rightSide.append(recognize1);

const rightSide2 = document.createElement("div");
rightSide2.id = "rightSide2";
box.append(rightSide2);

const header3 = document.createElement("p");
header3.classList.add("header");
header3.innerText = "Establish";
rightSide2.append(header3);

const establish1 = document.createElement("p");
establish1.id = "establish1";
establish1.innerText ="After we've talked price range and schedule, we will get started to help your dream become reality."
rightSide2.append(establish1);

const rightSide3 = document.createElement("div");
rightSide3.id = "rightSide3";
box.append(rightSide3);

const header4 = document.createElement("p");
header4.classList.add("header");
header4.innerText = "Strive";
rightSide3.append(header4);

const strive1 = document.createElement("p");
strive1.id = "strive1";
strive1.innerText = "T&T Group Construction strives for excellence. We pride ourselves in having admirable work quality."
rightSide3.append(strive1);

const rightSide4 = document.createElement("div");
rightSide4.id = "rightSide4";
box.append(rightSide4);

// const header5 = document.createElement("p");
// header5.classList.add("header");
// header5.innerText = "Fulfill Needs";
// rightSide4.append(header5);

// const fulfill1 = document.createElement("p");
// fulfill1.id = "fulfill1";
// fulfill1.innerText =
//   "Hello paragraph recognize Hello paragraph. recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize. Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph recognize Hello paragraph. recognize Hello paragraph recognize Hello paragraph recognize.";
// rightSide4.append(fulfill1);

const right = document.getElementById("rightSide");
const right2 = document.getElementById("rightSide2");
const establish = document.getElementById("establish");
const recognize = document.getElementById("recognize");
const right3 = document.getElementById("rightSide3");
const strive = document.getElementById("strive");
const right4 = document.getElementById("rightSide4");
const fulfill = document.getElementById("fulfill");
recognize.addEventListener("click", function () {
  console.log("here");
  right.style.display = "block";
  right2.style.display = "none";
  right3.style.display = "none";
  right4.style.display = "none";
  establish.style.color = "black";
  recognize.style.color = "rgb(129, 191, 202)";
  strive.style.color = "black";
  fulfill.style.color = "black";
});
establish.addEventListener("click", function () {
  right.style.display = "none";
  right2.style.display = "block";
  right3.style.display = "none";
  right4.style.display = "none";
  establish.style.color = "rgb(129, 191, 202)";
  recognize.style.color = "black";
  strive.style.color = "black";
  fulfill.style.color = "black";
});
strive.addEventListener("click", function () {
  right.style.display = "none";
  right2.style.display = "none";
  right3.style.display = "block";
  right4.style.display = "none";
  establish.style.color = "black";
  recognize.style.color = "black";
  strive.style.color = "rgb(129, 191, 202)";
  fulfill.style.color = "black";
});
fulfill.addEventListener("click", function () {
  right.style.display = "none";
  right2.style.display = "none";
  right3.style.display = "none";
  right4.style.display = "block";
  establish.style.color = "black";
  recognize.style.color = "black";
  strive.style.color = "black";
  fulfill.style.color = "rgb(129, 191, 202)";
});
