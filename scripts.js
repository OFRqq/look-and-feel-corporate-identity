document.querySelectorAll('input[type=radio]').forEach((radio) => {
  radio.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      radio.focus(); // Forceer de focus op de radio-button
    }
  });
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the "active" class
});

/*slideshow ADDED*/
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to update slides and dots
function updateSlides(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Function to go to the next slide
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  updateSlides(currentIndex);
}

// Event listener for the arrow button
nextBtn.addEventListener('click', goToNextSlide);

// Initial display
updateSlides(currentIndex);
