const nav = document.querySelector(".nav");
const link = nav.querySelectorAll("a");
const navIcon = document.querySelector(".header i");

navIcon.onclick = () => {
  nav.classList.toggle("show");
};
link.forEach((items) => {
  items.onclick = () => {
    nav.classList.remove("show");
  };
});
