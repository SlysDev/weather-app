(()=>{const e=document.querySelector("#search-bar");document.querySelector("#search-btn").addEventListener("click",(async()=>{!function(e){const t=document.querySelector(".temperature-text"),o=document.querySelector(".feels-like-text"),n=document.querySelector(".weather-title"),r=document.querySelector(".weather-description"),c=document.querySelector(".country-title");t.textContent=e.temperature+"°",o.textContent="Feels Like "+e.feelsLike+"°",n.textContent=e.prognosis,r.textContent=e.description,c.textContent=e.location}(function(e){let t,o,n,r,c,a;try{return t=e.main.temp-273.15,o=e.main.feels_like-273.15,n=e.main.pressure,r=e.name,c=e.weather.main,a=e.weather.description,{temperature:t.toFixed(1),feelsLike:o.toFixed(1),pressure:n,location:r,prognosis:c,description:a}}catch(e){console.log(e)}}(await async function(e){try{let t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&apikey=282d3fa1ac875d39842538840437b78b",{mode:"cors"}),o=await t.json();return console.log(o),o}catch(e){console.log(e)}}(e.value)))}))})();