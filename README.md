# Fit Bowl - Smoothie Bowl Landing Page

A beautiful, single-page landing website for Fit Bowl, a smoothie bowl brand. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🎨 Color Palette

The design uses a strict color palette:

- **Brand (Primary)**: `#26547c` (yinmn-blue)
- **Accent (CTA)**: `#ef476f` (bright-pink-crayola)
- **Highlight**: `#ffd166` (sunglow)
- **Success**: `#06d6a0` (emerald)
- **Background**: `#fffcf9` (baby-powder)
- **Text**: `#1a1a1a` (near-black)

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and design tokens
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── accordion.tsx
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section
│   ├── WhyFitBowl.tsx      # Value proposition cards
│   ├── SignatureBowls.tsx # Menu items grid
│   ├── BowlCard.tsx        # Individual bowl card
│   ├── BuildYourBowl.tsx   # Customization teaser
│   ├── NutritionSourcing.tsx # Nutrition information
│   ├── SocialProof.tsx     # Customer reviews
│   ├── FAQ.tsx             # Frequently asked questions
│   ├── CTASection.tsx      # Final call-to-action
│   └── Footer.tsx          # Footer with contact info
├── config/
│   └── order.ts            # Order URL configuration
├── content/
│   └── en.json             # Content strings (English)
├── data/
│   ├── menu.json           # Menu items data
│   ├── reviews.json        # Customer reviews
│   └── faq.json            # FAQ data
└── lib/
    └── utils.ts            # Utility functions
```

## ⚙️ Configuration

### Changing the Order Link

Edit `config/order.ts` to update the WhatsApp or ordering URL:

```typescript
export const ORDER_URL = "https://wa.me/YOUR_NUMBER?text=YOUR_MESSAGE";
```

### Editing Menu Items

Update `data/menu.json` to add, remove, or modify bowl items:

```json
{
  "id": "bowl-id",
  "name": "Bowl Name",
  "description": "Bowl description",
  "price": 12.99,
  "calories": 320,
  "protein_g": 8,
  "sugar_g": 28,
  "tags": ["Vegan", "High-Protein"],
  "image": "/images/bowl-image.jpg"
}
```

### Updating Content

Edit `content/en.json` to change text content throughout the site. The structure follows the component hierarchy.

### Adding Images

Place images in the `public/images/` directory:

- Bowl images: `public/images/berry-boost.jpg`, etc.
- Avatar images: `public/images/avatars/sarah.jpg`, etc.

**Note:** You'll need to add actual images to these paths. The components will automatically fall back to placeholder images if the files are missing. For production, replace these with your actual product images.

**Image Requirements:**
- Bowl images: Recommended size 800x600px, format: JPG or WebP
- Avatar images: Recommended size 80x80px, format: JPG or PNG

## 🎯 Features

- ✅ **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema
- ✅ **Accessible**: ARIA labels, semantic HTML, AA contrast
- ✅ **Performance**: Optimized images, lazy loading
- ✅ **Responsive**: Mobile-first design
- ✅ **Smooth Scrolling**: Anchor navigation
- ✅ **Analytics Ready**: CTA click tracking (guarded)

## 🧪 Testing

The project is set up for testing. You can add tests for:

- Component rendering with correct color tokens
- FAQ accordion functionality
- Menu card rendering
- Navigation scroll behavior

## 📱 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Changing Colors

All colors are defined in `app/globals.css` using CSS variables. The Tailwind config maps these to utility classes.

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Add content strings to `content/en.json` if needed

### Modifying Components

All components use the design token system. Use the semantic color classes:
- `bg-brand`, `text-brand` for primary brand color
- `bg-accent`, `text-accent` for CTAs
- `bg-highlight`, `text-highlight` for highlights
- `bg-success`, `text-success` for success states

## 📄 License

This project is created for Fit Bowl. All rights reserved.

## 🤝 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

