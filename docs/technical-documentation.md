# Technical Documentation

**Course:** SWE-363 - Web Development  
**Assignment:** Assignment 1 – Foundation & AI Integration  
**Student Name:** Talha Meraj  
**Student ID:** 202436920  

---

## 1. Architecture & Project Structure

The project follows standard separation of concerns without external build tools or libraries:

```text
202436920-TalhaMeraj-assignment1/
├── index.html        # Semantic HTML5 document structure
├── css/
│   └── styles.css    # Responsive styles, CSS variables, and layout rules
├── js/
│   └── script.js     # Vanilla JavaScript for interactivity and validation
├── assets/
│   └── images/       # Project media and profile assets
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md         # Overview and local setup guide
```

---

## 2. HTML Semantic Structure

The layout uses native semantic tags to ensure accessibility and clear page hierarchy:
- `<header class="hero-banner">`: Top identity banner with heading and subtitle.
- `<nav class="nav-tab-container">`: Sticky navigation bar containing section jump links (`#about`, `#projects`, `#contact`), greeting badge, and social anchors.
- `<main class="main-card">`: Central wrapper holding all primary page sections.
- `<section>` & `<article>`: Distinct containers for the About Me biography, individual project showcase cards, and the contact section.
- `<form>`, `<fieldset>`, `<legend>`, `<label>`: Accessible form markup associating each control with an explicit label and field validation hints.

---

## 3. CSS Styling & Responsive Design

- **Custom Properties (`:root`)**: Centralized design tokens for colors, fonts (`Montserrat` and `Open Sans`), and shadows.
- **Box Model**: Universal `box-sizing: border-box` reset to ensure predictable sizing and spacing across elements.
- **Flexbox Layout**: 
  - Dynamic alignment for navigation items and social media icons.
  - Multi-column project grid (`flex-wrap: wrap`) with card growth rules.
  - Split layout for about content and contact section.
- **Responsive Breakpoints**:
  - `@media (max-width: 880px)`: Switches the profile and contact grids from horizontal side-by-side to a vertical stacked layout for tablet screens.
  - `@media (max-width: 650px)`: Expands project cards to full width, stacks navigation links vertically, and adjusts button widths for mobile viewports.

---

## 4. JavaScript Functionality

The site uses vanilla JavaScript loaded via the `DOMContentLoaded` event:
1. **Dynamic Greeting (`displayGreeting` / `getGreetingMessage`)**:
   - Reads the client's local system time using `new Date().getHours()`.
   - Uses conditional branching to return contextual greetings ("Good Morning", "Good Afternoon", "Good Evening", or "Hello, Night Owl").
   - Injects the text into `#timeGreeting` in the navigation bar.
2. **Client-Side Form Validation (`setupContactForm`)**:
   - Listens to the form's `submit` event and calls `event.preventDefault()` to stop full-page HTTP refresh.
   - Trims input values (`name`, `email`, `message`) to prevent empty or whitespace-only submissions.
   - Validates email formatting against a regular expression pattern.
   - Displays clear error or success alert feedback (`#formFeedback`), resets the form on success, and automatically clears the confirmation after 5 seconds.

---

## 5. Browser Compatibility & Performance

- **Zero Framework Overhead**: Built with pure vanilla HTML, CSS, and JS, resulting in minimal load times and zero dependency vulnerabilities.
- **Cross-Browser Support**: Tested and verified to render consistently in Google Chrome, Microsoft Edge, and Mozilla Firefox.
- **Fixed Layout Shifts**: Explicit image dimensions and responsive Flexbox constraints prevent visual layout shifts during page loading.
