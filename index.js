// Your code here
var weatherURL = "https://api.openweathermap.org/data/2.5/weather";
var queryString = "?units=imperial&appid=a8b8566d914e7ee5f3e4973ebeb94b48&q=" + userQuery
var fetchURL = weatherURL + queryString

var weatherAppDiv = document.getElementById('weather-app');
var form = document.querySelector('form');

// end point URL: https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=imperial&appid=a8b8566d914e7ee5f3e4973ebeb94b48


// API Key: a8b8566d914e7ee5f3e4973ebeb94b48

// When the app loads
    // only the input field and search button should be visible
    // already in the HTML

// ON SUBMIT 
form.onsubmit = function(e) {
    e.preventDefault();
    // console.log('click');
    fetch(fetchURL)
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
}
    // app should call the Open Weather API's current weather endpoint using the JS fetch API to obtain weather data based on location entered by the user
    
    // input field's value is reset with each form submission
    // additional searches should not cause additional weather data to be added to the #weather element
    // each subsequent query should produce either a new display or a NOT FOUND message
        // both of these can be achieved by setting the value property of the input field and the innerHTML property of the #weather el to empty strings with each search

// if user entered search term that is found
    // DISPLAY CURRENT WEATHER INFO
    // After retrieving the weather data, display current weather info on the page
        // INCLUDE:
        // city and country code
        // google maps link to location
        // weather icon representing current conditions
        // description of current weather
        // actual temp
        // feels like temp
        // time last updated


// else user entered search term that does not retrieve weather data
    // LOCATION NOT FOUND message
    // notify the user that the location was not found
        // create <h2>Location not found</h2> above the form


