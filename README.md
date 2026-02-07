# webpage
Repository for the Hackzogtum website. This is a Next.js project.

## Build and run

1. Install dependencies:
	- `npm install`

2. Development server:
	- `npm run dev`

3. Production build:
	- `npm run build`

4. Start production server:
	- `npm run start`
	- or `npm run start-prod` (binds to localhost:8182)

## Modules used

Runtime dependencies:
- next, react, react-dom
- tailwindcss (via build tooling)
- remark, remark-html, gray-matter (Markdown/blog processing)
- micromark, micromark-extension-gfm (Markdown parsing)
- date-fns (date utilities)
- ical.js (iCal parsing)
- sharp (image processing)
- bootstrap-icons (icons)
- classnames (CSS class helper)

Dev tooling:
- typescript, @types/*
- eslint, eslint-config-next
- tailwindcss, autoprefixer, postcss-preset-env
