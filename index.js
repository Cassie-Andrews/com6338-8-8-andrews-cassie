// Your code here

window.onload = function() {
    // When the app loads, only the input field and search button should be visible
        // create form with input field and submit button
}

// ON SUBMIT 
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


