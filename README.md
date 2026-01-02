# Alban Istrefi — Personal Site

Astro-based personal site with writing, about, and search (Pagefind).

## Stack
- Astro + React
- Tailwind v4 (via `@theme` tokens in `src/styles/global.css`)
- Pagefind for static search

## Local Development
All commands are run from the project root:

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build site to `./dist` and generate Pagefind index |
| `npm run preview` | Preview the build locally |
| `npm run preview:build` | Build + Pagefind + Preview (one command) |
| `npm run search:dev` | Copy `dist/pagefind` to `public/pagefind` for dev results |

### Search in Dev
- Pagefind only has results after a build.
- Run `npm run build` once, then `npm run search:dev` to use those results in `npm run dev`.

## Content
- Writing posts: `src/content/writing`
- Pages: `src/pages`
- Components: `src/components`

## Deployment
Set `SITE_URL` to your production domain (defaults to `https://www.albanistrefi.me`).

## License
MIT — see `LICENSE`.
