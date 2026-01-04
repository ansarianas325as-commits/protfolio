const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
