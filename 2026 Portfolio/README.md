# Portfolio site (static)

This folder is a **static** portfolio: HTML, CSS, and JS only. Assets such as images and Webflow’s shared CSS load from their original CDNs, so the site works when hosted on **GitHub Pages** or any static host.

## What to upload

Include these files in the repository (root of the repo is fine):

| File | Role |
|------|------|
| `index.html` | Landing page |
| `portfolio.html` | Portfolio hub |
| `ats.html`, `assemb3d.html`, `das-lot.html` | Case studies |
| `portfolio.css` | Your overrides and layout |
| `portfolio.js` | Small site script |
| `assets/` | Local images and **`site-icon.png`** (tab / “favicon” icon); keep this folder when deploying |
| `assets/onward/onward-head.png` | OnWard case study hero (required — not in the original slide export) |

Optional: `home-copy.html` is a local backup only; you can omit it from the repo.

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a user site, or any name for a project site).
2. Upload this folder’s contents, or push with Git:
   ```bash
   git init
   git add index.html portfolio.html ats.html assemb3d.html das-lot.html portfolio.css portfolio.js README.md .gitignore assets/
   git commit -m "Add static portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, branch **main**, folder **`/ (root)`**.
5. Save. After a minute or two, the site will be at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/` (project site), or  
   - `https://YOUR_USERNAME.github.io/` if the repo is named `YOUR_USERNAME.github.io`.

## After deployment

- Update any **absolute** links you add later to use **relative** paths (e.g. `portfolio.html`) so they work on GitHub Pages.
- If animations look stuck at invisible opacity on some blocks, that can be Webflow interaction scripts; `portfolio.css` includes fixes for the ATS and Assemb3D case-study rows.

## Zip bundle

`portfolio-github-pages.zip` in this folder contains the same deployable files (HTML, CSS, JS, README, `.gitignore`). Use it as a backup or unpack it elsewhere. To publish on GitHub you still add the **extracted** files to a repository (or use Git); GitHub does not deploy from a `.zip` upload alone.
