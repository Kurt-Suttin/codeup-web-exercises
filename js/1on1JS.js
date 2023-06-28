const salesData = [
    { // index 0
        month: 'January',
        totalItemsSold: 0
    },
    { // index 1
        month: 'February',
        totalItemsSold: 5
    },
    { // index 2
        month: 'March',
        totalItemsSold: 2
    },
    { // index 3
        month: 'April',
        totalItemsSold: 10
    },
    { // index 4
        month: 'May',
        totalItemsSold: 30
    }
];

//JFMAM

function returnFirstLetters(salesData) {
    let word = ""

    for (let i = 0; i < salesData.length; i += 1) {
        word += salesData[i].month.charAt(0);

    }
    return word
}

// returnFirstLetters(salesData)
// console.log(returnFirstLetters(salesData));


// solving with traditional for loop
// let result = "";
// for(let i = 0; i < salesData.length; i += 1){
//     let month = salesData[i].month;
//     let firstLetter = month.charAt(0);
//     result += firstLetter;
// }
//console.log(result);

// solving with forEach method
let result = "";

// using traditional anonymous function
// salesData.forEach(function(sale){
//     let month = sale.month;
//     let firstLetter = month.charAt(0);
//     result += firstLetter;
// });

// using anonymous arrow function
// salesData.forEach(sale => result += sale.month.charAt(0));

// // using for of
// for(let sale of salesData) {
//     result += sale.month.charAt(0);
// }
// console.log(result);

// fizzBuzz
// for (let x = 0; x <= 100; x++) {
//     if (x % 15 === 0) {
//         console.log('Fizzbuzz')
//     } else if (x % 5 === 0) {
//         console.log('Buzz')
//     } else if (x % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(x)
//     }
// }

//Exercise 1: Print Numbers
// Write a loop that prints numbers from 1 to 10.

for (let i = 1; i <= 10; i += 1) {
    console.log(i)
}
// Exercise 2: Even Numbers
// Write a loop that prints even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Exercise 3: Sum of Numbers
// Write a loop that calculates the sum of numbers from 1 to 100 and prints the result.
let sum = 0
for(let i = 1 ; i <= 100; i += 1){
    sum += i
}
console.log(sum)


// Exercise 4: Reverse Loop
// Write a loop that prints numbers from 10 to 1 in reverse order.
 for(let i = 10 ; i >= 0;i--){
     console.log(i)

 }


// Exercise 5: Multiplication Table
// Write a loop that generates a multiplication table for a given number. For example, if the number is 5, the table should print:
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number + " x " + i + " = " + result);
    }
}
 multiplicationTable(5)



