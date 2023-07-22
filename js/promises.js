//GLOBAL FUNCTIONS
// const getEvent = (user) => {
//     const userName = 'kurt-suttin'
//     const url = `https://api.github.com/users/${userName}/events`
//     const options =
//         {
//             method: "GET",
//             headers:
//                 {
//                     "Authorization": `token ${KURT_TOKEN}`,
//                 }
//         };
//     return fetch(url, options)
//         .then(response => {
//             return response.json()
//         })
//         .catch(error => {
//             console.log(error);
//         })
//
// };


// GLOBAL VARS


// IFFE
// (() => {
//     getEvent("kurt-suttin").then(events => {
//         console.log(events);
//         // work with events
//         const pushEvents = events.filter(event => {
//             return event.type === "PushEvent"
//         })
//         console.log(` This user pushed to github last on : ${pushEvents[0].created_at}.`)
//
//     })
//
// })();


// ASYNC FUNCTIONS ///

// const getEvent = async (url) => {
//     const userName = 'kurt-suttin'
//     const urlEvent = `https://api.github.com/users/${userName}/events`
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         }
//     };
//     /// STILL BLOCKED SCOPE START
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
//     /// STILL BLOCKED SCOPE END
// }


// /// Global
// const getStarWarsCharacter = (id = 1) => {
//     // define the url argument for the fetch
//     const url = `https://swapi.dev/api/people/${id}/`;
//     // define the options argument for the fetch
//     const options = {
//         method: "GET", // changes the fetch method ("GET", "POST", "PATCH", "UPDATE" "DELETE")
//         headers: {
//             "Content-Type": "application/json",
//         }
//     };
//     // return the fetch call
//     return fetch(url, options)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .catch(error => { // catch any errors that might occur
//             console.log(error.message);
//         });
// };
//
//
// ////  IFEE
//
// (() => {
//     getStarWarsCharacter(1).then((character => {
//         console.l(character);
//         // character.map(character =>{})
//     }));
//
// })();

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
const getPerson = (id = 1) => {
    // define the url argument for the fetch
    const url = `https://swapi.dev/api/people/${id}/`;
    // define the options argument for the fetch
    const options = {
        method: "GET", // changes the fetch method ("GET", "POST", "PATCH", "UPDATE" "DELETE")
        headers: {
            "Content-Type": "application/json", // redundant in most cases
            // some api's require a token passed in an "Authorization" property here, ex:
            // "Authorization": `Bearer ${myToken}`
        }
    }
    return fetch(url, options) // return the entire fetch outside of the function
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch(error => { // catch any errors that might occur
            console.log(error.message)
        });
}

(() => { // IIFE (Immediately Invoked Function Expression) - This acts as a "Main Method" i.e. the entry point to the program
    // call the function that has the fetch
    // but remember you're still working with a promise stream
    // and have to chain into a .then()
    getPerson(1).then((person) => {
        console.log(person);

    });
})();