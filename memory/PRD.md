# Portfolio Website - PRD

## Original Problem Statement
Build a portfolio website cloning the design of `https://www.luizgustavoalves.dev/en`. Frontend-only, matching design, layout, colors, typography, and structure. All data is MOCKED.

## Owner
Vishwajeet Niradi - AI/ML Engineer

## Architecture
- Frontend-only React app (No backend)
- Tailwind CSS for styling
- Mock data in `/app/frontend/src/data/mock.js`
- GitHub Pages deployment via `.github/workflows/deploy.yml`

## Completed Features
- Full React frontend UI cloning reference portfolio
- Dark mode toggle
- Sections: Hero, Services/Skills, Experience, Certifications, Projects, Contact
- Project Detail views with dynamic tags, image galleries, dashboard sections
- Extracted real CV, project details, certifications from user PDFs
- GitHub Pages CI/CD pipeline
- Cleaned watermarks from index.html
- Added Databricks: Certified Generative AI Engineer Associate certification (Feb 2026)

## Pending
- Account Payables Dashboard image update (blocked on user upload)

## Backlog
- Navigation refactoring to react-router-dom if more pages needed
- Any additional content/styling tweaks per user feedback
