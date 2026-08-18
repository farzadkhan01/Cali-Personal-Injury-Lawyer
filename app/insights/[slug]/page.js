import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import FinalCTA from "@/sections/FinalCTA";
import { articles } from "@/data/insights";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
    },
  };
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const moreArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal className="flex items-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="text-xs text-gray-400">{article.readTime}</span>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink-950 sm:text-4xl lg:text-5xl"
          >
            {article.title}
          </TextReveal>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="narrow">
          <Reveal className="flex flex-col gap-6">
            {article.body.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-gray-600">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Divider className="my-12" />

          <p className="text-sm leading-relaxed text-gray-400">
            This article is for general informational purposes only and is not legal advice. For guidance
            specific to your situation, consider reaching out directly.
          </p>

          {moreArticles.length > 0 && (
            <div className="mt-16 flex flex-col gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">More Insights</span>
              <ul className="flex flex-col gap-3">
                {moreArticles.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/insights/${item.slug}`}
                      className="group inline-flex items-center gap-2 font-display text-lg text-ink-950"
                    >
                      <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-ink-950/40">
                        {item.title}
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
