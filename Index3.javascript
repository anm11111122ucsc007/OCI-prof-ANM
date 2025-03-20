document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }
      
      const cityName = data.name;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const weatherDescription = data.weather[0].description;

      document.getElementById("cityName").textContent = cityName;
      document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
      document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
      document.getElementById("weatherDescription").textContent = `Description: ${weatherDescription}`;

      document.getElementById("weatherInfo").style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});
