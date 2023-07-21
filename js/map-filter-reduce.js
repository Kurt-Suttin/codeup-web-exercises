"use script"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
////EXERCISES/////

//Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.


// Use .filter to create an array
// of user objects where each user object has at least 3 languages in the languages array.

let filteredUsers = users.filter(user => user.languages.length >= 3);
console.log(filteredUsers)


// Use .map to create an array of strings where each element is a user's email address
const mappedUsers = users.map(user => user.email);
console.log(mappedUsers);


// Use .reduce to get the total years of experience from the list of users.

const totalYears = users.reduce((total, user) => {
    // return total + user.yearsOfExperience
    // Once you get the total of years you can use the result to calculate the average.
    return total + user.yearsOfExperience / users.length
}, 0);
console.log(totalYears);

// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accumulation, user, index) => {
    if (user.email.length > accumulation.length) {
        accumulation = user.email;
    }
    return accumulation;
}, "");

console.log(longestEmail);


// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const result = users.reduce(function (user, index) {
//     return user + ' ';
// }, '');
// console.log(result);

const concatenatedNames = users.reduce((accumulation, user, index) => {
    let userName = user.name;
    accumulation += userName + ", ";
    return accumulation;
}, "");

console.log(`Your instructors are:${concatenatedNames}.`);

// const concatenatedNames = users.reduce((accumulation, user, index) => {
//     if (index === (users.length - 2)) {
//         accumulation += `${userName}`
//
//     } else if (index === (user.length - 1)) {
//         accumulation += ` and ${userName}`
//
//     } else (index === (user.length))
//     {
//         accumulation += ` and ${userName},`
//     }
//     return accumulation;
// }, "");

console.log(`Your instructors are:${concatenatedNames}.`);





