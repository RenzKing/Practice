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

// slider

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
