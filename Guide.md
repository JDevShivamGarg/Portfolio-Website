# 📝 **Complete Customization Guide for Each Section**

## 🎯 **Navigation Bar**

### **Changing Logo/Brand:**
```html
<!-- Find this in index.html (around line 55-60) -->
<div class="nav-logo">
    <a href="#home" class="logo-link">
        <span class="logo-text">SG</span>  <!-- Change initials here -->
        <span class="logo-dot"></span>
    </a>
</div>
```

### **Adding New Menu Items:**
```html
<!-- Find nav-menu section (around line 63-70) -->
<div class="nav-menu" id="nav-menu">
    <a href="#home" class="nav-link active">Home</a>
    <a href="#about" class="nav-link">About</a>
    <a href="#skills" class="nav-link">Skills</a>
    <a href="#experience" class="nav-link">Experience</a>
    <a href="#projects" class="nav-link">Projects</a>
    <!-- ADD NEW MENU ITEM -->
    <a href="#blog" class="nav-link">Blog</a>
    <a href="#contact" class="nav-link">Contact</a>
</div>

<!-- Also update side navigation dots (around line 85-92) -->
<div class="side-nav">
    <!-- ... existing dots ... -->
    <a href="#blog" class="side-nav-dot" data-section="blog"></a>
</div>
```

---

## 🏠 **Hero Section**

### **Changing Name and Titles:**
```html
<!-- Find hero section (around line 120-140) -->
<div class="hero-text" data-aos="fade-up">
    <span class="hero-greeting">Hello, I'm</span>  <!-- Change greeting -->
    <h1 class="hero-name">
        <span class="typewriter" id="typewriter-name">Shivam Garg</span>  <!-- Your name -->
        <span class="cursor-blink">|</span>
    </h1>
    <div class="hero-roles">
        <span class="role-text">I'm a</span>
        <span class="roles-carousel" id="roles-carousel">
            <span class="role">ML Engineer</span>  <!-- Default role -->
        </span>
    </div>
    <p class="hero-description">
        <!-- Change your description here -->
        Passionate B.Tech CSE student at Bennett University, crafting intelligent solutions 
        at the intersection of Machine Learning and Full-Stack Development.
    </p>
</div>
```

### **Changing Rotating Roles:**
```javascript
// Find in script.js (around line 180-190)
function initRolesCarousel() {
    const roles = [
        'ML Engineer',           // Change these
        'Full Stack Developer',
        'Gen AI Enthusiast',
        'Your Role Here',        // Add new roles
        'Another Role'
    ];
    // ... rest of code
}
```

### **Changing Profile Image:**
```html
<!-- Find in hero section (around line 160) -->
<img src="profile.jpg" alt="Shivam Garg" class="profile-image">
<!-- Just replace profile.jpg file with your image (same name) or update src -->
```

### **Changing Status Badge:**
```html
<!-- Find status badge (around line 175) -->
<div class="status-badge">
    <span class="status-dot"></span>
    <span>Available for hire</span>  <!-- Change status text -->
</div>
```

### **Adding Social Links to Hero:**
```html
<!-- Add after hero-cta div -->
<div class="hero-social">
    <a href="https://twitter.com/yourhandle" class="hero-social-link">
        <i class="fab fa-twitter"></i>
    </a>
    <!-- Add more social links -->
</div>
```

---

## 👤 **About Section**

### **Changing Info Cards:**
```html
<!-- Find about-cards div (around line 200-220) -->
<div class="about-cards" data-aos="fade-up">
    <div class="info-card">
        <i class="fas fa-graduation-cap"></i>  <!-- Change icon -->
        <h3>Education</h3>                     <!-- Change title -->
        <p>B.Tech CSE</p>                      <!-- Change main text -->
        <span>Bennett University</span>         <!-- Change subtext -->
    </div>
    
    <!-- Add new info card -->
    <div class="info-card">
        <i class="fas fa-award"></i>
        <h3>Experience</h3>
        <p>2+ Years</p>
        <span>Professional Development</span>
    </div>
</div>
```

### **Changing About Description:**
```html
<!-- Find about-description (around line 235) -->
<p class="about-description">
    Hey there! I'm a passionate <span class="highlight">B.Tech CSE</span> student...
    <!-- Rewrite your complete bio here -->
    <!-- Use <span class="highlight">text</span> for colored emphasis -->
</p>
```

### **Changing/Adding Features:**
```html
<!-- Find about-features div (around line 245-255) -->
<div class="about-features">
    <div class="feature-item">
        <i class="fas fa-check-circle"></i>
        <span>Quick learner with adaptable mindset</span>  <!-- Change text -->
    </div>
    
    <!-- Add new feature -->
    <div class="feature-item">
        <i class="fas fa-check-circle"></i>
        <span>Your new skill or feature here</span>
    </div>
</div>
```

### **Changing Stats:**
```html
<!-- Find about-stats div (around line 265-280) -->
<div class="about-stats">
    <div class="stat-item">
        <span class="stat-number" data-count="20">0</span>  <!-- Change number -->
        <span class="stat-label">Age</span>                 <!-- Change label -->
    </div>
    
    <!-- Add new stat -->
    <div class="stat-item">
        <span class="stat-number" data-count="500">0</span>
        <span class="stat-label">GitHub Commits</span>
    </div>
</div>
```

### **Changing/Adding Hobbies:**
```html
<!-- Find hobbies-grid (around line 290-300) -->
<div class="hobbies-grid">
    <div class="hobby-card">
        <i class="fas fa-film"></i>         <!-- Change icon -->
        <span>Movies & Anime</span>         <!-- Change text -->
    </div>
    
    <!-- Add new hobby -->
    <div class="hobby-card">
        <i class="fas fa-book"></i>
        <span>Reading</span>
    </div>
</div>
```

---

## 🛠️ **Skills Section**

### **Adding New Skill Category:**
```html
<!-- Find skill-categories (around line 320) -->
<div class="skill-categories" data-aos="fade-up">
    <button class="category-btn active" data-category="all">All</button>
    <button class="category-btn" data-category="languages">Languages</button>
    <!-- Add new category button -->
    <button class="category-btn" data-category="database">Databases</button>
</div>
```

### **Adding New Skills:**
```html
<!-- Find skills-grid (around line 330-450) -->
<div class="skills-grid" data-aos="fade-up">
    <!-- Add new skill card -->
    <div class="skill-card" data-category="languages">  <!-- Set category -->
        <div class="skill-icon">
            <i class="devicon-rust-plain"></i>          <!-- Choose icon -->
        </div>
        <h3>Rust</h3>                                   <!-- Skill name -->
        <div class="skill-level">
            <div class="level-bar" data-level="70"></div>  <!-- Set level % -->
        </div>
        <span class="skill-percentage">70%</span>       <!-- Display % -->
    </div>
</div>
```

### **Finding Icons:**
- **DevIcons:** Visit [devicon.dev](https://devicon.dev) for technology icons
- **Font Awesome:** Visit [fontawesome.com/icons](https://fontawesome.com/icons)

Example icons:
```html
<!-- Programming Languages -->
<i class="devicon-python-plain"></i>
<i class="devicon-javascript-plain"></i>
<i class="devicon-rust-plain"></i>
<i class="devicon-go-plain"></i>

<!-- Frameworks -->
<i class="devicon-react-original"></i>
<i class="devicon-django-plain"></i>
<i class="devicon-nextjs-original"></i>

<!-- Databases -->
<i class="devicon-postgresql-plain"></i>
<i class="devicon-redis-plain"></i>

<!-- Tools -->
<i class="devicon-kubernetes-plain"></i>
<i class="devicon-amazonwebservices-original"></i>
```

---

## 📅 **Experience Timeline**

### **Adding New Timeline Entry:**
```html
<!-- Find timeline div (around line 470-550) -->
<div class="timeline" data-aos="fade-up">
    <!-- Add new timeline item (alternate left/right classes) -->
    <div class="timeline-item left">  <!-- or "right" -->
        <div class="timeline-date">2024 - Present</div>
        <div class="timeline-content">
            <h3>Software Engineer</h3>          <!-- Position -->
            <h4>Company Name</h4>               <!-- Company/Institution -->
            <p>Description of your role and achievements...</p>
            <div class="timeline-tags">
                <span>React</span>              <!-- Technologies used -->
                <span>Node.js</span>
                <span>AWS</span>
            </div>
        </div>
    </div>
</div>
```

### **Timeline Pattern:**
- Odd items: class="timeline-item left"
- Even items: class="timeline-item right"

---

## 💼 **Projects Section**

### **Adding New Filter Category:**
```html
<!-- Find project-filters (around line 570) -->
<div class="project-filters" data-aos="fade-up">
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="ml">Machine Learning</button>
    <!-- Add new filter -->
    <button class="filter-btn" data-filter="mobile">Mobile Apps</button>
</div>
```

### **Adding New Project Card:**
```html
<!-- Find projects-grid (around line 580-650) -->
<div class="projects-grid" data-aos="fade-up">
    <!-- Add new project card -->
    <div class="project-card" data-category="ml web">  <!-- Multiple categories -->
        <div class="project-image">
            <img src="assets/your-project.jpg" alt="Project Name">
            <div class="project-overlay">
                <div class="project-links">
                    <a href="https://github.com/your-repo" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="#" class="project-link" onclick="openProjectModal('yourproject')">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <div class="project-tags">
                <span class="tag">Machine Learning</span>
                <span class="tag">Python</span>
            </div>
            <h3 class="project-title">Your Project Name</h3>
            <p class="project-description">
                Brief description of what your project does...
            </p>
            <div class="project-tech">
                <i class="devicon-python-plain" title="Python"></i>
                <i class="devicon-tensorflow-original" title="TensorFlow"></i>
            </div>
        </div>
    </div>
</div>
```

### **Adding Project Modal Data:**
```javascript
// Find in script.js (around line 650-700)
function openProjectModal(projectId) {
    const projectData = {
        // ... existing projects ...
        
        // Add your new project
        yourproject: {
            title: 'Your Project Title',
            image: 'assets/your-project-full.jpg',
            description: 'Detailed project description...',
            features: [
                'Feature 1 description',
                'Feature 2 description',
                'Feature 3 description'
            ],
            technologies: ['Python', 'TensorFlow', 'Flask'],
            github: 'https://github.com/yourusername/project',
            demo: 'https://your-demo-link.com'  // or '#' if no demo
        }
    };
    // ... rest of function
}
```

---

## 🏆 **Achievements Section**

### **Adding New Achievement:**
```html
<!-- Find achievements-grid (around line 700-750) -->
<div class="achievements-grid" data-aos="fade-up">
    <!-- Add new achievement card -->
    <div class="achievement-card">
        <div class="achievement-icon">
            <i class="fas fa-medal"></i>        <!-- Choose icon -->
        </div>
        <h3>Hackathon Winner</h3>              <!-- Title -->
        <p>1st Place at XYZ Hackathon 2024 for innovative AI solution</p>  <!-- Description -->
    </div>
</div>
```

---

## 📧 **Contact Section**

### **Changing Contact Information:**
```html
<!-- Find contact-items (around line 780-810) -->
<div class="contact-items">
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <div>
            <h4>Email</h4>
            <a href="mailto:your-email@gmail.com">your-email@gmail.com</a>  <!-- Your email -->
        </div>
    </div>
    
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <div>
            <h4>Phone</h4>
            <a href="tel:+919999999999">+91 9999999999</a>  <!-- Your phone -->
        </div>
    </div>
    
    <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <div>
            <h4>Location</h4>
            <span>Your City, Country</span>  <!-- Your location -->
        </div>
    </div>
</div>
```

### **Adding/Changing Social Links:**
```html
<!-- Find social-links div (around line 820-835) -->
<div class="social-links">
    <a href="https://github.com/yourusername" target="_blank" class="social-icon">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add new social link -->
    <a href="https://twitter.com/yourhandle" target="_blank" class="social-icon">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/yourhandle" target="_blank" class="social-icon">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

### **Connecting Contact Form to Email Service:**

#### **Option 1: Using Formspree (Easy)**
```html
<!-- Replace form tag -->
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Get YOUR_FORM_ID from formspree.io after signup -->
```

#### **Option 2: Using EmailJS**
```javascript
// Add to script.js
function initContactForm() {
    // Sign up at emailjs.com and get your IDs
    emailjs.init("YOUR_PUBLIC_KEY");
    
    elements.contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target)
            .then(() => {
                showNotification('Message sent successfully!', 'success');
                e.target.reset();
            })
            .catch((error) => {
                showNotification('Failed to send message', 'error');
            });
    });
}
```

---

## ➕ **Adding Completely New Sections**

### **Example: Adding a Blog Section**

#### **Step 1: Add HTML Structure**
```html
<!-- Add after projects section -->
<section class="blog" id="blog">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-subtitle">My Thoughts</span>
            <h2 class="section-title">Latest Blog Posts</h2>
            <div class="section-line"></div>
        </div>
        
        <div class="blog-grid" data-aos="fade-up">
            <article class="blog-card">
                <div class="blog-image">
                    <img src="assets/blog1.jpg" alt="Blog Title">
                    <div class="blog-date">Jan 15, 2024</div>
                </div>
                <div class="blog-content">
                    <h3>Understanding Neural Networks</h3>
                    <p>A deep dive into how neural networks work...</p>
                    <a href="https://medium.com/@yourusername/article" class="blog-link">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
            <!-- Add more blog cards -->
        </div>
    </div>
</section>
```

#### **Step 2: Add CSS Styles**
```css
/* Add to styles.css */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.blog-card {
    background: var(--bg-primary);
    border-radius: 15px;
    overflow: hidden;
    transition: all var(--transition-normal);
    box-shadow: 0 10px 30px var(--shadow-color);
}

.blog-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px var(--shadow-color);
}

.blog-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-date {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--gradient-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
}

.blog-content {
    padding: 1.5rem;
}

.blog-content h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.blog-content p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.blog-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap var(--transition-fast);
}

.blog-link:hover {
    gap: 1rem;
}
```

#### **Step 3: Update Navigation**
```html
<!-- Add to nav menu -->
<a href="#blog" class="nav-link">Blog</a>

<!-- Add to side dots -->
<a href="#blog" class="side-nav-dot" data-section="blog"></a>
```

---

## 🎨 **Global Changes**

### **Changing Color Scheme:**
```css
/* In styles.css, find :root (line 5-30) */
:root {
    /* Change primary colors */
    --primary-color: #3b82f6;    /* Blue instead of purple */
    --secondary-color: #10b981;   /* Green */
    --accent-color: #f59e0b;      /* Orange */
    
    /* Change gradients */
    --gradient-primary: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
}
```

### **Changing Fonts:**
```html
<!-- In index.html <head> section -->
<!-- Replace Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* In styles.css */
:root {
    --font-primary: 'Poppins', sans-serif;  /* Change font family */
}
```

### **Changing Animation Speed:**
```css
/* In styles.css */
:root {
    --transition-fast: 0.3s ease;    /* Make faster or slower */
    --transition-normal: 0.5s ease;
    --transition-slow: 0.8s ease;
}
```

---

## 💡 **Pro Tips for Customization**

### **1. Test Changes Locally:**
```bash
python server.py  # Run local server
# Make changes and refresh browser
```

### **2. Use Browser DevTools:**
- Right-click → Inspect Element
- Test CSS changes live
- Check console for JavaScript errors

### **3. Keep Backups:**
```bash
# Before major changes
cp index.html index.backup.html
cp styles.css styles.backup.css
```

### **4. Validate Your Changes:**
- HTML Validator: [validator.w3.org](https://validator.w3.org)
- CSS Validator: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

### **5. Image Optimization:**
- Use WebP format for better performance
- Compress images at [tinypng.com](https://tinypng.com)
- Recommended sizes:
  - Profile photo: 500x500px
  - Project images: 800x600px
  - Blog images: 1200x630px

---

## 🔍 **Quick Reference**

| Section | HTML Location | CSS Location | JS Location |
|---------|--------------|--------------|-------------|
| Navigation | Lines 50-100 | Lines 150-300 | Lines 50-80 |
| Hero | Lines 120-190 | Lines 400-600 | Lines 180-200 |
| About | Lines 200-310 | Lines 700-900 | Lines 400-450 |
| Skills | Lines 320-460 | Lines 1000-1200 | Lines 250-280 |
| Timeline | Lines 470-550 | Lines 1300-1500 | - |
| Projects | Lines 570-680 | Lines 1600-1800 | Lines 650-750 |
| Contact | Lines 760-880 | Lines 2000-2200 | Lines 500-550 |

Remember to:
- Always test changes locally first
- Keep consistent styling
- Update both desktop and mobile views
- Test on different browsers
- Commit changes regularly if using Git

Need help with any specific customization? Let me know! 🚀