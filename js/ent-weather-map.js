// Map Stuff
function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 15,
        center: [-98.4916, 29.4260],
    }
    return new mapboxgl.Map(mapOptions);
}

// console.log(initializeMap())
const map = initializeMap()


//////


// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// let myUrl = 'https://api.openweathermap.org/data/2.5/forecast'

// Simple way to create URL for request based on coordinates
function getWeatherURL(lat, lon) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

const WEATHER_COORDINATES = ['29.4260', '-98.4861'];


let URL = getWeatherURL(...WEATHER_COORDINATES);
console.log(URL)

//log URL

console.log(getWeatherURL(...WEATHER_COORDINATES), WEATHER_COORDINATES[1]);


//log full response from API

$.ajax(URL).done(data => {
    console.log(data);
}).fail(console.error);


// log various parts of the API

$.ajax(URL).done(data => {
    // TODO: log the city name
    console.log(data.city.name);
    // TODO: log the first three-hour forecast block
    console.log(data.list[0]);
    // TODO: log the humidity for the first three-hour block
    console.log(data.list[0].main.humidity);
}).fail(console.error);


//  log the humidity for all days
// 8 because 7 days in a week

$.ajax(getWeatherURL(...WEATHER_COORDINATES))
    .done((data) => {

        data.list.forEach((day, index) => {
            if (index % 8 === 0) {
                console.log(day.main.humidity);
            }
        });

        // OR

        for (let i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i].main.humidity);
        }

    })
    .fail(console.error);


// log the min and max temp for each day

$.ajax(getWeatherURL(...WEATHER_COORDINATES))
    .done(data => {
        console.log(data);
        const minMaxTemps = returnMinMaxTemps(data);
        minMaxTemps.forEach(minMaxTemp => {
            console.log(minMaxTemp);
        });
    })
    .fail(console.error);

///
$.ajax(URL).done((response) => {
    console.log(response);
    console.log("Response received");
    renderWeather(response.list)
});

function renderWeather(WeatherDataArray) {
    console.log(WeatherDataArray);
    const $tblBody = $('#insert-conditions');
    $tblBody.html("")
    // start up loop
    for (let i = 0; i < WeatherDataArray.length; i += 8) {
        // adds table data
        $('#insert-conditions').append(`
       
              <tr>
              
                <td>${WeatherDataArray[i].dt_txt}</td>
                
                <td> <!--gets icon from url and loops through json -->
                    <img src="https://openweathermap.org/img/wn/${WeatherDataArray[i].weather[0].icon}@2x.png" class="weather-icon">
                    ${WeatherDataArray[i].weather[0].description}
                </td>
              
                <td>${WeatherDataArray[i].main.humidity}</td>
                <td>${WeatherDataArray[i].main.temp}</td>
                
              </tr>
                `)
    }
};

//// input search function

//
let searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', function (e) {
    /////

    // console log element
    e.preventDefault();
    // console.log("hi my GUY");
    // console.log(searchForm);
    // grab input value from form
    let searchValue = document.getElementById("search").value;
    console.log(searchValue);
    let lat
    let lng
    //use geocode
    geocode(searchValue, MAPBOX_TOKEN).then(function (results) {
        marker.remove()
        lat = results[0];
        lng = results[1];

        createMarker([results[0], results[1]])
        // use value make api call for lat and lng
        console.log(results);
        map.setCenter(results)
    })
    console.log(lng);
    console.log(lat);


//////
    // update marker

    // console.log('search btn clicked')
    // searchWeather(map)
});


//// removeAllMarkers Function
function removeAllMarkers() {
    // markers saved here
    let currentMarkers = [];

// tmp marker
    let oneMarker = new mapboxgl.Marker(currentMarkerDiv)
        .setLngLat(marker.geometry.coordinates)
        .addTo(mapboxMap);

// save tmp marker into currentMarkers
    currentMarkers.push(oneMarker);


// remove markers
    if (currentMarkers !== null) {
        for (let i = currentMarkers.length - 1; i >= 0; i--) {
            currentMarkers[i].remove();
        }
    }
}

function searchWeather(map) {
    const inputValue = $('input').val();
    geocode(inputValue, MAPBOX_TOKEN)
        .then((data) => {
            map.setCenter(data);
            let newURL = getWeatherURL(data[1], data[0]);
            $.ajax(newURL).done(data => {
                renderWeather(data.list);
                console.log(data)
                // createMarker(data)
            }).fail(console.error);
        })
}

/// marker function
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);


function createMarker(arr) {
    marker = new mapboxgl.Marker()
            .setLngLat(arr)
            .addTo(map);
    return marker
}

// Set an event listener
marker.on('dragend', (e) => {
    console.log(`A click event has occurred at ${e.lngLat}`);
    console.log(e.target._lngLat)
    const lng = e.target._lngLat.lng;
    const lat = e.target._lngLat.lat;
    const coords = {lng, lat}
    const newUrl = getWeatherURL(lat, lng)
    $.ajax(newUrl).done(data => {
        renderWeather(data.list)
        // createMarker.setLngLat([lng,lat])
    })

});


