// const progress = document.querySelector('.video-progress');
  
// progress.addEventListener('input', function() {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, white 100%)`
// })const navMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links Li");

// Toggle nav
    hamburger.onclick = function () {
        links.classList.toggle('link-active');
//Animate links
        navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `hamburgerFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        });
        //Hamburger animationn
    hamburger.classList.toggle('toggle');
    };

navMenu();