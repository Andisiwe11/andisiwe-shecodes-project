let input = document.querySelector(".search-input")
let btnSubmit = document.querySelector(".btn-submit")
let cityName = document.querySelector(".city-name")
let cityTime = document.querySelector(".city-time")

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault()
    let title = cityName.innerHTML = input.value
    displayDate()

    let apiKey = "fb256to5e808d0b23e3abf842fb7d00b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${title}&key=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);
})

function displayDate() {
    if (input.value.length > 0) {
        let currentTime = moment().tz(input.value)
            .format("dddd, h:mm ");
        cityTime.innerHTML = `${currentTime} moderate rain`;

    }
}
function showTemperature(response) {
    let temperatureElement = document.querySelector(".numb");

    let temperature = Math.round(response.data.temperature.current);

    temperatureElement.innerHTML = `${temperature} `;
}



