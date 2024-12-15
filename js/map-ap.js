/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat Steenbergstraat 6 gecentreerd staat. De coördinaten zijn: 51.215 en 4.400.
Gebruik hiervoor de documentatie op https://leafletjs.com/
*/

let map = L.map('apMap').setView([51.215, 4.400], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.2155, 4.3995], [51.2145, 4.4005]];

// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.215, 4.400]).addTo(map);
apMarker.bindPopup("<b>Fadi Kantoor Ltd</b><br>Steenbergstraat 6").openPopup();