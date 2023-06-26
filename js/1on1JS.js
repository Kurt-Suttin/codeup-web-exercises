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
returnFirstLetters(salesData)
console.log(returnFirstLetters(salesData));





