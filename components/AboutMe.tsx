"use client";

import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import { GlareCard } from './ui/glareCard';
import {texts} from '../app/data'
import  SectionHeader  from './SectionHeader'

function AboutMe() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen space-y-6 max-w-3xl:"
      id="about"
    >
      <SectionHeader
        title="About Me."
        align="left"
        className="max-w-4xl"
      />
      <div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center 
                    gap-12 p-1 md:text-3xl text-sm lg:text-3xl font-bold"
      >
        <GlareCard className="flex flex-col items-center justify-center w-72">
          <img
            src="/profile2.jpg"
            alt="Profile Picture"
            className="h-full w-full absolute inset-0 object-cover"
          />
        </GlareCard>

        {/* About Me Text */}
        <div className="text-center md:text-left space-y-4">
          <TextGenerateEffect
            words={texts.ABOUT_ME}
            className="text-sm text-gray-300"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe
