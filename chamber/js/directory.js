const gridButton = document.getElementById('gridButton')
const listButton = document.getElementById('listButton')
const directoryList = document.getElementById('directoryList')

let prefersGrid = JSON.parse(localStorage.getItem('prefersGrid'))
if (prefersGrid === null) {
  prefersGrid = false
  localStorage.setItem('prefersGrid', 'false')
}

const setGrid = (isGrid) => {
  if (isGrid) {
    gridButton.classList.add('selected')
    listButton.classList.remove('selected')
    directoryList.classList.add('grid')
    localStorage.setItem('prefersGrid', 'true')
  } else {
    gridButton.classList.remove('selected')
    listButton.classList.add('selected')
    directoryList.classList.remove('grid')
    localStorage.setItem('prefersGrid', 'false')
  }
}

setGrid(prefersGrid)

gridButton.onclick = () => setGrid(true)
listButton.onclick = () => setGrid(false)

const loadDirectory = async () => {
  const directoryData = await fetch('data/directory.json')
  const directoryJson = await directoryData.json()
  console.log(directoryJson)
  directoryList.innerHTML = directoryJson
    .map((business) => {
      const { name, website, websiteShort, phone, email, address, logoUrl } = business
      return `
        <li class="directory__item">
        <picture>
          <source srcset="images/directory/${logoUrl}.webp" type="image/webp" />
          <source srcset="images/directory/${logoUrl}.png" type="image/png" />
          <img src="images/directory/${logoUrl}.png" alt="${name} logo" class="directory__logo" />
        </picture>
        <div class="directory__main-info">
          <h3 class="directory__name">${name}</h3>
          <span class="directory__website">
            <a href="${website}">${websiteShort}</a>
          </span>
        </div>
        <ul class="directory__contact-info">
          <li>Phone: ${phone}</li>
          <li>Email: ${email}</li>
          <li>${address}</li>
        </ul>
      </li>
      `
    })
    .join('')
}
loadDirectory()
