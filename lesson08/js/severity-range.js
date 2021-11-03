const stormSeverity = document.getElementById('stormSeverity')
const severityRange = document.getElementById('severityRange')

const updateSeverity = (value) => {
  stormSeverity.innerText = value
}
severityRange.oninput = () => updateSeverity(severityRange.value)
severityRange.onchange = () => updateSeverity(severityRange.value)

severityRange.value = 5
updateSeverity(severityRange.value)
