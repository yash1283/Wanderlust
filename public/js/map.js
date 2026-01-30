mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 10,
});

const marker = new mapboxgl.Marker({ color: 'black' })
    .setLngLat(listing.geometry.coordinates)   // ✅ use the array directly
    .setPopup(new mapboxgl.Popup({ offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>exact location will be provided after booking</p>`))
    .addTo(map);