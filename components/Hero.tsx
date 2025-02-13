import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import MagicButton from './ui/magicButton'
import { FiDownload } from "react-icons/fi";
import AboutMe from './AboutMe'

const Hero = () => {
  return (
    <div className="">
      <div className=" relative w-full flex flex-col overflow-hidden rounded-md">
        <div className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white pt-20 mt-20">
          <p>Hello, I&apos;m Panagiotis</p>
          <TextGenerateEffect
            words="Welcome to my portofolio"
            className="text-3xl"
          />
        </div>
        <div className="w-full absolute inset-0 h-[550px] items-center justify-center mb-4 fade-mask">
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
        <a href="#about" className='items-center justify-center flex'>
          <MagicButton title="Get a copy" icon={<FiDownload/>} position="right"/>
        </a>
        <AboutMe />
      </div>
    </div>
  );
}

export default Hero
