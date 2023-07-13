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


////
// With JavaScript
//
// const toggleVisibilityLink = document.createElement('a');
// toggleVisibilityLink.innerText = 'Toggle Visibility';
//
// const bodyElement = document.querySelector('body');
// bodyElement.appendChild(toggleVisibilityLink);

// const ddElements = document.querySelectorAll('dd');
// toggleVisibilityLink.addEventListener('click', () => {
//     ddElements.forEach((ddElement) => {
//         ddElement.classList.toggle('invisible');
//     });
// });
//
// const dtElements = document.querySelectorAll('dt');
// dtElements.forEach((dtElement) => {
//     dtElement.addEventListener('click', () => {
//         dtElement.classList.toggle('highlighted');
//     });
// });
//////
// Jquery

//Create a button,
// when clicked,
// make last li in each ul
// have yellow background.

$('.change-park').click(function () {
    $('ul').each(function () {
        $(this).children('li:last').css('background-color', 'yellow');
    });
});

// When any h3 is clicked,
// the ('li')'s underneath it should be bolded.
// Use font-weight: bold


$('h3').on('click', function () {
    $(this).next().find('li').css('font-weight', 'bold');
});


// any list item
// is clicked
// first li of the parent ul
// have a color: blue.

$('li').click(function () {
    // Find the parent ul element
    const parentUl = $(this).parent('ul');
    // Select the first li element within the parent ul
    const firstLi = parentUl.children('li:first');
    firstLi.css('color', 'blue');
});


