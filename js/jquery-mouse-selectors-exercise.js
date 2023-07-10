$(() => {

    // Add jQuery code that will change the background color of an h1 element when clicked.

    $("h1").on("click", function (e) {
        $(e.target).css("background-color", "yellow")
    })

    // Make all paragraphs have a font size of 18px when they are double clicked.//
    $("p").on("dblclick", function (e) {
        $(e.target).css("font-size", "18px")
    })


    function changeToRed(e) {
        $(e.target).css('color', 'red');
    }

    function changeToDefault(e) {
        $(e.target).css('color', 'black');
    }

    $('li')
        .on('mouseenter', changeToRed)
        .on('mouseleave', changeToDefault);

})