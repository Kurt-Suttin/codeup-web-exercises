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

const toggleVisibilityLink = document.createElement('a');
toggleVisibilityLink.innerText = 'Toggle Visibility';

const bodyElement = document.querySelector('body');
bodyElement.appendChild(toggleVisibilityLink);

const ddElements = document.querySelectorAll('dd');
toggleVisibilityLink.addEventListener('click', () => {
    ddElements.forEach((ddElement) => {
        ddElement.classList.toggle('invisible');
    });
});

const dtElements = document.querySelectorAll('dt');
dtElements.forEach((dtElement) => {
    dtElement.addEventListener('click', () => {
        dtElement.classList.toggle('highlighted');
    });
});
