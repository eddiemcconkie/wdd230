const townEl = document.getElementById('towns')

const townDataUrl = 'https://byui-cit230.github.io/weather/data/towndata.json'

const links = {
  'Preston': 'preston.html',
  'Soda Springs': 'soda-springs.html',
  'Fish Haven': 'fish-haven.html',
}

const loadTownData = async () => {
  const townData = await fetch(townDataUrl)
  const townDataJson = await townData.json()
  const towns = townDataJson.towns
  const displayedTowns = ['Fish Haven', 'Preston', 'Soda Springs']
  const townHtml = displayedTowns
    .map((town) => {
      const { photo, name, motto, yearFounded, currentPopulation, averageRainfall } = towns.find(
        (t) => t.name === town
      )
      const link = links[name]
      // return `
      // <li class="town">
      //   <div class="img-container">
      //     <img src="images/placeholder.jpg" data-src="images/${photo}" alt="${name}" width="350" height="350">
      //     <h3 class="large-only"><a href="${link}">${name}</a></h3>
      //   </div>
      //   <div class="town-data">
      //     <h3 class="medium-and-down"><a href="${link}">${name}</a></h3>
      //     <p><strong><em>${motto}</em></strong></p>
      //     <p>Year Founded: ${yearFounded}</p>
      //     <p>Population: ${currentPopulation}</p>
      //     <p>Annual Rain Fall: ${averageRainfall}</p>
      //   </div>
      // </li>
      // `
      return `
      <li class="town">
        <div class="town-img-container" style="--image-url: url(../images/${photo.replace(
          'jpg',
          'webp'
        )})">
          <h3 class="large-only"><a href="${link}">${name}</a></h3>
        </div>
        <div class="town-data">
          <h3 class="medium-and-down"><a href="${link}">${name}</a></h3>
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

  const townImages = document.querySelectorAll('[data-src]')
  addLazyLoad(townImages)
}

loadTownData()
