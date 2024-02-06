//## DAD JOKE API PULL FUNCTIONALITY ##
// - ADD API key and store as a variable
// create function to house API pull
// push response to html with setTextContent in HTML element id="dadJoke"
//display on page load
//add functionality to refresh button

//## MAYO API PULL FUNCTIONALITY ##
// - ADD API key and store as a variable
// Get best URL for pull using postman
// create function to house API pull
//Create HTML elements with relevant ids for this section
// push response to html with setTextContent in HTML element
//display on page load

//## LAKE FINDER API PULL FUNCTIONALITY ##
// add query URL and story in variable
//Come up with solution to bridge gap between lat/long and zip or city
// create function to house API pull
//Create HTML elements with relevant ids for Lake Finder section
// push response to html with setTextContent in HTML element
//display on user location input, load on page load when user location is stored locally


//## WEATHER API PULL FUNCTIONALITY ##

var APIKey = "79c8885bec0fbdcd642a8ba60c566561";
var city;

function getWeatherAPI(){

var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
console.log(data)
});
}
