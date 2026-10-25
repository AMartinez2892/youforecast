const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", function () {
  const city = cityInput.value;
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then((r) => r.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        result.textContent =
          "City not found. Check the spelling and try again.";
        return;
      }
      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;
      const cityName = data.results[0].name;
      const country = data.results[0].country;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      )
        .then((r) => r.json())
        .then((weather) => {
          const temp = weather.current_weather.temperature;
          result.textContent = `${cityName}, ${country}: ${temp}°C`;
        });
    });
});
