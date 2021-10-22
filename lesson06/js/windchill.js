const temperature = parseInt(document.getElementById('temperature').innerText)
const windSpeed = parseInt(document.getElementById('windSpeed').innerText)
const windChill = document.getElementById('windChill')

let windChillCalculated

if (temperature <= 50 && windSpeed > 3) {
  windChillCalculated =
    Math.round(
      35.74 +
        0.6215 * temperature -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ) + ` &deg;F`
} else {
  windChillCalculated = 'N/A'
}

windChill.innerHTML = windChillCalculated
