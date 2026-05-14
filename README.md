# abdelrahman.ai

Personal website showcasing AI/ML work and projects. Built with vanilla HTML, CSS, and JavaScript featuring multiple interactive backgrounds and a customizable design system.

## Design Features

The site includes:
- **Enhanced Neural Network Background** — Animated nodes and connections, more visible and interactive
- **Multiple Background Themes** — Grid, floating dots, neural network, constellation, aurora glow
- **Customizable Design System** — Accent colors, typography pairs, footer variations
- **Responsive Layout** — Works on desktop, tablet, and mobile devices
- **Style Tweaks Panel** — Press `Ctrl+/` (or `Cmd+/` on Mac) to open the customization panel

## Project Structure

```
.
├── index.html              # Main landing page (v1-signal design)
├── favicon.ico             # Site favicon
├── CNAME                   # Custom domain configuration
├── assets/                 # Images and media
│   ├── photo.png          # Portrait image
│   ├── astronaut.jpg       # Alternative hero image
│   └── astronaut-vertical.jpg
├── data/                   # Dynamic content
│   └── posts.json         # LinkedIn feed data (optional)
├── scripts/               # Utilities
│   └── fetch_linkedin.py  # Script to fetch LinkedIn posts
└── feed-widget.js         # LinkedIn feed widget (optional)
```

## Customization

### Design Tweaks
Open the tweaks panel (`Ctrl+/` or `Cmd+/`) to change:
- **Accent Color** — 5 color options (Cyan, Mint, Violet, Amber, Coral)
- **Typography** — 4 font pair options (Geist, JetBrains, Claude Serif, Perplexity)
- **Background** — 6 background styles (Grid, Dots, Neural Net, Constellation, Aurora, None)
- **Footer** — 4 footer line variations

### Editing Content
Edit the HTML file directly to update:
- Name and headline
- Bio/lede text
- Stats section
- Social links
- Contact email

### Neural Network Background
The neural network is enhanced with:
- 40 nodes (increased from 24)
- Larger connection threshold for more visible links
- Bigger, glowing nodes
- Smooth animations (4s node pulse, 6s line fade)

## Deployment

The site is deployed on GitHub Pages:
1. Push to the `main`/`master` branch
2. GitHub Pages automatically builds and deploys
3. Accessible at `abdelrahman.ai` (custom domain via CNAME)

## Built With

- Vanilla HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts (Fraunces, Inter, JetBrains Mono, Geist, Space Grotesk)
- SVG for backgrounds and icons
- CSS Grid and Flexbox for layout
