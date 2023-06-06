//Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)

function showMultiplicationTable(input) {
    for (let num = 1; num <= 10; num++) {
        console.log(`${input} x ${num} = ${input * num}`);
    }
}

console.log(showMultiplicationTable(7));
// expected result
//7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70
//=================================
//Use a for loop and the code function
// to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:
function generateNumbersAndCheckOddEven() {
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        const oddEven = randomNumber % 2 === 0 ? 'even' : 'odd';
        console.log(`${randomNumber} is ${oddEven}.`);
    }
}

generateNumbersAndCheckOddEven();


// expected result
//123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

//=================================

//Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// let result = '';
for (let number = 1; number <= 9; number++) {
    let solution = number.toString().repeat(number);
    console.log(solution)
}


/////////////////////////

// for (let value = 1; value <= 9; value++){
//     let value.toString().repeat(value)
// }console.log(value)
//
//////////////////////////
// for (let i = 1; i <= 9; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += i;
//     }
//     console.log(line);
// }
// Expected output: "012345678"
// ↑↑ NOTE TO SELF HATED THIS QUESTION ↑↑
// no way I could figure that out without online resources
//src""

//=================================
// Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}


