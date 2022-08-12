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
        return data;
    } catch (error) {
        console.log(error);
    }
};

let processWeatherData = function (weatherData) {
    console.log(weatherData);
    let currentTemperature;
    let feelsLikeTemperature;
    let minTemperature;
    let maxTemperature;
    let pressure;
    let locationName;
    let weatherTitle;
    let weatherDescription;
    try {
        if (temperatureSystem == "C") {
            currentTemperature = weatherData.main.temp - 273.15;
            feelsLikeTemperature = weatherData.main.feels_like - 273.15;
            minTemperature = weatherData.main.temp_min - 273.15;
            maxTemperature = weatherData.main.temp_max - 273.15;
        } else {
            currentTemperature = (9 / 5) * (weatherData.main.temp - 273) + 32;
            feelsLikeTemperature =
                (9 / 5) * (weatherData.main.feels_like - 273) + 32;
            minTemperature = (9 / 5) * (weatherData.main.temp_min - 273) + 32;
            maxTemperature = (9 / 5) * (weatherData.main.temp_max - 273) + 32;
        }
        pressure = weatherData.main.pressure;
        locationName = weatherData.name;
        weatherTitle = weatherData.weather[0].main;
        weatherDescription = weatherData.weather[0].description;
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
        const temperatureText = document.querySelector(".temperature-text");
        temperatureText.textContent =
            "Error: Cannot find city entered. Try again!";
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

let getweatherImage = async function (weatherQuery) {
    let response = await fetch(
        giphyUrl + weatherQuery + `&apikey=${giphyApiKey}`,
        {
            mode: "cors",
        }
    );
    let imageData = await response.json();
    let imageUrl = await imageData.data[Math.ceil(Math.random() * 50)].images
        .original.url;
    return imageUrl;
};

let renderWeatherImage = function (imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
};

searchBtn.addEventListener("click", async () => {
    let weatherData = await searchWeather(weatherSearchBar.value);
    let weatherInformation = processWeatherData(weatherData);
    renderWeatherData(weatherInformation);
    let imageUrl = await getweatherImage(
        weatherInformation.prognosis.toString()
    );
    renderWeatherImage(imageUrl);
});
