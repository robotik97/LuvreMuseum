// Hamburger Menu
const navMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links Li");

  // Toggle nav
  hamburger.onclick = function () {
    links.classList.toggle("link-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `hamburgerFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Hamburger animation
    hamburger.classList.toggle("toggle");
  };
};
navMenu();

// Slider
let sliderCount = 0;
let sliderWidth = document.querySelector(".slider").offsetWidth;
let sliderLine = document.querySelector(".slider-line");
let sliderLineWidth = document.querySelector(".slider-line").offsetWidth;
document.querySelector(".cursor-left").addEventListener("click", function () {
  sliderCount += sliderWidth;
  if (sliderCount > sliderLineWidth - sliderWidth) {
    sliderCount = 0;
  }
  sliderLine.style.left = `${-sliderCount}px`;
});
document.querySelector(".cursor-right").addEventListener("click", function () {
  sliderCount -= sliderWidth;
  if (sliderCount < 0) {
    sliderCount = sliderLineWidth - sliderWidth;
  }
  sliderLine.style.left = `${-sliderCount}px`;
});
