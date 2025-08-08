// Component Loading System
async function loadComponent(componentId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(componentId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentId}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Load components
    await loadComponent('header-component', 'components/header.html');
    await loadComponent('hero-component', 'components/hero.html');
    await loadComponent('about-component', 'components/about.html');
    await loadComponent('kevin-component', 'components/kevin.html');
    await loadComponent('services-component', 'components/services.html');
    await loadComponent('featured-links-component', 'components/featured-links.html');
    await loadComponent('contact-component', 'components/contact.html');
    await loadComponent('footer-component', 'components/footer.html');
    await loadComponent('calendly-modal-component', 'components/calendly-modal.html');

    // Initialize functionality after components are loaded
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeModal();
    initializeIcons();
}

// Mobile Navigation Toggle
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore if href is just "#"
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-item, .link-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Modal functionality
function initializeModal() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('calendlyModal');
        if (event.target === modal) {
            closeCalendlyModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeCalendlyModal();
        }
    });
}

// Calendly Modal Functions
function openCalendlyModal() {
    const modal = document.getElementById('calendlyModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeCalendlyModal() {
    const modal = document.getElementById('calendlyModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Form handling for contact buttons (placeholder for future implementation)
document.addEventListener('DOMContentLoaded', function() {
    const listingButtons = document.querySelectorAll('a[href="#listings"]');
    
    listingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Placeholder for Property Finder integration
            alert('Property Finder listings will be integrated here. Please contact Kevin directly for current listings.');
        });
    });
});

// Initialize Lucide icons
function initializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for mobile navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
