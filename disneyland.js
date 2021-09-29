var menuButton = document.querySelector("nav ul:first-of-type li:first-of-type");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    console.log("huh");
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
  }