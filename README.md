
# Rakuten Product Detail Page

This project is a coding test solution for Rakuten Visitor Team.

## Features

- Product image (with lazy-loading)
- Product name
- Product price (discounted if available)
- Product description (HTML supported)
- Product review/rating (if available)
- Static breadcrumbs
- Responsive design (mobile/desktop)
- Error and loading states
- Modern UI/UX (MUI, custom theme)
- Typescript, React Query
- SSR (Next.js)

## Bonus
- Additional images (gallery)
- Lazy-loading for images
- Ready for SSR

## Setup & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoint

`https://api-rakuten-vis.koyeb.app/product/<productId>`

Example Product IDs:
- Mattress: 11084451963
- Phone: 7758205598
- Gaming CD: 13060247469
- Monitor: 10735101964

## Folder Structure

- `src/app/` — Next.js app directory
- `src/components/Product/` — Product UI components
- `src/api/` — API logic
- `src/hooks/` — React Query hooks
- `src/types/` — TypeScript types
