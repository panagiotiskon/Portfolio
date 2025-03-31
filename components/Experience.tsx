'use client';

import { StickyScroll } from './ui/StickyScroll';
import SectionHeader from './SectionHeader';
import { experienceContent } from '@/app/data';
import Image from 'next/image';

const Experience = () => {
  return (
    <div
      className="py-24 flex-col flex justify-center items-center h-screen space-y-9 max-w-[1000px] mx-auto"
      id="experience"
    >
      <div className="w-full min-h-screen absolute fade-mask">
        <Image
          src="./footer-grid.svg"
          alt="footer grid"
          layout="fill"
          objectFit="cover"
          className="w-full h-full pt-30 lg:opacity-50 opacity:65"
        />
      </div>
      <SectionHeader title=".Experience" align="right" className="max-w-4xl" />
      <StickyScroll content={experienceContent} />
    </div>
  );
};

export default Experience;
