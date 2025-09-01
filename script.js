// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Typing Animation
const typingText = document.querySelector('.typing-text');
const professions = ['Graphic Designer', 'Web Developer'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentProfession = professions[professionIndex];
    
    if (isDeleting) {
        typingText.textContent = currentProfession.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentProfession.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed /= 2;
    }
    
    if (!isDeleting && charIndex === currentProfession.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeed = 500; // Pause before starting new word
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Social Links Hover Effect
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroName = document.querySelector('.hero-name');
    const heroProfession = document.querySelector('.hero-profession');
    const socialLinks = document.querySelector('.social-links');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        if (heroName) heroName.style.opacity = '1';
    }, 500);
    
    setTimeout(() => {
        if (heroProfession) heroProfession.style.opacity = '1';
    }, 800);
    
    setTimeout(() => {
        if (socialLinks) socialLinks.style.opacity = '1';
    }, 1100);
    
    setTimeout(() => {
        if (heroImage) heroImage.style.opacity = '1';
    }, 1400);
});

// Aurora Effect Controller
function initAuroraEffect() {
    const auroraLayers = document.querySelectorAll('.aurora-layer');
    const hero = document.querySelector('.hero');
    
    if (!auroraLayers.length || !hero) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Mouse movement effect
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width;
        mouseY = (e.clientY - rect.top) / rect.height;
        
        targetX = (mouseX - 0.5) * 20;
        targetY = (mouseY - 0.5) * 20;
    });
    
    // Smooth animation loop
    function animateAurora() {
        auroraLayers.forEach((layer, index) => {
            const speed = 0.02 + (index * 0.01);
            const currentTransform = layer.style.transform || '';
            
            // Apply mouse-based movement
            const mouseInfluence = 0.3 + (index * 0.1);
            const moveX = targetX * mouseInfluence;
            const moveY = targetY * mouseInfluence;
            
            // Add subtle pulsing effect
            const time = Date.now() * 0.001;
            const pulse = Math.sin(time + index) * 0.1 + 1;
            
            layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px) scale(${pulse})`;
            layer.style.opacity = 0.4 + Math.sin(time * 0.5 + index) * 0.2;
        });
        
        requestAnimationFrame(animateAurora);
    }
    
    // Start animation
    animateAurora();
    
    // Intensity control based on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / window.innerHeight;
        const intensity = Math.max(0, 1 - scrollPercent);
        
        auroraLayers.forEach(layer => {
            layer.style.opacity = intensity * 0.6;
        });
    });
}



// Add CSS for loading animations
const style = document.createElement('style');
style.textContent = `
    .hero-name,
    .hero-profession,
    .social-links,
    .hero-image {
        opacity: 0;
        transition: opacity 0.8s ease;
    }
    
    body.loaded .hero-name,
    body.loaded .hero-profession,
    body.loaded .social-links,
    body.loaded .hero-image {
        opacity: 1;
    }
`;
document.head.appendChild(style);