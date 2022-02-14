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