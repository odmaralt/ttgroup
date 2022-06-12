const container = document.getElementById("container");

const navBar = document.createElement("div");
navBar.classList.add("navBar");
container.append(navBar);

const navHome = document.createElement("a");
navHome.href = "../homepage/home.html";
navHome.innerText = "Home";

navBar.append(navHome);

const navProjects = document.createElement("a");
navProjects.href = "project.html";
navProjects.innerText = "Projects";
navProjects.classList.add("active");
navBar.append(navProjects);

const navGoals = document.createElement("a");
navGoals.href = "../goalsPage/goals.html";
navGoals.innerText = "Goals";
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

const div1 = document.createElement("div");
container.append(div1);
const contactInfo = document.createElement("p");
contactInfo.id = "contactInfo";
contactInfo.innerText = "House Remodeling";
div1.append(contactInfo);

const slideshow1 = document.createElement("div");
slideshow1.classList.add("slideshow-container");
container.append(slideshow1);

const slidesThreeFade = document.createElement("div");
slidesThreeFade.classList.add("mySlides3");
slidesThreeFade.classList.add("fade");

slideshow1.append(slidesThreeFade);

const beforePic1 = document.createElement("img");
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

// const br1 = document.createElement("br");
// container.append(br1);

const slideshow2 = document.createElement("div");
slideshow2.classList.add("slideshow-container");
container.append(slideshow2);

const slidesTwoFade = document.createElement("div");
slidesTwoFade.classList.add("mySlides2");
slidesTwoFade.classList.add("fade");
slideshow2.append(slidesTwoFade);

const beforePic2 = document.createElement("img");
beforePic2.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/56800823_537692923301143_8180135475772653568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=4cLVRqJdbWUAX-Gfya8&_nc_ht=scontent-sea1-1.xx&oh=00_AT97y57vhttLOjKvJWSyHtHwUNPKi0WyxQZ72yxJHFAZrQ&oe=62C25222";
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

const afterPic2 = document.createElement("img");
afterPic2.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/57098921_537692959967806_5898982970823278592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ZxOSOneo720AX98-HKZ&_nc_ht=scontent-sea1-1.xx&oh=00_AT_nCgTvA6tx3XUSMPnwL7SGmL9c9zmwntHcWZc_4uRGZg&oe=62C201CA";
afterPic2.classList.add("images");
slidesTwoFade2.append(afterPic2);

const afterText2 = document.createElement("div");
afterText2.classList.add("text");
afterText2.innerText = "After";
slidesTwoFade2.append(afterText2);

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

// const br2 = document.createElement("br");
// container.append(br2);

const slideshow3 = document.createElement("div");
slideshow3.classList.add("slideshow-container");
container.append(slideshow3);

const slidesFade = document.createElement("div");
slidesFade.classList.add("mySlides");
slidesFade.classList.add("fade");

slideshow3.append(slidesFade);

const beforePic3 = document.createElement("img");
beforePic3.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/61867517_566278127109289_2866248164447354880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GznTDLJSVRcAX8EkBNq&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AT9jC9FjLVTlpxN1tlgB5ovvA2hr1RXEr0viJpLWM3yadA&oe=62C3E918";
beforePic3.classList.add("images");
slidesFade.append(beforePic3);
const beforeText3 = document.createElement("div");
beforeText3.classList.add("text");
beforeText3.innerText = "Before";
slidesFade.append(beforeText3);

const slidesFade2 = document.createElement("div");
slidesFade2.classList.add("mySlides");
slidesFade2.classList.add("fade");

slideshow3.append(slidesFade2);

const afterPic3 = document.createElement("img");
afterPic3.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/62049815_566278150442620_8919737945179553792_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-l3N7DbyrdUAX9NXHhg&_nc_ht=scontent-sea1-1.xx&oh=00_AT9zbNvr-yTrcoxrpbVJfV7gi_6cZtNrE_UW8XPMl976og&oe=62C1D488";
afterPic3.classList.add("images");
slidesFade2.append(afterPic3);

const afterText3 = document.createElement("div");
afterText3.classList.add("text");
afterText3.innerText = "After";
slidesFade2.append(afterText3);

const prev3 = document.createElement("a");
const next3 = document.createElement("a");
prev3.classList.add("prev");
prev3.onclick = "plusSlides(-1)";
next3.onclick = "plusSlides(1)";
prev3.innerHTML = "&#10094;";
next3.innerHTML = "&#10095;";
next3.classList.add("next");
slideshow3.append(prev3);
slideshow3.append(next3);

// const br3 = document.createElement("br");
// container.append(br3);

const paintJobs = document.createElement("h1");
paintJobs.id = "contactInfo";
paintJobs.innerText = "House Paint Jobs";
container.append(paintJobs);

const slideshow4 = document.createElement("div");
slideshow4.classList.add("slideshow-container");
container.append(slideshow4);

const slidesFourFade = document.createElement("div");
slidesFourFade.classList.add("mySlides4");
slidesFourFade.classList.add("fade");

slideshow4.append(slidesFourFade);

const beforePic4 = document.createElement("img");
beforePic4.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60210113_552937081776727_7610769592830394368_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=v347qceHF_QAX8kf-nG&_nc_oc=AQn-OYb00veOU4mp7XUwBqPTXqjEPsVJoPzzpn8d-wm-3pInwg2maQA3gLpi3fv8mIg&_nc_ht=scontent-sea1-1.xx&oh=00_AT_nosfg_ai1KGB5vglQS-PHBmedMqCtcJTVFdd8iWuK2Q&oe=62C3B982";
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
afterPic4.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60384834_552937108443391_7664548866913468416_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=K4WZpuNIIycAX_GT8JS&tn=776H95RyHFaYhH4_&_nc_ht=scontent-sea1-1.xx&oh=00_AT897bW5XyibfyBOUJHDxcBGdQkaK60tYo1yD5VoxjRTWg&oe=62C4DF42";
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
beforePic5.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/71407474_634776703592764_7479352286586601472_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=l005Lf3UaGgAX_kwr9f&_nc_ht=scontent-sea1-1.xx&oh=00_AT8tgxznCMm-k_6jJjE_Mdx5OdIqO-EOHr8H2iLURJ1LxQ&oe=62C3FE2F";
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
afterPic5.src =
  "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/71496945_634776716926096_4259412693435285504_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PjbbstYRKEoAX86siNs&_nc_ht=scontent-sea1-1.xx&oh=00_AT9AdmnDlWTrlqKqjIzGPiJ8OA2KJx5GErvZCmtK00Ha7Q&oe=62C4BB4D";
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

// const br5 = document.createElement("br");
// container.append(br5);

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
