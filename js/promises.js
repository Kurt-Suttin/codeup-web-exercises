//GLOBAL FUNCTIONS
// const GetUser = (user) => {
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
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0])
//             console.log(data[0].created_at)
//
//         });
//
//
// };


// GLOBAL VARS


// IFFE
(() => {
    const userName = 'kurt-suttin'
    const url = `https://api.github.com/users/${userName}/events`
    const options =
        {
            method: "GET",
            headers:
                {
                    "Authorization": `token ${KURT_TOKEN}`,
                }
        };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(` This user pushed to github last on : ${data[0].created_at}.`)
        });



})();