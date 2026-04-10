Ready for review
Select text to add comments on the plan
Plan: Full Portfolio Visual Transformation
Context
The current site is a minimalist personal portfolio for Imran Tel (video editor, Paris) with a black + gold aesthetic, 7 components, and a portfolio-first structure. The target design (from "Barré Editing" screenshots) is a high-converting B2B service landing page with a dark green-black background, bright green accents, bold sans-serif typography, and 11 distinct sections following a clear sales funnel: problem → solution → proof → offer → CTA.

The goal is to fully transform the visual design, section structure, and content positioning to match the screenshot aesthetic — while adapting it to the Imran Tel brand and keeping the French language.

Design System
Color Palette (app/globals.css)
:root {
  --background: #060d08;        /* Very dark green-black */
  --surface:    #0f1a11;        /* Card/section surface */
  --surface-2:  #162019;        /* Slightly elevated surface */
  --border:     rgba(255,255,255,0.08);
  --foreground: #ffffff;
  --muted:      #9ca3af;        /* Gray-400 for secondary text */
  --accent:     #22c55e;        /* Bright green (green-500) */
  --accent-dim: #16a34a;        /* Hover state (green-600) */
  --accent-glow: rgba(34,197,94,0.15);
}
Typography
Remove: Cormorant_Garamond entirely
Add: Plus_Jakarta_Sans (weights 400/500/600/700/800) — geometric, bold, modern
Keep: Inter for body text
CSS variable: --font-jakarta for display headings
Update .font-display class in globals.css to use --font-jakarta
Hero headings: font-display text-5xl md:text-7xl lg:text-8xl font-extrabold
Section headings: font-display text-4xl md:text-5xl font-extrabold
Animations
Section reveals: whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:24 }}
Card stagger: staggerChildren: 0.1 on container variants
Hero video card: looping float animate={{ y: [0,-8,0] }}
Pain point hover: whileHover={{ y: -4 }}
CTA buttons: CSS shimmer sweep via .btn-shimmer::after keyframe
Feature card icons: .icon-glow CSS animation on .group:hover
Carousel: motion.div with drag="x" + dragConstraints ref
New Section Architecture (page.tsx order)
Navbar → Hero → ForWho → PainPoints → Work(carousel) → Features → Pricing → Testimonials → Process → CTASection → Footer
Critical Files to Modify
1. app/globals.css — Full replacement
New :root color variables (green palette)
New @theme inline tokens: --color-background, --color-surface, --color-surface-2, --color-foreground, --color-muted, --color-accent, --color-accent-dim
CSS keyframes: @keyframes shimmer, @keyframes glow-pulse
.btn-shimmer::after for CTA hover effect
.icon-glow + .group:hover .icon-glow for feature icons
.carousel-track cursor styles
Updated .font-display using --font-jakarta
2. app/layout.tsx — Font swap
Remove Cormorant_Garamond import, add Plus_Jakarta_Sans (weights 400–800)
New CSS variable: --font-jakarta
Update metadata title to "Imran Tel | Monteur Vidéo Immobilier"
3. lib/data.ts — Full data expansion
New fields to add (keep existing fields for backward compat):

heroBadge, heroHeadline: { line1, highlighted }, heroSubheadline
navLinks: [{ label, id }], navCta
personas[] — 6 persona cards (category, title, description, thumbnail)
painPoints[] — 4 pain point cards (quote, description)
features[] — 6 feature cards (icon, title, description)
pricing[] — 3 tiers (name, price, recommended, features[], cta, ctaHref)
testimonials[] — 3 cards (stars, quote, name, title, avatar initials)
processSteps[] — 4 steps (emoji, title, description)
ctaSection: { heading, subtext, buttonLabel, buttonHref, socialProof }
cgv: { services, payment, revisions, legal, cancellation }
Update work[] to match new portrait-format carousel cards
4. components/Navbar.tsx — Restyle
Logo: Imran. (green dot) in Plus Jakarta Sans
Nav links from siteData.navLinks (Services, Offres, Témoignages, Résultats)
CTA: green pill button bg-accent text-black rounded-full with shimmer
5. components/Hero.tsx — Full rebuild
Section badge pill at top
Large headline with green highlighted phrase
Gray subheadline paragraph
Floating video preview card (aspect-video, rounded-2xl, green play button)
Levitation animation: animate={{ y: [0,-8,0] }} repeat Infinity
Green CTA button below card
6. components/About.tsx → components/ForWho.tsx (new file, keep old)
Badge: "Pour qui ?"
Heading: "Vous vous reconnaissez ici ?"
3×2 grid of persona cards
Each card: aspect-video thumbnail with Image fill, category badge overlay (top-left), title + description below
Card hover: scale-105 thumbnail, accent border
7. components/Work.tsx — Repurpose as horizontal carousel
Badge: "Le résultat"
Heading: "Le résultat parle d'lui-même"
Horizontal drag carousel using Framer Motion drag="x"
Cards: portrait orientation (aspect-[9/16]), ~260px wide, thumbnail + play icon
Click: opens YouTube link in new tab
dragConstraints ref on outer container
8. components/Services.tsx → components/Features.tsx (new file, keep old)
Badge: "La solution"
2-line headline: "Vous filmez, je monte. / Vous vendez, je gère la com."
2×3 grid of feature cards
Each card: green icon with .icon-glow, bold title, gray description
Card hover: border-accent/30, icon glow animation
9. components/Contact.tsx → components/Pricing.tsx (new file, keep old)
Badge: "Offres"
3 pricing tier cards side by side (1 col mobile, 3 col desktop)
Recommended card: border-accent ring-1 ring-accent/30
Each: tier name, price (large font-display), feature checklist, CTA button
Feature list items: green checkmark ✓ prefix
10. New: components/Testimonials.tsx
Badge: "Témoignages"
3-column card grid
Each: star row (5 amber stars), quote, avatar circle (initials), name + title
11. New: components/Process.tsx
Badge: "Processus"
4 step cards in a row (1 col mobile, 4 col desktop)
Each: emoji icon, step number, title, description
Connector line between cards on desktop (CSS border-t on container)
12. New: components/CTASection.tsx
Instagram icon (SVG)
Large heading + subtext
Green CTA button (full shimmer effect)
Social proof text below in muted gray
13. components/Footer.tsx — Restyle
4-column CGV summary (Services, Payment, Révisions, Legal)
Copyright line: "© 2026 Imran Tel · Tous droits réservés"
Top border border-t border-[var(--border)]
14. app/page.tsx — Update imports and render order
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ForWho from "@/components/ForWho"
import PainPoints from "@/components/PainPoints"
import Work from "@/components/Work"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Process from "@/components/Process"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
Horizontal Carousel Implementation (Work.tsx)
const carouselRef = useRef<HTMLDivElement>(null);

<motion.div ref={carouselRef} className="overflow-hidden">
  <motion.div
    className="flex gap-4 pl-6 carousel-track"
    drag="x"
    dragConstraints={carouselRef}
    dragElastic={0.1}
  >
    {siteData.work.map((item, i) => (
      <motion.a
        key={item.id}
        href={item.videoUrl}
        target="_blank"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.08 }}
        className="flex-shrink-0 w-[260px] aspect-[9/16] relative rounded-2xl overflow-hidden bg-surface border border-[var(--border)]"
      >
        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
        {/* play icon overlay */}
      </motion.a>
    ))}
  </motion.div>
</motion.div>
Section Badge Reusable Pattern
Every section uses the same pill badge above its heading:

<span className="inline-flex items-center gap-2 bg-surface border border-[var(--border)] text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
  {badgeText}
</span>
Next.js / Tailwind v4 Compatibility Notes
Tailwind v4: tokens in @theme inline auto-generate utilities (bg-accent, text-muted, bg-surface) — no arbitrary values needed for the primary palette
Plus_Jakarta_Sans import works with next/font/google exactly like Inter
All components with useState, useEffect, or Framer Motion must have "use client" directive
AnimatePresence should use mode="wait" to avoid React 19 double-fire issue
next/image with fill requires parent to have position: relative and explicit dimensions
images.unsplash.com is already in remotePatterns in next.config.ts — no change needed
Framer Motion v12: drag="x" + dragConstraints ref pattern is stable
Verification
Run npm run dev — no TypeScript errors
All 11 sections visible on scroll
Carousel drags horizontally, bounces at edges
Video cards open YouTube in new tab on click
Pricing "recommended" tier has visible green outline
Navbar goes transparent → blurred on scroll
Hero card floats up/down continuously
All whileInView animations trigger correctly once per scroll entry
CTA buttons show shimmer on hover
Mobile responsive: single column, carousel still draggable