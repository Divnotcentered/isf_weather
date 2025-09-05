async function getWeather(city, elementId) {
  const apiKey = "47c0e035228fb6a96ec4c2a19a70628d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById(elementId).innerText =
      `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (error) {
    document.getElementById(elementId).innerText =
      `Error loading weather for ${city}`;
    console.error(error);
  }
}

// Call for each city
getWeather("Adelaide", "adelaide-weather"); //Australia
getWeather("Kyoto", "kyoto-weather"); //Japan
getWeather("Busan", "busan-weather"); //Korea
getWeather("Winnipeg", "winnipeg-weather"); //Canada
getWeather("Nakhon Pathom", "nakhon-weather"); //Thailand
getWeather("Phnom Penh", "phnom-penh-weather"); //Cambodia