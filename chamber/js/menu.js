const navigation = document.getElementById('navigation')
const menuButton = document.getElementById('menuButton')
const body = document.body

const handleTransparentNav = () => {
  // Sticky nav can't be transparent
  if (window.pageYOffset < 200 && !navigation.classList.contains('non-transparent')) {
    navigation.classList.add('transparent')
  } else {
    navigation.classList.remove('transparent')
  }
}

const resizeWindow = () => {
  navigation.classList.remove('open')
  body.classList.remove('no-scroll')
  handleTransparentNav()
}

window.onload = resizeWindow
window.onscroll = handleTransparentNav
window.onresize = resizeWindow

menuButton.onclick = () => {
  navigation.classList.toggle('open')
  body.classList.toggle('no-scroll')
}
