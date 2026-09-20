# Vishal Kumar | Revenue X Portfolio

A static one-page portfolio site. No build step required — it's plain HTML/CSS/JS.

## Project structure

```
.
├── index.html        # Main page markup
├── styles.css         # Custom CSS (Tailwind itself loads via CDN inside index.html)
├── script.js          # Hire button click-feedback animation
├── vercel.json         # Static hosting config for Vercel
├── images/             # All portfolio photos and logos
│   ├── hero-portrait.jpg
│   ├── royal-enfield.jpg
│   ├── furncoms.jpg
│   ├── unimaac-engineers.jpg
│   ├── showroom.jpg
│   ├── founder-strategist.jpg
│   ├── crunchys.jpg
│   └── thivyam.jpg
└── README.md
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd revenue-x-portfolio
vercel
```
Follow the prompts (link/create a project). Vercel auto-detects this as a static site — no framework, no build command needed.

**Option B — Vercel dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In the Vercel dashboard, click **Add New → Project** and import the repo.
3. Framework Preset: choose **Other** (static). Leave Build Command and Output Directory blank.
4. Click **Deploy**.

**Option C — Drag and drop**
Go to vercel.com → New Project → drag this folder onto the upload area.

## Notes

- Tailwind CSS is loaded via the CDN script tag in `index.html` (`cdn.tailwindcss.com`), so no local Tailwind build/config is needed.
- Google Fonts (Syne, Caveat, Inter, Bebas Neue, Big Shoulders Display) load from `fonts.googleapis.com`.
- All contact links (Hire button, Contact-me CTA, email icon) open a pre-filled Gmail compose window to `revenuexdm@gmail.com`.
- The LinkedIn icon and WhatsApp icon open their respective links in a new tab.
- Nothing else needs configuring — everything (links, images, animations) is self-contained in this folder.
