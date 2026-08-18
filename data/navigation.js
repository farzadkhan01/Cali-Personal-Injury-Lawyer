import { practiceAreas } from "./practiceAreas";

const practiceAreaLinks = practiceAreas
  .filter((area) => area.overview)
  .map((area) => ({ label: area.title, href: `/practice-areas/${area.slug}` }));

export const navLinks = [
  {
    label: "Practice Areas",
    href: "/practice-areas",
    children: practiceAreaLinks,
  },
  { label: "About", href: "/about" },
  { label: "Attorneys", href: "/attorneys" },
  { label: "Results", href: "/results" },
  {
    label: "Resources",
    href: "/insights",
    children: [
      { label: "Insights", href: "/insights" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
