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
            minTemperature: minTemperature,
            maxTemperature: maxTemperature,
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
    temperatureText.textContent = weather.temperature + "°";
    feelsLikeText.textContent = "Feels Like " + weather.feelsLike + "°";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFELGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsa0JBQWtCO0FBQzlELCtDQUErQyxtQkFBbUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFNBQVM7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2lwaHlBcGlLZXkgPSBcIm1Mbm1POEVRM1NXdTgyTUtJVWtydUpaYW5QelZTOU5vXCI7XG5jb25zdCBnaXBoeVVybCA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/cT1gO1xuY29uc3Qgd2VhdGhlclVybCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIjtcbmNvbnN0IHdlYXRoZXJBcGlLZXkgPSBcIjI4MmQzZmExYWM4NzVkMzk4NDI1Mzg4NDA0MzdiNzhiXCI7XG5jb25zdCB3ZWF0aGVyU2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYmFyXCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnRuXCIpO1xubGV0IHRlbXBlcmF0dXJlU3lzdGVtID0gXCJDXCI7XG5cbmxldCBzZWFyY2hXZWF0aGVyID0gYXN5bmMgZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICB3ZWF0aGVyVXJsICsgcXVlcnkgKyBgJmFwaWtleT0ke3dlYXRoZXJBcGlLZXl9YCxcbiAgICAgICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgICApO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn07XG5cbmxldCBwcm9jZXNzV2VhdGhlckRhdGEgPSBmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgbGV0IGN1cnJlbnRUZW1wZXJhdHVyZTtcbiAgICBsZXQgZmVlbHNMaWtlVGVtcGVyYXR1cmU7XG4gICAgbGV0IG1pblRlbXBlcmF0dXJlO1xuICAgIGxldCBtYXhUZW1wZXJhdHVyZTtcbiAgICBsZXQgcHJlc3N1cmU7XG4gICAgbGV0IHdpbmRTcGVlZDtcbiAgICBsZXQgbG9jYXRpb25OYW1lO1xuICAgIGxldCBsb2NhdGlvbkNvdW50cnk7XG4gICAgbGV0IHdlYXRoZXJUaXRsZTtcbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uO1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0ZW1wZXJhdHVyZVN5c3RlbSA9PSBcIkNcIikge1xuICAgICAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1O1xuICAgICAgICAgICAgZmVlbHNMaWtlVGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTU7XG4gICAgICAgICAgICBtaW5UZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTU7XG4gICAgICAgICAgICBtYXhUZW1wZXJhdHVyZSA9IHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50VGVtcGVyYXR1cmUgPSAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3MykgKyAzMjtcbiAgICAgICAgICAgIGZlZWxzTGlrZVRlbXBlcmF0dXJlID1cbiAgICAgICAgICAgICAgICAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3MykgKyAzMjtcbiAgICAgICAgICAgIG1pblRlbXBlcmF0dXJlID0gKDkgLyA1KSAqICh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczKSArIDMyO1xuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmUgPSAoOSAvIDUpICogKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMpICsgMzI7XG4gICAgICAgIH1cbiAgICAgICAgcHJlc3N1cmUgPSB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlICogMC4wMTQ1MDM3NzM4O1xuICAgICAgICB3aW5kU3BlZWQgPSB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkO1xuICAgICAgICBsb2NhdGlvbk5hbWUgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgICAgICBsb2NhdGlvbkNvdW50cnkgPSB3ZWF0aGVyRGF0YS5zeXMuY291bnRyeTtcbiAgICAgICAgd2VhdGhlclRpdGxlID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgd2VhdGhlckluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IGN1cnJlbnRUZW1wZXJhdHVyZS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgbWluVGVtcGVyYXR1cmU6IG1pblRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgbWF4VGVtcGVyYXR1cmU6IG1heFRlbXBlcmF0dXJlLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiBmZWVsc0xpa2VUZW1wZXJhdHVyZS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgcHJlc3N1cmU6IHByZXNzdXJlLnRvRml4ZWQoMSksXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IHdpbmRTcGVlZCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7IG5hbWU6IGxvY2F0aW9uTmFtZSwgY291bnRyeTogbG9jYXRpb25Db3VudHJ5IH0sXG4gICAgICAgICAgICBwcm9nbm9zaXM6IHdlYXRoZXJUaXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB3ZWF0aGVyRGVzY3JpcHRpb24sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB3ZWF0aGVySW5mb3JtYXRpb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlLXRleHRcIik7XG4gICAgICAgIHRlbXBlcmF0dXJlVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIkVycm9yOiBDYW5ub3QgZmluZCBjaXR5IGVudGVyZWQuIFRyeSBhZ2FpbiFcIjtcbiAgICB9XG59O1xuXG5sZXQgcmVuZGVyV2VhdGhlckRhdGEgPSBmdW5jdGlvbiAod2VhdGhlcikge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmUtdGV4dFwiKTtcbiAgICBjb25zdCBmZWVsc0xpa2VUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVscy1saWtlLXRleHRcIik7XG4gICAgY29uc3QgcHJlc3N1cmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZS10ZXh0XCIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWQtdGV4dFwiKTtcbiAgICBjb25zdCB3ZWF0aGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItdGl0bGVcIik7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi10aXRsZVwiKTtcbiAgICBjb25zdCBjb3VudHJ5VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeS10ZXh0XCIpO1xuICAgIHRlbXBlcmF0dXJlVGV4dC50ZXh0Q29udGVudCA9IHdlYXRoZXIudGVtcGVyYXR1cmUgKyBcIsKwXCI7XG4gICAgZmVlbHNMaWtlVGV4dC50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZSBcIiArIHdlYXRoZXIuZmVlbHNMaWtlICsgXCLCsFwiO1xuICAgIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVyLnByZXNzdXJlfSBwc2lgO1xuICAgIHdpbmRTcGVlZFRleHQudGV4dENvbnRlbnQgPSBgV2luZCBTcGVlZDogJHt3ZWF0aGVyLndpbmRTcGVlZH0gbS9zYDtcbiAgICB3ZWF0aGVyVGl0bGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnByb2dub3NpcztcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuICAgIGxvY2F0aW9uVGl0bGVUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5sb2NhdGlvbi5uYW1lO1xuICAgIGNvdW50cnlUZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5sb2NhdGlvbi5jb3VudHJ5O1xufTtcblxubGV0IGdldHdlYXRoZXJJbWFnZSA9IGFzeW5jIGZ1bmN0aW9uICh3ZWF0aGVyUXVlcnkpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgZ2lwaHlVcmwgKyB3ZWF0aGVyUXVlcnkgKyBgJmFwaWtleT0ke2dpcGh5QXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgICB9XG4gICAgKTtcbiAgICBsZXQgaW1hZ2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxldCBpbWFnZVVybCA9IGF3YWl0IGltYWdlRGF0YS5kYXRhW01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNTApXS5pbWFnZXNcbiAgICAgICAgLm9yaWdpbmFsLnVybDtcbiAgICByZXR1cm4gaW1hZ2VVcmw7XG59O1xuXG5sZXQgcmVuZGVyV2VhdGhlckltYWdlID0gZnVuY3Rpb24gKGltYWdlVXJsKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VVcmx9KWA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xufTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgc2VhcmNoV2VhdGhlcih3ZWF0aGVyU2VhcmNoQmFyLnZhbHVlKTtcbiAgICBsZXQgd2VhdGhlckluZm9ybWF0aW9uID0gcHJvY2Vzc1dlYXRoZXJEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICByZW5kZXJXZWF0aGVyRGF0YSh3ZWF0aGVySW5mb3JtYXRpb24pO1xuICAgIGxldCBpbWFnZVVybCA9IGF3YWl0IGdldHdlYXRoZXJJbWFnZShcbiAgICAgICAgd2VhdGhlckluZm9ybWF0aW9uLnByb2dub3Npcy50b1N0cmluZygpXG4gICAgKTtcbiAgICByZW5kZXJXZWF0aGVySW1hZ2UoaW1hZ2VVcmwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=