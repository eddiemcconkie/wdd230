const cardsEl = document.querySelector('.cards')
const requestURL =
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'

const loadProphets = async () => {
  const prophetsData = await fetch(requestURL)
  const prophetsJson = await prophetsData.json()
  const prophets = prophetsJson.prophets

  cardsEl.innerHTML = prophets
    .map((prophet) => {
      const fullName = prophet.name + ' ' + prophet.lastname
      return `
      <div class="card">
        <h2>${fullName}</h2>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="${fullName}" />
      </div>`
    })
    .join('')
}

loadProphets()
