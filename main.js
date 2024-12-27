const testimonialContainer = document.getElementById('testimonialContainer');
const testimonials = document.querySelectorAll('.testimonial');

let currentIndex = 0;
const intervalTime = 3000; // 3 seconds
let sliderInterval;

// Function to update the slider
function updateSlider() {
    const offset = -currentIndex * 100;
    testimonialContainer.style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function goToNextSlide() {
    currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
}

// Function to start the automatic slider
function startSlider() {
    sliderInterval = setInterval(goToNextSlide, intervalTime);
}

// Function to pause the slider (optional for interaction handling)
function pauseSlider() {
    clearInterval(sliderInterval);
}

// Start the slider when the page loads
startSlider();
