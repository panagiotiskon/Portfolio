'use client';

import { SparklesCore } from './ui/Sparkles';
import TextGenerateEffect from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FiDownload } from 'react-icons/fi';
import { texts } from '@/app/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className=" relative w-full flex flex-col overflow-hidden rounded-md h-screen"
    >
      <div className="text-3xl  font-bold text-center text-white pt-28 mt-20 ">
        <p className="mt-5 text-4xl lg:text-6xl md:text-6xl">
          {texts.GREETING}{' '}
          <span className="font-jetbrains text-lightBlue">Panagiotis</span>
        </p>
        <TextGenerateEffect
          words={texts.INTRO}
          className=" font-jetbrains"
          duration={3}
        />
      </div>
      <div className="w-full absolute inset-0 h-screen items-center justify-center mb-4 fade-mask">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.7}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-row gap-12 pt-20 items-center justify-center mx-auto">
        <div className="flex flex-col items-center group">
          <a
            aria-label="GitHub profile link"
            href="https://github.com/panagiotiskon"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center"
          >
            <MagicButton
              id="github-button"
              icon={
                <Image
                  src="./github-svg.svg"
                  alt="Github Logo"
                  width={20}
                  height={20}
                />
              }
              position="right"
              animation="3"
            />
          </a>
          <p className="mt-2 opacity-80 text-white text-xs  group-hover:text-lightBlue transition-all duration-300 ease-in-out font-jetbrains">
            Github
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <a
            aria-label="LinkedIn profile link"
            href="https://www.linkedin.com/in/panagiotis-kontoeidis/"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center"
          >
            <MagicButton
              id="linkedin-button"
              icon={
                <Image
                  src="./linkedin-svg.svg"
                  alt="LinkedIn Logo"
                  width={20}
                  height={20}
                />
              }
              position="right"
              animation="1"
            />
          </a>
          <p className="mt-2 opacity-80 text-white text-xs group-hover:text-lightBlue transition-all duration-300 ease-in-out font-jetbrains">
            LinkedIn
          </p>
        </div>
        <div className="flex flex-col items-center group">
          <a
            aria-label="View Resume link"
            href="./Panagiotis_Kontoeidis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center"
          >
            <MagicButton
              id="resume-button"
              icon={<FiDownload className="w-5 h-5" />}
              position="right"
              animation="2"
            />
          </a>
          <p className="mt-2 opacity-80 text-white text-xs group-hover:text-lightBlue transition-all duration-300 font-jetbrains">
            Resume
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
