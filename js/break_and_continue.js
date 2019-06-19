"use strict";

(function () {

    var numberPicked;
    do {
        numberPicked = Number(prompt("Pick an odd number beetween 1 and 50."));
        if (numberPicked % 2 === 0) {
            alert(numberPicked + " is not odd, please pick again.");
        } else if (numberPicked < 1 || numberPicked > 50) {
            alert(numberPicked + " is not between 1 and 50, please pick again.");
        } else if (isNaN(numberPicked)) {
            alert(numberPicked + " is not a number, please pick again.");
        } else {
            alert("Congrats! you picked a right number!");
            break;
        }
    } while (true);

    var yikes = function (skip) {
        for (var i = 1; i < 50; i += 2) { //"i +=2" adds 2, runs half as many iterations by skipping even numbers and without having to create an additional "if" statement.
            if (i == skip) {
                console.log("Yikes! Skipping number: " + i);
                continue;
            }
            console.log("Here is an odd number: " + i);
        }
    }
    // var userEntered = Number(prompt("Enter an odd number between 1 and 50."))

    yikes(numberPicked)

})();