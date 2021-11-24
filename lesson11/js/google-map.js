const initMap = (lat, lng) => {
  const options = {
    center: { lat, lng },
    zoom: 8,
  }
  const map = new google.maps.Map(document.getElementById('map'), options)
  const marker = new google.maps.Marker({
    position: { lat, lng },
    map: map,
  })
}

function initMapPreston() {
  initMap(42.0963, -111.8766)
}

function initMapFishHaven() {
  initMap(42.0372, -111.396)
}

function initMapSodaSprings() {
  initMap(42.6544, -111.6047)
}
