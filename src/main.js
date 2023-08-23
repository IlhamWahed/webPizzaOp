//------------- Navbar ---------------//
const humbergerEl = document.getElementById("humberger");
const navMenuEl = document.getElementById("nav-menu");
const closeBtn = document.getElementById("btn-close");
// const navActive = document.getElementById("nav-link");

// navActive.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.classList.add("hidden");
//   });
// });

humbergerEl.addEventListener("click", () => {
  navMenuEl.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  navMenuEl.classList.add("hidden");
});
//------------- Navbar End ---------------//
