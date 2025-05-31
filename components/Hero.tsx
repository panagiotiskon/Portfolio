'use client';

import { SparklesCore } from './ui/Sparkles';
import TextGenerateEffect from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FiDownload } from 'react-icons/fi';
import { texts } from '@/app/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className=" relative w-full flex flex-col overflow-hidden rounded-md h-screen">
      <div className="text-3xl  font-bold text-center text-white pt-28 mt-20 ">
        <p className="mt-5 lg:text-6xl md:text-6xl">
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
      <div className="flex flex-row gap-12 pt-20 items-center justify-center">
        <a
          href="https://github.com/panagiotiskon"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center justify-center"
        >
          <MagicButton
            icon={
              <Image
                src="./github_logo.png"
                alt="Github Logo"
                width={40}
                height={40}
              />
            }
            position="right"
            animation="3"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/panagiotis-kontoeidis/"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center justify-center"
        >
          <MagicButton
            icon={
              <Image
                src="./linkedin_logo.png"
                alt="LinkedIn Logo"
                width={40}
                height={40}
              />
            }
            position="right"
            animation="1"
          />
        </a>
        <a
          href="./Panagiotis_Kontoeidis.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center justify-center"
        >
          <MagicButton
            icon={<FiDownload className="w-7 h-7" />}
            position="right"
            animation="2"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
