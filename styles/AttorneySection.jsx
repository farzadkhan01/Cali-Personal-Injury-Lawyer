/** @format */

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ImageFrame from '@/components/ui/ImageFrame';
import GlassCard from '@/components/ui/GlassCard';
import Divider from '@/components/ui/Divider';
import PortraitPlaceholder from '@/components/ui/PortraitPlaceholder';
import Reveal from '@/components/motion/Reveal';
import { attorneys } from '@/data/attorneys';

export default function AttorneySection({ image }) {
  const attorney = attorneys[0];

  return (
    <Section>
      <Container>
        <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-10 lg:order-1'>
            <SectionHeading
              eyebrow='Meet Your Advocate'
              heading='A dedicated point of contact throughout your case.'
              description='This section is structured to hold verified attorney information, including biography, education, bar admissions, and professional memberships, once finalized.'
            />

            <Divider className='max-w-sm' />

            <dl className='grid gap-4 sm:grid-cols-2'>
              {attorney.credentials.map((item) => (
                <div
                  key={item.label}
                  className='flex flex-col gap-1'>
                  <dt className='text-xs font-medium uppercase tracking-[0.14em] text-gray-400'>
                    {item.label}
                  </dt>
                  <dd className='text-sm font-medium text-ink-900'>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal className='lg:order-2'>
            <ImageFrame
              ratio='4 / 5'
              rounded='4xl'
              className='relative'>
              <PortraitPlaceholder image={attorneys.at(0).image} />

              <GlassCard
                tone='light'
                blur='soft'
                className='absolute bottom-6 left-6 right-6 flex flex-col gap-0.5 p-4'>
                <span className='font-display text-base text-ink-950'>
                  {attorney.name}
                </span>
                <span className='text-xs text-gray-500'>{attorney.title}</span>
              </GlassCard>
            </ImageFrame>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
