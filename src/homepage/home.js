// const isUser = localStorage.getItem("user");
// console.log(isUser);
// // localStorage.removeItem('user')

const container = document.getElementById("container");
const firstPage = document.createElement("div");
firstPage.id = "firstPage"
container.append(firstPage)
const navBar = document.createElement("div");
navBar.classList.add("navBar");
firstPage.append(navBar);
const navItems = document.createElement("div");
navItems.id = "navItems";
navBar.append(navItems);
const navHome = document.createElement("a");
navHome.href = "home.html";
navHome.innerText = "Home";
navHome.classList.add("active");

navItems.append(navHome);

const navProjects = document.createElement("a");
navProjects.href = "../projectPage/project.html";
navProjects.innerText = "Projects";
navItems.append(navProjects);

const navGoals = document.createElement("a");
navGoals.href = "../goalsPage/goals.html";
navGoals.innerText = "Goals";
navItems.append(navGoals);

const navServices = document.createElement("a");
navServices.href = "../servicesPage/services.html";
navServices.innerText = "Services";
navItems.append(navServices);

const navContact = document.createElement("a");
navContact.href = "../contactPage/contact.html";
navContact.innerText = "Contact";
navContact.id = "contactNav";
navItems.append(navContact);
navLogo = document.createElement("div");
navLogo.id = "navLogo";
navBar.append(navLogo);

const logo = document.getElementById("logo");
navLogo.append(logo);

const imgDiv = document.createElement("div");
imgDiv.id = "imgDiv";
firstPage.append(imgDiv);

// const img = document.createElement("div");
// img.id = "img";
// img.src =
//   "https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";
// imgDiv.append(img);

const header = document.createElement("h1");
header.id = "header";
header.innerText = "T&T Group Construction";
imgDiv.append(header);

const secondPart = document.createElement("div");
secondPart.id = "secondPart";
container.append(secondPart);

const ourTeam = document.createElement("h1");
ourTeam.id = "ourTeam";
ourTeam.innerText = "Our Team";
secondPart.append(ourTeam);

const flex = document.createElement("div");
flex.id = "flex";
secondPart.append(flex);

const personImg = document.createElement("img");
personImg.id = "person";
personImg.src =
  "https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999";
flex.append(personImg);

const aboutPerson = document.createElement("p");
aboutPerson.id = "aboutPerson";
aboutPerson.innerText =
  "Tumenjargal is a capable leader and a skilled contractor. With 8+ years of experience, his work is excellent and precise. He values his customers wants and needs to guarantee their satisfaction. Tumenjargal, his wife, and 4 kids have lived in Washington for 8 years.";
flex.append(aboutPerson);

const thirdPart = document.createElement("div");
thirdPart.id = "thirdPart";
container.append(thirdPart);

const contactInfo = document.createElement("p");
contactInfo.id = "contactInfo";
contactInfo.innerText = "Contact Information";
thirdPart.append(contactInfo);

const contact = document.createElement("div");
contact.id = "contact";
thirdPart.append(contact);

const email = document.createElement("a");
email.href = "mailto:ttgroupllc@yahoo.com";
email.innerText = "Email: ttgroupllc@yahoo.com";
contact.append(email);

const number = document.createElement("a");
number.href = "tel:4257707900";
number.innerText = "Phone number: 425-770-7900";
contact.append(number);

const fb = document.createElement("a");
fb.href = "https://www.facebook.com/tntgroupllc";
fb.innerText = "Facebook: T&T Group";
contact.append(fb);

const footers = document.getElementById("footers");

const footerDiv = document.createElement("div");
footerDiv.id = "footer";
footers.append(footerDiv);

const paragraph = document.createElement("p");
paragraph.id = "paragraph";
paragraph.innerText =
  "©2022 by T&T Group Construction. Created by Odmaral Tumenjargal";
footerDiv.append(paragraph);
