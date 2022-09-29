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

gsap.from(".about__description", {
  scrollTrigger: {
    trigger: ".about__description",
    start: "50px 80%",
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3",
  stagger: 0.3,
});

gsap.from(".about__title", {
  scrollTrigger: {
    trigger: ".about__title",
    start: "50px 80%",
  },
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.easeIn",
});

gsap.to(".featured__shade", {
  scrollTrigger: {
    trigger: ".featured__shade",
    start: "30px 80%",
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

/* gsap.from(".preloader__img", {
  scale: 1.1,
  ease: "power1",
  duration: 0.5,
  repeat: -1,
  yoyo: true,
}); */

loader = gsap.timeline({ defaults: { ease: "power2.out" } });

/* loader
  .to(".preloader", {
    scale: "1",
    opacity: 1,
    delay: 1,
  })
  .to(".preloader", { opacity: 0, delay: 5 })
  .to(".wrapper", { opacity: 1, display: "block" }) */
loader
  .from(
    ".img-avatar",
    {
      opacity: 0,
      ease: "power4",
      scale: 1.2,
    },
    "-=0.3"
  )
  .from(
    ".hero__title",
    {
      opacity: 0,
      y: 30,
      ease: "power4",
      duration: 0.7,
    },
    "-=1"
  )
  .from(
    ".hero__name",
    {
      opacity: 0,
      x: -300,
      ease: "power4",
      delay: 0.1,
    },
    "-=.5"
  )
  .from(
    ".hero__scroll",
    {
      opacity: 0,
      x: -300,
      ease: "power4",
    },
    "-=.2"
  )
  .from(
    ".hero__description",
    {
      opacity: 0,
      x: 300,
      ease: "power3",
    },
    "-=.7"
  );
