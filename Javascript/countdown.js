function startTheCountdown() {
    //Sets Countdown to 10
    var currTime = 10;
    //this sets the next interager by i, for this the number will go down by one
    var i = 1;
    // This is a while loop, it will continue this code while the (interager) i is less than 12
    while (i < 12) {

        // If i is = to 11, Blastoff!
        if (i == 11) {      
            setTimeout(function () {
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } 
        // if i is greater than 6 say, "Warning Less than ½ way to launch, time left ___"
        else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownDisplay").innerHTML =
                    "Warning Less than ½ way to launch, time left " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        // if none of the above happens, display "the time left is ___"
        else {
            setTimeout(function () {
                document.getElementById("countdownDisplay").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        // increase i by 1
        i = i + 1;
    }
}