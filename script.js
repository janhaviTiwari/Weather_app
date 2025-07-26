// Fetch and display weather data using WeatherAPI.com
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  
  const apiKey =  "4033cd63a14f49aa8b213700251807";

  // Check if user entered a city name
  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  // Construct API URL
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    console.log("API Request URL:", url);

    const response = await fetch(url);

    // If response is not OK, throw error
    if (!response.ok) throw new Error("City not found or API error");

    const data = await response.json();

    // Extract and display data
    result.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
      <p><strong>Condition:</strong> ${data.current.condition.text}</p>
      <img src="https:${data.current.condition.icon}" alt="weather icon" />
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}