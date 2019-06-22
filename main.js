document.getElementById('location-btn').addEventListener('click',getLocation);

document.getElementById('state').addEventListener('click',getLocationName);
var locationData
var coordinates

function getLocation() {
    navigator.geolocation.getCurrentPosition((pos)=> {
        coordinates = pos.coords
    });
     return coordinates;
}
    var latitude = coordinates.latitude
    var longitude = coordinates.longitude

    function getLocationName() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=metric&appid=c2a2d62377d3dabd069b27391003a169`)
        .then((data)=> data.json())
        .then((e)=> locationData = e )
        document.getElementById('city-name').innerHTML = locationData.name;
        document.getElementById('city-temp').innerHTML = locationData.main.temp + '°C';
        return locationData;
    }

