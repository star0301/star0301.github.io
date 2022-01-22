const API_KEY = "c1efa93129c0ec40639d6efef76a6e39";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather-area span:first-child");
      const city = document.querySelector(".weather-area span:last-child");

      city.innerText = `City : ${data.name}`;
      weather.innerText = `Weather : ${data.weather[0].main}`;
    });
}

function onGeoErr() {}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//c1efa93129c0ec40639d6efef76a6e39
