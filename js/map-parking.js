// Initialize the map
const mapParking = L.map('mapP1').setView([51.215, 4.400], 16); // Updated coordinates for Steenbergstraat 6

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapParking);

// Custom hexagonal marker icon
const hexMarkerIcon = L.icon({
  iconUrl: 'assets/image/logo.png', // Replace with the hexagonal image file path
  iconSize: [30, 30], // Size of the icon
  iconAnchor: [15, 15], // Anchor point for the icon
  popupAnchor: [0, -15] // Position of the popup relative to the icon
});

// Add the custom marker
L.marker([51.215, 4.400], { icon: hexMarkerIcon }) // Updated coordinates for Steenbergstraat 6
    .addTo(mapParking)
    .bindPopup('<b>Parking Location</b><br>Here is the parking.')
    .openPopup();
