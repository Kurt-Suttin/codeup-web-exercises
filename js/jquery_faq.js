"use strict"

// add link with jquery
$('body').prepend(
    '<a href="#">Toggle Invisible Class</a>'
)


// DD function
$('a').click(function (event) {
    $('dd').toggleClass('invisible');
    $('body').css("background-color", "#caebe2")
});

// DT function
$("dt").on("click", function (e) {
    $(e.target).css("background-color", "yellow")

})

