// Navigation menu for mobile
function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            hideMenu();
            
            // Scroll to target element
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Carbon counter animation
function animateCounter() {
    const counter = document.getElementById('carbon-counter');
    const userCount = document.getElementById('user-count');
    const targetCount = 36500; // 1000 users * 36.5kg per year (approx avg savings calculated from data)
    const duration = 2000; // milliseconds
    const frameDuration = 1000 / 60; // 60fps
    const frames = Math.ceil(duration / frameDuration);
    const increment = targetCount / frames;
    
    let count = 0;
    
    const counterAnimation = setInterval(() => {
        count += increment;
        
        if (count >= targetCount) {
            count = targetCount;
            clearInterval(counterAnimation);
        }
        
        counter.textContent = Math.floor(count).toLocaleString();
    }, frameDuration);
}

// Waitlist form submission
const waitlistForm = document.getElementById('waitlist-form');
const successModal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close');
const closeModalBtn = document.getElementById('close-modal');

waitlistForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(waitlistForm);
    const formDataObj = {};
    
    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });
    
    // In a real implementation, you would send this data to your server or email service
    console.log('Form submitted with data:', formDataObj);
    
    // For demo purposes, we'll just show the success modal
    successModal.style.display = 'flex';
    
    // Reset the form
    waitlistForm.reset();
});

// Close modal when clicking the X
closeBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
});

// Close modal when clicking the Close button
closeModalBtn.addEventListener('click', function() {
    successModal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Run carbon counter animation when the section is in view
document.addEventListener('DOMContentLoaded', function() {
    // Features hover effect for better mobile experience
    const featureCols = document.querySelectorAll('.feature-col');
    
    if (window.innerWidth <= 700) {
        featureCols.forEach(col => {
            col.addEventListener('click', function() {
                // Remove active class from all feature columns
                featureCols.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked column
                this.classList.add('active');
            });
        });
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'carbon-impact') {
                    animateCounter();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe the carbon impact section
    const carbonImpactSection = document.getElementById('carbon-impact');
    if (carbonImpactSection) {
        observer.observe(carbonImpactSection);
    }
});

// Update user count and carbon savings on range input
function updateUserCount() {
    const userCountSlider = document.getElementById('user-count-slider');
    const userCount = document.getElementById('user-count');
    const carbonCounter = document.getElementById('carbon-counter');
    
    if (userCountSlider) {
        userCountSlider.addEventListener('input', function() {
            const count = this.value;
            userCount.textContent = count.toLocaleString();
            
            // Update carbon counter (36.5kg per user per year)
            const carbonSavings = count * 36.5;
            carbonCounter.textContent = Math.floor(carbonSavings).toLocaleString();
        });
    }
}

// Call the function if the slider exists
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('user-count-slider')) {
        updateUserCount();
    }
});
