import FAQCategorized from "@/sections/FAQCategorized";
import FinalCTA from "@/sections/FinalCTA";
import { faqCategories } from "@/data/faq";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "General answers to common personal injury questions, organized by topic.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description: "General answers to common personal injury questions, organized by topic.",
    url: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <FAQCategorized />
      <FinalCTA />
    </>
  );
}
