"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//
// var masterControl = confirm("Shall we play a game?");
//
// function evenOdd(a){
//     let remainder = a % 2;
//     if (remainder == 0) {
//         alert("The number " + a + " is even.");
//     } else if (remainder == Math.round(remainder)) {
//         alert("The number " + a + " is odd.");
//     } else {
//         alert("That is an invalid number.");
//     }
// }
//
// function plus100(a) {
//     return a + 100;
// }
//
// function negpos(a) {
//     (Math.sign(a));
//     if (Math.sign(a) === 1) {
//         alert("The number is positive");
//     }
//
//     else if (Math.sign(a) === -1) {
//         alert("The number is negative");
//     }
//
//     else {
//         alert ("The number is 0");
//     }
// }
//
// if (masterControl === true) {
//     var tron = Number(prompt("Enter a number."));
//
//     if (isNaN(tron)) {
//         alert("That is not a number. Please enter a valid number.");
//     } else {
//         evenOdd(tron)
//         alert("Add 100 and you get " + plus100(tron) + ".");
//         negpos(tron)
//
//     }
//
// } else {
//     alert("You have been de-rez'd");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var color = prompt("Please enter a valid color");

// function analyzeColor(c) {
//     if (c === "blue") {
//         alert("Blue is the color of the sky.");
//     } else if (c === "red") {
//         alert("Strawberries are red.");
//     } else if (c === "cyan") {
//         alert("I don't know anything about cyan.");
//     } else {
//         alert("You have entered an invalid color.");
//     }
// }
//
// analyzeColor(color)

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(randomColor);
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var userColor = prompt("Please input a color.")
//
// switch (userColor) {
//     case "blue":
//         alert("Blue is the color of the sky.");
//         break;
//     case "red":
//         alert("Strawberries are red.");
//         break;
//     case "cyan":
//         alert("I don't know anything about cyan.");
//         break;
//     default:
//         alert("You have entered an invalid color.");
//         break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//see above//

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var luckyNumber = Number(prompt("What is your lucky number?"))
var subtotal = Number(prompt("What is your subtotal?"))


function calculateTotal(num, sub) {
    if (num === 0) {
        return (sub - (sub * 0));
    } else if (num === 1) {
        return (sub - (sub * 0.10));
    } else if (num === 2) {
        return (sub - (sub * 0.25));
    } else if (num === 3) {
        return (sub - (sub * 0.35));
    } else if (num === 4) {
        return (sub - (sub * 0.50));
    } else if (num === 5) {
        return (sub - (sub * 1));
    }
}

// alert("Congrats! Your discounted price is: $" + calculateTotal(luckyNumber, subtotal));
// console.log(calculateTotal(luckyNumber, subtotal));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

alert("Congrats! Here is your neew total after your Lucky Number draw:\nYour Lucky Number: " + luckyNumber + "\nYour pre-discount price: $" + subtotal.toFixed(2) +
    "\nYour discounteed total: $" + calculateTotal(luckyNumber, subtotal).toFixed(2))