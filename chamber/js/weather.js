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

  // Current weather
  const currentTemp = Math.round(weatherJson.current.temp)
  const currentHumidity = weatherJson.current.humidity
  let currentDescription = weatherJson.current.weather[0].description
  currentDescription = currentDescription.charAt(0).toUpperCase() + currentDescription.slice(1)
  const currentIcon = weatherJson.current.weather[0].icon

  document.getElementById('currentWeatherCondition').innerHTML = currentDescription
  document.getElementById('currentWeatherTemperature').innerHTML = `${currentTemp}&deg;F`
  document.getElementById('currentWeatherHumidity').innerHTML = `Humidity: ${currentHumidity}%`
  document.getElementById('currentWeatherIcon').src = `icons/weather/${iconMap[currentIcon]}.svg`

  // Forecast
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

  // Alerts
  const alerts = weatherJson.alerts || [
    {
      sender_name: 'NWS Tulsa',
      event: 'Heat Advisory',
      start: 1597341600,
      end: 1597366800,
      description:
        '...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.',
      tags: ['Extreme temperature value'],
    },
  ]
  if (alerts.length > 0) {
    document.body.classList.add('no-scroll')

    const alertOverlay = document.createElement('div')
    alertOverlay.classList.add('alert__overlay')

    const alertModal = document.createElement('div')
    alertModal.classList.add('alert__modal')
    alertModal.innerHTML = alerts
      .map(
        (alert) => `
      <div class="alert__header">
        <h2 class="alert__event">${alert.event}</h2>
        <span class="alert__from">from ${alert.sender_name}</span>
      </div>
      <p class="alert__body">${alert.description.replaceAll('\n', '<br />')}</p>
    `
      )
      .join('')
    alertOverlay.appendChild(alertModal)

    const alertClose = document.createElement('button')
    alertClose.classList.add('alert__close')
    // alertClose.innerHTML = '&times;'
    alertClose.innerHTML = '<img src="icons/ui/close.svg" alt="close icon"></img>'
    alertClose.addEventListener('click', () => {
      document.body.classList.remove('no-scroll')
      alertOverlay.remove()
    })
    alertModal.appendChild(alertClose)

    document.body.appendChild(alertOverlay)
  }
}

loadWeather()
