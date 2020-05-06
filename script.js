"use strict";

const URL = "https://kea-alt-del.dk/kata-distortion/";
let intervalId;

const number = document.querySelector(".number");
const circle = document.querySelector(".circle");

window.addEventListener("load", () => {
  console.log("FooBar Start!");
  getData();
  setInterval(getData, 5000);
});

function getData() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const inQueue = data.inQueue;
      number.textContent = inQueue;
      circle.style.width = `${50 + 15 * inQueue}px`;
      circle.style.height = `${50 + 15 * inQueue}px`;
      intervalId = setInterval(loadingAnimation, 1000);
      setTimeout(removeIntervalId, 4000);
    });
}

function loadingAnimation() {
  number.textContent += ".";
}

function removeIntervalId() {
  clearInterval(intervalId);
}
