"use strict"
// Prompt the user for an odd number
// between 1 and 50.
// Use a loop and a break statement
// to continue prompting the user
// if they enter invalid input.

// Use a loop and the continue statement
// to output all the odd numbers between 1 and 50,
// except for the number the user entered.

// var numberToStopAt = 5;

// for (let i = 1; i < 50; i++) {
//     let userNumber = prompt("enter an odd number between 1 and 50")
//     prompt('your number is:' + userNumber);
//
//     if (i === userNumber && (i % 2) != 0) {
//         prompt('');
//         // use the break keyword to exit from the while loop
//         alert("invalid input")
//         break;
//         // nothing after the break will get processed
//         prompt('You will never see this line.');
//     }
// }
while (true) {
    let number = parseInt(prompt("Enter an odd number between 1 and 50:"));

    // Check if the entered number is within the valid range and odd
    if (number >= 1 && number <= 50 && number % 2 !== 0) {
        console.log("Number to skip is:", number);

        // Iterate through numbers 1 to 50
        for (let i = 1; i <= 50; i++) {
            // Check if the current number is equal to the number to skip
            if (i === number) {
                console.log("Yikes! Skipping number:", i);
                continue; // Jump to the next iteration of the loop
            }

            // Check if the current number is odd
            if (i % 2) {
                console.log("Here is an odd number:", i);
            }
        }

        break; // Exit the while loop
    }

    console.log("Invalid input. Please try again.");
}

//print odd numbers
// for (let i = 1; i <= 10; i++) {
//     if ((i % 2) != 0) {
//         console.log(i);
//     }
// }