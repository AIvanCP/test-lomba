// ========== MOBILE MENU TOGGLE ==========
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
        // Close menu
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    } else {
        // Open menu
        mobileMenu.classList.remove('hidden');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    }
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = 64; // Height of fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    question.addEventListener('click', () => {
        const isActive = answer.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('.faq-icon');
            otherAnswer.classList.remove('active');
            otherIcon.classList.remove('active');
        });
        
        // If this item wasn't active, open it
        if (!isActive) {
            answer.classList.add('active');
            icon.classList.add('active');
        }
    });
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 10) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
    
    lastScroll = currentScroll;
});

// ========== SHARE EVENT FUNCTION ==========
function shareEvent() {
    const shareData = {
        title: 'Lomba Sains Semarang 2026',
        text: 'Ikuti Lomba Sains Semarang 2026! Daftar sekarang dan tunjukkan kemampuan sains terbaikmu!',
        url: window.location.href
    };
    
    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((err) => console.error('Error sharing:', err));
    } else {
        // Fallback: Copy link to clipboard
        const tempInput = document.createElement('input');
        tempInput.value = window.location.href;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Show notification
        alert('Link berhasil disalin! Bagikan ke teman-temanmu 🎉');
    }
}

// ========== DOWNLOAD FUNCTIONS ==========
function downloadPoster() {
    // Simulate download
    alert('Download poster akan segera dimulai!\n\nCatatan: Ini adalah simulasi. Dalam implementasi nyata, file PDF akan diunduh.');
    
    // In real implementation, you would do:
    // window.location.href = '/downloads/poster-lomba-sains-2026.pdf';
    // or use a download link with the download attribute
}

function openGuidebook() {
    // Simulate opening guidebook
    alert('Buku panduan akan dibuka di tab baru!\n\nCatatan: Ini adalah simulasi. Dalam implementasi nyata, PDF akan dibuka.');
    
    // In real implementation:
    // window.open('/downloads/buku-panduan-lomba-sains-2026.pdf', '_blank');
}

function downloadResource(type) {
    const resourceNames = {
        'contoh-soal': 'Contoh Soal',
        'jadwal': 'Jadwal Lengkap',
        'denah': 'Denah Lokasi',
        'faq-pdf': 'FAQ (PDF)'
    };
    
    const resourceName = resourceNames[type] || 'Resource';
    alert(`Download ${resourceName} akan segera dimulai!\n\nCatatan: Ini adalah simulasi.`);
    
    // In real implementation:
    // window.location.href = `/downloads/${type}.pdf`;
}

// ========== SCROLL ANIMATIONS ==========
// Intersection Observer for fade-in animations with stagger
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Stagger animation
        }
    });
}, observerOptions);

// Add animation styles to elements
const animateElements = document.querySelectorAll('.card-hover, .faq-item');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ========== PARALLAX SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-pattern');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
});

// ========== KEYBOARD ACCESSIBILITY ==========
// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// ========== ACTIVE NAVIGATION HIGHLIGHTING ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary-600');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('text-primary-600');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========== NUMBER COUNTER ANIMATION ==========
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const statElements = entry.target.querySelectorAll('.stat-number');
            
            statElements.forEach((el, index) => {
                const text = el.textContent;
                if (index === 0) animateCounter(el, 3);
                else if (index === 1) el.textContent = '50JT+';
                else if (index === 2) animateCounter(el, 500, '+');
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.grid.grid-cols-3');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ========== INITIALIZE ==========
console.log('🔬 Lomba Sains Semarang 2026 - Website Loaded Successfully!');
