const insertLogo = async () => {
  const logoData = await fetch('/lesson04/images/logo.svg')
  const logoText = await logoData.text()
  document.querySelector('.logo').innerHTML = logoText
}
insertLogo()
