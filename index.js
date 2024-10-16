// end point URL: https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=imperial&appid=a8b8566d914e7ee5f3e4973ebeb94b48

// API Key: a8b8566d914e7ee5f3e4973ebeb94b48

var weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
var apiKey = 'a8b8566d914e7ee5f3e4973ebeb94b48';


var weatherAppDiv = document.getElementById('weather-app');
var form = document.querySelector('form');
var input = document.getElementById('weather-search');
var weatherDisplay = document.getElementById('weather');

// When the app loads
    // only the input field and search button should be visible
    // this is already in the HTML


// ON SUBMIT 
form.onsubmit = function(e) {
    e.preventDefault();

    var userQuery = input.value;
    console.log(userQuery);

    if (!userQuery) return; // if no input, exit
    
    // construct the fetch URL
    var queryString = '?units=imperial&appid=' + apiKey + '&q=' + userQuery;
    var fetchURL = weatherURL + queryString;

    // app should call the Open Weather API's current weather endpoint using the JS fetch API to obtain weather data based on location entered by the user
    fetch(fetchURL)
        .then(function(res) {
            if (!res.ok) { // LOCATION NOT FOUND
                var h2 = document.createElement('h2');
                h2.textContent = 'Location not found';
                weatherAppDiv.appendChild(h2)
                // display "Location not found"
            } else { // LOCATION FOUND
                return res.json(); // if user entered search term that is found, retrieve data
            }
        })
        .then(function(data) { // UPDATE DISPLAY
            console.log(data);
            updateDisplay(data);// call function to display weather info
        })
}
    
    
    // input field's value is reset with each form submission
    // additional searches should not cause additional weather data to be added to the #weather element
    // each subsequent query should produce either a new display or a NOT FOUND message
        // both of these can be achieved by setting the value property of the input field and the innerHTML property of the #weather el to empty strings with each search


// DISPLAY CURRENT WEATHER INFO       
function updateDisplay(data) {
    var city = 'city.name'; // city code
    var country = 'sys.country'; // country code
    var mapLink = ''; // google maps link to location
    var weatherIcon = 'weather[0].icon'; // weather icon representing current conditions
    var weatherDescription = 'weather[0].description'; // description of current weather
    var currentTemp = 'main.temp'; // actual temp
    var feelsLike = 'main.feels_like'; // feels like temp
    var lastUpdated = 'lastupdate.value'; // time last updated   

    weatherDisplay.innerHTML = `
        <h2> </h2>
        <a href="" target="_BLANK"> </a>
        <img src="">
        <p style="text-transform: capitalize;"> </p><br>
        <p> </p>
        <p> </p>
        <p> </p>
    `;
}



// else user entered search term that does not retrieve weather data
    // LOCATION NOT FOUND message
    // notify the user that the location was not found
        // create <h2>Location not found</h2> above the form


