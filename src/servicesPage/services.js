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
navServices.href = "services.html";
navServices.innerText = "Services";
navServices.classList.add("active");
navItems.append(navServices);

const navContact = document.createElement("a");
navContact.href = "../contactPage/contact.html";
navContact.id = "contactNav";
navContact.innerText = "Contact";
navItems.append(navContact);
navLogo = document.createElement("div");
navLogo.id = "navLogo";
navBar.append(navLogo);
const logo = document.getElementById("logo");
navLogo.append(logo);

const firstImg = document.createElement("div");
firstImg.id = "firstImg";
container.append(firstImg);

const whiteBox1 = document.createElement("div");
whiteBox1.id = "whiteBox1";
firstImg.append(whiteBox1);

const remodeling = document.createElement("h1");
remodeling.id = "remodeling";
remodeling.innerText = "Remodeling";
whiteBox1.append(remodeling);

const remodelingParagraph = document.createElement("p");
remodelingParagraph.id = "remodelingParagraph";
remodelingParagraph.innerText = `We understand that renovating isn't an easy task. In order to best satisfy your needs, we promise you excellence. 
T&T Group has extensive experience  
- replacing flooring 
- removing walls
- adding rooms
- rebuilding + working around existing structures`;
whiteBox1.append(remodelingParagraph);

const secondImg = document.createElement("div");
secondImg.id = "secondImg";
container.append(secondImg);

const whiteBox2 = document.createElement("div");
whiteBox2.id = "whiteBox2";
secondImg.append(whiteBox2);

const commercial = document.createElement("h1");
commercial.id = "commercial";
commercial.innerText = "Commercial";
whiteBox2.append(commercial);

const commercialParagraph = document.createElement("p");
commercialParagraph.id = "commercialParagraph";
commercialParagraph.innerText =
  "Our goal is serving happy customers with the finest craftsmanship. Whether it may be small commercial buildings or mid-rise residential buildings, we promise you will be satisfied.";
whiteBox2.append(commercialParagraph);

const thirdImg = document.createElement("div");
thirdImg.id = "thirdImg";
container.append(thirdImg);

const whiteBox3 = document.createElement("div");
whiteBox3.id = "whiteBox3";
thirdImg.append(whiteBox3);

const customHome = document.createElement("h1");
customHome.id = "customHome";
customHome.innerText = "Custom Home";
whiteBox3.append(customHome);

const customHomeParagraph = document.createElement("p");
customHomeParagraph.id = "customHomeParagraph";
customHomeParagraph.innerText =
  "When it comes to building your dream home, we guarantee you will receive nothing but excellence. We understand the importance of detail and beauty, so you can expect your wants and needs to be fulfilled. You are our top priority. With your ambition and our expertise(or skill), let's build your dream home!";
whiteBox3.append(customHomeParagraph);
