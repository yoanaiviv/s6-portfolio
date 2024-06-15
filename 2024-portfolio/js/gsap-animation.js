document.addEventListener("DOMContentLoaded", function() {
    // Configuration object
    const animationConfig = {
      h1: {
        typeIn: {
          duration: 0.05,
          stagger: 0.05,
          delay: 0.5
        }
      },
      slideIn: {
        h2: {
          x: -200,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out"
        },
        h3: {
          x: -200,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out"
        },
        p: {
          x: -200,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out"
        }
      },
      drawIn: {
        box: {
          x: 500,
          opacity: 0,
          duration: 3,
          delay: 0.5,
          ease: "power2.out"
        }
      }
    };
  
    // Function to apply type-in animation for h1 elements
    function applyTypeInAnimation(elements, config) {
      elements.forEach((h1, index) => {
        const text = h1.innerText;
        h1.innerText = ""; // Clear the text
        const splitText = text.split("");
        splitText.forEach((char) => {
          const span = document.createElement("span");
          span.innerText = char;
          span.style.opacity = 0;
          h1.appendChild(span);
        });
  
        const chars = h1.querySelectorAll("span");
        gsap.to(chars, {
          duration: config.duration,
          opacity: 1,
          stagger: config.stagger,
          delay: index * config.delay
        });
      });
    }
  
    // Function to apply slide-in animation
    function applySlideInAnimation(elements, config) {
      elements.forEach((el, index) => {
        gsap.from(el, {
          x: config.x,
          opacity: config.opacity,
          duration: config.duration,
          delay: index * config.delay,
          ease: config.ease
        });
      });
    }
  
    // Function to apply draw-in animation
    function applyDrawInAnimation(elements, config) {
      elements.forEach((el, index) => {
        gsap.from(el, {
          x: config.x,
          opacity: config.opacity,
          duration: config.duration,
          delay: index * config.delay,
          ease: config.ease
        });
      });
    }
  
    // Apply animations using the configuration object
    const h1Elements = document.querySelectorAll(".title h1");
    applyTypeInAnimation(h1Elements, animationConfig.h1.typeIn);
  
    const h2Elements = document.querySelectorAll("h2");
    applySlideInAnimation(h2Elements, animationConfig.slideIn.h2);
  
    const h3Elements = document.querySelectorAll("h3");
    applySlideInAnimation(h3Elements, animationConfig.slideIn.h3);
  
    const pElements = document.querySelectorAll("p");
    applySlideInAnimation(pElements, animationConfig.slideIn.p);
  
    const boxElements = document.querySelectorAll(".box");
    applyDrawInAnimation(boxElements, animationConfig.drawIn.box);
  });
  