const parentVideo = document.querySelector(".video .card-video");
const cardVideo = document.querySelectorAll(".video .card-video iframe");
let numCenter = Math.floor(cardVideo.length / 2);
const videoNum = document.querySelectorAll(".video .videoNum .num-items");
const btnNext = document.querySelector(".video .fa-chevron-right");
const btnPrev = document.querySelector(".video .fa-chevron-left");
let nextPx = 0;

//set scale video
cardVideo.forEach((items) => {
  items.classList.add("notCenterView");
});
cardVideo[numCenter].classList.remove("notCenterView");
cardVideo[numCenter].classList.add("centerView");
const widthCard = cardVideo[numCenter].getBoundingClientRect().width;
//num

//check btn
const disButton = (num) => {
  if (num == 4 || num == 0) {
    if (num == 4) {
      btnNext.classList.add("dis");
    } else btnPrev.classList.add("dis");
  } else {
    btnNext.classList.remove("dis");
    btnPrev.classList.remove("dis");
  }
};

const setNum = (n) => {
  videoNum.forEach((items) => {
    items.classList.remove("selectNum");
    items.classList.add("notSelectNum");
  });
  videoNum[n].classList.remove("notSelectNum");
  videoNum[n].classList.add("selectNum");
};

setNum(numCenter);

window.addEventListener("load", (event) => {
  btnNext.classList.remove("dis");
  btnPrev.classList.remove("dis");
});

btnNext.addEventListener("click", () => {
  nextPx += -widthCard - 10;
  if (numCenter == 4) {
    numCenter = 0;
  } else numCenter++;
  cardVideo[numCenter - 1 < 0 ? 4 : numCenter - 1].classList.remove(
    "centerView"
  );
  cardVideo[numCenter - 1 < 0 ? 4 : numCenter - 1].classList.add(
    "notCenterView"
  );
  cardVideo[numCenter].classList.remove("notCenterView");
  cardVideo[numCenter].classList.add("centerView");
  parentVideo.style = `transform: translateX(${nextPx}px)`;
  setNum(numCenter);
  disButton(numCenter);
});

//prev btn
btnPrev.addEventListener("click", () => {
  nextPx -= -widthCard - 10;
  if (numCenter == 0) {
    numCenter = 4;
  } else numCenter--;
  cardVideo[numCenter + 1 > 4 ? 0 : numCenter + 1].classList.remove(
    "centerView"
  );
  cardVideo[numCenter + 1 > 4 ? 0 : numCenter + 1].classList.add(
    "notCenterView"
  );
  cardVideo[numCenter].classList.remove("notCenterView");
  cardVideo[numCenter].classList.add("centerView");
  parentVideo.style = `transform: translateX(${nextPx}px)`;
  setNum(numCenter);
  disButton(numCenter);
});
