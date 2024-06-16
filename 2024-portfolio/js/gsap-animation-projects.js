// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'projects-box'
    const projectBoxes = document.querySelectorAll('.projects-box');

    // Initialize GSAP timeline for slide-in animation
    const tl = gsap.timeline();

    // Animation function for slide-in effect
    function animateProjectBoxes() {
        tl.from(projectBoxes, {
            y: 100, // Start position (from bottom)
            opacity: 0, // Start opacity
            duration: 0.5, // Animation duration
            stagger: 0.2 // Stagger between each animation
        });
    }

    // Call the slide-in animation function when the page is loaded
    animateProjectBoxes();

    // Handle links to other pages with fade-out animation
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default navigation behavior

            // Create a timeline for fade-out animation
            const fadeOutTL = gsap.timeline();
            
            // Fade out main content area (excluding #main-nav and footer)
            fadeOutTL.to('#main-page', {
                opacity: 0,
                duration: 0.5,
                onComplete: function() {
                    window.location.href = link.href; // Navigate to the clicked link
                }
            });
        });
    });
});
