const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector(".search-btn");
const weatherInfo = document.querySelector(".weather-info"); // Get reference to the weather info element

let cityName = "";

const getCityWeather = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8bf96c46feceb22358ca30e150bc121a`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    const weatherDescription = data.weather[0].description;
    const minTemp = Math.floor(data.main.temp_min - 273.15); // Convert Kelvin to Celsius
    const maxTemp = Math.floor(data.main.temp_max - 273.15);

    // Update the weather info element with fetched data
    weatherInfo.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${weatherDescription}" />
        ${weatherDescription}
      </p>
      <p>Min: ${minTemp}°C Max: ${maxTemp}°C</p>
    `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
  }
};

cityInput.addEventListener("change", (event) => {
  cityName = event.target.value;
});

searchButton.addEventListener("click", () => {
  if (cityName.trim() === "") {
    alert("Please enter a city name.");
  } else {
    getCityWeather(cityName);
  }
});
