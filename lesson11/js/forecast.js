const loadForecast = async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=06b126cabcd76944d0ed3ce59ef52053`

  const forecastData = await fetch(apiUrl)
  const forecastJson = await forecastData.json()

  const forecast = forecastJson.list.filter((item) => item.dt_txt.includes('18:00:00'))

  const forecastTable = document.getElementById('forecast')
  const trHead = document.createElement('tr')
  const trBody = document.createElement('tr')
  forecastTable.appendChild(trHead)
  forecastTable.appendChild(trBody)

  forecast.forEach((day) => {
    const date = new Date(day.dt_txt)
    const dayOfWeek = date.toLocaleString('default', { weekday: 'short' })

    const th = document.createElement('th')
    th.innerText = dayOfWeek
    trHead.appendChild(th)

    const icon = day.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`
    const description = day.weather[0].description
    const temp = day.main.temp

    const td = document.createElement('td')
    td.innerHTML = `
      <img src="${iconUrl}" alt="${description}">
      <span>${temp}&deg;F</span>
    `
    trBody.appendChild(td)
  })
}

loadForecast()
