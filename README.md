# Gazi Md. Mozammel Haque — Professional Portfolio

An English portfolio for Gazi Md. Mozammel Haque, Project Director. Built with Next.js Pages Router, React, Tailwind CSS and React Icons.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Content and design

- `data/site.js`: profile, career chapters and contributions. Biography translated from the original project; the Project Director role was supplied by the owner. Confirm biographical details before publishing.
- `pages/index.js`: full English portfolio, responsive navigation, initiative disclosures and company/publication sections.
- `pages/_document.js`: English document language.
- `styles/globals.css`: ivory, forest green and gold design system; responsive, reduced-motion and print layouts.
- `public/images/gazi-md-mozammel-haque.jpeg`: supplied original portrait, displayed with CSS object-fit without modifying the source image.

Typography uses Cormorant Garamond and DM Sans via Google Fonts with Georgia and Arial fallbacks. No contact details, unverified metrics, awards or social accounts have been invented. Add confirmed contact information when available.

Mobile navigation supports Escape and closes when a section is selected.

The eight-company gallery includes the supplied Anondo Bhubon logo. The hero shows Project Director, Anondo Housing Society; the federation role remains in the biography and journey. The print button has been removed. The publication displays an AI-enhanced 1024 x 1536 cover, with the original preserved at public/images/land-ownership-book.png.

The Areas of contribution section uses a responsive two-column layout with all four descriptions visible immediately. It has no disclosure buttons or hidden details.
