//## DAD JOKE API PULL FUNCTIONALITY ##
// - ADD API key and store as a variable
// create function to house API pull
// push response to html with setTextContent in HTML element id="dadJoke"
//display on page load
//add functionality to refresh button
$('#dayAndTime').text(dayjs().format('dddd, MMMM D, h:mm A'))
var dJKey = "3zB158Myo64nPMvQH+watQ==SGjGrrL2KLW7qDQy";
var dJEl = document.getElementById('dadJoke');

var limit = 1
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
    headers: { 'X-Api-Key': dJKey },
    contentType: 'application/json',
    success: function (result) {
        //console.log(result);
        dJEl.textContent = result[0].joke;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }

});

// ##################################
//## WEATHER API PULL FUNCTIONALITY ##
// ##################################

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

function getWeatherAPI() {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    var cityHeader = document.getElementById("location");
    var cityTemperature = document.getElementById("temperature");
    var cityWind = document.getElementById("wind");
    var cityHumidity = document.getElementById("humidity");
    var cityDescription = document.getElementById("conditionsDescription");
    var weatherCodeGif = document.getElementById("weatherGif");
var weatherBox = document.getElementById("weatherBox");
var weatherPlaceholder = document.getElementById("placeholder");

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)


            var weatherDate = data.dt;
            //console.log(weatherDate);
            var convertDate = new Date(weatherDate * 1000);
            var cleanDate = convertDate.toDateString();
            cityHeader.textContent = "Current Weather in " + data.name;
            var tempKelvin = data.main.temp;
            var tempFarenheit = (tempKelvin - 273.15) * 9 / 5 + 32;
            var cleanTempFarenheit = parseInt(tempFarenheit);
            cityTemperature.textContent = "Temperature: " + cleanTempFarenheit + "°F";
            var windMS = data.wind.speed;
            var windMPH = windMS * 2.237;
            var cleanWind = parseInt(windMPH);
            cityWind.textContent = "Wind: " + cleanWind + " MPH";
            cityHumidity.textContent = "Humidity: " + data.main.humidity + "%";

            var weatherDescriptionId = data.weather[0].description;
            //console.log(weatherDescriptionId);

            cityDescription.textContent = "Conditions: " + weatherDescriptionId;
weatherBox.style.display = 'flex'
weatherPlaceholder.style.display = 'none'
            var weatherIconId = data.weather[0].icon;
            //console.log(weatherIconId);
            if (weatherIconId == "01d") {
                weatherCodeGif.src = "./assets/weather_gifs/01d.gif";
            } else if (weatherIconId == "01n") {
                weatherCodeGif.src = "./assets/weather_gifs/01n.gif";
            } else if (weatherIconId == "02d") {
                weatherCodeGif.src = "./assets/weather_gifs/02d.gif";
            } else if (weatherIconId == "02n") {
                weatherCodeGif.src = "./assets/weather_gifs/02n.gif";
            } else if (weatherIconId == "03d") {
                weatherCodeGif.src = "./assets/weather_gifs/03d.gif";
            } else if (weatherIconId == "03n") {
                weatherCodeGif.src = "./assets/weather_gifs/03n.gif";
            } else if (weatherIconId == "04d") {
                weatherCodeGif.src = "./assets/weather_gifs/04d.gif";
            } else if (weatherIconId == "04n") {
                weatherCodeGif.src = "./assets/weather_gifs/04n.gif";
            } else if (weatherIconId == "09d") {
                weatherCodeGif.src = "./assets/weather_gifs/09d.gif";
            } else if (weatherIconId == "09n") {
                weatherCodeGif.src = "./assets/weather_gifs/09n.gif";
            } else if (weatherIconId == "10d") {
                weatherCodeGif.src = "./assets/weather_gifs/10d.gif";
            } else if (weatherIconId == "10n") {
                weatherCodeGif.src = "./assets/weather_gifs/10n.gif";
            } else if (weatherIconId == "11d") {
                weatherCodeGif.src = "./assets/weather_gifs/11d.gif";
            } else if (weatherIconId == "11n") {
                weatherCodeGif.src = "./assets/weather_gifs/11m.gif";
            } else if (weatherIconId == "13d") {
                weatherCodeGif.src = "./assets/weather_gifs/13d.gif";
            } else if (weatherIconId == "13n") {
                weatherCodeGif.src = "./assets/weather_gifs/13n.gif";
            } else if (weatherIconId == "50d") {
                weatherCodeGif.src = "./assets/weather_gifs/50d.gif";
            } else if (weatherIconId == "50n") {
                weatherCodeGif.src = "./assets/weather_gifs/50n.gif";
            }
            return data.coord
        })
        .then(function(coords){
            console.log(coords.lat);
            console.log(coords.lon);
            
            const queryLakeURL = "http://services.dnr.state.mn.us/api/lakefinder/by_point/v1/?lat=" + coords.lat + "&lon=" + coords.lon + "&radius=16093.44";

            console.log(queryLakeURL);

            fetch(queryLakeURL)
            .then(function(response2) {
                //console.log(response2);
                return response2.json();
                
            })
            .then(function (data2){
                console.log(data2)  
                
                
            })

        })

        
}

//## LAKE FINDER API PULL FUNCTIONALITY ##
// add query URL and story in variable
//Come up with solution to bridge gap between lat/long and zip or city
// create function to house API pull
//Create HTML elements with relevant ids for Lake Finder section
// push response to html with setTextContent in HTML element
//display on user location input, load on page load when user location is stored locally


console.log(latitude);
console.log(longitude);





let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  slides[slideIndex].style.display = 'flex';
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function autoChangeSlide() {
    changeSlide(1);
}

setInterval(autoChangeSlide, 5000);

showSlide(slideIndex);