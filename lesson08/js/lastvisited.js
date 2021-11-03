const now = new Date()
let lastVisited = now
const lastVisitedString = localStorage.getItem('lastVisited')
if (lastVisitedString) {
  lastVisited = new Date(lastVisitedString)
}

localStorage.setItem('lastVisited', now.toString())

const days = Math.floor((now - lastVisited) / (1000 * 60 * 60 * 24))
document.getElementById('lastVisited').innerText = `Last visited ${
  days > 0 ? days + ' days ago' : 'today'
}`
