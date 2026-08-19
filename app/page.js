/** @format */

import Hero from '@/sections/Hero';
import CaseDiscovery from '@/sections/CaseDiscovery';
import FirmIntroduction from '@/sections/FirmIntroduction';
import PracticeAreas from '@/sections/PracticeAreas';
import Process from '@/sections/Process';
import ResultsTrust from '@/sections/ResultsTrust';
import Testimonials from '@/sections/Testimonials';
import AttorneySection from '@/sections/AttorneySection';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CaseDiscovery />
      <FirmIntroduction image='/home .webp' />
      <PracticeAreas />
      <Process />
      <ResultsTrust />
      <Testimonials />
      <AttorneySection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
