const btnSig = document.querySelectorAll(".signup");
const bannerDiv = document.querySelectorAll(".banner .banner_img div");

btnSig.forEach((items) => {
  items.onclick = () => {
    if (items.attributes?.type?.value !== "submit") {
      location.href = "/#signupSec";
    }
  };
});

//check ios
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  bannerDiv.forEach((items) => {
    items.classList.add("ios");
  });
} else {
  bannerDiv.forEach((items) => {
    items.classList.add("more");
  });
}
