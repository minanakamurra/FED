var menuButton = document.querySelector("nav button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    console.log("huh");
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonMenu");
}

const slider = document.querySelector("section:nth-of-type(8) ul:first-of-type");
let isDown = false;
let startX;
let scrollLeft;

var windowURL = window.location.href;

if (windowURL.includes("index")) {
slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
}
