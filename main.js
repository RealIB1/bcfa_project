// Drop down list


// Navigation hamburger menu toggle


const barMenu = document.querySelector(".bars-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const main = document.querySelector(".main");
const toTop = document.getElementById("back-to-top");

barMenu.addEventListener("click", openNav);
navLink.forEach((n) => n.addEventListener("click", closeNav));

function openNav() {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}


function closeNav() {
  barMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

window.addEventListener("click", function(e) {
  if (e.target === main || e.target === toTop) {
    barMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
})




