// ===== MOBILE NAV TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== SCROLL ANIMATION FOR STATS =====
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const current = parseInt(stat.textContent);
        const increment = Math.ceil(target / 50);

        if (current < target) {
            const newValue = Math.min(current + increment, target);
            stat.textContent = newValue;
        }
    });
};

// Intersection Observer for stats
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reset stats to 0 before animating
                    statNumbers.forEach(stat => {
                        stat.textContent = '0';
                    });
                    const interval = setInterval(() => {
                        let allDone = true;
                        statNumbers.forEach(stat => {
                            const current = parseInt(stat.textContent);
                            const target = parseInt(stat.getAttribute('data-target'));
                            if (current < target) {
                                allDone = false;
                                const increment = Math.ceil(target / 40);
                                stat.textContent = Math.min(current + increment, target);
                            }
                        });
                        if (allDone) clearInterval(interval);
                    }, 30);
                    observer.unobserve(statsSection);
                }
            });
        },
        { threshold: 0.3 }
    );
    observer.observe(statsSection);
}

// ===== CONTACT FORM (demo) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Thanks for reaching out, Tag! (This is a demo — connect your backend to send real emails.)');
        contactForm.reset();
    });
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

console.log('🚀 Portfolio of Tag Hamad (eight0o0) — Backend Developer');