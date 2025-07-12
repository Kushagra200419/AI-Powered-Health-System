function myFunction() {
  const elem = document.querySelector(".container");
  elem.classList.toggle("new-color");
}

const ti = document.querySelector("#time");
const da = document.querySelector("#day");
const dat = document.querySelector("#date");

function updateDateTime() {
  const now = new Date();

  document.getElementById("year").textContent = now.getFullYear();
  document.getElementById("month").textContent = now.getMonth() + 1;
  document.getElementById("date").textContent = now.getDate();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").textContent = days[now.getDay()];

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDateTime, 1000); // updates every second
updateDateTime(); // initial call
