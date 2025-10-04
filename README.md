# CleanUpHack Landing Page

Landing page for the CleanUpHack initiative (SCESI). Built with Astro 5, Tailwind CSS 4, and Framer Motion for smooth UI animations.

## Tech Stack

- Astro 5 (content-focused, island architecture)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion (animation)
- TypeScript ready (tsconfig included)
- ESLint + Prettier (consistent code style)

## Project Structure

```text
/
├── public/
│   └── clean-up.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── clean-up-hack.svg
│   ├── components/        (UI components - add your .astro / .tsx files here)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Available Scripts

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start dev server (hot reload)  |
| `npm run build`        | Production build into `dist/`  |
| `npm run preview`      | Preview the built site locally |
| `npm run astro`        | Run Astro CLI commands         |
| `npm run lint`         | Lint source files              |
| `npm run lint:fix`     | Lint + auto-fix                |
| `npm run format`       | Format all files with Prettier |
| `npm run format:check` | Check formatting               |

## Styling

Global styles live in `src/styles/global.css`. Tailwind utilities are available everywhere; add component-level styles alongside components if needed.

## Animations

`framer-motion` is installed. For Astro + Motion, you can import motion components inside framework islands (e.g. React component) or progressively enhance.

## Linting & Formatting

Run before committing:

```bash
npm run lint && npm run format:check
```

## Build & Deploy

```bash
npm run build
npm run preview   # sanity check
```

Deploy the contents of `dist/` to your static host (Netlify, Vercel, GitHub Pages, etc.).

## Contributing

1. Create a new branch: `feat/<short-name>`
2. Make changes and ensure lint passes
3. Commit using conventional style if possible (e.g. `feat: add hero section`)
4. Open a PR into `dev`

## Roadmap (suggested)

- Add SEO meta tags & Open Graph
- Responsive navigation & mobile menu
- Accessibility audit
- Analytics integration (privacy friendly)

## License

MIT License © 2025 SCESI. See `LICENSE` for the full text.

## Reference Docs

- Astro: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/
