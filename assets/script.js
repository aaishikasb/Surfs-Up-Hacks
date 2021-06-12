// Background

function switch1() {
    var property = document.getElementById('switcher');
    property.className = 'orange' == property.className ? 'blue' : 'orange';
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