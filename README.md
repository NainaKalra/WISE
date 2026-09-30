# WISE — Women in Science and Engineering

Official website of **Women in Science and Engineering (WISE)** at **Indiana Tech**.

🌐 **Live site:** [www.wiseattech.com](https://www.wiseattech.com)

> Empowering women to innovate, lead, and succeed in STEM.

---

## About

WISE is a student organization at Indiana Tech that supports and connects women in science, technology, engineering, and mathematics. This website introduces the club, its faculty advisors, and its current board, and gives students a way to get in touch and join.

## Features

- Responsive design for desktop, tablet, and mobile
- Full-screen hero section with looping background video
- Faculty advisors section
- Current board section
- Photo gallery page
- Contact and social links in the footer

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/) with automatic deploys from GitHub

## Project Structure

```
WISE/
├── index.html          # Home page
├── gallery.html        # Photo gallery page
├── style1.css          # Site styles
├── script1.js          # Home page scripts
├── gallery.js          # Gallery page scripts
├── images/             # Logo, board and faculty photos, hero video (Wise.mp4)
├── galleryPictures/    # Photos used in the gallery
├── .gitignore
└── README.md
```

## Run Locally

No build step is needed.

1. Clone the repository
   ```bash
   git clone https://github.com/NainaKalra/WISE.git
   cd WISE
   ```
2. Open `index.html` in your browser, or start a local server:
   ```bash
   npx serve .
   ```

## Deployment

The site is deployed on Cloudflare Pages.

- **Production branch:** `main`
- **Build command:** none
- **Build output directory:** `/` (root)

Every push to `main` triggers an automatic redeploy, usually live within 1–2 minutes.

## Contact

📧 [wise.at.tech@gmail.com](mailto:wise.at.tech@gmail.com)
📸 Follow us on Instagram and join us on Warriors Connect

---

© 2026 Women in Science and Engineering | Indiana Tech
