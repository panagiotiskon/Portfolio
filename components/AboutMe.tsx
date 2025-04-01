'use client';

import React from 'react';
import { GlareCard } from './ui/GlareCard';
import { texts } from '@/app/data';
import SectionHeader from './SectionHeader';
import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen space-y-6 max-w-3xl:"
      id="about"
    >
      <SectionHeader title="About Me." align="left" className="max-w-4xl" />
      <div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center 
                    gap-12 p-1 md:text-3xl text-sm lg:text-3xl font-bold"
      >
        <Spotlight />
        <GlareCard className="flex flex-col items-center justify-center w-72">
          <Image
            src="./profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </GlareCard>
        <div className="md:text-left space-y-4 text-base text-neutral-300 text-justify">
          <p>{texts.ABOUT_ME_NEW_1}</p>
          <p>{texts.ABOUT_ME_NEW_2}</p>
          <p>{texts.ABOUT_ME_NEW_3}</p>
          <p>{texts.ABOUT_ME_NEW_4}</p>
          <p>{texts.ABOUT_ME_NEW_5}</p>
          <p>{texts.ABOUT_ME_NEW_6}</p>
          <p>{texts.ABOUT_ME_NEW_7}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
