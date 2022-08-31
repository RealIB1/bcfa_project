// Drop down list

document.addEventListener('click', e => {
    const dropDownButton = e.target.matches("[data-dropdown-button]")
    if (!dropDownButton && e.target.closest("[data-dropdown]") != null) return;

    let currentDropdown;
    if (dropDownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
    
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// Navigation hamburger menu toggle


const barMenu = document.querySelector(".bars-menu");
const navMenu = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const main = document.getElementsByClassName('main')


barMenu.addEventListener("click", openNav = () => {
  barMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});


navLink.forEach((n) => n.addEventListener("click", closeNav = () => {
  barMenu.classList.remove("active");
  navMenu.classList.remove("active");
}
));

// function openNav() {
//   barMenu.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }


// function closeNav() {
//   barMenu.classList.remove("active");
//   navMenu.classList.remove("active");
// }

window.addEventListener("click", (e) => {
  if (e.target === main) {
    barMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
})