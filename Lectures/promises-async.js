// USING THE ASYNC/AWAIT SYNTAX TO RESOLVE PROMISES
// Remember, it's just syntactic sugar!
// In the end, it's doing the same thing as the .then() method
// WRITE CODE THAT WORKS!!!
const getFilm = async (url) => {

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    /// STILL BLOCKED SCOPE START
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
    /// STILL BLOCKED SCOPE END
}
(async () => {
    const firstFilm = await getFilm('url')
    console.log(firstFilm)
})();