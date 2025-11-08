# Quick Start Guide

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Key Files to Customize

1. **Order Link**: `config/order.ts` - Update WhatsApp/ordering URL
2. **Menu Items**: `data/menu.json` - Add/edit bowl items
3. **Content**: `content/en.json` - Update all text content
4. **Reviews**: `data/reviews.json` - Update customer reviews
5. **FAQ**: `data/faq.json` - Update FAQ items
6. **Images**: Add images to `public/images/` directory

## Color Palette

All colors are defined in `app/globals.css`:
- Brand (Primary): `#26547c` - Use with `bg-brand`, `text-brand`
- Accent (CTA): `#ef476f` - Use with `bg-accent`, `text-accent`
- Highlight: `#ffd166` - Use with `bg-highlight`, `text-highlight`
- Success: `#06d6a0` - Use with `bg-success`, `text-success`
- Background: `#fffcf9` - Use with `bg-bg`

## Adding Images

1. Bowl images: Place in `public/images/` (e.g., `berry-boost.jpg`)
2. Avatar images: Place in `public/images/avatars/` (e.g., `sarah.jpg`)

If images are missing, the site will show fallback placeholders.

## Building for Production

```bash
pnpm build
pnpm start
```

## Deploying to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js configuration

