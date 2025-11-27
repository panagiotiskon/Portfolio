'use client';

import Image from 'next/image';
import GlareCard from './ui/GlareCard';
import { texts } from '@/app/data';
import SectionHeader from './SectionHeader';
import Spotlight from './ui/Spotlight';
import colouredText from './util/colouredText';

const AboutMe = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen space-y-6"
      id="about"
    >
      <SectionHeader title="About Me." align="left" className="max-w-4xl" />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 p-1 font-bold">
        <Spotlight />
        <GlareCard className="flex flex-col items-center justify-center w-72">
          <Image
            src="./profile.webp"
            alt="Profile Picture"
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0"
            loading="lazy"
          />
        </GlareCard>
        <div className="md:text-left space-y-4 text-base text-neutral-300 text-justify">
          {[
            texts.ABOUT_ME_NEW_1,
            texts.ABOUT_ME_NEW_2,
            texts.ABOUT_ME_NEW_3,
            texts.ABOUT_ME_NEW_4,
            texts.ABOUT_ME_NEW_5,
            texts.ABOUT_ME_NEW_6,
            texts.ABOUT_ME_NEW_7,
          ].map((text, index) => (
            <p key={index}>{colouredText(text)}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
