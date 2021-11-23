function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    return (
      Math.round(
        35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16)
      ) + ` &deg;F`
    )
  }
  return 'N/A'
}

const loadWeatherSummary = async (cityId) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=06b126cabcd76944d0ed3ce59ef52053`

  const weatherData = await fetch(apiUrl)
  const weatherJson = await weatherData.json()

  const temperature = weatherJson.main.temp
  const windSpeed = weatherJson.wind.speed
  const windChill = calculateWindChill(temperature, windSpeed)
  const description = weatherJson.weather[0].description
  const high = weatherJson.main.temp_max
  const humidity = weatherJson.main.humidity
  const icon = weatherJson.weather[0].icon

  const weatherSummary = document.getElementById('weatherSummary')
  weatherSummary.innerHTML = `
    Currently: ${temperature} &deg;F
    <br />
    High: ${high} &deg;F
    <br />
    Wind Chill: ${windChill}
    <br />
    Humidity: ${humidity}%
    <br />
    Wind Speed: ${windSpeed} mph
    <br />
    Condition: ${description}
  `
}
