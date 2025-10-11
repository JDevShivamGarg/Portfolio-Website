# 🚀 Modern Portfolio Website - Shivam Garg

A cutting-edge, fully responsive portfolio website showcasing modern web development practices with stunning animations, dark mode, and Progressive Web App (PWA) capabilities.


## ✨ Features

### 🎨 Design & UX
- **Modern Glassmorphism Design** - Sleek frosted glass effects throughout
- **Dark/Light Theme Toggle** - Seamless theme switching with local storage persistence
- **Custom Cursor Effects** - Interactive cursor with hover animations
- **Smooth Scrolling** - Butter-smooth navigation between sections
- **Responsive Design** - Perfect on all devices from mobile to 4K displays

### 🎭 Animations
- **Loading Animation** - Creative preloader with name animation
- **Particle.js Background** - Interactive particle network in hero section
- **AOS (Animate On Scroll)** - Beautiful scroll-triggered animations
- **Typewriter Effect** - Dynamic text typing animation
- **Role Carousel** - Auto-rotating professional roles
- **Skill Bars** - Animated progress bars for skills
- **Stats Counter** - Animated number counting

### 🛠 Technical Features
- **Progressive Web App (PWA)** - Installable with offline support
- **Service Worker** - Caching for better performance
- **Intersection Observer** - Optimized scroll-based animations
- **Lazy Loading** - Efficient resource loading
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Performance Optimized** - Debounced/throttled events

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with particles
2. **About** - Personal information with stats and hobbies
3. **Skills** - Filterable technical skills with proficiency levels
4. **Experience** - Interactive timeline of education and work
5. **Projects** - Filterable portfolio with modal details
6. **Achievements** - Certifications and accomplishments
7. **Contact** - Working contact form with validation

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)
- Basic knowledge of HTML/CSS/JS (for customization)

### Installation

1. **Clone or Download the Repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Add Your Images**
   - Replace `profile.jpg` with your profile photo
   - Add project screenshots in `assets/` folder:
     - `sentibot.jpg`, `deepfake.jpg`, `ecommerce.jpg`
     - `og-image.jpg` for social media preview

3. **Start a Local Server**

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx http-server
```

Using VS Code:
- Install "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

4. **Open in Browser**
```
http://localhost:8000
```

## 🎨 Customization Guide

### Personal Information
Edit `index.html`:
- Update name, roles, and description in the hero section
- Modify about section content
- Update contact information
- Add your social media links

### Skills
In `index.html`, modify skill cards:
```html
<div class="skill-card" data-category="languages">
    <div class="skill-icon">
        <i class="devicon-python-plain"></i>
    </div>
    <h3>Python</h3>
    <div class="skill-level">
        <div class="level-bar" data-level="90"></div>
    </div>
    <span class="skill-percentage">90%</span>
</div>
```

### Projects
Update project data in `script.js`:
```javascript
const projectData = {
    yourproject: {
        title: 'Your Project Title',
        image: 'assets/your-image.jpg',
        description: 'Project description',
        features: ['Feature 1', 'Feature 2'],
        technologies: ['Tech 1', 'Tech 2'],
        github: 'https://github.com/...',
        demo: 'https://...'
    }
};
```

### Colors & Theme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
```

### Fonts
Change fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── sw.js              # Service worker for PWA
├── manifest.json      # PWA manifest
├── profile.jpg        # Your profile photo
├── README.md          # Documentation
└── assets/           # Images and resources
    ├── sentibot.jpg
    ├── deepfake.jpg
    ├── ecommerce.jpg
    ├── og-image.jpg
    └── icons/        # PWA icons
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript ES6+** - Interactive functionality
- **Particle.js** - Particle animations
- **AOS Library** - Scroll animations
- **Font Awesome** - Icons
- **Devicon** - Technology icons
- **Google Fonts** - Typography

## 📱 PWA Features

The portfolio is a fully functional Progressive Web App:

1. **Install on Device**
   - Chrome: Click install icon in address bar
   - Safari: Share → Add to Home Screen
   - Edge: Settings → Apps → Install this site

2. **Offline Support**
   - Basic content available offline
   - Cached resources for faster loading

3. **App-like Experience**
   - Fullscreen mode
   - Splash screen
   - Theme color integration

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Your site will be at `https://username.github.io/repository`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📞 Support

If you have any questions or need help with customization:
- Create an issue on GitHub
- Contact: shivamcp2694@gmail.com

## 🌟 Acknowledgments

- Particle.js for particle animations
- AOS for scroll animations
- Font Awesome for icons
- Devicon for technology icons
- Google Fonts for typography

---

**Made with ❤️ by Shivam Garg**

*Feel free to star ⭐ this repository if you find it helpful!*
