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
const tempFormatBtn = document.querySelector("#temperature-format-btn");
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
    let windSpeed;
    let locationName;
    let locationCountry;
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
        pressure = weatherData.main.pressure * 0.0145037738;
        windSpeed = weatherData.wind.speed;
        locationName = weatherData.name;
        locationCountry = weatherData.sys.country;
        weatherTitle = weatherData.weather[0].main;
        weatherDescription = weatherData.weather[0].description;
        let weatherInformation = {
            temperature: currentTemperature.toFixed(1),
            minTemperature: minTemperature.toFixed(1),
            maxTemperature: maxTemperature.toFixed(1),
            feelsLike: feelsLikeTemperature.toFixed(1),
            pressure: pressure.toFixed(1),
            windSpeed: windSpeed,
            location: { name: locationName, country: locationCountry },
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
    const pressureText = document.querySelector(".pressure-text");
    const windSpeedText = document.querySelector(".wind-speed-text");
    const weatherTitle = document.querySelector(".weather-title");
    const weatherDescription = document.querySelector(".weather-description");
    const locationTitleText = document.querySelector(".location-title");
    const countryText = document.querySelector("#country-text");
    const tempRangeText = document.querySelector(".temperature-range-text");
    temperatureText.textContent = weather.temperature + "°";
    feelsLikeText.textContent = "Feels Like " + weather.feelsLike + "°";
    tempRangeText.textContent = `min: ${weather.minTemperature} max: ${weather.maxTemperature}`;
    pressureText.textContent = `Pressure: ${weather.pressure} psi`;
    windSpeedText.textContent = `Wind Speed: ${weather.windSpeed} m/s`;
    weatherTitle.textContent = weather.prognosis;
    weatherDescription.textContent = weather.description;
    locationTitleText.textContent = weather.location.name;
    countryText.textContent = weather.location.country;
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
    refreshWeatherData(true);
});

let refreshWeatherData = async function (refreshImage = false) {
    let weatherData = await searchWeather(weatherSearchBar.value);
    let weatherInformation = processWeatherData(weatherData);
    renderWeatherData(weatherInformation);
    if (refreshImage) {
        let imageUrl = await getweatherImage(
            weatherInformation.prognosis.toString()
        );
        renderWeatherImage(imageUrl);
    }
};

tempFormatBtn.addEventListener("click", async () => {
    if (temperatureSystem == "C") {
        temperatureSystem = "F";
        tempFormatBtn.textContent = "Farenheit";
        await refreshWeatherData();
    } else if (temperatureSystem == "F") {
        temperatureSystem = "C";
        tempFormatBtn.textContent = "Celsius";
        await refreshWeatherData();
    } else {
        temperatureSystem = "C";
        tempFormatBtn.textContent = "Celsius";
        await refreshWeatherData();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWM7QUFDMUQsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdCQUF3QixPQUFPLHVCQUF1QjtBQUM5Riw0Q0FBNEMsa0JBQWtCO0FBQzlELCtDQUErQyxtQkFBbUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2lwaHlBcGlLZXkgPSBcIm1Mbm1POEVRM1NXdTgyTUtJVWtydUpaYW5QelZTOU5vXCI7XG5jb25zdCBnaXBoeVVybCA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT1gO1xuY29uc3Qgd2VhdGhlclVybCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIjtcbmNvbnN0IHdlYXRoZXJBcGlLZXkgPSBcIjI4MmQzZmExYWM4NzVkMzk4NDI1Mzg4NDA0MzdiNzhiXCI7XG5jb25zdCB3ZWF0aGVyU2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYmFyXCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnRuXCIpO1xuY29uc3QgdGVtcEZvcm1hdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGVyYXR1cmUtZm9ybWF0LWJ0blwiKTtcbmxldCB0ZW1wZXJhdHVyZVN5c3RlbSA9IFwiQ1wiO1xuXG5sZXQgc2VhcmNoV2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgd2VhdGhlclVybCArIHF1ZXJ5ICsgYCZhcGlrZXk9JHt3ZWF0aGVyQXBpS2V5fWAsXG4gICAgICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59O1xuXG5sZXQgcHJvY2Vzc1dlYXRoZXJEYXRhID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGxldCBjdXJyZW50VGVtcGVyYXR1cmU7XG4gICAgbGV0IGZlZWxzTGlrZVRlbXBlcmF0dXJlO1xuICAgIGxldCBtaW5UZW1wZXJhdHVyZTtcbiAgICBsZXQgbWF4VGVtcGVyYXR1cmU7XG4gICAgbGV0IHByZXNzdXJlO1xuICAgIGxldCB3aW5kU3BlZWQ7XG4gICAgbGV0IGxvY2F0aW9uTmFtZTtcbiAgICBsZXQgbG9jYXRpb25Db3VudHJ5O1xuICAgIGxldCB3ZWF0aGVyVGl0bGU7XG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbjtcbiAgICB0cnkge1xuICAgICAgICBpZiAodGVtcGVyYXR1cmVTeXN0ZW0gPT0gXCJDXCIpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNTtcbiAgICAgICAgICAgIGZlZWxzTGlrZVRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1O1xuICAgICAgICAgICAgbWluVGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1O1xuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlID0gKDkgLyA1KSAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMpICsgMzI7XG4gICAgICAgICAgICBmZWVsc0xpa2VUZW1wZXJhdHVyZSA9XG4gICAgICAgICAgICAgICAgKDkgLyA1KSAqICh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMpICsgMzI7XG4gICAgICAgICAgICBtaW5UZW1wZXJhdHVyZSA9ICg5IC8gNSkgKiAod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3MykgKyAzMjtcbiAgICAgICAgICAgIG1heFRlbXBlcmF0dXJlID0gKDkgLyA1KSAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczKSArIDMyO1xuICAgICAgICB9XG4gICAgICAgIHByZXNzdXJlID0gd2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZSAqIDAuMDE0NTAzNzczODtcbiAgICAgICAgd2luZFNwZWVkID0gd2VhdGhlckRhdGEud2luZC5zcGVlZDtcbiAgICAgICAgbG9jYXRpb25OYW1lID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICAgICAgbG9jYXRpb25Db3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG4gICAgICAgIHdlYXRoZXJUaXRsZSA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHdlYXRoZXJJbmZvcm1hdGlvbiA9IHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiBjdXJyZW50VGVtcGVyYXR1cmUudG9GaXhlZCgxKSxcbiAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlOiBtaW5UZW1wZXJhdHVyZS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmU6IG1heFRlbXBlcmF0dXJlLnRvRml4ZWQoMSksXG4gICAgICAgICAgICBmZWVsc0xpa2U6IGZlZWxzTGlrZVRlbXBlcmF0dXJlLnRvRml4ZWQoMSksXG4gICAgICAgICAgICBwcmVzc3VyZTogcHJlc3N1cmUudG9GaXhlZCgxKSxcbiAgICAgICAgICAgIHdpbmRTcGVlZDogd2luZFNwZWVkLFxuICAgICAgICAgICAgbG9jYXRpb246IHsgbmFtZTogbG9jYXRpb25OYW1lLCBjb3VudHJ5OiBsb2NhdGlvbkNvdW50cnkgfSxcbiAgICAgICAgICAgIHByb2dub3Npczogd2VhdGhlclRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHdlYXRoZXJEZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJJbmZvcm1hdGlvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmUtdGV4dFwiKTtcbiAgICAgICAgdGVtcGVyYXR1cmVUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiRXJyb3I6IENhbm5vdCBmaW5kIGNpdHkgZW50ZXJlZC4gVHJ5IGFnYWluIVwiO1xuICAgIH1cbn07XG5cbmxldCByZW5kZXJXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uICh3ZWF0aGVyKSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wZXJhdHVyZS10ZXh0XCIpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzLWxpa2UtdGV4dFwiKTtcbiAgICBjb25zdCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlLXRleHRcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZC10ZXh0XCIpO1xuICAgIGNvbnN0IHdlYXRoZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci10aXRsZVwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXRpdGxlXCIpO1xuICAgIGNvbnN0IGNvdW50cnlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5LXRleHRcIik7XG4gICAgY29uc3QgdGVtcFJhbmdlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmUtcmFuZ2UtdGV4dFwiKTtcbiAgICB0ZW1wZXJhdHVyZVRleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXBlcmF0dXJlICsgXCLCsFwiO1xuICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2UgXCIgKyB3ZWF0aGVyLmZlZWxzTGlrZSArIFwiwrBcIjtcbiAgICB0ZW1wUmFuZ2VUZXh0LnRleHRDb250ZW50ID0gYG1pbjogJHt3ZWF0aGVyLm1pblRlbXBlcmF0dXJlfSBtYXg6ICR7d2VhdGhlci5tYXhUZW1wZXJhdHVyZX1gO1xuICAgIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfSBwc2lgO1xuICAgIHdpbmRTcGVlZFRleHQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLndpbmRTcGVlZH0gbS9zYDtcbiAgICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnByb2dub3NpcztcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuICAgIGxvY2F0aW9uVGl0bGVUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuICAgIGNvdW50cnlUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5sb2NhdGlvbi5jb3VudHJ5O1xufTtcblxubGV0IGdldHdlYXRoZXJJbWFnZSA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyUXVlcnkpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgZ2lwaHlVcmwgKyB3ZWF0aGVyUXVlcnkgKyBgJmFwaWtleT0ke2dpcGh5QXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgKTtcbiAgICBsZXQgaW1hZ2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxldCBpbWFnZVVybCA9IGF3YWl0IGltYWdlRGF0YS5kYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNTApXS5pbWFnZXNcbiAgICAgICAgLm9yaWdpbmFsLnVybDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG59O1xuXG5sZXQgcmVuZGVyV2VhdGhlckltYWdlID0gZnVuY3Rpb24gKGltYWdlVXJsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xufTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgcmVmcmVzaFdlYXRoZXJEYXRhKHRydWUpO1xufSk7XG5cbmxldCByZWZyZXNoV2VhdGhlckRhdGEgPSBhc3luYyBmdW5jdGlvbiAocmVmcmVzaEltYWdlID0gZmFsc2UpIHtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCBzZWFyY2hXZWF0aGVyKHdlYXRoZXJTZWFyY2hCYXIudmFsdWUpO1xuICAgIGxldCB3ZWF0aGVySW5mb3JtYXRpb24gPSBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICAgIHJlbmRlcldlYXRoZXJEYXRhKHdlYXRoZXJJbmZvcm1hdGlvbik7XG4gICAgaWYgKHJlZnJlc2hJbWFnZSkge1xuICAgICAgICBsZXQgaW1hZ2VVcmwgPSBhd2FpdCBnZXR3ZWF0aGVySW1hZ2UoXG4gICAgICAgICAgICB3ZWF0aGVySW5mb3JtYXRpb24ucHJvZ25vc2lzLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgICAgcmVuZGVyV2VhdGhlckltYWdlKGltYWdlVXJsKTtcbiAgICB9XG59O1xuXG50ZW1wRm9ybWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRlbXBlcmF0dXJlU3lzdGVtID09IFwiQ1wiKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlU3lzdGVtID0gXCJGXCI7XG4gICAgICAgIHRlbXBGb3JtYXRCdG4udGV4dENvbnRlbnQgPSBcIkZhcmVuaGVpdFwiO1xuICAgICAgICBhd2FpdCByZWZyZXNoV2VhdGhlckRhdGEoKTtcbiAgICB9IGVsc2UgaWYgKHRlbXBlcmF0dXJlU3lzdGVtID09IFwiRlwiKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlU3lzdGVtID0gXCJDXCI7XG4gICAgICAgIHRlbXBGb3JtYXRCdG4udGV4dENvbnRlbnQgPSBcIkNlbHNpdXNcIjtcbiAgICAgICAgYXdhaXQgcmVmcmVzaFdlYXRoZXJEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGVyYXR1cmVTeXN0ZW0gPSBcIkNcIjtcbiAgICAgICAgdGVtcEZvcm1hdEJ0bi50ZXh0Q29udGVudCA9IFwiQ2Vsc2l1c1wiO1xuICAgICAgICBhd2FpdCByZWZyZXNoV2VhdGhlckRhdGEoKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==