// end point URL: https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=imperial&appid=a8b8566d914e7ee5f3e4973ebeb94b48

// API Key: a8b8566d914e7ee5f3e4973ebeb94b48

var weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
var apiKey = 'a8b8566d914e7ee5f3e4973ebeb94b48';


var weatherAppDiv = document.getElementById('weather-app');
var form = document.querySelector('form');
var input = document.getElementById('weather-search');
const weatherDisplay = document.getElementById('weather');

// When the app loads
    // only the input field and search button should be visible
    // this is already in the HTML


// ON SUBMIT 
form.onsubmit = function(e) {
    e.preventDefault();

    var userQuery = input.value.trim();
    console.log(userQuery);

    if (!userQuery) return; // if no input, exit

    // construct the fetch URL
    var queryString = '?units=imperial&appid=' + apiKey + '&q=' + userQuery;
    var fetchURL = weatherURL + queryString;

    // app should call the Open Weather API's current weather endpoint using the JS fetch API to obtain weather data based on location entered by the user
    fetch(fetchURL)
        .then(function(response) {
            if (!response.ok) { // LOCATION NOT FOUND
                if (response.status === 404) {
                    // notify the user that the location was not found
                    // create <h2>Location not found</h2> above the form
                    var h2 = document.createElement('h2');
                    h2.textContent = 'Location not found';
                    input.value = ''; // clear inpur value
                    weatherDisplay.innerHTML = ''; // clear
                    weatherDisplay.appendChild(h2); // display "Location not found"
                }
                return; // exit if not found
            }  // LOCATION FOUND
            return response.json(); // if user entered search term that is found, retrieve data
        })
        .then(function(data) { // UPDATE DISPLAY
            if (data) {
                console.log(data);
                updateDisplay(data); // call function to display weather info
                input.value = ''; // clear input value
            }
    });
}
    
    
    // input field's value is reset with each form submission
    // additional searches should not cause additional weather data to be added to the #weather element
    // each subsequent query should produce either a new display or a NOT FOUND message
        // both of these can be achieved by setting the value property of the input field and the innerHTML property of the #weather el to empty strings with each search


// DISPLAY CURRENT WEATHER INFO       
function updateDisplay(data) {
    weatherDisplay.innerHTML = ''; // clear

    var city = data.name; // city code
    var country = data.sys.country; // country code
    var mapLink = ''; // google maps link to location
    var weatherIcon = data.weather[0].icon; // weather icon representing current conditions
    var weatherDescription = data.weather[0].description; // description of current weather
    var currentTemp = data.main.temp; // actual temp
    var feelsLike = data.feels_like; // feels like temp
    var lastUpdated = ''; // time last updated   

    var locationDisplay = document.createElement('h2');
    locationDisplay.textContent = city + ', ' + country;
    weatherDisplay.appendChild(locationDisplay);

    var mapLinkDisplay = document.createElement('a');
    mapLinkDisplay.textContent = mapLink;
    weatherDisplay.appendChild(mapLinkDisplay);
        // <a href="" target="_BLANK"/a>

    var weatherIconDisplay = document.createElement('img');
    weatherIconDisplay.src = weatherIcon;
    weatherIconDisplay.innerText = 'Click to view map';
    weatherDisplay.appendChild(weatherIconDisplay);
        // <img src="">

    var weatherDescriptionDisplay = document.createElement('p');
    weatherDescriptionDisplay.textContent = weatherDescription;
    weatherDisplay.appendChild(weatherDescriptionDisplay);
        // <p style="text-transform: capitalize;"> </p><br>

    var currentTempDisplay = document.createElement('p');
    currentTempDisplay.textContent = currentTemp;
    weatherDisplay.appendChild(currentTempDisplay);
        // <p>Current: 53.74° F</p>

    var feelsLikeDisplay = document.createElement('p');
    feelsLikeDisplay.textContent = feelsLike;
    weatherDisplay.appendChild(feelsLikeDisplay);
        // <p>Feels like: 51.69° F</p><br>

    var lastUpdatedDisplay = document.createElement('p');
    lastUpdatedDisplay.textContent = lastUpdated;
    weatherDisplay.appendChild(lastUpdatedDisplay);
        // <p>Last updated: 11:00 PM</p>
    ;
}