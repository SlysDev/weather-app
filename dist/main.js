/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdpcGh5QXBpS2V5ID0gXCJtTG5tTzhFUTNTV3U4Mk1LSVVrcnVKWmFuUHpWUzlOb1wiO1xuY29uc3QgZ2lwaHlVcmwgPSBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP3E9YDtcbmNvbnN0IHdlYXRoZXJVcmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9XCI7XG5jb25zdCB3ZWF0aGVyQXBpS2V5ID0gXCIyODJkM2ZhMWFjODc1ZDM5ODQyNTM4ODQwNDM3Yjc4YlwiO1xuY29uc3Qgd2VhdGhlclNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWJhclwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWJ0blwiKTtcbmxldCB0ZW1wZXJhdHVyZVN5c3RlbSA9IFwiQ1wiO1xuXG5sZXQgc2VhcmNoV2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgd2VhdGhlclVybCArIHF1ZXJ5ICsgYCZhcGlrZXk9JHt3ZWF0aGVyQXBpS2V5fWAsXG4gICAgICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG5sZXQgcHJvY2Vzc1dlYXRoZXJEYXRhID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGxldCBjdXJyZW50VGVtcGVyYXR1cmU7XG4gICAgbGV0IGZlZWxzTGlrZVRlbXBlcmF0dXJlO1xuICAgIGxldCBtaW5UZW1wZXJhdHVyZTtcbiAgICBsZXQgbWF4VGVtcGVyYXR1cmU7XG4gICAgbGV0IHByZXNzdXJlO1xuICAgIGxldCBsb2NhdGlvbk5hbWU7XG4gICAgbGV0IHdlYXRoZXJUaXRsZTtcbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uO1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0ZW1wZXJhdHVyZVN5c3RlbSA9PSBcIkNcIikge1xuICAgICAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1O1xuICAgICAgICAgICAgZmVlbHNMaWtlVGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTU7XG4gICAgICAgICAgICBtaW5UZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTU7XG4gICAgICAgICAgICBtYXhUZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUgPSAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3MykgKyAzMjtcbiAgICAgICAgICAgIGZlZWxzTGlrZVRlbXBlcmF0dXJlID1cbiAgICAgICAgICAgICAgICAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3MykgKyAzMjtcbiAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlID0gKDkgLyA1KSAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczKSArIDMyO1xuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMpICsgMzI7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlO1xuICAgICAgICBsb2NhdGlvbk5hbWUgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgICAgICB3ZWF0aGVyVGl0bGUgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIGxldCB3ZWF0aGVySW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogY3VycmVudFRlbXBlcmF0dXJlLnRvRml4ZWQoMSksXG4gICAgICAgICAgICBmZWVsc0xpa2U6IGZlZWxzTGlrZVRlbXBlcmF0dXJlLnRvRml4ZWQoMSksXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUsXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25OYW1lLFxuICAgICAgICAgICAgcHJvZ25vc2lzOiB3ZWF0aGVyVGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogd2VhdGhlckRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gd2VhdGhlckluZm9ybWF0aW9uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS10ZXh0XCIpO1xuICAgICAgICB0ZW1wZXJhdHVyZVRleHQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgXCJFcnJvcjogQ2Fubm90IGZpbmQgY2l0eSBlbnRlcmVkLiBUcnkgYWdhaW4hXCI7XG4gICAgfVxufTtcblxubGV0IHJlbmRlcldlYXRoZXJEYXRhID0gZnVuY3Rpb24gKHdlYXRoZXIpIHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXRleHRcIik7XG4gICAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHMtbGlrZS10ZXh0XCIpO1xuICAgIGNvbnN0IHdlYXRoZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci10aXRsZVwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgY291bnRyeVRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRyeS10aXRsZVwiKTtcbiAgICB0ZW1wZXJhdHVyZVRleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXBlcmF0dXJlICsgXCLCsFwiO1xuICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2UgXCIgKyB3ZWF0aGVyLmZlZWxzTGlrZSArIFwiwrBcIjtcbiAgICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnByb2dub3NpcztcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuICAgIGNvdW50cnlUaXRsZVRleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmxvY2F0aW9uO1xufTtcblxubGV0IGdldHdlYXRoZXJJbWFnZSA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyUXVlcnkpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgZ2lwaHlVcmwgKyB3ZWF0aGVyUXVlcnkgKyBgJmFwaWtleT0ke2dpcGh5QXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgKTtcbiAgICBsZXQgaW1hZ2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxldCBpbWFnZVVybCA9IGF3YWl0IGltYWdlRGF0YS5kYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNTApXS5pbWFnZXNcbiAgICAgICAgLm9yaWdpbmFsLnVybDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG59O1xuXG5sZXQgcmVuZGVyV2VhdGhlckltYWdlID0gZnVuY3Rpb24gKGltYWdlVXJsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xufTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlcih3ZWF0aGVyU2VhcmNoQmFyLnZhbHVlKTtcbiAgICBsZXQgd2VhdGhlckluZm9ybWF0aW9uID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICByZW5kZXJXZWF0aGVyRGF0YSh3ZWF0aGVySW5mb3JtYXRpb24pO1xuICAgIGxldCBpbWFnZVVybCA9IGF3YWl0IGdldHdlYXRoZXJJbWFnZShcbiAgICAgICAgd2VhdGhlckluZm9ybWF0aW9uLnByb2dub3Npcy50b1N0cmluZygpXG4gICAgKTtcbiAgICByZW5kZXJXZWF0aGVySW1hZ2UoaW1hZ2VVcmwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=