// Példa: Lefedettségi térkép beágyazása (Google Maps API-val)
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 47.4979, lng: 19.0402 }, // Budapest középpontja
        zoom: 8,
    });

    // Példa: Jelölők hozzáadása a térképen
    const marker = new google.maps.Marker({
        position: { lat: 47.4979, lng: 19.0402 },
        map: map,
        title: "Telekom Optikai Hálózat",
    });
}

// Google Maps API betöltése
function loadScript() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);
}

window.onload = loadScript;