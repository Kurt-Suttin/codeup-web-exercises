// Get the counter element by its ID
let counterElement = document.getElementById("counter");

// Get the increment button element by its ID
let incrementButton = document.getElementById("incrementButton");

// Get the stop button element by its ID
let stopButton = document.getElementById("stopButton");

// Initialize a counter variable
let counter = 60;
let timer; // Variable to store the interval ID

// Update the counter element with the initial value
counterElement.textContent = counter;

// Function to start the countdown
function startCountdown() {
    // Decrease the counter by 1
    counter--;

    // Update the counter element with the new value
    counterElement.textContent = counter;

    // Check if the counter has reached 0
    if (counter === 0) {
        clearInterval(timer); // Stop the timer
        alert("Countdown is finished!"); // Show a message or perform any other action
        location.reload(); // Reload the page
    }
}

// Function to handle the start button click
function handleStartButtonClick() {
    // Start the countdown when the button is clicked
    timer = setInterval(startCountdown, 1000); // Runs startCountdown every second (1000ms)

    // Disable or hide the start button
    incrementButton.disabled = true; // To disable the button
    // OR
    // incrementButton.style.display = "none"; // To hide the button
}

// Add a click event listener to the increment button
incrementButton.addEventListener("click", handleStartButtonClick);

// Add a click event listener to the stop button
stopButton.addEventListener("click", function() {
    clearInterval(timer); // Stop the timer
});
