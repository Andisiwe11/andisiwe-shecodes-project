function displayTemperature(response) {
  //Data variables
  let temperatureValue = Math.round(response.data.temperature.current);
  let icon_url = response.data.condition.icon_url
  let iconName = response.data.condition.icon
  let weatherDescription = response.data.condition.description
  let weatherHumidity = response.data.temperature.humidity
  let windSpeed = response.data.wind.speed

//Document variables
  let temperatureElement = document.querySelector(".current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let tempIconParent = document.querySelector('.current-temperature')
  let weathertype = document.querySelector('.weather-type')
  let humidityElement = document.querySelector('.humidity')
  let wind = document.querySelector('.wind')


  //Display variables
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperatureValue;
  weathertype.innerHTML = weatherDescription;
  humidityElement.innerHTML = `${weatherHumidity}%`;
  wind.innerHTML = `${windSpeed}km/h`;
  tempIconParent.innerHTML = `<img class="current-temperature-icon" src="${icon_url}" alt="${iconName}" /><span class="current-temperature-value" id="current-temperature">${temperatureValue}</span><span class="current-temperature-unit">°C</span>`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

