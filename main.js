const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("toggle-menu"),
  closeMunu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMunu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
