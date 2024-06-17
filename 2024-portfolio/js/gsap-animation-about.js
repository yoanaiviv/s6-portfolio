document.addEventListener("DOMContentLoaded", function() {
    // Select elements for animation
    const video = document.querySelector('.video');
    const aboutText = document.querySelector('.about-text');
    const aboutPhoto = document.querySelector('.about-photo');

    // Check if elements exist
    if (!video || !aboutText || !aboutPhoto) {
        console.error("One or more elements not found in the DOM.");
        return;
    }

    // Create GSAP timeline for animations
    const tl = gsap.timeline();

    // Add fade-in animation for .video
    tl.from(video, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Add slide-in animation for .about-text (from left to right)
    tl.from(aboutText, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5"); // Overlap by 0.5 seconds

    // Add slide-in animation for .about-photo (from right to left)
    tl.from(aboutPhoto, {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5"); // Overlap by 0.5 seconds

    // Function to animate fade out
    function fadeOutAnimation() {
        const fadeOutTL = gsap.timeline();
        // Add fade-out animations
        fadeOutTL.to([video, aboutText, aboutPhoto], {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
        return fadeOutTL;
    }

    // Add click event listeners to main-nav links
    const mainNavLinks = document.querySelectorAll('#main-nav a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const href = this.getAttribute('href'); // Get the href attribute
            // Play fade out animation, then navigate to the href
            fadeOutAnimation().then(() => {
                window.location.href = href;
            });
        });
    });
});
