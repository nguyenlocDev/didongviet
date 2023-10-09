const bannerImg = document.querySelectorAll(".banner .banner_img div");

n = 0;

setInterval(() => {
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n].style.top = "100%";
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n].style.transform =
    "translate(-50%, -100%)";
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n].style.width = "350px";
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n].style.height = "150px";
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n]
    .querySelector("img")
    .classList.add("blur");
  bannerImg[n > 0 ? (n + 1 > 2 ? n - 1 : n + 1) : n].style.zIndex = "0";

  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2].style.top = "50%";
  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2].style.transform =
    "translate(-50%, -50%)";
  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2].style.width = "500px";
  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2].style.height = "250px";
  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2].style.zIndex = "10";
  bannerImg[n + 2 > 2 ? (n + 2 > 3 ? n - 2 : n) : n + 2]
    .querySelector("img")
    .classList.remove("blur");

  bannerImg[n + 1 > 1 ? (n > 1 ? 2 : n - 1) : n + 1].style.top = "0";
  bannerImg[n + 1 > 1 ? (n > 1 ? 2 : n - 1) : n + 1].style.transform =
    "translateX(-50%)";
  bannerImg[n + 1 > 1 ? (n > 1 ? 2 : n - 1) : n + 1].style.width = "350px";
  bannerImg[n + 1 > 1 ? (n > 1 ? 2 : n - 1) : n + 1].style.height = "150px";
  n++;
  if (n === 3) {
    n = 0;
  }
}, 5000);
