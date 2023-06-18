// TOGGLE MENU //
const navLinks = document.querySelector("#navLinks");
const showMenuIcon = document.querySelector("#showMenu");
const hideMenuIcon = document.querySelector("#hideMenu");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}
showMenuIcon.addEventListener("click", showMenu);
hideMenuIcon.addEventListener("click", hideMenu);
