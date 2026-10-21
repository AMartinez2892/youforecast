fetch("https://geocoding-api.open-meteo.com/v1/search?name=Boston")
  .then(r => r.json())
  .then(data => console.log(data.results[0].latitude));