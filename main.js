(()=>{document.querySelector(".country-title");const e=document.querySelector("#search-bar");document.querySelector("#search-btn").addEventListener("click",(async()=>{!function(e){try{let t={temperature:e.main.temp,feelsLike:e.main.feels_like,pressure:e.main.pressure,location:e.name,prognosis:e.weather.main,description:e.weather.description};console.log(t)}catch(e){console.log(e)}}(await async function(e){try{let t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&apikey=282d3fa1ac875d39842538840437b78b",{mode:"cors"}),a=await t.json();return console.log(a),a}catch(e){console.log(e)}}(e.value))}))})();