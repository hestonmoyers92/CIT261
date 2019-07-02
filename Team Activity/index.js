import { getJSON, getLocation } from './utilities.js';

let baseUrl = 
    'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100';

getLocation().then(result => {

    const lat = result.coords.latitude;
    const long = result.coords.latitude;
    
    baseUrl += '&latitude' + lat + '&longitude' + long;
    
    getJSON(baseUrl).then(result => {
        console.log(result);

        var ul = document.getElementById('quakeList');

        result.features.forEach(
        (feature) => {
            var li = document.createElement('li');
            li.textContent = 'Place: ' + feature.properties.place +
            ', Strength: ' + feature.properties.mag;

            ul.appendChild(li);
        }
        );
    });
});