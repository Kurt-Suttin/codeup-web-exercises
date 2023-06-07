(() => {
    "use strict";
    console.log("inside objects.js");

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Kurt",
        lastName: "Suttin",
    };


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    let sayHello = `Hello from ${person.firstName} ${person.lastName}!`
    console.log(sayHello)


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount.
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     * We know that Cameron bought $180, Ryan $250 and George $320.
     * Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper) {
        let discount = 0;
        let totalAmount = shopper.amount;
        if (shopper.amount > 200) {
            discount = shopper.amount * 0.12;
            totalAmount = shopper.amount - discount;
        }
        console.log(`${shopper.name} spent $${shopper.amount.toFixed(2)}, received a discount of $${discount.toFixed(2)}, and paid $${totalAmount.toFixed(2)}.`);
    });


    // if (hebCo === ){
    //     switch (shoppers) {
    //         case "Cameron":
    //             console.log((`Cameron does not get a discount.`));;
    //             break;
    //         case "Ryan":
    //             console.log((`Ryan's original amount is $250, $${250 * (12 / 100)} is the discounted amount.`));;
    //             break;
    //         case "George":
    //             console.log((`George's original amount is $320, $${320 * (12 / 100)} is the discounted amount.`));;
    //             break;
    //     }
    //
    // }else
    //     return alert("sorry I don't know what that is.")
    //


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`.
     * Each object should have a title and an author
     * property.
     * The author property should be an object with properties
     * `firstName` and `lastName`.
     * Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//     const books = [
//         {
//             title:"Under A Rock",
//             author :
//             {
//                 firstName: "Patrick",
//             lastName: "Star"
//             }
//         },
//         {
//             title:"A Double Rainbow",
//             author :
//                 {
//                     firstName: "Stoney",
//                     lastName: "McBlaze"
//                 }
//         },
//         {
//             title:"The Red Cup",
//             author :
//                 {
//                     firstName: "Codey",
//                     lastName: "Duck"
//                 }
//         },
//         {
//             title:"The Dark Room",
//             author :
//                 {
//                     firstName: "Hellen",
//                     lastName: "Keller"
//                 }
//         },   {
//             title:"Best Egg Roll",
//             author :
//                 {
//                     firstName: "Chackie",
//                     lastName: "Jan"
//                 }
//         },
//
//
// ]
//     for (let book = 0; book < books.length ; book++){
//         console.log("")
//         console.log(books[book].title)
//         console.log(books[book].author.firstName)
//         console.log(books[book].author.lastName)
//         console.log("")
//     }
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    const books = [
        {
            title:"Under A Rock",
            bookNumber:"Book # 1",
            author :
                {
                    firstName: "Patrick",
                    lastName: "Star"
                }
        },
        {
            title:"A Double Rainbow",
            bookNumber:"Book # 2",
            author :
                {
                    firstName: "Stoney",
                    lastName: "McBlaze"
                }
        },
        {
            title:"The Red Cup",
            bookNumber:"Book # 3",
            author :
                {
                    firstName: "Codey",
                    lastName: "Duck"
                }
        },
        {
            title:"The Dark Room",
            bookNumber:"Book # 4",
            author :
                {
                    firstName: "Hellen",
                    lastName: "Keller"
                }
        },   {
            title:"Best Egg Roll",
            bookNumber:"Book # 5",
            author :
                {
                    firstName: "Chackie",
                    lastName: "Jan"
                }
        },


    ]
    for (let book = 0; book < books.length ; book++){
        console.log("")
        console.log(books[book].bookNumber)
        console.log(books[book].title)
        console.log(books[book].author.firstName)
        console.log(books[book].author.lastName)
        console.log("")
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();