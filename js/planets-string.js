(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray =["Mercury","Venus","Earth","Jupiter","Saturn","Uranus","Neptune"]
    console.log(planetsArray);
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);
//Create a string with <br> tags between each element in an array
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
// to inform others or your future self that this array will be in a list or be in a HTML
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
//              let planetsArray =["Mercury","Venus","Earth","Jupiter","Saturn","Uranus","Neptune"]
let planetsStringBr = planetsArray.join("<br />").toString()
    console.log(planetsStringBr)
    

})();