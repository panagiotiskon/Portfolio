'use client';

import { StickyScroll } from './ui/StickyScroll';
import SectionHeader from './SectionHeader';
import { experienceContent } from '@/app/data';

const Experience = () => {
  return (
    <div
      className="py-24 flex-col flex justify-center items-center h-screen space-y-9 max-w-[1000px] mx-auto"
      id="experience"
    >
      <SectionHeader title=".Experience" align="right" className="max-w-4xl" />
      <StickyScroll content={experienceContent} />
    </div>
  );
};

export default Experience;
