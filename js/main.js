// Social media popup functionality
// Remove this function
// showSocialPopup function and any related code

// Add hover effect to ensure feature titles turn yellow
document.addEventListener('DOMContentLoaded', function() {
    const featureElements = document.querySelectorAll('.feature, .feature-box, .feature-item, .feature-col');
    
    featureElements.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '#FFC107'; // Yellow
            }
        });
        
        feature.addEventListener('mouseleave', function() {
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = ''; // Reset to default
            }
        });
    });
});