const menuButton = document.querySelector('#menuButton')
const nav = document.querySelector('nav ul')

menuButton.addEventListener('click', () => {
  nav.classList.toggle('closed')
})

window.addEventListener('resize', (e) => {
  if (window.innerWidth < 35 * 16 /* 35rem */) {
    nav.classList.add('closed')
  }
})

// closeOverlay is a fixed element covering the whole screen, allowing you to close the menu by clicking anywhere off the menu
const closeOverlay = document.querySelector('#closeOverlay')
closeOverlay.addEventListener('click', () => {
  nav.classList.add('closed')
})
