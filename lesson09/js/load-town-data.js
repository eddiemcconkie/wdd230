const townEl = document.getElementById('towns')

const townDataUrl = 'https://byui-cit230.github.io/weather/data/towndata.json'

const loadTownData = async () => {
  const townData = await fetch(townDataUrl)
  const townDataJson = await townData.json()
  const towns = townDataJson.towns
  const displayedTowns = ['Fish Haven', 'Preston', 'Soda Springs']
  const townHtml = displayedTowns
    .map((town) => {
      const {
        photo,
        name,
        motto,
        yearFounded,
        currentPopulation,
        averageRainfall
      } = towns.find((t) => t.name === town)
      return `
      <li class="town">
      <div class="img-container">
        <img src="images/${photo}" alt="${name}" width="400" height="400">
        <h3 class="large-only">${name}</h3>
      </div>
        <div class="town-data">
          <h3 class="medium-and-down">${name}</h3>
          <p><strong><em>${motto}</em></strong></p>
          <p>Year Founded: ${yearFounded}</p>
          <p>Population: ${currentPopulation}</p>
          <p>Annual Rain Fall: ${averageRainfall}</p>
        </div>
      </li>
      `
    })
    .join('')

  townEl.innerHTML = townHtml
}

loadTownData()
