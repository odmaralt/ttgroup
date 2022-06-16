const container = document.getElementById("container");

const navBar = document.createElement("div");
navBar.classList.add("navBar");
container.append(navBar);
const navItems = document.createElement("div");
navItems.id = "navItems";
navBar.append(navItems);
const navHome = document.createElement("a");
navHome.href = "../index.html";
navHome.innerText = "Home";
navItems.append(navHome);

const navProjects = document.createElement("a");
navProjects.href = "../projectPage/project.html";
navProjects.innerText = "Projects";
navItems.append(navProjects);

// const navGoals = document.createElement("a");
// navGoals.href = "../goalsPage/goals.html";
// navGoals.innerText = "Goals";
// navItems.append(navGoals);

const navServices = document.createElement("a");
navServices.href = "../servicesPage/services.html";
navServices.innerText = "Services";
navItems.append(navServices);

const navContact = document.createElement("a");
navContact.classList.add("active");
navContact.href = "contact.html";
navContact.innerText = "Contact";
navItems.append(navContact);
logoNav = document.createElement("div");
navBar.append(logoNav);
const navLogo = document.createElement("h1");
navLogo.id = "logo";
logoNav.append(navLogo);

const box = document.createElement("div");
box.id = "box";
container.append(box);

const contactInfo = document.createElement("p");
contactInfo.id = "contactInfo";
contactInfo.innerText = "Contact Us";
box.append(contactInfo);

const form = document.createElement("FORM");
form.setAttribute("action", "https://formsubmit.co/huumaa@yahoo.com");
form.setAttribute("method", "POST");
box.append(form);

const nameInput = document.createElement("input");
nameInput.id = "name";
nameInput.name = "name";
nameInput.classList.add("type");
nameInput.type = "text";
nameInput.required = true;
nameInput.placeholder = "Name";
form.append(nameInput);

const phoneNumberInput = document.createElement("input");
phoneNumberInput.id = "number";
phoneNumberInput.name = "number";
phoneNumberInput.classList.add("type");
phoneNumberInput.type = "tel";
phoneNumberInput.required = true;
phoneNumberInput.placeholder = "Phone Number";
form.append(phoneNumberInput);

const emailInput = document.createElement("input");
emailInput.id = "email";
emailInput.name = "email";
emailInput.classList.add("type");
emailInput.type = "email";
emailInput.required = true;
emailInput.placeholder = "Email Address";
form.append(emailInput);

const infoInput = document.createElement("input");
infoInput.id = "info";
infoInput.name = "info";
infoInput.classList.add("big");
infoInput.type = "tel";
infoInput.required = true;
infoInput.placeholder = "How can we help you?";
form.append(infoInput);

const buttonDiv = document.createElement("div");
buttonDiv.id = "bt";
form.append(buttonDiv);

const submitButton = document.createElement("button");
submitButton.classList.add("type");
submitButton.type = "submit";
submitButton.id = "submit";
submitButton.innerText = "Submit";
buttonDiv.append(submitButton);
