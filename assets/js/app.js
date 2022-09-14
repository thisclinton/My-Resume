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

let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(
  ".img-avatar",
  {
    opacity: 0,
    ease: "power4",
    scale: 1.2,
  },
  1.5
)
  .from(
    ".hero__title",
    {
      opacity: 0,
      y: 30,
      ease: "power3",
    },
    0.6
  )
  .from(
    ".hero__name",
    {
      opacity: 0,
      x: -300,
      ease: "power4",
    },
    0.9
  )
  .from(
    ".hero__scroll",
    {
      opacity: 0,
      x: -300,
      ease: "power4",
    },
    1.1
  )
  .from(
    ".hero__description",
    {
      opacity: 0,
      x: 300,
      ease: "power4",
    },
    1.1
  );

gsap.from(".about__description", {
  scrollTrigger: ".about__description",
  x: 200,
  y: 50,
  start: "top middle",
  duration: 1,
  ease: "power4.easeInOut",
});
