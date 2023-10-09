const formSignup = document.querySelector(".signupSec-form");
const inputForm = formSignup.querySelectorAll("input");
const btnsubmit = formSignup.querySelectorAll(".signup");
const loaderCard = document.querySelector(".loader");
const closeBtn = loaderCard.querySelector(".loader-content .loader-close");
const closeIcon = loaderCard.querySelector(".loader-header i");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwaeCjdtuz9ye9bG9aOS-R-KaMoXWC7UFbiMpmpOi1C4Tl5WKV-aFZLNogzl49uoxn5lA/exec";
const form = document.forms["submit-to-google-sheet"];
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = this["email"].value;
  let fullname = this["fullname"].value;
  let mssv = this["mssv"].value;
  let majobs = this["majob"].value;

  if (email && fullname && mssv && majobs) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
    loaderCard.classList.add("show");
    e.target.reset();
  } else {
    inputForm.forEach((items) => {
      if (!items.value) {
        if (items.name == "majob") {
          items.placeholder = "Vui Lòng Nhập Đủ Thông Tin";
        } else {
          items.parentElement.querySelector("label").innerHTML =
            "Vui Lòng Nhập Đủ Thông Tin";
        }
        items.style.borderColor = "red";
        items.parentElement.querySelector("label").classList.add("requie");
      } else {
        if (items.name == "majob") {
          items.placeholder = items.attributes.textdata.value;
        } else {
          items.parentElement.querySelector("label").innerHTML =
            items.attributes.textdata.value;
        }
        items.style = "";
        items.parentElement.querySelector("label").classList.remove("requie");
      }
    });
  }
});

inputForm.forEach((items) => {
  items.addEventListener("blur", () => {
    if (!items.value) {
      if (items.name == "majob") {
        items.placeholder = "Vui Lòng Nhập Đủ Thông Tin";
      } else {
        items.parentElement.querySelector("label").innerHTML =
          "Vui Lòng Nhập Đủ Thông Tin";
      }
      items.style.borderColor = "red";
      items.parentElement.querySelector("label").classList.add("requie");
    } else {
      if (items.name == "majob") {
        items.placeholder = items.attributes.textdata.value;
      } else {
        items.parentElement.querySelector("label").innerHTML =
          items.attributes.textdata.value;
      }
      items.style = "";
      items.parentElement.querySelector("label").classList.remove("requie");
    }
  });
});
closeBtn.addEventListener("click", () => {
  loaderCard.classList.remove("show");
});
closeIcon.addEventListener("click", () => {
  loaderCard.classList.remove("show");
});
