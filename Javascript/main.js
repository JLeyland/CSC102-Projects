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

// Trying to figure out how to stop the countdown and reset it back to the begining
//function stopCountdown() {
//    document.getElementById("countdownDisplay").innerHTML = ""
//    i = 12
//}

function play() {
    
    // Set Variables
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;

    // Replaces What is writen on the page with the results of the roll
    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;

    // You Lose
    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    
    // You Win
    else if (die1 == die2 && die1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    
    // You did not win or lose
    else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}

function checkCreds() {
    // Create Variables
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    // Full name combines first and last name with a space between the names
    var fullName = firstName + " " + lastName;
    
    // If fullName is greater than 20 characters, invalid
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } 
    // If badgeNumb is greater than 999, invalid
    if (badgeNumb > 999 || badgeNumb < 99) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
    } 
    // Everything works. Access Granted, Welcome (fullName). open main page
    else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("UAT_Space_Program.html");
    }
}

// This disables the Start button and enables the Stop button
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

// This disables the Stop button and enables the Start button
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

// This plays the lab sounds
function labStation() {
    mySound = new sound("us-lab-background.mp3");
    //    This doesn't work
    //    I'm trying to adjust the volume of this track to make it quieter
    //    mySound.volume = "0.1"
    mySound.play();

}

// This plays the David Bowie song
function playOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
    
}

// This plays the Ship Alarm
function shipAlarm() {
    mySound = new sound("Spaceship Alarm.mp3");
    mySound.play();
    // I got this from youtube audio library from youtube studio
}


// This enables audio to be able to play
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}