const cardContent = document.querySelectorAll(".contest-list");
const bannerList = document.querySelectorAll(".banner-list");
const groupCard = document.querySelectorAll(".group div");
const sigSec = document.querySelector(".signupSec");
const videoCard = document.querySelector(".content-video");
//to top
const observerCard = new IntersectionObserver((section) => {
  section.forEach((items) => {
    if (items.isIntersecting) {
      items.target.classList.remove("hiddenCrad");
    } else {
      items.target.classList.add("hiddenCrad");
    }
  });
});

//left and right
const observerMove = new IntersectionObserver((section) => {
  section.forEach((items) => {
    if (items.isIntersecting) {
      if (items.target.getAttribute("posi") === "left") {
        items.target.classList.remove("moveLeft");
      } else {
        items.target.classList.remove("moveRight");
      }
    } else {
      if (items.target.getAttribute("posi") === "left") {
        items.target.classList.add("moveLeft");
      } else {
        items.target.classList.add("moveRight");
      }
    }
  });
});

//add animation in card
cardContent.forEach((items) => {
  observerCard.observe(items);
});
bannerList.forEach((items) => {
  observerMove.observe(items);
});
groupCard.forEach((items) => {
  observerMove.observe(items);
});
observerCard.observe(sigSec);
observerCard.observe(videoCard);
