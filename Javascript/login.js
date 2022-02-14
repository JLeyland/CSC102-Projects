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
    else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
    } 
    // Everything works. Access Granted, Welcome (fullName). open main page
    else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("UAT_Space_Program.html");
    }
}