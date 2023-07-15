// Map Stuff
function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 15,
        center: [-97.75206800629019, 30.267686234202444],
    }

    return new mapboxgl.Map(mapOptions);
}
console.log(initializeMap())