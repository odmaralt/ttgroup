const right = document.getElementById("rightSide");
const right2 = document.getElementById("rightSide2");
const recognize = document.getElementById("recognize");
const establish = document.getElementById("establish");
const right3 = document.getElementById("rightSide3");
const strive = document.getElementById("strive");
const right4 = document.getElementById("rightSide4");
const fulfill = document.getElementById("fulfill");
recognize.addEventListener("click", function () {
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
