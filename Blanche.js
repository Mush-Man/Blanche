
// Loading screen animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Simulate loading progress
    setTimeout(() => {
        loadingProgress.style.width = '100%';
    }, 500);
    
    // Hide loading screen after animation completes
    setTimeout(() => {
        loadingScreen.classList.add('hide');
    }, 3000);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Add glitch effect on hover for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) skewX(2deg)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) skewX(-2deg)';
            }, 100);
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });
    
    // Add scrolling effect
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        
        if (scrollPos > 50) {
            heroContent.style.transform = `translateY(${scrollPos * 0.1}px)`;
        } else {
            heroContent.style.transform = 'translateY(0)';
        }
    });
    
    // Text typing animation for hero section
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 3500);
});

      // Intersection Observer to trigger counter animation when in view
      const statsSection = document.querySelector('.stats-section');
      const yearsCount = document.getElementById('years-count');
      const projectsCount = document.getElementById('projects-count');
      const peopleCount = document.getElementById('people-count');
      const architectsCount = document.getElementById('architects-count');
      
      // Target values from the image
      const yearsTarget = 1;
      const projectsTarget = 3;
      const peopleTarget = 4;
      const architectsTarget = 1000;
      
      let animated = false;
      
      // Function to animate counting up
      function animateCounter(element, target) {
          const duration = 2000; // Animation duration in milliseconds
          const interval = 20; // Animation interval in milliseconds
          const steps = duration / interval;
          const step = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                  current = target;
                  clearInterval(timer);
              }
              element.textContent = Math.round(current);
              
              // Add "+" sign to the architects count
              if (element === architectsCount && Math.round(current) === target) {
                  element.textContent = "+" + element.textContent;
              }
          }, interval);
      }
      
      // Set up the Intersection Observer
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting && !animated) {
                  animated = true;
                  animateCounter(yearsCount, yearsTarget);
                  animateCounter(projectsCount, projectsTarget);
                  animateCounter(peopleCount, peopleTarget);
                  animateCounter(architectsCount, architectsTarget);
              }
          });
      }, { threshold: 0.3 });
      
      // Start observing the stats section
      observer.observe(statsSection);