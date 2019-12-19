// Create array to hold searched cities
var cityNames = [];

// current day 
var m = moment();

// Function for DOM manipulation to get searched cities and display them 
function storeSearches() {
    $("#search-history").empty();

    for (var i = 0; i < cityNames.length; i++) {
        var cityBtn = $("<button>");
        cityBtn.addClass("city-btn");
        cityBtn.attr("data-name", cityNames[i]);
        cityNames.text(cityNames[i]);
        $("#search-history").prepend(cityBtn);
    }
    getWeather(cityNames[cityNames.length - 1])
}

// Function for search button 
$("#add-city").on("click", function (event) {
    event.preventDefault();

    var city = $("#city-input").val();
    if (city) {
        // Adding city to City names Array
        cityNames.push(city);
        $("#city-input").val("");

        storeSearches();
    }
    else {
        var alert = $("<p>");
        alert.text("You didn't enter a city");
        $("#search-history").prepend(alert);
    }
});

function grtweather(city) {
    if (typeof city === 'object') {
        city = $(this).attr("data-name");
    }
    currentweather(city);
    fiveDayForecast(city);
}

// Dom Monipulation to display current weather for searched city

function currentweather(city) {
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "units=imparial&APPID=c442a5d5231c082aa008f1de50cd5734";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var weatherMain = $("<div class='current-weather'>");

        var date = m.format("MM/DD/YYYY");
        var h6 = $("<h6>").text(date);
        weatherMain.append(h6);

    
    })
}
