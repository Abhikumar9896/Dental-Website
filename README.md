# Dental Esthetique Website

React site for Dental Esthetique, a dental clinic in Noida. Built with Vite + TypeScript + Tailwind CSS.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- React Router 7

That's it. No state management library, no API calls, no backend. It's a static brochure website.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Scripts

| Command              | What it does                         |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start dev server                     |
| `npm run build`      | Type check + production build        |
| `npm run lint`       | Run oxlint                           |
| `npm run format`     | Check formatting with Prettier       |
| `npm run format:fix` | Auto-fix formatting                  |
| `npm run preview`    | Preview production build locally     |

Always run `npm run build` before pushing. It runs TypeScript check first, then builds. If type check fails, build won't happen.

## Folder Structure

```
Dental-Website/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── home/            # Home page images (logo, hero, gallery, etc.)
│   │   └── about/           # About page images
│   └── treatment/           # Treatment card images
├── src/
│   ├── main.tsx             # Entry point, renders App
│   ├── App.tsx              # Routes + lazy loading
│   ├── index.css            # Tailwind config, fonts, base styles
│   ├── pages/               # One file per page/route
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   └── components/
│       ├── layout/          # Header, Footer, Layout wrapper
│       ├── home/            # Home page section components
│       ├── ui/              # Shared reusable components
│       ├── AppointmentCta.tsx
│       ├── ErrorBoundary.tsx
│       └── HeroToothCollage.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json            # References tsconfig.app.json + tsconfig.node.json
├── tsconfig.app.json        # TypeScript config for src/
├── tsconfig.node.json       # TypeScript config for vite.config.ts
├── .oxlintrc.json           # Linter config
├── .prettierrc              # Formatter config
└── .gitignore
```

## How the Code Works

### Pages and Routing

All routes are defined in `src/App.tsx`. Each page is lazy-loaded so the code only loads when someone visits that route.

```
/           -> Home.tsx
/about      -> About.tsx
/doctors    -> DoctorProfile.tsx
/services   -> Services.tsx
/contact    -> Contact.tsx
*           -> NotFound.tsx (404 page)
```

Every page sits inside the Layout component which wraps it with Header and Footer.

### Layout System

`src/components/layout/Layout.tsx` renders Header at the top, page content in the middle (via React Router's Outlet), and Footer at the bottom.

### Component Organization

- `pages/` - Each file is a full page. These are big files because each page is a complete visual design from Figma.
- `components/home/` - Components that only exist on the Home page. The Home page was split into sections (HeroBanner, DoctorCard, KeyTreatments, etc.) to keep things manageable.
- `components/ui/` - Components used across multiple pages: PageHero, StarRating, WhatsAppFloat.
- `components/layout/` - Header, Footer, Layout shell.
- `components/` - AppointmentCta is used on multiple pages. ErrorBoundary catches render crashes. HeroToothCollage is the tooth images cluster on Home.

### Styling Approach

This project uses inline absolute positioning to match a Figma design pixel-perfectly. Every page is a fixed 1440px wide artboard.

You'll see a lot of this:

```tsx
<div className="absolute left-[153px] top-[5514px] h-[818px] w-[1072px]">
```

That's intentional. The Figma design uses absolute positions on a 1440px canvas, and the code follows the same approach. It's not responsive - the site is designed for desktop only.

### Fonts

Three fonts are loaded from Google Fonts:
- **Fraunces** - Headings, buttons, nav links
- **Poppins** - Body text, descriptions
- **Gabriela** - Used only for "Smiles" text in the hero

You use them like this in Tailwind:

```tsx
className="font-[family-name:var(--font-fraunces)]"
className="font-[family-name:var(--font-poppins)]"
```

### Path Alias

The project uses `@/` as an alias for `src/`. So instead of:

```tsx
import Header from '../components/layout/Header'
```

You can write:

```tsx
import Header from '@/components/layout/Header'
```

Both styles exist in the codebase. Relative paths (`../`) are more common. Use whichever fits the context.

### Images

All images live in `public/` folder. They are referenced like:

```tsx
const IMG = '/images/home'
<img src={`${IMG}/hero-bg-5ed7fb.png`} />
```

Most components define a `const IMG` at the top pointing to their image folder. This is just a shorthand to avoid repeating the full path everywhere.

## Things to Know

### The Site is Not Responsive

Every page is a fixed 1440px wide. On smaller screens, the page scrolls horizontally. This is by design since the Figma mockup was for desktop. If someone asks you to make it responsive, that's a big task.

### Form Doesn't Do Anything

The appointment form in AppointmentCta.tsx collects name and phone number, but the submit handler just does `e.preventDefault()`. There's no backend to send data to. If you need to make it functional, you'll need to connect it to an API or a service like Formspree.

### FAQ Section Has No Answers

The FAQ accordion in FaqSection.tsx expands and collapses, but there's no answer content rendered. The `faqs` array only has questions. Answers need to be added.

### SHOW MORE Buttons Are Placeholders

The "SHOW MORE" buttons in Services.tsx and GallerySection.tsx don't have click handlers. They're visual placeholders from the Figma design.

### Awards Section is Empty

The Awards section in DoctorProfile.tsx has a heading but no content below it.

## Linting and Formatting

- **oxlint** for linting (not ESLint)
- **Prettier** for formatting

Run `npm run lint` and `npm run format` before committing. If formatting is off, run `npm run format:fix`.

## Adding a New Page

1. Create the page file in `src/pages/YourPage.tsx`
2. Add a lazy import in `src/App.tsx`:
   ```tsx
   const YourPage = lazy(() => import('@/pages/YourPage'))
   ```
3. Add a route inside the Layout Route:
   ```tsx
   <Route path="your-page" element={<YourPage />} />
   ```
4. Add a nav link in `src/components/layout/Header.tsx` if needed

## Adding a New Component

- If it's used on one page only, put it in `src/components/home/` or keep it in the page file
- If it's used across pages, put it in `src/components/ui/`
- If it's a layout piece (header, footer, nav), put it in `src/components/layout/`

## Common Gotchas

- **Unused variables will fail the build.** TypeScript is set to `noUnusedLocals: true` and `noUnusedParameters: true`. Remove any variable you're not using.
- **Comments are not allowed.** The codebase follows a no-comments policy. Remove `//` and `{/* */}` comments.
- **No emojis in code.** Keep it clean.
- **`as const` is used a lot.** This tells TypeScript to infer the narrowest possible type. Don't remove it.
- **Images need width/height.** Most images in the codebase specify dimensions to avoid layout shift. Add them when adding new images.
- **`loading="lazy"` on below-the-fold images.** Images that aren't visible on initial load should have `loading="lazy"` for performance.

## Useful Files to Read First

If you're new to this project, read these files in this order:

1. `src/main.tsx` - Where it all starts
2. `src/App.tsx` - Routes and lazy loading
3. `src/components/layout/Layout.tsx` - How pages get wrapped
4. `src/pages/Home.tsx` - See how a page is structured
5. `src/components/home/HeroBanner.tsx` - Understand the styling approach
6. `src/index.css` - Tailwind theme tokens and fonts
7. `vite.config.ts` - Build config and path alias
