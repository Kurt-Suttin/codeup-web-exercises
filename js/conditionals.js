"use strict";

/* ########################################################################## */


// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
// //  * Example:
// //  *  > analyzeColor('blue') // returns "blue is the color of the sky"
// //  *  > analyzeColor('red') // returns "Strawberries are red"
// //  *
// //  *
// //  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// //  *
// //  * You should use an if-else-if-else block to return different messages.
// //  *
// //  * Test your function by passing various string literals to it and
// //  * console.logging the function's return value
// //  */
function analyzeColor(colorName) {
    if (colorName === 'blue') {
        return "blue is the color of the sky";
    } else if (colorName === 'red') {
        return "Strawberries are red";
    } else {
        return "I don't know anything about " + colorName;
    }
}
analyzeColor()

// //
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
function analyzeColor(colorName) {
    // function name
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // local variables for this function
    switch (randomColor)
    {
        case 'red':
            return "stop signs are red";
        case 'blue':
            return "the ocean is blue";
        case 'yellow':
            return "the sun is yellow";
        case 'green':
            return "the sun is yellow";
        case 'violet':
            return "plums are violet";
        case 'indigo':
            return "bluebirds are indigo";
            //random colors(strings) getting called
        default :
            return "sorry I don't know that color";
    }}
    //default meaning if none of the possible options are available
analyzeColor()
console.log(analyzeColor())
    // logging function to the console


// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement

function analyzeColor(colorName) {
    // function name
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // local variables for this function
    switch (randomColor) {
        case 'red':
            return "roses are red";
        case 'blue':
            return "the ocean is blue";
        case 'yellow':
            return "the sun is yellow";
        case 'green':
            return "the sun is yellow";
        case 'violet':
            return "plums are violet";
        case 'indigo':
            return "bluebirds are indigo";
        //random colors(strings) getting called
        default :
            return "sorry I don't know that color";
    }}
//default meaning if none of the possible options are available
analyzeColor()
console.log(analyzeColor())
// logging function to the console

// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
let userColor = prompt("Enter a color:");
let result = analyzeColor(userColor);
alert(result);
function analyzeColor(colorName) {
    switch (colorName){
        case 'red':
            return "roses are red.";
        case 'blue':
            return "The ocean is blue.";
        case 'yellow':
            return "The sun is yellow.";
        case 'green':
            return "Grass is green.";
        case 'violet':
            return "Plums are violet.";
        case 'indigo':
            return "Bluebirds are indigo.";
        default:
            return "Sorry, I don't know that color.";
    }
}

// };

//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal`
//  which accepts a lucky number and total amount,
//  and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
let luckyNumber = Math.floor(Math.random() * 6);
function calculateTotal(luckyNumber, totalAmount) {
  switch (luckyNumber) {
    case 0:
      return totalAmount; // no discount
    case 1:
      return totalAmount * 0.9; // 10% discount
    case 2:
      return totalAmount * 0.75; // 25% discount
    case 3:
      return totalAmount * 0.65; // 35% discount
    case 4:
      return totalAmount * 0.5; // 50% discount
    case 5:
      return 0; // 100% discount (everything for free)
    default:
      return totalAmount; // for any other lucky number, no discount
  }
}

// Example usage:
console.log(calculateTotal(luckyNumber));
console.log(calculateTotal(1, 100)); // returns 100
console.log(calculateTotal(2, 100)); // returns 50
console.log(calculateTotal(3, 50)); // returns 0



// //
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
//                  put this formula in the question above
function calculateTotal(luckyNumber){
    let totalBillNumber = parseFloat(prompt("What's your bill total?:"));
    let discountedBillNumber;
    switch (luckyNumber){
        case 0:
            discountedBillNumber = totalBillNumber
            break;
            // return "you get no discount"
        case 1:
            discountedBillNumber = totalBillNumber * .9
            break
            // return "you get 10% discount"
        case 2:
            discountedBillNumber = totalBillNumber * .75
            break
            // return "you get 25% discount"
        case 3:
            discountedBillNumber = totalBillNumber * .65
            break
            // return "you get 35% discount"
        case 4:
            discountedBillNumber = totalBillNumber * .50
            break
            // return "you get 50% discount"
        case 5:
            discountedBillNumber = totalBillNumber * 0
            break
            // return "you get 100% discount! You get everything for free! "
        default:
            break
            // return "you get no discount"
    }
    alert(`your total bill is $${totalBillNumber}.`);
    alert(`your lucky number is ${luckyNumber}.`);
    alert(`your new total is ${discountedBillNumber}.`);
}
console.log(calculateTotal(luckyNumber))
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
// Ask the user if they want to enter a number

let wantsToEnterNumber = confirm("Would you like to enter a number?");
if (wantsToEnterNumber) {
    // Prompt the user for a number
    let userInput = prompt("Enter a number:");
    // Convert the user input to a number
    let number = parseFloat(userInput);
    // Check if the entered value is a valid number
    if (!isNaN(number)) {
        // Check if the number is even or odd
        let isEven = number % 2 === 0;
        let evenOddMessage = isEven ? "The number is even." : "The number is odd.";

        // Calculate the number plus 100
        let numberPlus100 = number + 100;

        // Check if the number is negative or positive
        let positivityMessage = number < 0 ? "The number is negative." : "The number is positive.";

        // Display the results using alerts
        alert(evenOddMessage);
        alert("The number plus 100 is: " + numberPlus100);
        alert(positivityMessage);
    } else {
        // Display an alert for invalid input
        alert("Invalid input. Please enter a valid number.");
    }
}

