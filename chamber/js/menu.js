const navigation = document.getElementById('navigation')
const menuButton = document.getElementById('menuButton')
const body = document.body

const toggleNav = () => {
  if (window.pageYOffset < 200) {
    navigation.classList.add('transparent')
  } else {
    navigation.classList.remove('transparent')
  }
}

const toggleMobile = () => {
  navigation.classList.remove('open')
  body.classList.remove('no-scroll')
  if (window.innerWidth < 48 * 16 /* 48rem */) {
    navigation.classList.add('mobile')
  } else {
    navigation.classList.remove('mobile')
    toggleNav()
  }
}

window.onload = toggleMobile
window.onscroll = toggleNav
window.onresize = toggleMobile

menuButton.onclick = () => {
  navigation.classList.toggle('open')
  body.classList.toggle('no-scroll')
}
