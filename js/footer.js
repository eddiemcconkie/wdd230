// Update the copyright year
const date = new Date()
const fullYear = date.getFullYear()

// Get last modified date
const lastModifiedDate = new Date(document.lastModified)
const lastModified = lastModifiedDate.toLocaleString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})

document.querySelector('footer').innerHTML = `<span>
&copy; <span id="year">${fullYear}</span> |
<a href="https://github.com/eddiemcconkie">Eddie McConkie</a> | Utah |
<a href="https://www.byui.edu/online">BYU-I Online Learning</a>
<br />
Last Updated: <span id="lastModified">${lastModified}</span>
</span>`
