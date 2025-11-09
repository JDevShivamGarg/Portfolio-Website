// ===============================================
// MODERN PORTFOLIO JAVASCRIPT - SHIVAM GARG
// ===============================================

// =============== Global Variables ===============
let isScrolling = false;
let currentSection = 'home';
let skillsAnimated = false;
let statsAnimated = false;

// =============== DOM Elements ===============
const elements = {
    preloader: document.getElementById('preloader'),
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('nav-menu'),
    navToggle: document.getElementById('nav-toggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    themeToggle: document.getElementById('theme-toggle'),
    backToTop: document.getElementById('backToTop'),
    typewriter: document.getElementById('typewriter-name'),
    rolesCarousel: document.getElementById('roles-carousel'),
    contactForm: document.getElementById('contactForm'),
    projectModal: document.getElementById('projectModal'),
    modalBody: document.getElementById('modalBody'),
    cursor: document.querySelector('.cursor'),
    cursorFollower: document.querySelector('.cursor-follower'),
    sideNavDots: document.querySelectorAll('.side-nav-dot'),
    categoryBtns: document.querySelectorAll('.category-btn'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    skillCards: document.querySelectorAll('.skill-card'),
    projectCards: document.querySelectorAll('.project-card'),
    statNumbers: document.querySelectorAll('.stat-number'),
    particles: document.getElementById('particles')
};

// =============== Initialize ===============
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTheme();
    initNavigation();
    initScrollEffects();
    initTypewriter();
    initRolesCarousel();
    initSkillsFilter();
    initProjectsFilter();
    initAnimations();
    initParticles();
    initCustomCursor();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
    initIntersectionObserver();
});

// =============== Preloader ===============
function initPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            elements.preloader.classList.add('fade-out');
            document.body.style.overflow = 'visible';
            
            // Initialize AOS after preloader
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: false,
                mirror: true,
                offset: 100
            });
        }, 2000);
    });
}

// =============== Theme Toggle ===============
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    elements.themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = elements.themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// =============== Navigation ===============
function initNavigation() {
    // Mobile menu toggle
    elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.navToggle.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    elements.navLinks.forEach(link => {
        link.addEventListener('click', () => {
            elements.navMenu.classList.remove('active');
            elements.navToggle.classList.remove('active');
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
            
            elements.sideNavDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href') === `#${sectionId}`) {
                    dot.classList.add('active');
                }
            });
            
            currentSection = sectionId;
        }
    });
}

// =============== Scroll Effects ===============
function initScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar scroll effect
        if (scrollTop > 50) {
            elements.navbar.classList.add('scrolled');
        } else {
            elements.navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            elements.navbar.style.transform = 'translateY(-100%)';
        } else {
            elements.navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Animate skills when in viewport
        if (isElementInViewport(document.querySelector('.skills-grid')) && !skillsAnimated) {
            animateSkills();
            skillsAnimated = true;
        }
        
        // Animate stats when in viewport
        if (isElementInViewport(document.querySelector('.about-stats')) && !statsAnimated) {
            animateStats();
            statsAnimated = true;
        }
    });
}

// =============== Typewriter Effect ===============
function initTypewriter() {
    const text = 'Shivam Garg';
    let index = 0;
    
    elements.typewriter.textContent = '';
    
    function type() {
        if (index < text.length) {
            elements.typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 2500); // Start after preloader
}

// =============== Roles Carousel ===============
function initRolesCarousel() {
    const roles = [
        'ML Engineer',
        'Full Stack Developer',
        'Gen AI Enthusiast',
        'Competitive Programmer',
        'Problem Solver',
        'Tech Innovator'
    ];
    
    let currentRole = 0;
    
    setInterval(() => {
        currentRole = (currentRole + 1) % roles.length;
        animateRoleChange(roles[currentRole]);
    }, 3000);
}

function animateRoleChange(newRole) {
    const roleElement = elements.rolesCarousel.querySelector('.role');
    
    // Fade out
    roleElement.style.opacity = '0';
    roleElement.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        roleElement.textContent = newRole;
        // Fade in
        roleElement.style.opacity = '1';
        roleElement.style.transform = 'translateY(0)';
    }, 300);
}

// =============== Skills Filter ===============
function initSkillsFilter() {
    elements.categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            elements.categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter skills
            elements.skillCards.forEach(card => {
                if (category === 'all' || card.dataset.category.includes(category)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// =============== Projects Filter ===============
function initProjectsFilter() {
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter projects
            elements.projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// =============== Animations ===============
function initAnimations() {
    // Add transition styles dynamically
    elements.skillCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
    });
    
    elements.projectCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
    });
}

function animateSkills() {
    const levelBars = document.querySelectorAll('.level-bar');
    
    levelBars.forEach(bar => {
        const level = bar.dataset.level;
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, 200);
    });
}

function animateStats() {
    elements.statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (stat.dataset.count.includes('%') ? '%' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + (stat.dataset.count.includes('%') ? '%' : '');
            }
        }, 30);
    });
}

// =============== Particles Background ===============
function initParticles() {
    if (elements.particles) {
        particlesJS('particles', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#667eea'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#667eea',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// =============== Custom Cursor ===============
function initCustomCursor() {
    if (window.innerWidth > 768 && elements.cursor && elements.cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            elements.cursor.style.left = e.clientX + 'px';
            elements.cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                elements.cursorFollower.style.left = e.clientX + 'px';
                elements.cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                elements.cursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                elements.cursor.classList.remove('hover');
            });
        });
    }
}

// =============== Contact Form ===============
function initContactForm() {
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(elements.contactForm);
            const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            try {
                const response = await fetch('https://formspree.io/f/manppkba', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    elements.contactForm.reset();
                    submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    showNotification('Message sent successfully!', 'success');
                } else {
                    showNotification('Error sending message.', 'error');
                }
            } catch (err) {
                showNotification('Network error.', 'error');
            } finally {
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }
        });
    }
}


// =============== Back to Top ===============
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            elements.backToTop.classList.add('show');
        } else {
            elements.backToTop.classList.remove('show');
        }
    });
    
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============== Smooth Scroll ===============
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============== Intersection Observer ===============
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.timeline-item, .project-card, .skill-card, .achievement-card').forEach(el => {
        observer.observe(el);
    });
}

// =============== Project Modal ===============
function openProjectModal(projectId) {
    const projectData = {
        sourcesync: {
            title: 'Source Sync - Narrative Analysis Tool',
            image: 'assests/source-sync.png',
            description: 'Source Sync is a web application that uses AI to perform a deep, contextual analysis comparing an anime adaptation to its original source material (e.g., a manga or light novel).',
            features: [
                'AI-Powered Semantic Match: The system uses a sophisticated AI pipeline to intelligently find all text from the source novel that has no matching equivalent in the anime\'s dialogue.',
                'Thematic Clustering: To preserve context, the application uses K-Means clustering to automatically group related missing scenes by topic (e.g., "Character Backstory," "Political Subplot").',
                'Narrative Arc Analysis: Each thematic cluster is analyzed by a Large Language Model which acts as a "story editor," summarizing the significant scenes and mini-arcs that were cut and explaining their importance.',
                'Structured Reporting: The final output is a clean, categorized report presented to the user, breaking down the missing content into categories like "Character Development," "World Building," or "Side Plots."',
                'Effortless Comparison: A simple, clean interface for users to upload an anime\'s subtitle file (.srt) and the corresponding source material (.txt).'
            ],
            technologies: ['Python', 'Flask', 'React', 'Tailwind CSS', 'Scikit-learn', 'NLP'],
            github: 'https://github.com/JDevShivamGarg/Source-Sync',
        },
        sentibot: {
            title: 'Sentibot - Sentiment Analysis Web App',
            image: 'assets/sentibot-full.png',
            description: 'A comprehensive multi-modal sentiment analysis web application that analyzes emotions from text, voice, and facial expressions.',
            features: [
                'Real-time text sentiment analysis using NLP',
                'Voice emotion recognition with audio processing',
                'Facial expression detection using YOLOv8',
                'Interactive dashboard with visualizations',
                'RESTful API for integration'
            ],
            technologies: ['Python', 'TensorFlow', 'Flask', 'YOLOv8', 'OpenCV', 'JavaScript', 'HTML/CSS'],
            github: 'https://github.com/JDevShivamGarg/SentiBot--Your-Virtual-Friend',
            demo: '#'
        },
        deepfake: {
            title: 'Deepfake Detection System',
            image: 'assets/deepfake.png',
            description: 'An advanced deepfake detection system using state-of-the-art deep learning techniques to identify manipulated videos.',
            features: [
                '92% accuracy on benchmark datasets',
                'ResNext50 and LSTM architecture',
                'Real-time video analysis',
                'Frame-by-frame detection',
                'Confidence score visualization'
            ],
            technologies: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
            github: 'https://github.com/JDevShivamGarg/Deepfake-Detection-Webapp',
            demo: '#'
        },
        ecommerce: {
            title: 'E-Commerce Platform',
            image: 'assets/ecommerce.png',
            description: 'A modern, responsive e-commerce website built with React and Tailwind CSS, featuring a complete shopping experience.',
            features: [
                'Product catalog with search and filters',
                'Shopping cart functionality',
                'Optimized performance with lazy loading and memoization',
                'Payment integration',
                'Responsive design for all devices'
            ],
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js'],
            github: 'https://github.com/JDevShivamGarg/E-commerce-app',
            demo: 'https://jdevshivamgarg.github.io/E-Commerce/'
        },
        neo4j: {
            title: 'Neo4j Visualization Tool',
            image: 'assets/neo4j.png',
            description: 'A web-based tool for visualizing and interacting with Neo4j graph databases, built with React and D3.js.',
            features: [
                'Dynamic graph visualization',
                'Interactive node and relationship exploration',
                'Add Nodes - Create new nodes with different types (User, Post, Comment).',
                'Responsive design'
            ],
            technologies: ['React', 'D3.js', 'JavaScript', 'Neo4j'],
            github: 'https://github.com/JDevShivamGarg/Neo4j-Visualization-Tool',
            demo: 'https://jdevshivamgarg.github.io/neo4j-visualization/'
        },
        airlens: {
            title: 'AirLens - Smart Environmental Monitoring System',
            image: 'assets/airlens.png',
            description: 'AirLens is a comprehensive full-stack application providing real-time environmental data monitoring across 31+ cities in India. It automatically fetches data from multiple weather and air quality APIs, stores it in a cloud database, and presents it through an intuitive, interactive web interface.',
            features: [
                'Real-time Dashboard: Interactive charts (Line/Bar) with Recharts, City-based filtering, Sortable data tables, Live clock and countdown to next refresh, Gauge charts for key metrics.',
                'Interactive Maps: Leaflet-based geographic visualization, Color-coded markers by metric (AQI, Temp, Humidity, Wind), City popups with detailed information, Metric selector dropdown.',
                'Alert Management: Customizable thresholds (Critical & Warning levels), Real-time alert generation, Alert filtering and management, Toast notifications.',
                'Smart Caching: Client-side localStorage caching (1-hour TTL), Server-side cache control headers, Scheduled data refresh (12 PM daily), 99% reduction in API calls.'
            ],
            technologies: ['React', 'Tailwind CSS', 'FastAPI', 'Supabase', 'Docker', 'Vite', 'Recharts', 'Leaflet'],
            github: 'https://github.com/JDevShivamGarg/Smart-Environmental-Monitoring',
            demo: 'https://jdevshivamgarg.github.io/Smart-Environmental-Monitoring/'
        }
    }

    const project = projectData[projectId];
    
    if (project) {
        const modalContent = `
            <div class="project-modal-header">
                <h2>${project.title}</h2>
            </div>
            <div class="project-modal-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-modal-content">
                <p class="project-modal-description">${project.description}</p>
                
                <div class="project-modal-section">
                    <h3>Key Features</h3>
                    <ul class="project-features">
                        ${project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-modal-section">
                    <h3>Technologies Used</h3>
                    <div class="project-tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-modal-links">
                    <a href="${project.github}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                    ${project.demo !== '#' ? `
                        <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        elements.modalBody.innerHTML = modalContent;
        elements.projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    elements.projectModal.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Close modal on outside click
elements.projectModal.addEventListener('click', (e) => {
    if (e.target === elements.projectModal) {
        closeProjectModal();
    }
});

// =============== Utility Functions ===============
function isElementInViewport(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '15px 20px',
        background: type === 'success' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 1s ease forwards;
    }
    
    .project-modal-header {
        margin-bottom: 2rem;
    }
    
    .project-modal-header h2 {
        font-size: 2rem;
        background: var(--gradient-primary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .project-modal-image {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 15px;
        margin-bottom: 2rem;
    }
    
    .project-modal-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .project-modal-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .project-modal-section {
        margin-bottom: 2rem;
    }
    
    .project-modal-section h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .project-features {
        list-style: none;
        padding: 0;
    }
    
    .project-features li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0.5rem 0;
        color: var(--text-secondary);
    }
    
    .project-features i {
        color: var(--primary-color);
    }
    
    .project-tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-tag {
        padding: 0.5rem 1rem;
        background: var(--gradient-primary);
        color: white;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .project-modal-links {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
`;
document.head.appendChild(style);

// =============== Performance Optimization ===============
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 100));

// Optimize resize events
window.addEventListener('resize', throttle(() => {
    // Reinitialize particles on resize
    if (elements.particles && window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
        initParticles();
    }
}, 250));

// =============== Service Worker Registration ===============
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// =============== Export Functions ===============
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
