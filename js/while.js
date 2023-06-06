"use strict"
//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
// let num = 1
//
// while (num < 11:)
// {
//     console.log(  num ** 2;
//     num = num + 1)
//
// }
let num = 2;
// loop starts at 2
while (num <= 65536)
// loop ends at 65536
{
    console.log(num);
    //logs number
    num = num * 2;
    // changes value of number multiply by its self
}
//==================================================================
//                          ICE CREAM
// First write enough code that generates a random number between 50 and 100 representing
// the amount of cones to sell before you start your loop.!
// Inside of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.
// An ice cream seller can't go home until she sells all of her cones.

// Generate a random number between 50 and 100 representing the amount of cones to sell
const conesToSell = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(`Number of cones to sell: ${conesToSell}`);

// Define a variable to keep track of the total cones sold
let conesSold = 0;

// Use a do-while loop to simulate selling cones
do {
    // Generate a random number between 1 and 5 representing the amount of cones being bought
    const conesBought = Math.floor(Math.random() * 5) + 1;

    // Check if the seller has enough cones to sell
    if (conesSold + conesBought <= conesToSell) {
        conesSold += conesBought;
        console.log(`Sold ${conesBought} cone(s). Total cones sold: ${conesSold}`);
    } else {
        console.log("Out of stock!");
    }
} while (conesSold < conesToSell);

console.log("All cones have been sold. The seller can go home now.");
