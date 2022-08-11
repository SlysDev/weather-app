const giphyApiKey = "mLnmO8EQ3SWu82MKIUkruJZanPzVS9No";
const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=`;
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherApiKey = "282d3fa1ac875d39842538840437b78b";
const weatherSearchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");
let temperatureSystem = "C";

let searchWeather = async function (query) {
    try {
        let response = await fetch(
            weatherUrl + query + `&apikey=${weatherApiKey}`,
            { mode: "cors" }
        );
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

let processWeatherData = function (weatherData) {
    let currentTemperature;
    let feelsLikeTemperature;
    let pressure;
    let locationName;
    let weatherTitle;
    let weatherDescription;
    try {
        if (temperatureSystem == "C") {
            currentTemperature = weatherData.main.temp - 273.15;
            feelsLikeTemperature = weatherData.main.feels_like - 273.15;
        } else {
            currentTemperature = (9 / 5) * (weatherData.main.temp - 273) + 32;
            feelsLikeTemperature =
                (9 / 5) * (weatherData.main.feels_like - 273) + 32;
        }
        pressure = weatherData.main.pressure;
        locationName = weatherData.name;
        weatherTitle = weatherData.weather.main;
        weatherDescription = weatherData.weather.description;
        let weatherInformation = {
            temperature: currentTemperature.toFixed(1),
            feelsLike: feelsLikeTemperature.toFixed(1),
            pressure: pressure,
            location: locationName,
            prognosis: weatherTitle,
            description: weatherDescription,
        };
        return weatherInformation;
    } catch (error) {
        console.log(error);
    }
};

let renderWeatherData = function (weather) {
    const temperatureText = document.querySelector(".temperature-text");
    const feelsLikeText = document.querySelector(".feels-like-text");
    const weatherTitle = document.querySelector(".weather-title");
    const weatherDescription = document.querySelector(".weather-description");
    const countryTitleText = document.querySelector(".country-title");
    temperatureText.textContent = weather.temperature + "°";
    feelsLikeText.textContent = "Feels Like " + weather.feelsLike + "°";
    weatherTitle.textContent = weather.prognosis;
    weatherDescription.textContent = weather.description;
    countryTitleText.textContent = weather.location;
};

searchBtn.addEventListener("click", async () => {
    let weatherData = await searchWeather(weatherSearchBar.value);
    let weatherInformation = processWeatherData(weatherData);
    renderWeatherData(weatherInformation);
});
