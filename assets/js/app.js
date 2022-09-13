const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navOpen = document.getElementById("nav-open");
const themeToggleBtn = document.querySelector("#theme-toggle");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});
