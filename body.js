// Greeting functionality
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}`;
    } else {
        greeting.textContent = 'Hello';
        alert('Please enter your name!');
    }
});

// Allow Enter key to trigger greeting
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetButton.click();
    }
});

// Color box functionality with toggle
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        // Check if the box is already colored
        if (this.classList.contains('colored')) {
            // Reset to default
            this.style.backgroundColor = '#f8f9fa';
            this.style.color = '#333';
            this.classList.remove('colored');
        } else {
            // Apply the color
            this.style.backgroundColor = color;
            this.classList.add('colored');
            
            // Adjust text color for yellow box for better readability
            if (color === 'yellow') {
                this.style.color = '#333';
            } else {
                this.style.color = 'white';
            }
        }
    });
});
