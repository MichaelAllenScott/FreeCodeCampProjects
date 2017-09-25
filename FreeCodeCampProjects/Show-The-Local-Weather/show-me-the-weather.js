var currentTemp;
var tempIsFahrenheit = false;

function showMeTheWeather() {
    var position = getCurrentLocation();
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation);
    } else {
        displayErrorMessage();
    }
}

function setLocation(position) {
    var latitude = position.coords.latitude; 
    var longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function getWeather(lat, lon) {
    var currentApiUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;

    $.getJSON( currentApiUrl, function( weatherData ) {
        var weatherDescription = weatherData.weather[0].main;
        var locationName = weatherData.name;
        currentTemp = weatherData.main.temp;

        convertTemperature();

        setHtmlElements(weatherDescription, locationName);
        console.log(weatherDescription);
    });
}

function setHtmlElements(desc, loc) {
    document.getElementById("description-text").innerText = desc;
    document.getElementById("location-text").innerText = loc;
    document.getElementById("temperature-text").innerText = currentTemp;
}

function convertTemperature() {
    if(tempIsFahrenheit){
        tempIsFahrenheit = false;
        currentTemp = Math.round((currentTemp - 32) * 5 / 9);
    } else {
        tempIsFahrenheit = true;
        currentTemp = Math.round(currentTemp * 9 / 5 + 32);
    }
}

function changeTempScale() {
    convertTemperature();
    document.getElementById("temperature-text").innerText = currentTemp;
}


function displayErrorMessage() {
    console.log("hey your stuff is turned off");
}

/*
case 'drizzle':
case 'clouds';
case 'rain':
case 'snow':
case 'clear':
case 'thunderstom':
*/