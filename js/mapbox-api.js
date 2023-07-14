$(() => {
    // Global var's

    const map = initializeMap()

    // functions
    // function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        let mapOptions = {
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            zoom: 10, // starting zoom
            center: [-98.4916, 29.4252] // [lng, lat]
        };
        return new mapboxgl.Map(mapOptions);

    }


    //events


    //runs when the program loads


})



