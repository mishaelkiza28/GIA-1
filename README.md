# GIA Website

A modern, minimalist website for the Golden Investment Association (GIA) - a member-owned savings and investment group based in Adebe Cell, Kamdini Town Council, Oyam District, Uganda.

## 📋 Overview

This is a professional, responsive website designed with a clean, modern aesthetic. The site features a cohesive brand identity with a gold, cobalt, and green color scheme that reflects GIA's values of financial stability, trust, and growth.

## 🗂️ Project Structure

```
GIA-1/
├── index.html                 # Homepage
├── pages/
│   ├── about.html            # About GIA page
│   ├── membership.html       # Membership information
│   ├── contact.html          # Contact & inquiry form
│   └── legal.html            # Terms, Privacy, Disclaimer
├── assets/
│   ├── css/
│   │   └── style.css         # Global styles & design system
│   └── js/
│       └── main.js           # Navigation & form handling
├── README.md                 # This file
└── GIA_Website_Documentation.html  # Original reference doc
```

## 🎨 Design System

### Color Palette
- **Gold**: `#D4AF37` - Primary accent (trust, value)
- **Cobalt**: `#004191` - Primary blue (stability)
- **Green**: `#1B7D24` - Secondary (growth, prosperity)
- **Neutrals**: White, Off-white, Text gray

### Typography
- **Serif**: Playfair Display (headings)
- **Sans-serif**: DM Sans (body text)

### Components
- Navigation bar (sticky, responsive)
- Hero section with call-to-action
- Card grids for features/values
- Step-by-step guides
- Callout boxes for important info
- Contact form with validation
- Footer with links

## 📄 Pages

### Homepage (`index.html`)
Entry point featuring:
- Hero section with main CTA
- Key benefits of joining (4 cards)
- How GIA works (4-step process)
- Core values cards (6 values)
- Statistics section
- Call-to-action for signup

### About (`pages/about.html`)
Details including:
- Organization story
- Vision & mission
- Core objectives (6 points)
- Core values (6 categories)
- Governance structure (General Assembly, Executive Committee, Oversight)
- Location information

### Membership (`pages/membership.html`)
Covers:
- How to join (4-step process)
- Member obligations (6 points)
- Member benefits (6 cards)
- Savings & loan details
- Group investment information
- Membership costs breakdown

### Contact (`pages/contact.html`)
Features:
- Contact form with validation
- Contact information
- Office location and hours
- FAQ section (8 common questions)

### Legal (`pages/legal.html`)
Three sections with tab navigation:
1. **Terms & Conditions** - 11 comprehensive sections
2. **Privacy Policy** - 7 sections covering data practices
3. **Investment Disclaimer** - 14 sections about risks

## 🚀 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 1200px, 768px, 600px, 480px
- Hamburger menu for mobile navigation
- Adaptive typography with clamp()

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Clear visual hierarchy and contrast

### Interactivity
- Mobile menu toggle with smooth animations
- Active page highlighting in navigation
- Contact form with email validation
- Tab navigation for legal documents
- Smooth scrolling for anchor links
- Intersection observer for fade-in animations

### Performance
- Lightweight vanilla CSS (no frameworks)
- Minimal, efficient JavaScript
- Font optimization (Google Fonts)
- Optimized color palette and design

## 🔧 Technical Details

### CSS
- **Framework**: Vanilla CSS with custom design system
- **Architecture**: Component-based styling
- **Variables**: CSS custom properties for theming
- **Layout**: Flexbox and CSS Grid
- **Responsive**: Mobile-first approach

### JavaScript
- Mobile navigation toggle
- Current page highlighting
- Form validation and submission
- Smooth scroll behavior
- Intersection observer for animations
- Utility logger for debugging

### Browser Support
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 💻 Getting Started

### Quick Start
1. Clone or download the repository
2. Open `index.html` in a web browser
3. Navigate using the menu

### File Structure
- All HTML files are self-contained
- CSS is centralized in `assets/css/style.css`
- JavaScript utilities in `assets/js/main.js`
- No external dependencies except Google Fonts

### Customization

#### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --gold: #D4AF37;
  --cobalt: #004191;
  --green: #1B7D24;
  /* ... other colors ... */
}
```

#### Content
Edit text directly in HTML files. Key sections:
- Homepage: Hero, benefits, how it works, values, stats
- About: Mission, governance, values
- Membership: Process, benefits, obligations
- Contact: Form fields, FAQ
- Legal: All terms and policies

#### Styling
Modify `assets/css/style.css`:
- Component styles
- Layout utilities
- Responsive breakpoints
- Color scheme
- Typography

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px - 1199px  
- **Mobile**: 600px - 767px
- **Small Mobile**: Below 600px

Design adapts gracefully with:
- Adjusted font sizes
- Stacked layouts
- Mobile-optimized navigation
- Touch-friendly spacing and buttons

## 🔒 Security & Privacy

- No persistent data collection
- Contact form is client-side (demo)
- Privacy policy explains practices
- Terms clarify legal obligations
- Disclaimer addresses investment risks
- Compliant with Ugandan data protection principles

## 📧 Contact Form Integration

Current status: **Demo mode (local)**

The form validates and logs to console. To integrate with backend:

1. Create server endpoint (e.g., `/api/contact`)
2. Update `assets/js/main.js` submitForm function:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(messageData)
})
.then(response => response.json())
.then(data => {
  // Handle success
})
```

3. Set up email notifications on backend
4. Configure CORS if needed

## 🎯 Best Practices

### Adding Content
1. Maintain consistent styling
2. Use semantic HTML
3. Keep color palette consistent
4. Test responsive design

### Updating
1. Edit HTML content directly
2. Update dates in legal documents
3. Keep footer copyright current
4. Test all links and forms

### Performance
- Minimize CSS/JS modifications
- Optimize any new images
- Monitor load times
- Test on various devices

## 📞 GIA Contact

- **Location**: Adebe Cell, Kamdini Town Council, Oyam District, Uganda
- **Website**: Contact form on site
- **Established**: 2025
- **Motto**: "Make Your Money Work Harder"
- **Tagline**: _"Together We Grow"_

## 📄 License & Copyright

© 2026 Golden Investment Association (GIA). All rights reserved.

Website created as official documentation for GIA membership and operations.

---

**Version**: 1.0  
**Last Updated**: January 1, 2026  
**Status**: Production Ready
