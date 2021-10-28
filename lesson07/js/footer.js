const date = new Date()
const dateFormatted = date.toLocaleString('en-UK', { dateStyle: 'full' })

document.getElementById('date').innerHTML = dateFormatted
