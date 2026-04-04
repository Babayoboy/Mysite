# Portfolio | Ansh Joshi

A modern, interactive portfolio website showcasing skills, experience, and projects with a stunning 3D globe background visualization.

## 💻 Live Demo

**[View the live site here](https://babayoboy.github.io/Mysite/)**

## 🌍 Features

- **Interactive 3D Globe** - Dynamic rotating Earth globe using Three.js
- **Modern Dark Theme** - Sleek dark UI with smooth animations
- **Responsive Design** - Mobile-friendly layout
- **Smooth Animations** - Fade-in and scroll animations for engaging UX
- **Professional Layout** - Clean sections for About, Experience, Skills, and Projects
- **Navigation** - Fixed header with easy navigation to all sections

## 📂 Project Structure

```
├── index.html      # Main HTML file with page structure
├── style.css       # Styling and animations
├── globe.js        # Three.js globe visualization
└── README.md       # Project documentation
```

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics:** Three.js
- **Fonts:** Google Fonts (Inter)
- **Design:** CSS Grid, Flexbox, Glass-morphism effects

## 📋 Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About** - Personal background and philosophy
3. **Experience** - Professional experience and projects
4. **Skills** - Technical skills categorized by Frontend, Backend, and Tools
5. **Projects** - Showcase of portfolio projects

## 🚀 Getting Started

### Prerequisites
- Web browser with WebGL support
- Three.js library (loaded via CDN)

### Installation

1. Clone or download the project
2. Ensure you have an `earth_texture.png` file in the project root for the globe texture
3. Open `index.html` in a modern web browser

### Running Locally

```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## 📖 Skills

**Frontend:** HTML5, CSS3, JavaScript (ES6+)

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --bg-color: #050505;
    --text-primary: #f2f2f2;
    --text-secondary: #888888;
    --accent: #ffffff;
}
```

### Globe Settings
Modify `globe.js` to adjust:
- Globe rotation speed
- Opacity and transparency
- Glow intensity
- Camera position and zoom

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with WebGL support

## 🔧 Maintenance

- Update the experience and projects sections as needed
- Replace `earth_texture.png` with different globe textures
- Customize colors and fonts to match personal branding

## 📄 License

This project is personal portfolio work. Feel free to use as a template for your own portfolio with proper modifications.

## 📧 Contact

For inquiries or questions, visit the Contact section on the website.

---

**Built with ❤️ by Ansh Joshi**
