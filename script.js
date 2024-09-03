document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {  // Only prevent default for internal links sir
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn('Target element not found:', href);
                }
            }
        });
    });
});

