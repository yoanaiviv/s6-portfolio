import gsap from "gsap";

class Application {
  constructor() {
    // Initialize mouse and position coordinates
    this.mouse = { x: 0, y: 0 };
    this.position = { x: 0, y: 0 };

    // Select all project elements and image elements
    this.$projects = [...document.querySelectorAll("[data-select='project']")];
    this.$images = [...document.querySelectorAll("[data-select='image']")];

    // Set the initial scale of images to 0 (hidden)
    gsap.set(this.$images, { scale: 0 });

    // Add event listeners for each project element
    this.$projects.forEach(($project) => {
      const id = $project.dataset.id;
      // Handle mouse enter event
      $project.addEventListener("mouseenter", () => this.handleProjectEnter(id));
      // Handle mouse leave event
      $project.addEventListener("mouseleave", () => this.handleProjectLeave(id));
    });

    // Add event listener for mouse move on the window
    window.addEventListener("mousemove", this.handleMouseMove);

    // Add the tick function to the GSAP ticker (animation loop)
    gsap.ticker.add(this.handleTick);
  }

  // Handle project mouse enter event
  handleProjectEnter = (id) => {
    // Find the corresponding image by data-id
    this.image = this.$images.find((image) => image.dataset.id === id);
    // Animate the image to scale 1 (visible)
    gsap.to(this.image, { scale: 1.0, ease: "sine.out" });
  };

  // Handle project mouse leave event
  handleProjectLeave = () => {
    // Animate all images to scale 0 (hidden)
    gsap.to(this.$images, { scale: 0.0, ease: "sine.out" });
  };

  // Handle the animation frame updates
  handleTick = () => {
    // Interpolate the position towards the mouse position for smooth movement
    this.position.x = gsap.utils.interpolate(this.position.x, this.mouse.x, 0.075);
    this.position.y = gsap.utils.interpolate(this.position.y, this.mouse.y, 0.075);

    // If an image is being animated, update its position
    if (this.image) {
      gsap.set(this.image, { x: this.position.x, y: this.position.y });
    }
  };

  // Handle mouse move event
  handleMouseMove = (event) => {
    // Update mouse coordinates with the current mouse position
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };
}

// Instantiate the Application class to run the code
new Application();