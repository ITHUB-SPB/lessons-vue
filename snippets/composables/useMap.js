import L from "leaflet"

const useMap = (latitude, longitude, idMap) => {
  const zoom = 13;
  
  // To position the map at the indicated location
  const map = L.map(idMap).setView([latitude, longitude], zoom);

  // To display the corresponding map
  L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
  }).addTo(map);

  // To display a marker on the map to indicate the specified location
  L.marker([latitude, longitude]).addTo(map);
  
  // We return the map object created by Leaflet
  return map;
}

export default useMap;