document.querySelector("#submitButton").addEventListener('click', function () {
  async function pogodaRequest() {
    event.preventDefault();
    let city = document.querySelector("#cityName").value;
    let url = "http://api.weatherapi.com/v1/forecast.json?key=1ec2181ff3f44042aa7165921212510&q="+city;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  pogodaRequest().then(data => console.log(data));
  requestPokaz();
  async function requestPokaz () {
    let kontener = document.querySelector('#pogodaContainer');
    let subKontener = document.querySelector('#pogodaContainer');
    let pogoda = await pogodaRequest();
      for(let key in pogoda) {
        kontener.innerHTML = `<img src=${pogoda.current.condition.icon} class="rounded">` + "</br>";
        kontener.innerHTML += `Miasto: ${pogoda.location.name}`+"</br>";
        kontener.innerHTML += `Temperatura: ${pogoda.current.temp_c}` + "°C" + "</br>";
        kontener.innerHTML += `Odczuwalna Temperatura: ${pogoda.current.feelslike_c}` + "°C" + "</br>";
        kontener.innerHTML += `Wilgotnosc: ${pogoda.current.humidity}` + "</br>";
        kontener.innerHTML += `Wiatr: ${pogoda.current.wind_kph}` +" km/h" + "</br>";
        kontener.innerHTML += `<div class=container-fluid d-flex justify-content-center align-content-center flex-direction-row id="pogodaSubContainer">
          <div class="container-fluid d-flex justify-content-center align-content-center flex-direction-column" id="pogodaForecast">
          0:00  
          <img src=${pogoda.forecast.forecastday[0].hour[0].condition.icon} class="rounded"> </br>
          ${pogoda.forecast.forecastday[0].hour[0].temp_c}°C
          </div>
          <div class="container-fluid d-flex justify-content-center align-content-center flex-direction-column" id="pogodaForecast">
          6:00
          <img src=${pogoda.forecast.forecastday[0].hour[6].condition.icon} class="rounded"> </br>
          ${pogoda.forecast.forecastday[0].hour[6].temp_c}°C
        </div>
        <div class="container-fluid d-flex justify-content-center align-content-center flex-direction-column" id="pogodaForecast">
        12:00
        <img src=${pogoda.forecast.forecastday[0].hour[12].condition.icon} class="rounded"> </br>
        ${pogoda.forecast.forecastday[0].hour[12].temp_c}°C
      </div>
      <div class="container-fluid d-flex justify-content-center align-content-center flex-direction-column" id="pogodaForecast">
      18:00
      <img src=${pogoda.forecast.forecastday[0].hour[18].condition.icon} class="rounded"> </br>
      ${pogoda.forecast.forecastday[0].hour[18].temp_c}°C
    </div>
         </div>`;
      }; 
  }
})
