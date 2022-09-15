const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navOpen = document.getElementById("nav-open");
const themeToggleBtn = document.querySelector("#theme-toggle");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  gsap.to(".bg-slider span", {
    x: "-100%",
    duration: 0.7,
    ease: "power4.easeIn",
    stagger: 0.1,
  });
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  gsap.to(".bg-slider span", {
    x: "100%",
    ease: "power4.easeIn",
    stagger: 0.2,
  });
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
  scrollTrigger: {
    trigger: ".about__description",
    start: "50px 80%",
  },
  x: 200,
  duration: 1.5,
  ease: "power4.easeInOut",
});

gsap.from(".about__title", {
  scrollTrigger: {
    trigger: ".about__title",
    start: "50px 80%",
  },
  opacity: 0,
  duration: 1,
  ease: "power4.easeIn",
});

gsap.to(".featured__shade", {
  scrollTrigger: {
    trigger: ".featured__shade",
    start: "30px 80%",
    markers: true,
  },
  x: "-100%",
  duration: 2,
  ease: "power4.easeIn",
  delay: 1,
});

gsap.from(".featured__img", {
  scrollTrigger: {
    trigger: ".featured__img",
    start: "30px 80%",
  },
  opacity: 0,
  duration: 4,
  ease: "power4",
  scale: 1.2,
  stagger: 1,
});
