# Aphelion Brews

<p align="center">
  <strong>Single-page fictional drink shop with a cinematic dark UI.</strong><br>
  CSS-first navigation. Vanilla HTML, CSS, and JavaScript.
</p>

<p align="center">
  <a href="https://cikeyz.github.io/aphelion-brews/">Live Demo</a>
  &nbsp;·&nbsp;
  <a href="#quick-start">Quick Start</a>
  &nbsp;·&nbsp;
  <a href="#project-structure">Structure</a>
  &nbsp;·&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111111">
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-22c55e?logo=open-source-initiative&logoColor=white">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/Demo-GitHub%20Pages-222222?logo=github&logoColor=white">
</p>

## Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Other Design Eras](#other-design-eras)
- [License](#license)
- [Course Note](#course-note)

## Overview

Aphelion Brews is a marketing-style SPA for a fictional cafe. Section navigation is driven primarily by radio inputs and CSS, with a small JavaScript layer for media and polish. Home, menu, music, and jobs share one HTML document.

## Features

| Feature | Description |
|---------|-------------|
| CSS-first nav | Section switching with radio inputs |
| Cinematic dark UI | Glass panels and editorial type |
| Multi-section SPA | Home, menu, music, and jobs |
| Light JS layer | Media helpers without a framework |

## Screenshots

| Landing |
|---------|
| ![Aphelion Brews landing](docs/screenshots/landing.png) |

## Quick Start

```bash
git clone https://github.com/cikeyz/aphelion-brews.git
cd aphelion-brews
python -m http.server 8000
# http://localhost:8000
```

## Project Structure

```text
aphelion-brews/
├── index.html
├── styles.css
├── main.js
├── LICENSE
├── README.md
└── docs/
    └── screenshots/
        └── landing.png
```

## Other Design Eras

Major UI experiments stay on open branches (not merged into `main`):

| Branch | Description |
|--------|-------------|
| `overhaul/quiet-cosmic` | Dark quiet-cosmic sidebar |
| `overhaul/light-editorial` | Light editorial magazine |
| `overhaul/dynamic-spreads` | Full-viewport dynamic spreads |
| `overhaul/cinematic-draft` | Near-final cinematic draft |

## License

MIT. See [LICENSE](LICENSE).

## Course Note

Built for CMPE 364 (Web and Mobile Systems), Polytechnic University of the Philippines, under Engr. Arlene B. Canlas. Published here as a standalone project.
