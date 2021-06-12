var cityval = "Delhi";

// Get Data from Input
function getInput() {
    var cityname = document.getElementById("city").value;
    window.cityval = cityname;
    console.log(cityval);
};
// API Fetching Data

var furl = "https://pro.openweathermap.org/data/2.5/weather?q="+window.cityval+"&APPID=9f20313bbced6388c7df52bfde1e65ed&units=metric";
$.getJSON(furl, function(data) {
    console.log(furl);

    // Icon
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $('.icon').attr("src", icon);

    //Temparature
    var temp = data.main.temp;
    $('.temp').append("Temperature: ", temp);

    // Feels Like
    var feel = data.main.feels_like;
    $('.feel').append("Feels Like: ", feel);

    // Humidity
    var hum = data.main.humidity;
    $('.humidity').append("Humidity: ", hum, "%")

    // Type of Weather
    var type = data.weather[0].main;
    $('.typ').append(type);
});

// Background

function switch1() {
    document.getElementById('switcher').className = 'orange';
}

// Menu

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}