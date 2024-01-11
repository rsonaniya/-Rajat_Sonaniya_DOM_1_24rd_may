let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let register = document.getElementById("register");
let name = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");
let message = document.getElementById("message");
coupon = document.getElementById("coupon");
let reset = document.getElementById("reset");

let count = 0;
let clickCount = 0;
let attemptCount = 0;

let isFirstImageSelected = false;
let isSecondImageSelected = false;
let isThirdImageSelected = false;
let isFourthImageSelected = false;

img1.addEventListener("click", () => register.classList.remove("hidden"));

register.addEventListener("submit", (e) => {
  e.preventDefault();
  register.classList.add("hidden");
  isFirstImageSelected = true;
});

img2.addEventListener("click", () => {
  if (isFirstImageSelected) {
    alert(
      `Registered user Detail: Name:${name.value}, Email:${email.value}, Username: ${username.value}`
    );
    isSecondImageSelected = true;
  }
});

img3.addEventListener("click", () => {
  if (isSecondImageSelected && clickCount < 3) {
    let randomNumber = Math.ceil(Math.random() * 6);
    count += randomNumber;
    clickCount++;
  }
  if (clickCount > 2) {
    attemptCount++;
    if (count > 10) {
      message.innerHTML = `Congratulations, You have won the game 🎉🎉🎉, Click on the last image to generate your Coupon code`;
      isThirdImageSelected = true;
    } else {
      message.innerHTML = `Try Again scoring more than  10, Your score is:${count}`;
      if (attemptCount < 2) {
        clickCount = 0;
        count = 0;
      } else {
        message.innerHTML = "Bad luck, Click Reset Button below to start again";
      }
    }
  }
});

img4.addEventListener("click", () => {
  if (isThirdImageSelected) {
    let couponCode = "";
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    for (let i = 0; i < 12; i++) {
      couponCode += text.charAt(Math.ceil(Math.random() * 36));
    }
    coupon.innerHTML = `Your Coupon code is: ${couponCode}`;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  clickCount = 0;
  attemptCount = 0;

  isFirstImageSelected = false;
  isSecondImageSelected = false;
  isThirdImageSelected = false;
  isFourthImageSelected = false;
  name.value = "";
  email.value = "";
  username.value = "";
  message.innerHTML = "";
  coupon.innerHTML = "";
  alert("Game is reset");
});
