"use strict";
// elements selector
const headerLinks = document.querySelectorAll(".links-nav a");
const linksOrder = document.querySelectorAll(".links-nav span");
const socialScroll = document.querySelector(".social-accounts");
const iconsShare = document.querySelectorAll(".accounts  a");
const socialContainer = document.querySelectorAll(".accounts a, .line");
const menuClose = document.querySelector(".menu-close");
const menuOpen = document.querySelector(".menu-open");
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".links-nav");
const myMenu = document.querySelector(".header-nav");
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
hamburger.addEventListener("click", toggleMenu);
// Hamburger Menu mobile
