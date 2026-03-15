# CLAUDE.md --- UBUNTUSPEAKS Strategic Facilitation Project Rules

## Always Do First

Invoke the frontend-design skill before writing any frontend code.

------------------------------------------------------------------------

# Project Context

This project builds a premium corporate landing page for:

Hermence Matsotsa --- UBUNTUSPEAKS

The page positions Hermence as a:

Strategic Leadership Facilitator\
Global Organizational Advisor

The site should feel comparable to premium consulting firms such as:

• McKinsey\
• Boston Consulting Group\
• Deloitte\
• Korn Ferry

Tone must feel:

• Executive\
• Strategic\
• Sophisticated\
• Calm authority

Never generate a startup-style or influencer-style design.

------------------------------------------------------------------------

# Goal

Generate consultation calls and capture executive leads for facilitation
engagements.

------------------------------------------------------------------------

# Target Audience

Primary audience:

• Executive Leadership Teams\
• CEOs & Founders\
• Managing Partners\
• HR & Organizational Development Leaders\
• Corporate Strategy Leaders\
• Department Heads

These leaders often struggle with:

• leadership misalignment\
• difficult organizational conversations\
• ineffective leadership meetings\
• stalled strategy discussions\
• cultural and communication breakdowns

The page must demonstrate how **strategic facilitation resolves these
challenges.**

------------------------------------------------------------------------

# Screenshot Workflow

-   Puppeteer is installed at
    `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is
    at `C:/Users/nateh/.cache/puppeteer/`.
-   **Always screenshot from localhost:**
    `node screenshot.mjs http://localhost:3000`
-   Screenshots are saved automatically to
    `./temporary screenshots/screenshot-N.png` (auto-incremented, never
    overwritten).
-   Optional label suffix:
    `node screenshot.mjs http://localhost:3000 label` → saves as
    `screenshot-N-label.png`
-   `screenshot.mjs` lives in the project root. Use it as-is.
-   After screenshotting, read the PNG from `temporary screenshots/`
    with the Read tool --- Claude can see and analyze the image
    directly.
-   When comparing, be specific: "heading is 32px but reference shows
    \~24px", "card gap is 16px but should be 24px"
-   Check: spacing/padding, font size/weight/line-height, colors (exact
    hex), alignment, border-radius, shadows, image sizing
