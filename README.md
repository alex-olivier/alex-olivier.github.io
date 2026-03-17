# Alex Olivier Portfolio Site

## Project Overview
This repository contains a responsive, single-page professional portfolio website built for a web development assignment.

The site includes:
- semantic HTML5 structure
- accessible navigation and keyboard focus handling
- an About section with profile image
- a Previous Work section based on the provided resume
- a Projects section with polished project cards
- a Contact section with contact details and a validated client-side form
- lightweight JavaScript interactivity (form validation and active nav highlighting)

## Technologies Used
- HTML5
- CSS3 (custom design system and responsive styling)
- JavaScript (ES6+)
- Bootstrap 5 (layout/grid/components via CDN)
- Google Fonts (Fraunces, Source Sans 3)

## How to Run Locally
1. Clone the repository.
2. Open the project folder.
3. Run a local static server from the root directory (recommended):
   - `python3 -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

You can also open `index.html` directly, but using a local server is preferred for consistent behavior.

## GitHub Pages Deployment
This project is prepared for static hosting on GitHub Pages.

Deployment notes:
- all local asset references use relative paths
- `.nojekyll` is included to avoid Jekyll processing side effects
- entry point is `index.html` in the repository root

Planned deployed URL:
- https://alex-olivier.github.io/

## Outside Sources Used
Only sources actually used in this project and/or explicitly referenced by assignment constraints are listed below.

- Bootstrap 5 CDN
  - https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
  - https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
- Google Fonts stylesheet (Fraunces + Source Sans 3)
  - https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600;700&display=swap
- Project links shown in the Projects section
  - https://github.com/alex-olivier/chocan-project
  - https://github.com/alex-olivier/n-body-simulation
- Style/reference repositories explicitly requested for inspiration
  - https://github.com/alex-olivier/webdev-code-samples
  - https://github.com/alex-olivier/aolivier-webdev-labs

## Repository and Live URLs
- Repository URL: https://github.com/alex-olivier/alex-olivier.github.io
- Live site URL: https://alex-olivier.github.io/

## Final Manual Pass (Post-Commit 6)
After commit 6, perform one final manual pass:
1. Export `journal.md` to PDF.
2. Verify the repository is publicly accessible.
3. Confirm the live GitHub Pages URL is active.
4. Update `README.md` and `journal.md` if any URL changed during publishing.
