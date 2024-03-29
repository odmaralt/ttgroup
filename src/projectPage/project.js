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
navProjects.href = "project.html";
navProjects.innerText = "Projects";
navProjects.classList.add("active");
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
navContact.href = "../contactPage/contact.html";
navContact.id = "contactNav";
navContact.innerText = "Contact";
navItems.append(navContact);
navLogo = document.createElement("div");
navLogo.id = "navLogo";
navBar.append(navLogo);
const logo = document.getElementById("logo");
navLogo.append(logo);

const div1 = document.createElement("div");
container.append(div1);
const contactInfo = document.createElement("p");
contactInfo.id = "contactInfo";
contactInfo.innerText = "House Renovations";
div1.append(contactInfo);

const slideshow8 = document.createElement("div");
slideshow8.classList.add("slideshow-container");
container.append(slideshow8);
const slidesTwoFade22 = document.createElement("div");
slidesTwoFade22.classList.add("mySlides8");
slidesTwoFade22.classList.add("fade");
slideshow8.append(slidesTwoFade22);
const afterPic22 = document.createElement("img");
const number1outOf7 = document.createElement("div");
number1outOf7.classList.add("numbertext");
number1outOf7.innerText = "1 / 7";
slidesTwoFade22.append(number1outOf7);
// const beforeText17 = document.createElement("div");
// beforeText17.classList.add("text");
// beforeText17.innerText = "Interior of the House Above";
// slidesTwoFade22.append(beforeText17);
afterPic22.src = "assets/1outof7.jpg";
afterPic22.classList.add("images");
slidesTwoFade22.append(afterPic22);

const slidesTwoFade23 = document.createElement("div");
slidesTwoFade23.classList.add("mySlides8");
slidesTwoFade23.classList.add("fade");
slideshow8.append(slidesTwoFade23);
const afterPic23 = document.createElement("img");
const number2outOf7 = document.createElement("div");
number2outOf7.classList.add("numbertext");
number2outOf7.innerText = "2 / 7";
slidesTwoFade23.append(number2outOf7);
// const beforeText27 = document.createElement("div");
// beforeText27.classList.add("text");
// beforeText27.innerText = "Interior of the House Above";
// slidesTwoFade23.append(beforeText27);
afterPic23.src = "assets/2outof7.jpg";
afterPic23.classList.add("images");
slidesTwoFade23.append(afterPic23);

const slidesTwoFade24 = document.createElement("div");
slidesTwoFade24.classList.add("mySlides8");
slidesTwoFade24.classList.add("fade");
slideshow8.append(slidesTwoFade24);
const afterPic24 = document.createElement("img");
const number3outOf7 = document.createElement("div");
number3outOf7.classList.add("numbertext");
number3outOf7.innerText = "3 / 7";
slidesTwoFade24.append(number3outOf7);
// const beforeText37 = document.createElement("div");
// beforeText37.classList.add("text");
// beforeText37.innerText = "Interior of the House Above";
// slidesTwoFade24.append(beforeText37);
afterPic24.src = "assets/3outof7.jpg";
afterPic24.classList.add("images");
slidesTwoFade24.append(afterPic24);

const slidesTwoFade25 = document.createElement("div");
slidesTwoFade25.classList.add("mySlides8");
slidesTwoFade25.classList.add("fade");
slideshow8.append(slidesTwoFade25);
const afterPic25 = document.createElement("img");
const number4outOf7 = document.createElement("div");
number4outOf7.classList.add("numbertext");
number4outOf7.innerText = "4 / 7";
slidesTwoFade25.append(number4outOf7);
// const beforeText47 = document.createElement("div");
// beforeText47.classList.add("text");
// beforeText47.innerText = "Interior of the House Above";
// slidesTwoFade25.append(beforeText47);
afterPic25.src = "assets/4outof7.jpg";
afterPic25.classList.add("images");
slidesTwoFade25.append(afterPic25);

const slidesTwoFade26 = document.createElement("div");
slidesTwoFade26.classList.add("mySlides8");
slidesTwoFade26.classList.add("fade");
slideshow8.append(slidesTwoFade26);
const afterPic26 = document.createElement("img");
const number5outOf7 = document.createElement("div");
number5outOf7.classList.add("numbertext");
number5outOf7.innerText = "5 / 7";
slidesTwoFade26.append(number5outOf7);
// const beforeText57 = document.createElement("div");
// beforeText57.classList.add("text");
// beforeText57.innerText = "Interior of the House Above";
// slidesTwoFade26.append(beforeText57);
afterPic26.src = "assets/5outof7.jpg";
afterPic26.classList.add("images");
slidesTwoFade26.append(afterPic26);

const slidesTwoFade27 = document.createElement("div");
slidesTwoFade27.classList.add("mySlides8");
slidesTwoFade27.classList.add("fade");
slideshow8.append(slidesTwoFade27);
const afterPic27 = document.createElement("img");
const number6outOf7 = document.createElement("div");
number6outOf7.classList.add("numbertext");
number6outOf7.innerText = "6 / 7";
slidesTwoFade27.append(number6outOf7);
// const beforeText67 = document.createElement("div");
// beforeText67.classList.add("text");
// beforeText67.innerText = "Interior of the House Above";
// slidesTwoFade27.append(beforeText67);
afterPic27.src = "assets/6outof7.jpg";
afterPic27.classList.add("images");
slidesTwoFade27.append(afterPic27);

const slidesTwoFade28 = document.createElement("div");
slidesTwoFade28.classList.add("mySlides8");
slidesTwoFade28.classList.add("fade");
slideshow8.append(slidesTwoFade28);
const afterPic28 = document.createElement("img");
const number7outOf7 = document.createElement("div");
number7outOf7.classList.add("numbertext");
number7outOf7.innerText = "7 / 7";
slidesTwoFade28.append(number7outOf7);
// const beforeText77 = document.createElement("div");
// beforeText77.classList.add("text");
// beforeText77.innerText = "Interior of the House Above";
// slidesTwoFade28.append(beforeText77);
afterPic28.src = "assets/7outof7.jpg";
afterPic28.classList.add("images");
slidesTwoFade28.append(afterPic28);

const prev8 = document.createElement("a");
const next8 = document.createElement("a");
prev8.classList.add("prev");
prev8.onclick = "plusSlides(-1)";
next8.onclick = "plusSlides(1)";
prev8.innerHTML = "&#10094;";
next8.innerHTML = "&#10095;";
next8.classList.add("next");
slideshow8.append(prev8);
slideshow8.append(next8);

const slideshow7 = document.createElement("div");
slideshow7.classList.add("slideshow-container");
container.append(slideshow7);
const slidesSevenFade = document.createElement("div");
slidesSevenFade.classList.add("mySlides7");
slidesSevenFade.classList.add("fade");
slideshow7.append(slidesSevenFade);

const number1outOf10 = document.createElement("div");
number1outOf10.classList.add("numbertext");
number1outOf10.innerText = "1 / 10";
slidesSevenFade.append(number1outOf10);

const beforePic7 = document.createElement("img");
beforePic7.src = "assets/house1.jpg";
beforePic7.classList.add("images2");
slidesSevenFade.append(beforePic7);
const slidesSevenFade2 = document.createElement("div");
slidesSevenFade2.classList.add("mySlides7");
slidesSevenFade2.classList.add("fade");
slideshow7.append(slidesSevenFade2);
const number2outOf10 = document.createElement("div");
number2outOf10.classList.add("numbertext");
number2outOf10.innerText = "2 / 10";
slidesSevenFade2.append(number2outOf10);

const afterPic7 = document.createElement("img");
afterPic7.src = "assets/house2.jpg";
afterPic7.classList.add("images2");
slidesSevenFade2.append(afterPic7);

const slidesSevenFade71 = document.createElement("div");
slidesSevenFade71.classList.add("mySlides7");
slidesSevenFade71.classList.add("fade");
slideshow7.append(slidesSevenFade71);
const number3outOf10 = document.createElement("div");
number3outOf10.classList.add("numbertext");
number3outOf10.innerText = "3 / 10";
slidesSevenFade71.append(number3outOf10);
const afterPic71 = document.createElement("img");
afterPic71.src = "assets/house3.jpg";
afterPic71.classList.add("images2");
slidesSevenFade71.append(afterPic71);

const slidesSevenFade72 = document.createElement("div");
slidesSevenFade72.classList.add("mySlides7");
slidesSevenFade72.classList.add("fade");
slideshow7.append(slidesSevenFade72);
const number4outOf10 = document.createElement("div");
number4outOf10.classList.add("numbertext");
number4outOf10.innerText = "4 / 10";
slidesSevenFade72.append(number4outOf10);
const afterPic72 = document.createElement("img");
afterPic72.src = "assets/house4.jpg";
afterPic72.classList.add("images2");
slidesSevenFade72.append(afterPic72);

const slidesSevenFade73 = document.createElement("div");
slidesSevenFade73.classList.add("mySlides7");
slidesSevenFade73.classList.add("fade");
slideshow7.append(slidesSevenFade73);
const number5outOf10 = document.createElement("div");
number5outOf10.classList.add("numbertext");
number5outOf10.innerText = "5 / 10";
slidesSevenFade73.append(number5outOf10);
const afterPic73 = document.createElement("img");
afterPic73.src = "assets/house45.jpg";
afterPic73.classList.add("images2");
slidesSevenFade73.append(afterPic73);

const slidesSevenFade74 = document.createElement("div");
slidesSevenFade74.classList.add("mySlides7");
slidesSevenFade74.classList.add("fade");
slideshow7.append(slidesSevenFade74);
const number6outOf10 = document.createElement("div");
number6outOf10.classList.add("numbertext");
number6outOf10.innerText = "6 / 10";
slidesSevenFade74.append(number6outOf10);
const afterPic74 = document.createElement("img");
afterPic74.src = "assets/house5.jpg";
afterPic74.classList.add("images2");
slidesSevenFade74.append(afterPic74);

const slidesSevenFade75 = document.createElement("div");
slidesSevenFade75.classList.add("mySlides7");
slidesSevenFade75.classList.add("fade");
slideshow7.append(slidesSevenFade75);
const number7outOf10 = document.createElement("div");
number7outOf10.classList.add("numbertext");
number7outOf10.innerText = "7 / 10";
slidesSevenFade75.append(number7outOf10);
const afterPic75 = document.createElement("img");
afterPic75.src = "assets/house55.jpg";
afterPic75.classList.add("images2");
slidesSevenFade75.append(afterPic75);

const slidesSevenFade76 = document.createElement("div");
slidesSevenFade76.classList.add("mySlides7");
slidesSevenFade76.classList.add("fade");
slideshow7.append(slidesSevenFade76);
const number8outOf10 = document.createElement("div");
number8outOf10.classList.add("numbertext");
number8outOf10.innerText = "8 / 10";
slidesSevenFade76.append(number8outOf10);
const afterPic76 = document.createElement("img");
afterPic76.src = "assets/house6.jpg";
afterPic76.classList.add("images2");
slidesSevenFade76.append(afterPic76);

const slidesSevenFade77 = document.createElement("div");
slidesSevenFade77.classList.add("mySlides7");
slidesSevenFade77.classList.add("fade");
slideshow7.append(slidesSevenFade77);
const number9outOf10 = document.createElement("div");
number9outOf10.classList.add("numbertext");
number9outOf10.innerText = "9 / 10";
slidesSevenFade77.append(number9outOf10);
const afterPic77 = document.createElement("img");
afterPic77.src = "assets/house7.jpg";
afterPic77.classList.add("images2");
slidesSevenFade77.append(afterPic77);

const slidesSevenFade78 = document.createElement("div");
slidesSevenFade78.classList.add("mySlides7");
slidesSevenFade78.classList.add("fade");
slideshow7.append(slidesSevenFade78);
const number10outOf10 = document.createElement("div");
number10outOf10.classList.add("numbertext");
number10outOf10.innerText = "10 / 10";
slidesSevenFade78.append(number10outOf10);
const afterPic78 = document.createElement("img");
afterPic78.src = "assets/house8.jpg";
afterPic78.classList.add("images2");
slidesSevenFade78.append(afterPic78);

const prev7 = document.createElement("a");
const next7 = document.createElement("a");
prev7.classList.add("prev");
prev7.onclick = "plusSlides(-1)";
next7.onclick = "plusSlides(1)";
prev7.innerHTML = "&#10094;";
next7.innerHTML = "&#10095;";
next7.classList.add("next");
slideshow7.append(prev7);
slideshow7.append(next7);
const slideshow2 = document.createElement("div");
slideshow2.classList.add("slideshow-container");
container.append(slideshow2);

const slidesTwoFade = document.createElement("div");
slidesTwoFade.classList.add("mySlides2");
slidesTwoFade.classList.add("fade");
slideshow2.append(slidesTwoFade);
const number1outOf4 = document.createElement("div");
number1outOf4.classList.add("numbertext");
number1outOf4.innerText = "1 / 4";
slidesTwoFade.append(number1outOf4);
const beforePic2 = document.createElement("img");
beforePic2.src = "assets/before1.jpg";
beforePic2.classList.add("images");
slidesTwoFade.append(beforePic2);
const beforeText2 = document.createElement("div");
beforeText2.classList.add("text");
beforeText2.innerText = "Before";
slidesTwoFade.append(beforeText2);

const slidesTwoFade2 = document.createElement("div");
slidesTwoFade2.classList.add("mySlides2");
slidesTwoFade2.classList.add("fade");
slideshow2.append(slidesTwoFade2);

const number2outOf4 = document.createElement("div");
number2outOf4.classList.add("numbertext");
number2outOf4.innerText = "2 / 4";
slidesTwoFade2.append(number2outOf4);
const afterPic2 = document.createElement("img");
afterPic2.src = "assets/after1.jpg";
afterPic2.classList.add("images");
slidesTwoFade2.append(afterPic2);

const afterText2 = document.createElement("div");
afterText2.classList.add("text");
afterText2.innerText = "After";
slidesTwoFade2.append(afterText2);

const slidesTwoFade1 = document.createElement("div");
slidesTwoFade1.classList.add("mySlides2");
slidesTwoFade1.classList.add("fade");
slideshow2.append(slidesTwoFade1);

const number3outOf4 = document.createElement("div");
number3outOf4.classList.add("numbertext");
number3outOf4.innerText = "3 / 4";
slidesTwoFade1.append(number3outOf4);

const beforePic21 = document.createElement("img");
beforePic21.src = "assets/before2.jpg";
beforePic21.classList.add("images");
slidesTwoFade1.append(beforePic21);
const beforeText21 = document.createElement("div");
beforeText21.classList.add("text");
beforeText21.innerText = "Before";
slidesTwoFade1.append(beforeText21);

const slidesTwoFade21 = document.createElement("div");
slidesTwoFade21.classList.add("mySlides2");
slidesTwoFade21.classList.add("fade");
slideshow2.append(slidesTwoFade21);
const number4outOf4 = document.createElement("div");
number4outOf4.classList.add("numbertext");
number4outOf4.innerText = "4 / 4";
slidesTwoFade21.append(number4outOf4);
const afterPic21 = document.createElement("img");
afterPic21.src = "assets/after2.jpg";
afterPic21.classList.add("images");
slidesTwoFade21.append(afterPic21);
const afterText21 = document.createElement("div");
afterText21.classList.add("text");
afterText21.innerText = "After";
slidesTwoFade21.append(afterText21);

const prev2 = document.createElement("a");
const next2 = document.createElement("a");
prev2.classList.add("prev");
prev2.onclick = "plusSlides(-1)";
next2.onclick = "plusSlides(1)";
prev2.innerHTML = "&#10094;";
next2.innerHTML = "&#10095;";
next2.classList.add("next");
slideshow2.append(prev2);
slideshow2.append(next2);

const slideshow1 = document.createElement("div");
slideshow1.classList.add("slideshow-container");
container.append(slideshow1);

const slidesThreeFade = document.createElement("div");
slidesThreeFade.classList.add("mySlides3");
slidesThreeFade.classList.add("fade");

slideshow1.append(slidesThreeFade);

const beforePic1 = document.createElement("img");
const number1outOf2 = document.createElement("div");
number1outOf2.classList.add("numbertext");
number1outOf2.innerText = "1 / 2";
slidesThreeFade.append(number1outOf2);
beforePic1.src =
  "https://photos.zillowstatic.com/fp/789729a47703e3b65a9c0672b7311f8d-uncropped_scaled_within_1536_1152.webp";
beforePic1.classList.add("images");
slidesThreeFade.append(beforePic1);
const beforeText1 = document.createElement("div");
beforeText1.classList.add("text");
beforeText1.innerText = "Before";
slidesThreeFade.append(beforeText1);

const slidesThreeFade2 = document.createElement("div");
slidesThreeFade2.classList.add("mySlides3");
slidesThreeFade2.classList.add("fade");
slideshow1.append(slidesThreeFade2);
const number2outOf2 = document.createElement("div");
number2outOf2.classList.add("numbertext");
number2outOf2.innerText = "2 / 2";
slidesThreeFade2.append(number2outOf2);
const afterPic1 = document.createElement("img");
afterPic1.src =
  "https://photos.zillowstatic.com/fp/8a44dd1a27064b1ea976521423e0652a-uncropped_scaled_within_1536_1152.webp";
afterPic1.classList.add("images");
slidesThreeFade2.append(afterPic1);

const afterText1 = document.createElement("div");
afterText1.classList.add("text");
afterText1.innerText = "After";
slidesThreeFade2.append(afterText1);

const prev1 = document.createElement("a");
const next1 = document.createElement("a");
prev1.classList.add("prev");
prev1.onclick = "plusSlides(-1)";
next1.onclick = "plusSlides(1)";
prev1.innerHTML = "&#10094;";
next1.innerHTML = "&#10095;";
next1.classList.add("next");
slideshow1.append(prev1);
slideshow1.append(next1);

const slideshow3 = document.createElement("div");
slideshow3.classList.add("slideshow-container");
container.append(slideshow3);

const slidesFade = document.createElement("div");
slidesFade.classList.add("mySlides");
slidesFade.classList.add("fade");

slideshow3.append(slidesFade);
// const num1outOf2 = document.createElement("div");
// num1outOf2.classList.add("numbertext");
// num1outOf2.innerText = "1 / 2";
// slidesFade.append(num1outOf2);
// const beforePic3 = document.createElement("img");
// beforePic3.src = "assets/commercial1.jpg";
// beforePic3.classList.add("images");
// slidesFade.append(beforePic3);
// const beforeText3 = document.createElement("div");
// beforeText3.classList.add("text");
// beforeText3.innerText = "Before";
// slidesFade.append(beforeText3);

// const slidesFade2 = document.createElement("div");
// slidesFade2.classList.add("mySlides");
// slidesFade2.classList.add("fade");

// slideshow3.append(slidesFade2);

// const afterPic3 = document.createElement("img");
// afterPic3.src = "assets/commercial2.jpg";
// afterPic3.classList.add("images");
// const num2outOf2 = document.createElement("div");
// num2outOf2.classList.add("numbertext");
// num2outOf2.innerText = "2 / 2";
// slidesFade2.append(num2outOf2);
// slidesFade2.append(afterPic3);

// const afterText3 = document.createElement("div");
// afterText3.classList.add("text");
// afterText3.innerText = "After";
// slidesFade2.append(afterText3);

// const prev3 = document.createElement("a");
// const next3 = document.createElement("a");
// prev3.classList.add("prev");
// prev3.onclick = "plusSlides(-1)";
// next3.onclick = "plusSlides(1)";
// prev3.innerHTML = "&#10094;";
// next3.innerHTML = "&#10095;";
// next3.classList.add("next");
// slideshow3.append(prev3);
// slideshow3.append(next3);

// const br3 = document.createElement("br");
// container.append(br3);

const paintJobs = document.createElement("h1");
paintJobs.id = "contactInfo";
paintJobs.innerText = "Paint Jobs";
container.append(paintJobs);

const slideshow4 = document.createElement("div");
slideshow4.classList.add("slideshow-container");
container.append(slideshow4);

const slidesFourFade = document.createElement("div");
slidesFourFade.classList.add("mySlides4");
slidesFourFade.classList.add("fade");

slideshow4.append(slidesFourFade);

const beforePic4 = document.createElement("img");
const oneOutOfTwo = document.createElement("div");
oneOutOfTwo.classList.add("numbertext");
oneOutOfTwo.innerText = "1 / 2";
slidesFourFade.append(oneOutOfTwo);
beforePic4.src = "assets/paint1.jpg";
beforePic4.classList.add("images2");
slidesFourFade.append(beforePic4);
const beforeText4 = document.createElement("div");
beforeText4.classList.add("text");
beforeText4.innerText = "Before";
slidesFourFade.append(beforeText4);

const slidesFourFade2 = document.createElement("div");
slidesFourFade2.classList.add("mySlides4");
slidesFourFade2.classList.add("fade");

slideshow4.append(slidesFourFade2);

const afterPic4 = document.createElement("img");
const twoOutOfTwo = document.createElement("div");
twoOutOfTwo.classList.add("numbertext");
twoOutOfTwo.innerText = "2 / 2";
slidesFourFade2.append(twoOutOfTwo);
afterPic4.src = "assets/paint2.jpg";
afterPic4.classList.add("images2");
slidesFourFade2.append(afterPic4);

const afterText4 = document.createElement("div");
afterText4.classList.add("text");
afterText4.innerText = "After";
slidesFourFade2.append(afterText4);

const prev4 = document.createElement("a");
const next4 = document.createElement("a");
prev4.classList.add("prev");
prev4.onclick = "plusSlides(-1)";
next4.onclick = "plusSlides(1)";
prev4.innerHTML = "&#10094;";
next4.innerHTML = "&#10095;";
next4.classList.add("next");
slideshow4.append(prev4);
slideshow4.append(next4);

// const br4 = document.createElement("br");
// container.append(br4);

const slideshow5 = document.createElement("div");
slideshow5.classList.add("slideshow-container");
container.append(slideshow5);

const slidesFiveFade = document.createElement("div");
slidesFiveFade.classList.add("mySlides5");
slidesFiveFade.classList.add("fade");
slideshow5.append(slidesFiveFade);

const beforePic5 = document.createElement("img");
const oneOutOf2 = document.createElement("div");
oneOutOf2.classList.add("numbertext");
oneOutOf2.innerText = "1 / 2";
slidesFiveFade.append(oneOutOf2);
beforePic5.src = "assets/paint3.jpg";
beforePic5.classList.add("images2");
slidesFiveFade.append(beforePic5);
const beforeText5 = document.createElement("div");
beforeText5.classList.add("text");
beforeText5.innerText = "Before";
slidesFiveFade.append(beforeText5);

const slidesFiveFade2 = document.createElement("div");
slidesFiveFade2.classList.add("mySlides5");
slidesFiveFade2.classList.add("fade");

slideshow5.append(slidesFiveFade2);

const afterPic5 = document.createElement("img");
const twoOutOf2 = document.createElement("div");
twoOutOf2.classList.add("numbertext");
twoOutOf2.innerText = "2 / 2";
slidesFiveFade2.append(twoOutOf2);
afterPic5.src = "assets/paint4.jpg";
afterPic5.classList.add("images2");
slidesFiveFade2.append(afterPic5);

const afterText5 = document.createElement("div");
afterText5.classList.add("text");
afterText5.innerText = "After";
slidesFiveFade2.append(afterText5);

const prev5 = document.createElement("a");
const next5 = document.createElement("a");
prev5.classList.add("prev");
prev5.onclick = "plusSlides(-1)";
next5.onclick = "plusSlides(1)";
prev5.innerHTML = "&#10094;";
next5.innerHTML = "&#10095;";
next5.classList.add("next");
slideshow5.append(prev5);
slideshow5.append(next5);

const slideshow6 = document.createElement("div");
slideshow6.classList.add("slideshow-container");
container.append(slideshow6);

const slidesSixFade = document.createElement("div");
slidesSixFade.classList.add("mySlides6");
slidesSixFade.classList.add("fade");
slideshow6.append(slidesSixFade);

const beforePic6 = document.createElement("img");
const one2 = document.createElement("div");
one2.classList.add("numbertext");
one2.innerText = "1 / 2";
slidesSixFade.append(one2);
beforePic6.src = "assets/paint5.jpg";
beforePic6.classList.add("images2");
slidesSixFade.append(beforePic6);
const beforeText6 = document.createElement("div");
beforeText6.classList.add("text");
beforeText6.innerText = "Before";
slidesSixFade.append(beforeText6);

const slidesSixFade2 = document.createElement("div");
slidesSixFade2.classList.add("mySlides6");
slidesSixFade2.classList.add("fade");

slideshow6.append(slidesSixFade2);

const afterPic6 = document.createElement("img");
const two2 = document.createElement("div");
two2.classList.add("numbertext");
two2.innerText = "2 / 2";
slidesSixFade2.append(two2);
afterPic6.src = "assets/paint6.jpg";
afterPic6.classList.add("images2");
slidesSixFade2.append(afterPic6);

const afterText6 = document.createElement("div");
afterText6.classList.add("text");
afterText6.innerText = "After";
slidesSixFade2.append(afterText6);

const prev6 = document.createElement("a");
const next6 = document.createElement("a");
prev6.classList.add("prev");
prev6.onclick = "plusSlides(-1)";
next6.onclick = "plusSlides(1)";
prev6.innerHTML = "&#10094;";
next6.innerHTML = "&#10095;";
next6.classList.add("next");
slideshow6.append(prev6);
slideshow6.append(next6);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();
function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}
let slideIndex3 = 0;
showSlides3();

function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {
    slideIndex3 = 1;
  }
  slides[slideIndex3 - 1].style.display = "block";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}
let slideIndex4 = 0;
showSlides4();

function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("mySlides5");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {
    slideIndex4 = 1;
  }
  slides[slideIndex4 - 1].style.display = "block";
  setTimeout(showSlides4, 2000); // Change image every 2 seconds
}
let slideIndex5 = 0;
showSlides5();
function showSlides5() {
  let i;
  let slides = document.getElementsByClassName("mySlides6");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > slides.length) {
    slideIndex5 = 1;
  }
  slides[slideIndex5 - 1].style.display = "block";
  setTimeout(showSlides5, 2000); // Change image every 2 seconds
}

let slideIndex6 = 0;
showSlides6();
function showSlides6() {
  let i;
  let slides = document.getElementsByClassName("mySlides7");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex6++;
  if (slideIndex6 > slides.length) {
    slideIndex6 = 1;
  }
  slides[slideIndex6 - 1].style.display = "block";
  setTimeout(showSlides6, 2000); // Change image every 2 seconds
}

let slideIndex7 = 0;
showSlides7();
function showSlides7() {
  let i;
  let slides = document.getElementsByClassName("mySlides8");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex7++;
  if (slideIndex7 > slides.length) {
    slideIndex7 = 1;
  }
  slides[slideIndex7 - 1].style.display = "block";
  setTimeout(showSlides7, 2000); // Change image every 2 seconds
}
