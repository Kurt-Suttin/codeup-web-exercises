// $(()=>{
//     $("#id-container").css('background-color','red');
// })
// $(".title").css('color','green');

// with Js
// let titleElements = document.querySelectorAll('.title');
// titleElements.forEach(titleElement =>{
//     titleElement.style.color = "blue"
// });

// use jQuery to select all 'li' elements

$('li').css('font-size','20px');
$("h1, p, li").css("background-color", "yellow");



// use j query to select multiple selectors
// $('h1,p,.title,#id-container').css('font-weight','bold')

// use jQuery to select all
// $('*').css('color','pink')

// $('.codeup').css('border','1px solid red')



////



// Wrap all your JS code in this method so that we can ensure
// all the elements in the document are loaded before trying
// to select them
$(() => {

    // Declare variable to store the selected element
    let $idContainer = $("#id-container");
    // Change the background to red
    $idContainer.css('background-color', 'red');

    // Same thing but with JS
    // let idContainer = document.querySelector("#id-container");
    // idContainer.style.backgroundColor = "blue";

    // Select everything with the "title" class and change the
    // color of the text to purple
    $(".title").css('color', 'purple');


    // Same thing with JS
    // Notice we have to use .querySelectorAll() instead of .querySelector()
    // This will return more than one element
    // Notice we also have to loop through the list to change the CSS
    // where in jQuery we can do it all from one method
    let titleElements = document.querySelectorAll('.title');
    titleElements.forEach(titleElement => {
        titleElement.style.color = 'blue';
    });


    // Use jQuery to select all 'li' elements
    $('li').css('color', 'pink');


    // Use jquery to select multiple selectors
    $('h1, p, .highlight').css('font-weight', 'bold');


    // Select everything
    // We can also chain multiple methods to change more than
    // one at a time
    // We can also separate these methods onto multiple lines
    $('*')
        .css('outline', '1px solid lightblue')
        .css('font-weight', 'bold')
    ;


    // Using jquery to check for a value
    console.log($('[data-id="5"]').html());


});
