# Project Journal: Alex Olivier Portfolio Site

## Project Identity
- Project: Single-page professional portfolio
- Repository URL: https://github.com/alex-olivier/alex-olivier.github.io
- Deployed URL: https://alex-olivier.github.io/

## Assignment Goal
Create and refine a polished, accessible, responsive portfolio site using semantic HTML, custom CSS, Bootstrap support, and JavaScript interactivity.

## Feature Inventory
- Sticky responsive navigation with section jump links
- Skip link for keyboard/screen-reader efficiency
- Hero section with professional introduction and calls to action
- About section with responsive photo and professional summary
- Previous Work section (resume-based content) with:
  - Summary
  - Experience
  - Education
  - Skills
  - Volunteer
  - Download Resume button
- Projects section with two project cards and GitHub links
- Contact section with:
  - non-form contact details
  - accessible contact form (name, email, subject, message)
  - inline validation errors and status messaging
- Scroll-aware active navigation highlighting
- Smooth scrolling behavior (respecting reduced-motion preference)

## Implementation Breakdown by Technology

### HTML
- Built as one semantic page using `header`, `nav`, `main`, `section`, and `footer`.
- Maintained heading structure: one `h1`, section `h2`s, and nested subsection headings.
- Added meaningful alt text for profile image.
- Added descriptive project link text (not generic "View on GitHub").
- Form labels are explicitly bound with `for`/`id`.
- Form inputs use appropriate types and `required` constraints.

### CSS
- Created a custom visual system in `css/styles.css` using design tokens:
  - spacing scale
  - typography stack
  - color palette
  - border radius and shadow values
- Built responsive behavior with media queries for mobile, tablet, and desktop.
- Styled cards, buttons, badges, forms, and navigation for visual consistency.
- Added visible focus styles across controls.
- Added reduced-motion styles for better accessibility.

### JavaScript
- Implemented form logic in `js/main.js`:
  - prevents default submission
  - validates required fields
  - validates email format
  - renders inline field errors
  - shows success/error status messages
  - explicitly states that no backend submit occurs
- Added navigation interactivity:
  - active link updates based on current scroll section
  - smooth section scrolling on nav click
  - reduced-motion-aware scrolling

### Bootstrap Usage
- Used Bootstrap 5 for:
  - grid/layout (`container`, `row`, `col-*`)
  - navbar collapse behavior
  - base form and button classes
  - spacing utility support
- Kept Bootstrap usage lightweight while letting custom CSS define the visual identity.

## Beyond Course Basics
- Centralized design tokens for consistent styling decisions.
- IntersectionObserver-based active nav highlighting.
- Reduced-motion handling in both CSS and JavaScript.
- Focus-visible styling strategy applied site-wide.
- PDF-friendly journal structure with clear headings and concise sections.

## Requirement Satisfaction Map
- Semantic structure and landmarks: complete.
- Responsive navbar and section linking: complete.
- About/Previous Work/Projects/Contact sections: complete.
- Resume-based content and download link: complete.
- Contact form with client-side validation and status messaging: complete.
- Additional interactivity beyond form: complete (active nav + smooth scroll).
- Accessibility improvements: complete (focus visibility, heading order, labels, status/error announcements, descriptive links, alt text).
- Deployment readiness: complete (relative paths and `.nojekyll`).

## Issues Encountered and Resolutions
- Resume PDF text extraction issue:
  - Issue: The provided PDF was image-based and did not yield text via basic extraction.
  - Resolution: Read content visually and transcribed resume facts carefully without inventing details.
- Environment PATH issue for Node:
  - Issue: `node` was installed but not initially available in tool shell PATH.
  - Resolution: Used explicit Homebrew node path for checks and documented shell-path update approach.

## Outside Sources Used
Only sources actually used in the project and/or explicitly referenced by assignment constraints:

- Bootstrap 5 CDN
  - https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
  - https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
- Google Fonts stylesheet
  - https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600;700&display=swap
- Project destination links included in cards
  - https://github.com/alex-olivier/chocan-project
  - https://github.com/alex-olivier/n-body-simulation
- Style/reference repositories explicitly requested for inspiration
  - https://github.com/alex-olivier/webdev-code-samples
  - https://github.com/alex-olivier/aolivier-webdev-labs

## Reproduction Notes for Instructor
1. Clone the repository.
2. Start a local static server from the root:
   - `python3 -m http.server 8000`
3. Open `http://localhost:8000`.
4. Validate interaction behavior:
   - navbar collapse on smaller screens
   - smooth nav scroll and active section highlighting
   - contact form required/email validation with inline errors and status message

## Final Manual Pass (Post-Commit 6)
Perform these final delivery checks:
1. Export `journal.md` to PDF.
2. Confirm the public repository URL is correct.
3. Confirm GitHub Pages deployment is live.
4. Update both `README.md` and `journal.md` if URLs changed.
