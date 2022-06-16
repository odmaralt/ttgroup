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
remodelingParagraph.innerText =
  "Renovating is not an easy task. Tumenjargal has extensive experience with replacing flooring, removing walls, adding rooms, rebuilding and working around existing structures. Tumenjargal brings a level of expertise for problem solving on the spot and overcoming the challenges of the unexpected.";
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
  "With over 8 years as a Construction Project Manager, Tumenjargal has the experience you need to complete your project with the finest craftsmanship. Additionally, Tumenjargal has outstanding leadership that allows the project timeline to run smooth and efficiently. His experience spans across a wide spectrum of buildings from small commercial buildings to mid-rise residential buildings.";
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
  "When it comes to building your dream home you can expect excellence from T&T Group Construction. We understand the importance of detail and beauty so you can expect your wants and needs to be fulfilled. You are our first priority. With tons of experience in construction, you can trust that Tumenjargal will make your dream become reality. With your ambition and our expertise, let's build your dream home!";
whiteBox3.append(customHomeParagraph);
