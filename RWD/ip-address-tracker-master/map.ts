import { JSONValue, JSONObject } from "./geo";

declare const L: any;

export function initializeMap(lat:JSONValue, lng: JSONValue): JSONObject {
  const map = document.createElement('div');
  map.id = 'map';
  map.classList.add('map');
  document.getElementsByTagName('main')[0].appendChild(map);
  return L.map('map').setView([lat, lng], 13);
}

export function unInitializeMap() {
  const map = document.getElementById('map') as HTMLDivElement;
  map.remove();
}

export function createMap(lat:JSONValue, lng: JSONValue) {
  // Initialize Map;
  let map = initializeMap(lat, lng);

  // Add a tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; OpenStreetMap contributors'
  }).addTo(map);

  let markerIcon =  L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [23, 56]
  });

  // Add a marker to the map
  let marker = L.marker(
    [lat, lng],
    {icon: markerIcon}
  ).addTo(map);
}

