// setInterval(function, delay in milliseconds)
// date.getDay() returns the day of the week (0-6, where 0 is Sunday)

const clock = document.querySelector("#clock");
const dateBox = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  dateBox.innerText = `${year}-${month}-${day}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // Call it once to set the initial time
setInterval(getClock, 1000);
