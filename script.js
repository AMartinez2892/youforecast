const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", function() {
    const city = cityInput.value;
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
        .then(r => r.json())
        .then(data => {
            if (!data.results || data.results.length === 0) {
                result.textContent = "City not found. Check the spelling and try again.";
                return;
            }
            console.log(data.results[0].latitude);
        });
});