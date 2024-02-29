// Stopwatch variables
let timer; // Variable to store the timer interval
let isRunning = false; // Variable to keep track of whether the stopwatch is running
let seconds = 0; // Initialize seconds to 0
let minutes = 0; // Initialize minutes to 0
let hours = 0; // Initialize hours to 0

// DOM elements
const display = document.getElementById('display'); // Reference to the display element
const startStopBtn = document.getElementById('startStop'); // Reference to the start/stop button
const resetBtn = document.getElementById('reset'); // Reference to the reset button

// Update the stopwatch display
function updateDisplay() {
    display.textContent = formatTime(); // Update the display with formatted time
}

// Format time as HH:MM:SS
function formatTime() {
    return (
        (hours < 10 ? '0' + hours : hours) +
        ':' +
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    ); // Format the time as HH:MM:SS
}

// Start or stop the stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer); // If running, stop the timer
        startStopBtn.textContent = 'Start'; // Change button text to 'Start'
        startStopBtn.style.backgroundColor = '#4caf50'; // Change start button color to green
        document.getElementById('stop').style.backgroundColor = '#f44336'; // Set stop button color to red
    } else {
        timer = setInterval(updateStopwatch, 1000); // If not running, start the timer
        startStopBtn.textContent = 'Stop'; // Change button text to 'Stop'
        startStopBtn.style.backgroundColor = '#f44336'; // Change start button color to red
        document.getElementById('stop').style.backgroundColor = ''; // Reset stop button color
    }
    isRunning = !isRunning; // Toggle the running state
}

// Update the stopwatch
function updateStopwatch() {
    seconds++; // Increment seconds
    if (seconds === 60) {
        seconds = 0; // If seconds reach 60, reset to 0 and increment minutes
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0; // If minutes reach 60, reset to 0 and increment hours
        hours++;
    }
    updateDisplay(); // Update the display with new time
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timer); // Clear the timer interval
    isRunning = false; // Set running state to false
    seconds = 0; // Reset seconds to 0
    minutes = 0; // Reset minutes to 0
    hours = 0; // Reset hours to 0
    updateDisplay(); // Update the display with reset time
    startStopBtn.textContent = 'Start'; // Change button text to 'Start'
    startStopBtn.style.backgroundColor = '#4caf50'; // Change start button color to green
    document.getElementById('stop').style.backgroundColor = '#f44336'; // Set stop button color to red
}

// Event listeners
startStopBtn.addEventListener('click', startStop); // Listen for click on start/stop button
resetBtn.addEventListener('click', resetStopwatch); // Listen for click on reset button
