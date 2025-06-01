const API_KEY = "451db7216d289c79f4061fd4c921d2a6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  console.error("Geolocation is not available.");
  alert(
    "Unable to retrieve your location. Please enable location services in your browser settings."
  );
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
