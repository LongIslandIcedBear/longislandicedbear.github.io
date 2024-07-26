// Create the custom message element
const message = document.createElement('div');
message.textContent = '無断転載禁止';
message.style.position = 'absolute';
message.style.backgroundColor = 'rgba(95, 59, 40, 0.55)';
message.style.color = 'white';
message.style.padding = '2px 5px';
message.style.borderRadius = '5px';
message.style.fontSize = '14px';
message.style.pointerEvents = 'none';
message.style.zIndex = '1000';
message.style.display = 'none'; // Hide the message initially
document.body.appendChild(message);

// Disable right-click context menu and show custom message
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showCustomMessage(e);
}, false);

// Function to show the custom message beside the mouse cursor
function showCustomMessage(e) {
    // Update the position of the message
    function updatePosition(event) {
        message.style.left = `${event.pageX + 15}px`;
        message.style.top = `${event.pageY + 15}px`;
    }

    updatePosition(e);
    message.style.display = 'block'; // Show the message

    // Attach mousemove event to update message position
    document.addEventListener('mousemove', updatePosition);

    // Remove the message after a longer delay
    setTimeout(() => {
        message.style.display = 'none'; // Hide the message
        document.removeEventListener('mousemove', updatePosition); // Remove event listener
    }, 2000); // Show the message for 5 seconds
}

// Prevent dragging images to a new tab
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
    }
}, false);
