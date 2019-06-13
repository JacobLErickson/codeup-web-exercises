console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");
console.log("Radical! " + userInput + " is my favorite color too!");

//Exercise 3.1

var mermaid = prompt("How many days will you be renting The Little Mermaid for?");
var bear = prompt("How many days will you be renting Brother Bear for?");
var hercules = prompt("How many days will you be renting The Little Mermaid for?");

alert("The total will be: $"+((Number(mermaid) + Number(bear) + Number(hercules)) * 3));

//Exercise 3.2

var googlePay = Number(prompt("How much does Google pay you per hour?"));
var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonPay = Number(prompt("How much does Amazon pay you per hour?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var facebookPay = Number(prompt("How much does Facebook pay you per hour?"));
var facebookHours = Number(prompt("How many hours did you work for Facebook this week?"));

alert("Your total pay for this week is: $" + ((googlePay * googleHours) + amazonPay * amazonHours) + (facebookPay * facebookHours));

//Exercise 3.3

var classTime = prompt("What time is the class?");
var noScheduleConflict = !confirm("Does the student already have a class at " + classTime);

var maxClassSize = Number(prompt("What is the maximum class size?"));
var studentsEnrolled = Number(prompt("How many students are currently enrolled"));

alert("Student enrollment eligibility: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));

//Exercise 3.4

var premiumMember = confirm("Is the customer a Premium Member?");
var numberItemsBought = Number(prompt("How many items did the customer buy?"));
var isOfferValid = !confirm("Is the coupon expired?")

alert("Customer Coupon Validity: " + (isOfferValid && (premiumMember || numberItemsBought >= 2)));