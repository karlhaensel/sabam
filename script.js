// Setup Service Worker (preparation for later on, left out for now)
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("sw.js")
//     .then(() => console.log("Service Worker registered"))
//     .catch((err) => console.error("Service Worker registration failed:", err));
// }

// Setup test map (Hamburg, meine Perle)
var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("Oh, <b>beautiful</b> choice here at " + e.latlng.toString())
    .openOn(map);
}

const map = L.map("map").setView([53.550556, 9.993333], 12);
map.on("click", onMapClick);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const GEOMATIKUM_COORD = [53.56827250333696, 9.974483470522147];
const geomatikumMarker = L.marker(GEOMATIKUM_COORD).addTo(map);
geomatikumMarker.bindPopup("GEOMATIKUM").openPopup();
const geomatikumZone = L.circle([53.56827250333696, 9.974483470522147], {
  color: "red",
  fillColor: "rgb(59, 129, 32)",
  fillOpacity: 0.5,
  radius: 500, // metres
}).addTo(map);
geomatikumZone.bindPopup("Geomatikum <b>zone</b>");

const START_COORD = [53.55376219840088, 9.991941297506065];
const startPopup = L.popup()
  .setLatLng(START_COORD)
  .setContent("GO! GO! GOOO!")
  .openOn(map);
