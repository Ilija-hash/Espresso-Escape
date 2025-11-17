const burger = document.querySelector(".burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("show");
});
