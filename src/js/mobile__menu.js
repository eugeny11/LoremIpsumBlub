document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.querySelector(".header__menu__mobile");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("show");
  });
});
