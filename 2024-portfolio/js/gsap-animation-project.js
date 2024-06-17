document.addEventListener("DOMContentLoaded", function() {
    // Select the elements
    const logo = document.querySelector('.logo');
    const button = document.querySelector('.button');
    const text = document.querySelector('.text');
    const mainNav = document.querySelector('#main-nav');
    const footer = document.querySelector('footer');
    const content = document.querySelector('#main-page');
    const h2Elements = document.querySelectorAll('h2');

    // Check if elements exist
    if (!logo || !button || !text || h2Elements.length === 0) {
        console.error("One or more elements not found in the DOM.");
        return;
    }

    // Function to apply type-in animation for h2 elements
    function applyTypeInAnimation(elements) {
        elements.forEach((h2, index) => {
            const text = h2.innerText;
            h2.innerText = ""; // Clear the text
            const splitText = text.split("");
            splitText.forEach((char) => {
                const span = document.createElement("span");
                span.innerText = char;
                span.style.opacity = 0;
                h2.appendChild(span);
            });

            const chars = h2.querySelectorAll("span");
            gsap.to(chars, {
                duration: 0.05,
                opacity: 1,
                stagger: 0.05,
                delay: index * 0.5
            });
        });
    }

    // Create GSAP timeline for fade-in and slide-in animations
    const tl = gsap.timeline();

    // Add fade-in animation for logo and button
    tl.from(logo, {
        duration: 1,
        opacity: 0,
        ease: "power2.out"
    })
    .from(button, {
        duration: 1,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.5") // Overlap the animation by 0.5 seconds

    // Add slide-in animation for text
    .from(text, {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.5"); // Overlap the animation by 0.5 seconds

    // Apply type-in animation for h2 elements
    applyTypeInAnimation(h2Elements);

    // Function to handle fade-out animation and redirect
    function fadeOutAndRedirect(event) {
        event.preventDefault();
        const targetUrl = this.href;

        gsap.to(content, {
            duration: 1,
            opacity: 0,
            ease: "power2.out",
            onComplete: function() {
                window.location.href = targetUrl;
            }
        });
    }

    // Attach event listeners to navigation links excluding main-nav and footer
    const navLinks = document.querySelectorAll('#main-nav a[href]');
    navLinks.forEach(link => {
        link.addEventListener('click', fadeOutAndRedirect);
    });
});
