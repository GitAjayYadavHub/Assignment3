// Greeting functionality with enhanced animations
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        // Add animation class
        greeting.classList.add('greeting-animate');
        
        // Update text with a slight delay for effect
        setTimeout(() => {
            greeting.textContent = `Hello, ${name}!`;
        }, 150);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            greeting.classList.remove('greeting-animate');
        }, 600);
        
        // Add success effect to button
        greetButton.classList.add('success-pulse');
        setTimeout(() => {
            greetButton.classList.remove('success-pulse');
        }, 600);
        
    } else {
        greeting.textContent = 'Hello';
        
        // Shake animation for empty input
        nameInput.classList.add('shake');
        setTimeout(() => {
            nameInput.classList.remove('shake');
        }, 500);
        
        // Show custom notification instead of alert
        showNotification('Please enter your name!');
    }
});

// Allow Enter key to trigger greeting
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetButton.click();
    }
});

// Color box functionality with toggle and enhanced animations
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        
        // Check if box is already colored (toggle functionality)
        if (this.classList.contains('colored')) {
            // Reset to default state with animation
            this.classList.add('box-reset');
            
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.color = '';
                this.classList.remove('colored');
                this.classList.remove('box-reset');
            }, 300);
            
        } else {
            // Apply color with animation
            this.classList.add('box-activate');
            
            setTimeout(() => {
                this.style.backgroundColor = color;
                this.classList.add('colored');
                
                // Adjust text color for yellow box for better readability
                if (color === 'yellow') {
                    this.style.color = '#333';
                } else {
                    this.style.color = 'white';
                }
                
                this.classList.remove('box-activate');
            }, 150);
            
            // Create ripple effect
            createRipple(this, event);
        }
    });
    
    // Add hover sound effect (visual feedback)
    box.addEventListener('mouseenter', function() {
        if (!this.classList.contains('colored')) {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        }
    });
    
    box.addEventListener('mouseleave', function() {
        if (!this.classList.contains('colored')) {
            this.style.transform = '';
        }
    });
});

// Ripple effect function
function createRipple(element, event) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Custom notification function
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <span class="notification-icon">⚠️</span>
        <span class="notification-message">${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add floating particles animation
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles on page load
window.addEventListener('load', function() {
    createFloatingParticles();
    
    // Add entrance animation to container
    const container = document.querySelector('.container');
    container.classList.add('entrance-animation');
});

// Add confetti effect when greeting is successful
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Trigger confetti on successful greeting (enhanced version)
let confettiTriggered = false;
greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name && !confettiTriggered) {
        setTimeout(() => {
            createConfetti();
        }, 200);
        confettiTriggered = true;
        
        // Reset confetti trigger after 5 seconds
        setTimeout(() => {
            confettiTriggered = false;
        }, 5000);
    }
});
