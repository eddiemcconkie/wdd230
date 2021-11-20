const isFriday = new Date().getDay() == 5

const banner = document.querySelector('.banner')

if (isFriday) {
  banner.style.display = 'block'
} else {
  banner.style.display = 'none'
}
