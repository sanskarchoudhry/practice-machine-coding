// const express = require("express");
// const app = express();
// const axios = require("axios");
// const PORT = 3000;

// app.use(express.static("weather-widget"));

// const apiKey = process.env.WEATHER_API_KEY;

// app.get("/weather", async (req, res) => {
//   const cityName = req.query.city; // Get the city from the query parameters
//   if (!cityName) {
//     return res.status(400).send("City name is required");
//   }

//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
//     );
//     const data = await response.json();

//     if (data.cod === "404") {
//       return res.status(404).send("City not found");
//     }

//     res.json(data); // Send weather data as JSON response
//   } catch (error) {
//     res.status(500).send("Error fetching weather data");
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
