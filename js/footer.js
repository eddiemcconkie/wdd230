// Update the copyright year
const year = document.querySelector('#year')
const date = new Date()
year.innerHTML = date.getFullYear()

// Get last modified date
const lastModified = document.querySelector('#lastModified')
const lastModifiedDate = new Date(document.lastModified)
lastModified.innerHTML = lastModifiedDate.toLocaleString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})
