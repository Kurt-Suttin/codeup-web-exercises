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


// Global
const getArrayOfPushEvents = async (userName = 'kurt-suttin') => {
    try {
        const userName = 'kurt-suttin'
        const url = `https://api.github.com/users/${userName}/events`
        const options = {
            method: "GET",
            headers: {
                "Authorization": KURT_TOKEN
            }
        }

        const response = await fetch(url, options);
        const events = await response.json();
        // console.log(person);
        const pushEvents = events.filter((event) => {
            return event.type === "PushEvent"
        })
        return pushEvents
    } catch (error) {
        console.log(error);
    }
}

//// ASYNC IFEE


(async () => {

    const arrayOfPushEvents = await getArrayOfPushEvents('kurt-suttin')
    console.log(arrayOfPushEvents[0].created_at)

})();

