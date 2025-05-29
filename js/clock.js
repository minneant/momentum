// setInterval(function, delay in milliseconds)
// date.getDay() returns the day of the week (0-6, where 0 is Sunday)

const clock = document.querySelector('#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // Call it once to set the initial time
setInterval(getClock, 1000);