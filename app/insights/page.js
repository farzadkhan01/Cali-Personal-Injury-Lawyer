/** @format */

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import Reveal from '@/components/motion/Reveal';
import TextReveal from '@/components/motion/TextReveal';
import FinalCTA from '@/sections/FinalCTA';
import { articles } from '@/data/insights';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Insights',
  description:
    'Educational articles on personal injury topics, from car accidents to the general case process.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: `Insights | ${siteConfig.name}`,
    description: 'Educational articles on personal injury topics.',
    url: '/insights',
  },
};

const [featured, ...rest] = articles;

export default function InsightsPage() {
  return (
    <>
      <Section
        spacing='tight'
        className='pt-12 sm:pt-16 lg:pt-20'>
        <Container size='narrow'>
          <Reveal>
            <Badge>Insights</Badge>
          </Reveal>
          <TextReveal
            as='h1'
            delay={0.1}
            className='mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl'>
            Practical information for after an accident.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-gray-600'>
              General, educational articles on personal injury topics. Here is a
              general substitute for a conversation about your specific
              situation.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing='tight'>
        <Container>
          <div className='grid gap-6 lg:grid-cols-3'>
            <Reveal className='lg:col-span-2'>
              <Link
                href={`/insights/${featured.slug}`}
                className='group block h-full'>
                <GlassCard
                  tone='dark'
                  blur='soft'
                  hover
                  className='flex h-full flex-col justify-between gap-8 p-8 sm:p-10'>
                  <div className='flex items-center gap-3'>
                    <Badge tone='dark'>{featured.category}</Badge>
                    <span className='text-xs text-warm-white/50'>
                      {featured.readTime}
                    </span>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <span className='font-display text-3xl text-warm-white'>
                      {featured.title}
                    </span>
                    <p className='text-base leading-relaxed text-warm-white/70'>
                      {featured.excerpt}
                    </p>
                  </div>
                  <span className='inline-flex items-center gap-2 text-sm font-medium text-warm-white'>
                    Read Article
                    <ArrowUpRight
                      className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      aria-hidden='true'
                    />
                  </span>
                </GlassCard>
              </Link>
            </Reveal>

            {rest.map((article, index) => (
              <Reveal
                key={article.slug}
                delay={index * 0.05}>
                <Link
                  href={`/insights/${article.slug}`}
                  className='group block h-full'>
                  <GlassCard
                    tone='light'
                    blur='soft'
                    hover
                    className='flex h-full flex-col justify-between gap-6 p-6'>
                    <div className='flex items-center gap-3'>
                      <Badge>{article.category}</Badge>
                      <span className='text-xs text-gray-400'>
                        {article.readTime}
                      </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <span className='font-display text-xl text-ink-950'>
                        {article.title}
                      </span>
                      <p className='text-sm leading-relaxed text-gray-600'>
                        {article.excerpt}
                      </p>
                    </div>
                    <span className='inline-flex items-center gap-2 text-sm font-medium text-ink-950'>
                      Read Article
                      <ArrowUpRight
                        className='h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                        aria-hidden='true'
                      />
                    </span>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
