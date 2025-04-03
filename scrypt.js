document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', () => {
            body.classList.toggle('mobile-nav-active');
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            // Change icon
            mobileNavToggle.querySelector('i').classList.toggle('fa-bars');
            mobileNavToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Close mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('mobile-nav-active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.querySelector('i').classList.remove('fa-times');
                mobileNavToggle.querySelector('i').classList.add('fa-bars');
            });
        });
    }

    // --- Optional: Add active state to nav links based on scroll ---
    // (More complex, requires calculating section offsets)

    // --- Optional: Simple scroll reveal animation ---
    // (Requires Intersection Observer API)
    const revealElements = document.querySelectorAll('section > .container > *, .card, .garage-feature, .integration-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Optional: Stop observing after revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit before it enters viewport
    });

    revealElements.forEach(el => {
        // Initial state for animation
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});