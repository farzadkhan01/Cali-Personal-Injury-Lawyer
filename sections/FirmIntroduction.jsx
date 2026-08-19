/** @format */

import { Compass, HeartHandshake, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageFrame from '@/components/ui/ImageFrame';
import Divider from '@/components/ui/Divider';
import Reveal from '@/components/motion/Reveal';
import Image from 'next/image';

const pillars = [
  {
    icon: Shield,
    title: 'Advocacy',
    description:
      'We treat every case as if it were the only one that mattered, because to you, it is.',
  },
  {
    icon: Compass,
    title: 'Clarity',
    description:
      'Plain explanations and honest timelines, without legal jargon you have to decode alone.',
  },
  {
    icon: HeartHandshake,
    title: 'Human Support',
    description:
      'Recovery is not just physical. We stay involved through the whole process, not just the paperwork.',
  },
];

export default function FirmIntroduction({ image = '' }) {
  return (
    <Section id='how-we-help'>
      <Container>
        <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
          <Reveal>
            <ImageFrame
              ratio='4 / 5'
              rounded='4xl'
              className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-trust-700 via-ink-950 to-ink-900' />
              <div className='bg-grain absolute inset-0 opacity-[0.06]' />
              <div
                aria-hidden='true'
                className='absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15'
              />
              <div
                aria-hidden='true'
                className='absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400/20 blur-2xl'
              />
              <div
                aria-hidden='true'
                className='absolute left-[18%] top-[22%] h-32 w-32 rotate-12 rounded-3xl border border-white/10'
              />
              {/*    
               position: relative;
               top: 100%;
               transform: translateY(-90%); */}

              {image && (
                <div className='w-full h-full absolute bottom-0 left-0 z-1'>
                  <Image
                    className='w-full h-full object-contain relative top-full translate-y-[-90%]'
                    src={image}
                    width={100}
                    height={100}
                    unoptimized
                    alt='Image'
                  />
                </div>
              )}
            </ImageFrame>
          </Reveal>

          <div className='flex flex-col gap-10'>
            <SectionHeading
              eyebrow='How We Help'
              heading='A firm built around your recovery, not just your case.'
              description='After an accident, the legal process can feel like one more thing working against you. Cali Personal Injury Lawyer exists to change that, translating a complicated system into clear next steps, and standing beside you at every stage.'
            />

            <Divider className='max-w-sm' />

            <div className='flex flex-col gap-8'>
              {pillars.map(({ icon: Icon, title, description }, index) => (
                <Reveal
                  key={title}
                  delay={index * 0.1}
                  className='flex gap-5'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink-950/5 text-ink-950'>
                    <Icon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </span>
                  <div className='flex flex-col gap-1'>
                    <span className='font-display text-lg text-ink-950'>
                      {title}
                    </span>
                    <p className='text-sm leading-relaxed text-gray-600'>
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
