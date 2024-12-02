const phoneContainer = document.querySelector('.phone-container');
const toggleButton = document.getElementById('toggle-rotation');
const colorPicker = document.getElementById('color-picker');

// Toggle Rotation
let isPaused = false;
toggleButton.addEventListener('click', () => {
    if (isPaused) {
        phoneContainer.style.animationPlayState = 'running';
        toggleButton.textContent = 'Pause Rotation';
    } else {
        phoneContainer.style.animationPlayState = 'paused';
        toggleButton.textContent = 'Resume Rotation';
    }
    isPaused = !isPaused;
});

// Change Phone Color
colorPicker.addEventListener('input', (e) => {
    document.querySelector('.back').style.backgroundColor = e.target.value;
});


// Real-time clock and date update
function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero for single-digit hours, minutes, seconds
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format time
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    // Get date in "Month Day, Year" format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', options); // Adjust 'en-US' to your desired locale

    // Set the date
    dateElement.textContent = date;
}

// Call the function every second
setInterval(updateDateTime, 1000);
