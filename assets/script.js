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