// Initialiseer de kaart en stel het midden in op Lier, België
var map = L.map('map').setView([51.1313, 4.5706], 13); // Coördinaten voor Lier

// Voeg OpenStreetMap-tegels toe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Voeg een marker toe op Lier
var marker = L.marker([51.1313, 4.5706]).addTo(map);

// Voeg een popup toe aan de marker
marker.bindPopup("Woonplaats").openPopup();


