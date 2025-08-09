// Carousel functionality for Club Highlights
class Carousel {
  constructor(container) {
    this.container = container;
    this.wrapper = container.querySelector('.carousel-wrapper');
    this.slides = container.querySelectorAll('.carousel-slide');
    this.prevBtn = container.querySelector('.carousel-prev');
    this.nextBtn = container.querySelector('.carousel-next');
    this.indicators = container.querySelectorAll('.indicator');
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    
    this.init();
  }
  
  init() {
    // Add event listeners
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    // Add indicator listeners
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Auto-slide every 5 seconds
    this.startAutoSlide();
    
    // Pause auto-slide on hover
    this.container.addEventListener('mouseenter', () => this.stopAutoSlide());
    this.container.addEventListener('mouseleave', () => this.startAutoSlide());
  }
  
  updateSlide() {
    // Update indicators
    this.indicators.forEach(indicator => indicator.classList.remove('active'));
    this.indicators[this.currentSlide].classList.add('active');
    
    // Move carousel wrapper to show current slide
    const translateX = -this.currentSlide * 33.333;
    this.wrapper.style.transform = `translateX(${translateX}%)`;
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlide();
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlide();
  }
  
  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlide();
  }
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    new Carousel(carouselContainer);
  }
});
