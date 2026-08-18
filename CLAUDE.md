<!-- @format -->

# Cali Personal Injury Lawyer — Claude Code Instructions

## Project

This is a modern personal injury law firm website for:

**Cali Personal Injury Lawyer**

Domain:

**calipersonalinjurylawyer.com**

The website is intentionally being created as a creative and technical showcase.

There is currently no supplied website content, existing design system, brand guideline, copy deck, or fixed visual identity.

Claude is therefore responsible for creating the visual direction, UX direction, original marketing copy, component system, and overall digital experience.

---

# PRIMARY OBJECTIVE

Build a premium, modern, highly polished personal injury law firm website that feels substantially different from traditional law-firm websites.

The website should feel like:

- A premium legal brand
- A modern editorial publication
- A sophisticated digital product
- A high-conversion consultation experience
- A trustworthy professional service

It should NOT feel like:

- A generic law firm template
- A corporate SaaS dashboard
- A basic WordPress-style website
- A collection of rectangular cards
- An overly animated portfolio experiment
- A cheap glassmorphism template

The design should communicate:

**Trust + Authority + Humanity + Confidence + Modernity**

---

# DESIGN DIRECTION

The primary visual direction is:

## Premium Legal Editorial + Glassmorphism + 3D Abstract Minimalism

Use:

- Glassmorphism
- Frosted translucent surfaces
- Soft gradients
- Large rounded containers
- Editorial typography
- Serif display headlines
- Clean sans-serif supporting text
- 3D abstract visual artwork
- Layered compositions
- Floating UI elements
- Large whitespace
- Asymmetrical layouts
- Premium photography
- Subtle depth
- Soft shadows
- Elegant micro-interactions

The glassmorphism treatment must be sophisticated and restrained.

Do not make every element glass.

Glass should be used to establish hierarchy and depth.

---

# LEGAL BRAND PRINCIPLE

Although the visual language is modern, the website must still feel like a serious legal organization.

Always prioritize:

1. Trust
2. Clarity
3. Professionalism
4. Accessibility
5. Conversion
6. Visual quality

Never sacrifice credibility for visual novelty.

---

# CONTENT RULES

The project currently has no supplied content.

Claude may create original:

- Headlines
- Subheadlines
- Supporting copy
- Section copy
- CTA text
- UX microcopy
- Navigation labels
- Brand messaging
- Educational placeholder content
- General legal-topic descriptions

However, Claude MUST NOT fabricate real-world claims about the law firm.

Never invent:

- Attorney credentials
- Bar memberships
- Awards
- Case results
- Settlement amounts
- Verdict amounts
- Client testimonials presented as genuine
- Office addresses
- Phone numbers
- Email addresses
- Years of experience
- Accreditations
- Media appearances
- Certifications
- Legal guarantees
- “Best lawyer” claims
- Guaranteed outcomes

When real information is unavailable, use clearly identifiable placeholder/demo data and structure the code so it can easily be replaced later.

---

# TECH STACK

Use the following stack:

- Next.js
- App Router
- JavaScript
- React
- Tailwind CSS
- Motion / Framer Motion
- React Hook Form
- Lucide React
- Next/Image
- next/font
- CSS where necessary

DO NOT migrate the project to TypeScript.

Use `.js` and `.jsx` files.

Do not introduce unnecessary libraries.

Before installing a new dependency, determine whether the functionality can reasonably be implemented using the existing stack.

---

# JAVASCRIPT REQUIREMENT

This project intentionally uses JavaScript.

Do not create:

- `.ts`
- `.tsx`

unless explicitly requested later.

Prefer:

- `.js`
- `.jsx`

---

# NEXT.JS REQUIREMENTS

Use the Next.js App Router.

Prefer Server Components by default.

Use `"use client"` only when genuinely necessary, such as:

- Interactive components
- Motion-heavy client interactions
- Forms requiring client state
- Browser APIs
- Interactive navigation
- User interaction

Do not turn entire pages into Client Components unnecessarily.

Keep client-side JavaScript minimal.

---

# RESPONSIVENESS

The website must be fully responsive.

Support:

- Large desktop
- Desktop
- Laptop
- Tablet
- Small tablet
- Mobile
- Small mobile

Never design desktop first and simply shrink it.

The layout must be intentionally adapted for mobile.

Complex glass and 3D compositions must have mobile-specific behavior where appropriate.

---

# ACCESSIBILITY

Follow accessible web practices.

Include:

- Semantic HTML
- Proper heading hierarchy
- Accessible buttons
- Accessible links
- Form labels
- Keyboard navigation
- Visible focus states
- Appropriate color contrast
- Reduced motion support
- Meaningful alt text
- ARIA only when necessary

Do not rely solely on animation or color to communicate information.

---

# ANIMATION

Animation must be:

- Smooth
- Subtle
- Purposeful
- Premium
- Consistent

Avoid:

- Excessive bouncing
- Random movement
- Long unnecessary animations
- Distracting parallax
- Constant motion
- Animation on every element

Respect:

`prefers-reduced-motion`

---

# PERFORMANCE

Performance is a first-class requirement.

Optimize:

- Images
- Fonts
- Client JavaScript
- Component rendering
- Animation
- Asset loading
- Large visual assets

Use:

`next/image`

where appropriate.

Do not unnecessarily load heavy libraries or large assets.

---

# COMPONENTIZATION

Build reusable components.

Do not duplicate large blocks of JSX.

Create shared components for:

- Header
- Navigation
- Footer
- Buttons
- Glass cards
- Section headings
- Stats
- Forms
- Testimonials
- Practice areas
- CTA sections
- Images
- Interactive elements

If multiple pages share the same structure, create reusable components or data-driven templates.

---

# CONTENT ARCHITECTURE

Keep reusable content in structured data where practical.

For example:

```js
const practiceAreas = [
  {
    title: '...',
    slug: '...',
    description: '...',
  },
];
```
