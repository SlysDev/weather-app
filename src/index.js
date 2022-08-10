const giphyApiKey = "mLnmO8EQ3SWu82MKIUkruJZanPzVS9No";
const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=`;
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherApiKey = "282d3fa1ac875d39842538840437b78b";
const countryTitleText = document.querySelector(".country-title");
const weatherSearchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");

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
    try {
        let currentTemperature = weatherData.main.temp;
        let feelsLikeTemperature = weatherData.main.feels_like;
        let pressure = weatherData.main.pressure;
        let locationName = weatherData.name;
        let weatherTitle = weatherData.weather.main;
        let weatherDescription = weatherData.weather.description;
        let weatherInformation = {
            temperature: currentTemperature,
            feelsLike: feelsLikeTemperature,
            pressure: pressure,
            location: locationName,
            prognosis: weatherTitle,
            description: weatherDescription,
        };
        console.log(weatherInformation);
    } catch (error) {
        console.log(error);
    }
};

let renderWeatherData = function (weather) {
    countryTitleText.textContent = locationName;
};

searchBtn.addEventListener("click", async () => {
    let weatherData = await searchWeather(weatherSearchBar.value);
    processWeatherData(weatherData);
});
