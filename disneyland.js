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


// const slider2 = document.querySelector("section:nth-of-type(13) ul:first-of-type");
// let isDown2 = false;
// let startX2;
// let scrollLeft2;

// slider2.addEventListener("mousedown2", e => {
//   isDown2 = true;
//   slider2.classList.add("active2");
//   startX2 = e.pageX - slider2.offsetLeft;
//   scrollLeft2 = slider2.scrollLeft2;
// });
// slider2.addEventListener("mouseleave2", () => {
//   isDown2 = false;
//   slider2.classList.remove("active2");
// });
// slider2.addEventListener("mouseup2", () => {
//   isDown2 = false;
//   slider2.classList.remove("active2");
// });
// slider2.addEventListener("mousemove2", e => {
//   if (!isDown2) return;
//   e.preventDefault();
//   const x2 = e.pageX - slider2.offsetLeft;
//   const walk2 = x2 - startX;
//   slider2.scrollLeft2 = scrollLeft2 - walk2;
// });