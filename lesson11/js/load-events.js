const eventsEl = document.querySelector('#events')

const loadEvents = async (townName) => {
  const today = new Date()

  const townData = await fetch(`https://byui-cit230.github.io/weather/data/towndata.json`)
  const townDataJson = await townData.json()
  const town = townDataJson.towns.find((town) => town.name === townName)
  const events = town.events

  let thisYearEvents = []
  let nextYearEvents = []

  events.forEach((event) => {
    const eventDateString = event.split(':')[0]
    const eventDate = new Date(`${eventDateString}, ${today.getFullYear()}`)

    if (eventDate >= today) {
      thisYearEvents.push(event)
    } else {
      nextYearEvents.push(event)
    }
  })

  const orderedEvents = [...thisYearEvents, ...nextYearEvents]
  // console.log(orderedEvents)
  eventsEl.innerHTML = orderedEvents
    .map((event) => `<li class="event-list-item">${event}</li>`)
    .join('')
}
