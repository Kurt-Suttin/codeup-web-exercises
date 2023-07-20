(() => {
    //map
    // const url = './data/houses.json'
    // const options = {
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     //options Properties is Case Sensitive
    // }
    // fetch(url, options)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(houses => {
    //         console.log(houses)
    //         // working with houses array while it's in this scope
    //         // using Traditional loop method
    //         const housesTwoBedsPlus = []
    //         for (let house of houses) {
    //             const numberOfBeds = parseFloat(houses.beds);
    //             if (numberOfBeds >= 2) {
    //                 housesTwoBedsPlus.push(house)
    //             }
    //             console.log(housesTwoBedsPlus)
    //         }
    //     })
    //
    //

    /////////


    // const url = './data/houses.json'
    // const options = {
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     //options Properties is Case Sensitive
    // }
    // fetch(url, options)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(houses => {
    //         console.log(houses)
    //         // using .FILTER  method
    //       const housesTwoBedsPlus = houses.filter(house =>{
    //           // MUST return conditions
    //           return parseFloat(house.beds)
    //               //if this is true
    //           >=2;
    //       })
    //         console.log(housesTwoBedsPlus);
    //     })


    // //using Map method
    // // transform each element in array
    // let housesPriceRange = houses.map(house => {
    //     const priceRange = 200_000;
    //     const canBuy = parseFloat(house.price) > priceRange ? "Nope!" : "Yes!";
    //     const newValue = `
    //         Address: ${house.address}
    //         Can i afford it ? :${canBuy} `
    //     return newValue
    // })
    // for (let house of housesPriceRange){
    //     console.log(house)
    // }
    //
    // using .REDUCE method
    const url = './data/houses.json'
    const options = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        //options Properties is Case Sensitive
    }

})();