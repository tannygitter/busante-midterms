# Busante E-Portfolio

E-portfolio of Christian Raul D. Busante, built with **React (Vite)** and **Tailwind CSS v4 (black and purple theme)**.
DCIT 26 – Midterm Laboratory.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into /dist
npm run preview    # test the production build locally
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Go to vercel.com, sign in with GitHub and choose **Add New > Project**.
3. Import the repository. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`).
4. Click **Deploy**, then open the generated `*.vercel.app` URL and re-test everything.

## Edit content
All text, projects, experience and links are in `src/data/content.js`.
To use real project images, put files in `public/projects/` and set `image: "/projects/yourfile.png"`.

## Structure
- `src/App.jsx` – page layout and site-wide accent colour state
- `src/components/` – Navbar, Hero, About, Projects, ProjectCard, Cover, Resume, Contact, BackToTop, Footer
- `public/Busante-Resume.pdf` – file served by the Download CV buttons
