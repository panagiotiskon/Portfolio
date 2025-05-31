'use client';

import StickyScroll from './ui/StickyScroll';
import SectionHeader from './SectionHeader';
import { experienceContent } from '@/app/data';
import Image from 'next/image';

const Experience = () => {
  return (
    <section
      className="py-24 flex-col flex justify-center items-center h-screen space-y-9 max-w-[1000px] mx-auto"
      id="experience"
    >
      <div className="w-full lg:min-h-screen min-h-96 absolute fade-mask xl:mt-0 lg:mt-0 mt-96">
        <Image
          src="./footer-grid.svg"
          alt="footer grid"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full lg:opacity-60 opacity:50"
        />
      </div>
      <SectionHeader title=".Experience" align="right" className="max-w-4xl" />
      <StickyScroll content={experienceContent} />
    </section>
  );
};

export default Experience;
