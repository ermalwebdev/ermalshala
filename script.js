"use strict";
// elements selector
const headerLinks = document.querySelectorAll(".links-nav a");
const linksOrder = document.querySelectorAll(".links-nav span");
const socialScroll = document.querySelector(".social-accounts");
const socialContainer = document.querySelectorAll(".accounts a, .line");
const menuClose = document.querySelector(".menu-close");
const menuOpen = document.querySelector(".menu-open");
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".links-nav");
const myMenu = document.querySelector(".header-nav");
const spanOrders = document.querySelector(".nav-order");
const iconsShare = document.querySelectorAll(".accounts  a");
const footerIcons = document.querySelectorAll(".social-media-footer a");
const cardsEach = document.querySelector(".card-container");
const mobileLinks = document.querySelectorAll(".link-nav");
// footer icons hover
for (let i = 0; i < footerIcons.length; i++) {
  footerIcons[i].addEventListener("mouseover", function () {
    footerIcons[i].style.color = "#64ffda";
    footerIcons[i].style.bottom = "2px";
  });
}
for (let i = 0; i < footerIcons.length; i++) {
  footerIcons[i].addEventListener("mouseout", function () {
    footerIcons[i].style.color = "";
    footerIcons[i].style.bottom = "";
  });
}
// Hide navbar links
for (let i = 0; i < headerLinks.length; i++) {
  headerLinks[i].addEventListener("mouseover", function () {
    headerLinks[i].style.color = "#64ffda";
    linksOrder[i].style.color = "#e0e6f8";
  });
}
for (let i = 0; i < headerLinks.length; i++) {
  headerLinks[i].addEventListener("mouseout", function () {
    headerLinks[i].style.color = "";
    linksOrder[i].style.color = "";
  });
}
// social icons on hove color
for (let i = 0; i < iconsShare.length; i++) {
  iconsShare[i].addEventListener("mouseover", function () {
    iconsShare[i].style.color = "#64ffda";
    iconsShare[i].style.bottom = "2px";
  });
}
for (let i = 0; i < iconsShare.length; i++) {
  iconsShare[i].addEventListener("mouseout", function () {
    iconsShare[i].style.color = "";
    iconsShare[i].style.bottom = "";
  });
}
// Hide NavBar on scroll
let hideScroll = window.pageYOffset;
let socialHidden = 0;
let socialSCroll = window.pageYOffset;

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (hideScroll > window.pageYOffset || window.pageYOffset <= 100) {
    document.querySelector("header").style.top = "0";
    document.querySelector("header").style.boxShadow =
      "0 4px 4px rgba(0, 0, 0, 0.2)";
    if (window.pageYOffset === 0) {
      document.querySelector("header").style.boxShadow = "";
    }
  } else {
    document.querySelector("header").style.top = "-5em";
  }
  hideScroll = currentScroll;
  let socialCurrent = window.pageYOffset;
  if (window.pageYOffset === 0) {
    for (let i = 0; i < socialContainer.length; i++) {
      setTimeout(function () {
        socialContainer[i].style.visibility = "hidden";
      }, i * 100);
    }
  } else {
    for (let i = 0; i < socialContainer.length; i++) {
      setTimeout(function () {
        socialContainer[i].style.visibility = "visible";
      }, i * 100);
    }
  }
  socialSCroll = socialCurrent;
};
// social scroll hide
// Hamburger Menu mobile
function toggleMenu() {
  if (myMenu.classList.contains("showMenu")) {
    myMenu.classList.remove("showMenu");
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
  } else {
    myMenu.classList.add("showMenu");
    menuClose.classList.add("showMenu");
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
  }
}
function hideMenuOnClick() {
  if (myMenu.classList.contains("showMenu")) {
    myMenu.classList.remove("showMenu");
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
  }
}
document.querySelector(".row-main").addEventListener("click", hideMenuOnClick);
hamburger.addEventListener("click", toggleMenu);
//  skills appears on click
document.querySelector(".button-skills").addEventListener("click", function(){
 document.querySelector(".my-skills").style.display = "block";
})
// scroll reveal
let slideUp = {
  distance: "2em",
  delay: 350,
  origin: "bottom",
  opacity: 0,
};
ScrollReveal().reveal(".slide-up", slideUp);

for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", function () {
    if (myMenu.classList.contains("showMenu")) {
      myMenu.classList.remove("showMenu");
      menuClose.style.display = "none";
      menuOpen.style.display = "block";
    }
  });
}

window.addEventListener("scroll", function(){
 if(window.pageYOffset <= 200){
  myMenu.classList.remove("showMenu");
      menuClose.style.display = "none";
      menuOpen.style.display = "block";
 }
}
