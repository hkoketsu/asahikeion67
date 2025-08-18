# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This appears to be a legacy Japanese mobile website archive with static HTML pages preserved from a mobile space service that closed in 2020. The site contains:

- Static HTML pages (mostly PHP output saved as HTML)
- JavaScript files for emoji and UI handling
- CSS stylesheets for PC display
- Image resources in `_ppic_` and `_upimg_` directories

## Project Structure

```
/
├── index.html                 # Main entry page
├── _css/                      # Stylesheets
│   └── default_pc.css        # PC display styles
├── _js/                       # JavaScript files
│   └── iwindow_pc.js         # Window handling for PC
├── _emoji/                    # Emoji handling scripts
│   ├── emoji1.js
│   ├── pc_emoji.js
│   └── pc_emoji3.js
├── _ppic_/                    # Image resources
└── *.html                     # Archived PHP pages saved as HTML
```

## Character Encoding

All HTML files use Shift_JIS encoding (`charset=Shift_JIS`). When editing these files, ensure proper encoding is maintained to preserve Japanese text.

## Development Notes

This is an archived static website - there are no build processes or active development scripts. Any modifications should:

1. Preserve the original character encoding (Shift_JIS)
2. Maintain compatibility with the existing JavaScript and CSS files
3. Keep the static nature of the site (no server-side processing required)

## Important Considerations

- The site was part of a mobile space service that ended in 2020
- Google Analytics tracking code is present but likely inactive
- Ad service (AdStir) code is embedded but the service may no longer be operational
- All dynamic PHP functionality has been converted to static HTML files