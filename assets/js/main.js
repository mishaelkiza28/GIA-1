/* ═══════════════════════════════════════
   GIA WEBSITE - MAIN JAVASCRIPT
   Mobile Navigation & Form Handling
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
  initMobileNavigation();
  initContactForm();
  highlightCurrentPage();
});

// ─── MOBILE NAVIGATION ───
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    // Update hamburger icon
    this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu when a link is clicked
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      mobileToggle.textContent = '☰';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target) || mobileToggle.contains(event.target);
    if (!isClickInsideNav && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      mobileToggle.textContent = '☰';
    }
  });
}

// ─── HIGHLIGHT CURRENT PAGE ───
function highlightCurrentPage() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Check if link href matches current page
    if (link.getAttribute('href') === currentLocation || 
        link.getAttribute('href') === currentLocation + '/index.html') {
      link.classList.add('active');
    }
  });
}

// ─── CONTACT FORM ───
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const statusElement = document.getElementById('formStatus');

    // Validate form
    if (!name || !email || !subject || !message) {
      statusElement.textContent = '❌ Please fill in all required fields.';
      statusElement.style.color = '#D32F2F';
      return;
    }

    // Validate email
    if (!isValidEmail(email)) {
      statusElement.textContent = '❌ Please enter a valid email address.';
      statusElement.style.color = '#D32F2F';
      return;
    }

    // Simulate form submission (in production, this would send to a server)
    submitForm(name, email, phone, subject, message, statusElement);
  });
}

// ─── EMAIL VALIDATION ───
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ─── FORM SUBMISSION ───
function submitForm(name, email, phone, subject, message, statusElement) {
  // Show loading state
  const btn = document.querySelector('.contact-form .btn');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate API call (in production, send to backend)
  setTimeout(function() {
    // Create message object
    const messageData = {
      name: name,
      email: email,
      phone: phone || 'Not provided',
      subject: subject,
      message: message,
      timestamp: new Date().toISOString()
    };

    // In production, send to server:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(messageData)
    // })

    // For now, log to console and show success
    console.log('Form submitted:', messageData);

    // Show success message
    statusElement.textContent = '✓ Thank you! We\'ve received your message and will contact you soon.';
    statusElement.style.color = '#388E3C';

    // Reset form
    document.getElementById('contactForm').reset();

    // Reset button
    btn.textContent = originalText;
    btn.disabled = false;

    // Clear message after 5 seconds
    setTimeout(function() {
      statusElement.textContent = '';
    }, 5000);
  }, 1000);
}

// ─── SMOOTH SCROLL ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 70; // Account for sticky nav
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ─── INTERSECTION OBSERVER FOR ANIMATIONS ───
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .step, .value-card').forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}

// ─── UTILITY: LOGGER ───
const logger = {
  info: function(message) {
    console.log('[GIA]', message);
  },
  error: function(message) {
    console.error('[GIA ERROR]', message);
  }
};

// Log page load
logger.info('Website loaded successfully');
