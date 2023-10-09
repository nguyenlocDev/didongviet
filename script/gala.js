const cardSig = document.querySelector(".sig-card");
const itemsSig = cardSig.querySelectorAll(".sig-items");
const nextElementLeft = document.querySelector(".sig .fa-chevron-right");
const prevElementLeft = document.querySelector(".sig .fa-chevron-left");
const posi = itemsSig[0].getBoundingClientRect();
let movePx = 380;
let numSig = 0;

// add element in html

const checkScale = (n) => {
  itemsSig.forEach((items) => {
    items.classList.add("scaleS");
  });
  console.log(n);
  itemsSig[n].classList.remove("scaleS");
  itemsSig[n].classList.add("scaleM");
};

//next
nextElementLeft.addEventListener("click", () => {
  if (numSig < 3) {
    numSig++;
  } else numSig = 0;
  movePx = movePx - posi.width - 10;
  cardSig.style = `transform: translateX(${movePx}px)`;
  checkScale(numSig);
  if (movePx < -377.5) {
    movePx = 380;
    cardSig.style = `transform: translateX(${movePx}px)`;
  }
});

//prev
prevElementLeft.addEventListener("click", () => {
  if (numSig > 0) {
    numSig--;
  } else numSig = 3;
  movePx = movePx + posi.width + 10;
  cardSig.style = `transform: translateX(${movePx}px)`;
  checkScale(numSig);
  if (movePx > 380) {
    movePx = -377.5;
    cardSig.style = `transform: translateX(${movePx}px)`;
  }
});

//check
checkScale(numSig);
