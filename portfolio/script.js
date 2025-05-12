// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize custom cursor
    initCursor();
    
    // Initialize navbar functionality
    initNavbar();
    
    // Initialize typing animation
    initTypingAnimation();
    
    // Initialize GSAP animations
    initAnimations();
    
    // Initialize skill circles
    initSkillCircles();
    
    // Initialize copy to clipboard functionality
    initCopyToClipboard();
});

// Custom cursor
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Show cursor when mouse moves
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power1.out',
            opacity: 1
        });
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power1.out',
            opacity: 1
        });
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        gsap.to([cursor, cursorFollower], {
            opacity: 0,
            duration: 0.3
        });
    });
    
    // Grow cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, .copyable, .menu-toggle');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                width: 20,
                height: 20,
                duration: 0.3
            });
            gsap.to(cursorFollower, {
                width: 40,
                height: 40,
                border: '1px solid var(--primary-color)',
                duration: 0.3
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                width: 10,
                height: 10,
                duration: 0.3
            });
            gsap.to(cursorFollower, {
                width: 30,
                height: 30,
                border: '2px solid var(--primary-color)',
                duration: 0.3
            });
        });
    });
}

// Navbar functionality
function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Typing animation
function initTypingAnimation() {
    const roles = ['Developer', 'Designer', 'Student', 'Problem Solver', 'Flutter Developer'];
    const typingElement = document.querySelector('.typing-text span');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 300; // Pause before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing animation
    setTimeout(type, 1000);
}

// GSAP animations
function initAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.to('.hero h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .to('.typing-text', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.social-icons', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.shape', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.profile-img', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');
    
    // Skills section animations
    gsap.utils.toArray('.skill-item').forEach((skill, i) => {
        gsap.to(skill, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: skill,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.1
        });
    });
    
    // Project cards animations
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.1
        });
    });
    
    // Timeline animations
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.2
        });
    });
    
    // Contact items animations
    gsap.utils.toArray('.contact-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.1
        });
    });
}

// Skill circles animation
function initSkillCircles() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const progressCircle = circle.querySelector('.progress-ring-circle');
        const radius = progressCircle.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;
        
        // Animate the circle when it comes into view
        ScrollTrigger.create({
            trigger: circle,
            start: 'top 80%',
            onEnter: () => {
                const offset = circumference - (percent / 100) * circumference;
                gsap.to(progressCircle, {
                    strokeDashoffset: offset,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Create a temporary element to show the copied message
        const message = document.createElement('div');
        message.textContent = 'Copied!';
        message.style.position = 'fixed';
        message.style.left = '50%';
        message.style.bottom = '20px';
        message.style.transform = 'translateX(-50%)';
        message.style.padding = '10px 20px';
        message.style.background = 'var(--primary-color)';
        message.style.color = 'white';
        message.style.borderRadius = '5px';
        message.style.zIndex = '9999';
        
        document.body.appendChild(message);
        
        // Remove the message after 2 seconds
        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);
    });
}

// Initialize copy to clipboard
function initCopyToClipboard() {
    window.copyToClipboard = copyToClipboard;
}
