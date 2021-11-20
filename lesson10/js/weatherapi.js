const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=06b126cabcd76944d0ed3ce59ef52053`

const loadWeather = async () => {
  const weatherData = await fetch(apiUrl)
  const weatherJson = await weatherData.json()
  // console.log(weatherJson)
  const {
    main: { temp },
    weather: {
      0: { icon, description },
    },
  } = weatherJson
  // console.log(temp, iconCode)

  const iconPath = `https://openweathermap.org/img/wn/${icon}.png`

  document.getElementById('currentTemp').textContent = temp
  document.getElementById('imagesrc').textContent = iconPath
  document.getElementById('icon').setAttribute('src', iconPath)
  document.getElementById('icon').setAttribute('alt', description)
}

loadWeather()
