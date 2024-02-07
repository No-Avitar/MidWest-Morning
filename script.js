//## DAD JOKE API PULL FUNCTIONALITY ##
// - ADD API key and store as a variable
// create function to house API pull
// push response to html with setTextContent in HTML element id="dadJoke"
//display on page load
//add functionality to refresh button

var dJKey = "3zB158Myo64nPMvQH+watQ==SGjGrrL2KLW7qDQy";
var dJEl = document.getElementById('dadJoke');

var limit = 1
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
    headers: { 'X-Api-Key': dJKey},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        dJEl.textContent = result[0].joke;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});


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

function saveCity() {
    var userInput = document.getElementById("city").value;

    if (userInput !== "") {
        localStorage.setItem("userCity", userInput);
        city = localStorage.getItem("userCity");
        //console.log(city);
    } else {
        alert("Please enter a valid city");
    }
};

function getWeatherAPI(){

var queryURL ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var cityHeader = document.getElementById("location");
var cityTemperature = document.getElementById("temperature");
var cityWind = document.getElementById("wind");
var cityHumidity = document.getElementById("humidity");
var weatherCodeGif = document.getElementById("weatherGif");


fetch(queryURL)
.then(function (response){
    return response.json();
})
.then(function (data){
console.log(data)


var weatherDate = data.dt;
//console.log(weatherDate);
var convertDate = new Date(weatherDate * 1000);
var cleanDate = convertDate.toDateString();
cityHeader.textContent = data.name + ": " + cleanDate;
var tempKelvin = data.main.temp;
var tempFarenheit = (tempKelvin - 273.15) * 9 / 5 + 32;
var cleanTempFarenheit = parseInt(tempFarenheit);
cityTemperature.textContent = "Temperature: " + cleanTempFarenheit + "°F";
var windMS = data.wind.speed;
var windMPH = windMS * 2.237;
var cleanWind = parseInt(windMPH);
cityWind.textContent = "Wind: " + cleanWind + " MPH";
cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";

var weatherIconId = data.weather[0].icon;
console.log(weatherIconId);
if (weatherIconId == "01d"){
    weatherCodeGif.src = "./";
} else if (weatherIconId == "01n") {
    weatherCodeGif.src = "./assets/weather_gifs/01n.gif"; 
}
});
}

$('#dayAndTime').text(dayjs().format('dddd, MMMM D'))