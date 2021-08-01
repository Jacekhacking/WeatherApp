var apiKey = "4ac594ef06856873a6dd064c9c006e48"
var searchButton = document.getElementsByTagName("form")
console.log(searchButton);
var cardTitleEl = document.getElementById("cardTitle")
var tempEl = document.getElementById("temp")
var uviEl = document.getElementById("uvi")
var visibilityEl = document.getElementById("visibility")
var humidityEl = document.getElementById("humidity")

//grab search input
function userSearch(event) {
    event.preventDefault()
    var userInput = document.getElementById("search").value

    //give search input to api 

    var geoSearch = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`
    fetch(geoSearch).then(function (data) {
        return data.json()
    }).then(function (data) {
        console.log(data);
        var weatherSearch = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=imperial`
        fetch(weatherSearch).then(function (data) {
            return data.json()
        }).then(function (data) {

            //take received data from api and give back to user
            console.log(data);
            cardTitleEl.textContent = userInput
            tempEl.textContent = data.current.temp
            uviEl.textContent = data.current.uvi
            visibilityEl.textContent = data.current.visibility
            humidityEl.textContent = data.current.humidity

        })
    })
}









searchButton[0].addEventListener("submit", userSearch)