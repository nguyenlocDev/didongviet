const list = document.querySelector(".ops-list");
const ops = list.querySelectorAll("span");
const chosse = document.querySelector(".signupSec-ops");
const showOps = chosse.querySelector("input");
chosse.onclick = () => {
  list.classList.toggle("show");
};

ops.forEach((items) => {
  items.onclick = () => {
    showOps.value = items.innerText;
  };
});
