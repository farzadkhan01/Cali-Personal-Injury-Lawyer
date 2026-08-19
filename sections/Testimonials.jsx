/** @format */

import { Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/motion/Reveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow='Client Experience'
          heading='What the experience is designed to feel like'
          description='The quotes below are illustrative examples, not statements from real clients. They describe the standard of communication and care this practice is built around.'
        />

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name + index}
              delay={index * 0.1}>
              <GlassCard
                tone='light'
                blur='soft'
                hover
                className='flex h-full flex-col gap-6 p-8'>
                <div className='flex items-center justify-between'>
                  <Quote
                    className='h-6 w-6 text-accent-500'
                    aria-hidden='true'
                  />
                  <Badge className='px-3 py-1 text-[0.65rem]'>
                    Illustrative
                  </Badge>
                </div>
                <p className='font-display text-lg leading-relaxed text-ink-950'>
                  {item.quote}
                </p>
                <div className='mt-auto flex flex-col gap-0.5 border-t border-ink-950/10 pt-4'>
                  <span className='text-sm font-medium text-ink-900'>
                    {item.name}
                  </span>
                  <span className='text-xs text-gray-500'>{item.context}</span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
