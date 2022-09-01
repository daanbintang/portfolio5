// fixed navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// humberger active
const humb = document.querySelector("#humberger");
const nav = document.querySelector("#nav-menu");
humb.addEventListener("click", function () {
  humb.classList.toggle("active");
  nav.classList.toggle("hidden");
});

window.addEventListener('click', function(e){
  if(e.target != humb && e.target != nav){
    humb.classList.remove("active");
  nav.classList.add("hidden");
  }
})