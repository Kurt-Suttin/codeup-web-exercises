(function () {
    "use strict";
    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            // let radiusSquared = circle.radius ** 2;
            // let pi = Math.PI;
            // let area = (pi * radiusSquared);
            // TODO: return the proper value
            return (Math.PI * (Math.pow(this.radius, 2)))


        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if ((doRounding) === true) {
                let result1 = Math.round(this.getArea())
                return console.log("Area of a circle with radius: " + this.radius + `, is: ${result1}`)
            } else {
                let result2 = this.getArea()
                return console.log("Area of a circle with radius: " + this.radius + `, is: ${result2}`)
            }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            // console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    setAttribute(circle.radius, 5)
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();