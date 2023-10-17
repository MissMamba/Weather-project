function displayTemperature(response) {
  let temElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);

}

let apiKey = "a4dbff3fb9894f32e6a77bt933fco6a0";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
axios.get(apiUrlrl).then(displayTemperature);
