// Initialize tilt effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the card element
    const tiltCard = document.querySelector('.card');
    
    // Initialize vanilla-tilt with parameters optimized for parallax
    VanillaTilt.init(tiltCard, {
        max: 25, // Increased tilt angle for more dramatic effect
        speed: 400, // Faster response for better interaction
        glare: true,
        "max-glare": 0.4,
        scale: 1.1, // Slightly more pronounced scale effect
        perspective: 1000, // Match CSS perspective
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: true,
        reset: true,
        gyroscope: true,
        gyroscopeMinAngleX: -25,
        gyroscopeMaxAngleX: 25,
        gyroscopeMinAngleY: -25,
        gyroscopeMaxAngleY: 25
    });

    console.log('Parallax tilt effect initialized');
});
