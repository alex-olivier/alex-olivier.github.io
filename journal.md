
# Personal Website Project Journal

**Student:** Alex Olivier  
**Repository:** https://github.com/alex-olivier/alex-olivier.github.io  
**Deployed Site:** https://alex-olivier.github.io/

---

## Project Overview

This project is a professional personal website built to present my background, previous work, projects, and contact information. I created it as a **single-page responsive website** with a navigation bar that links to each section.

The website includes:

- Navbar
- About section
- Previous Work section
- Projects section
- Contact section
- Custom CSS
- JavaScript interactivity
- GitHub Pages deployment
- README and journal documentation

The main technologies used were:

- HTML
- CSS
- JavaScript
- Bootstrap

---

## Website Features

### Navbar
The navbar links to the main parts of the page:

- About
- Previous Work
- Projects
- Contact

Since this is a one-page website, the navbar uses anchor links to jump to each section.

### About Section
The About section includes:

- a professional introduction
- a profile photo
- a summary of my technical background

### Previous Work Section
This section summarizes information from my resume and includes a link to download the full resume PDF.

### Projects Section
This section highlights two software projects:

#### ChocAn Healthcare Management System
A healthcare management system built with Python, SQLite, and SQLAlchemy.

**Repository:** https://github.com/alex-olivier/chocan-project

#### N-body simulation using the Barnes-Hut algorithm
A Rust project using Bevy to simulate gravitational motion efficiently.

**Repository:** https://github.com/alex-olivier/n-body-simulation

### Contact Section
The Contact section includes:

- contact details
- a contact form
- JavaScript form validation

Because the site is deployed on GitHub Pages, the form does not send data to a backend. Instead, JavaScript checks the input and shows feedback to the user.

### Responsive and Accessible Design
The site was designed to work on mobile, tablet, and desktop screens. I also used accessibility best practices such as:

- semantic HTML
- proper headings
- visible focus states
- alt text for images
- labeled form fields

---

## Project Structure

```text
alex-olivier.github.io/
├── index.html
├── README.md
├── journal.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    │   └── about-photo.png
    └── docs/
        └── previous-work-section-resume.pdf
```

### Main Files

* `index.html` — main page structure
* `css/styles.css` — custom styling
* `js/main.js` — interactive behavior
* `assets/images/about-photo.png` — profile photo
* `assets/docs/previous-work-section-resume.pdf` — resume PDF

---

## Development Process

The website was built in six main commits.

### Commit 1: Initialize portfolio site scaffold and navigation

Created the basic project structure and added:

* `index.html`
* `css/styles.css`
* `js/main.js`
* navbar
* placeholder sections
* footer

I also used semantic HTML and added basic accessibility structure.

### Commit 2: Add about and previous work content

Replaced placeholder text with real content for:

* About section
* Previous Work section
* resume link
* contact details

This made the site feel like a real portfolio instead of a template.

### Commit 3: Build projects showcase

Added the Projects section with project cards showing:

* title
* description
* technologies used
* GitHub links

### Commit 4: Add contact form and JavaScript interactions

Added the contact form and wrote JavaScript to:

* validate required fields
* check email format
* show errors
* show a success message

I also added a small interactive feature such as smooth scrolling or active navigation behavior.

### Commit 5: Improve responsive styling and accessibility

Improved the design and usability of the whole site by refining:

* spacing
* colors
* typography
* card layout
* form layout
* mobile responsiveness
* accessibility details

### Commit 6: Add README, journal, and deployment documentation

Added:

* `README.md`
* `journal.md`
* deployment notes
* final project documentation

This made the project ready for submission and GitHub Pages hosting.

---

## How the Code Was Used

### HTML

HTML was used to build the page structure and all sections of the site.

### CSS

CSS was used for:

* layout
* colors
* typography
* cards
* buttons
* form styling
* responsive design

### JavaScript

JavaScript was used for:

* contact form validation
* user feedback
* small interactive features

### Bootstrap

Bootstrap was used mainly for layout and responsive structure.

---

## How the Website Meets the Requirements

This project meets the assignment requirements because it includes:

* a navbar
* an About section
* a Previous Work section
* a Projects section
* a Contact section with a form
* at least one CSS file
* at least one JavaScript file
* HTML, CSS, JavaScript, and Bootstrap
* a public GitHub repository
* GitHub Pages deployment
* a README
* a journal
* at least 6 meaningful commits

The site was also designed to be:

* responsive
* accessible
* organized
* professional in appearance

---

## Issues Encountered

### Using a Contact Form on a Static Site

GitHub Pages does not provide a backend, so the form could not actually send messages. I solved this by adding client-side validation and clear user feedback.

### Making the Layout Responsive

Some sections looked good on desktop but needed adjustment for mobile. I fixed this by refining spacing, layout, and image sizing.

### Balancing Bootstrap and Custom CSS

Bootstrap helped with layout, but too much default Bootstrap styling can make a site look generic. I used Bootstrap mainly for structure and wrote custom CSS for the site’s appearance.

### Organizing Resume Information

A resume PDF is dense, so I summarized the most important information in the Previous Work section and linked the full PDF separately.

---

## Reproducing the Project

To reproduce this website:

1. Create a public GitHub repository named `<your_username>.github.io`
2. Add the main files:
   * `index.html`
   * `css/styles.css`
   * `js/main.js`
   * image and resume assets
3. Build the site in stages:
   * structure and navbar
   * About and Previous Work
   * Projects
   * Contact form and JavaScript
   * styling and accessibility improvements
   * README and journal
4. Test locally in a browser using "Live Server" or similar
5. Deploy with GitHub Pages from the `main` branch

---

## Outside Sources Used

* Bootstrap Documentation
  [https://getbootstrap.com/docs/](https://getbootstrap.com/docs/)

* MDN Web Docs
  [https://developer.mozilla.org/](https://developer.mozilla.org/)

* GitHub Pages Documentation
  [https://docs.github.com/en/pages](https://docs.github.com/en/pages)

---

## Final Reflection

This project combined many of the topics covered in class into one complete website. It uses HTML, CSS, JavaScript, Bootstrap, accessibility practices, and responsive design. The final result is a professional portfolio website that meets the assignment requirements and can also be used as a real personal website.