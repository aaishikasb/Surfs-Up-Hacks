// Background

$('.switch1').click(function () {
    var classes = ['blue','orange','slate'];
    $('body').each(function(){
      this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    });
  });

// Menu

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}