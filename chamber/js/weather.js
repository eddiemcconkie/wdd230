const WeatherApiUrl =
  'https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8910&exclude=minutely,hourly&units=imperial&appid=06b126cabcd76944d0ed3ce59ef52053'

const iconMap = {
  '01d': 'clear-sky-day',
  '01n': 'clear-sky-night',
  '02d': 'few-clouds-day',
  '02n': 'few-clouds-night',
  '03d': 'scattered-clouds',
  '03n': 'scattered-clouds',
  '04d': 'broken-clouds',
  '04n': 'broken-clouds',
  '09d': 'shower-rain',
  '09n': 'shower-rain',
  '10d': 'rain-day',
  '10n': 'rain-night',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'mist',
  '50n': 'mist',
}

const loadWeather = async () => {
  const weatherData = await fetch(WeatherApiUrl)
  const weatherJson = await weatherData.json()

  const currentTemp = Math.round(weatherJson.current.temp)
  const currentHumidity = weatherJson.current.humidity
  let currentDescription = weatherJson.current.weather[0].description
  currentDescription = currentDescription.charAt(0).toUpperCase() + currentDescription.slice(1)
  const currentIcon = weatherJson.current.weather[0].icon

  document.getElementById('currentWeatherCondition').innerHTML = currentDescription
  document.getElementById('currentWeatherTemperature').innerHTML = `${currentTemp}&deg;F`
  document.getElementById('currentWeatherHumidity').innerHTML = `Humidity: ${currentHumidity}%`
  document.getElementById('currentWeatherIcon').src = `icons/weather/${iconMap[currentIcon]}.svg`

  const daily = weatherJson.daily.slice(1, 4)
  document.querySelectorAll('.weather__forecast').forEach((forecast, index) => {
    const day = daily[index]
    const dayName = new Date(day.dt * 1000).toLocaleDateString('default', { weekday: 'short' })
    const dayIcon = day.weather[0].icon
    const dayTemp = Math.round(day.temp.day)
    forecast.querySelector('.weather__header').innerHTML = dayName
    forecast.querySelector('.weather__icon').src = `icons/weather/${iconMap[dayIcon]}.svg`
    forecast.querySelector('.weather__temperature').innerHTML = `${dayTemp}&deg;F`
  })
}

loadWeather()
