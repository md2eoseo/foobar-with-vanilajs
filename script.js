"use strict";

const URL = "https://kea-alt-del.dk/kata-distortion/";
let intervalId;

const body = document.querySelector("body");
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
      circle.style.backgroundColor = `rgb(${110 + 10 * inQueue},${
        (150 + 10 * inQueue) % 256
      },${(190 + 10 * inQueue) % 256})`;
      number.style.color = `rgb(${255 - (110 + 10 * inQueue)},${
        255 - ((150 + 10 * inQueue) % 256)
      },${255 - ((190 + 10 * inQueue) % 256)})`;
      body.style.backgroundColor = number.style.color;
      intervalId = setInterval(loadingAnimation, 700);
      setTimeout(removeIntervalId, 4000);
    });
}

function loadingAnimation() {
  number.textContent += ".";
}

function removeIntervalId() {
  clearInterval(intervalId);
}
