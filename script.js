var menu_logo = document.getElementById("menu-logo");
var navbar = document.querySelector(".nav-bar");
var navhome = document.getElementById('nav-home');
menu_logo.onclick = () => {
  if (navbar.style.display == "flex") {
    navbar.style.display = "none";
    menu_logo.style.filter = "grayscale(1) invert(1)";
  } else {
    navbar.style.display = "flex";
    menu_logo.style.filter = "grayscale(0) invert(0)";
  }
};