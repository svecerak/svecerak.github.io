const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');
  
  //Toggle Nav
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  });
  //Animate Links
  
  navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 }s`;

  });
}

navSlide();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
document.body.scrollTop = 0; 
document.documentElement.scrollTop = 0;
}

var myNav = document.getElementById('.newnav');
window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 200 ) {
      myNav.classList.add(".color");
      myNav.classList.remove(".tranny");
  } 
  else {
      myNav.classList.add(".tranny");
      myNav.classList.remove(".color");
  }
};