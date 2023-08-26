//------------- Navbar ---------------//
const humbergerEl = document.getElementById("humberger");
const navMenuEl = document.getElementById("nav-menu");
const closeBtn = document.getElementById("btn-close");
const navLinkEl = document.querySelectorAll(".nav-link");

navLinkEl.forEach((link) => {
  link.addEventListener("click", () => {
    navMenuEl.classList.add("hidden");
  });
});

humbergerEl.addEventListener("click", () => {
  navMenuEl.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  navMenuEl.classList.add("hidden");
});
//------------- Navbar End ---------------//

//------------- Scroll Up ---------------//
scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-6");
  } else {
    scrollUpBtn.classList.remove("bottom-6");
    scrollUpBtn.classList.add("-bottom-1/2");
  }
};
window.addEventListener("scroll", scrollUp);

//------------- Scroll Up End ---------------//

//------------- Shadow Scroll  ---------------//
const shadow = () => {
  const shadowScroll = document.getElementById("header");
  if (this.scrollY > 50) {
    shadowScroll.classList.add("shadow-md");
  } else {
    shadowScroll.classList.remove("shadow-md");
  }
};
window.addEventListener("scroll", shadow);

//------------- Shadow Scroll End ---------------//

//------------- Active Navbar ---------------//
const activeLink = () => {
  const sectionEl = document.querySelectorAll("section");
  const navLinkEL = document.querySelectorAll(".nav-link");

  let current = "home";

  sectionEl.forEach((sections) => {
    const sectionTop = sections.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = sections.getAttribute("id");
    }
  });

  navLinkEL.forEach((item) => {
    item.classList.remove("text-primaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-primaryColor");
    }
  });
};

window.addEventListener("scroll", activeLink);
//------------- Active Navbar End ---------------//

//------------- Dark Mode ---------------//
const htmlEl = document.querySelector("html");
const moonBtn = document.getElementById("moon-btn");

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}

moonBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  htmlEl.classList.add("dark");
  moonBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  htmlEl.classList.remove("dark");
  moonBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
//------------- Dark Mode  End ---------------//
