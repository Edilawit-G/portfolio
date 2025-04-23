// Smooth scrolling for all navigation links and CTA button
document.querySelectorAll('a[href^="#"], .cta-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href') || '#contact'; // Default to contact for CTA button
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 