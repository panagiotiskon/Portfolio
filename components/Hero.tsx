import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import MagicButton from './ui/magicButton'
import { FiDownload } from "react-icons/fi";


const Hero = () => {
  return (
    <div className="">
      <div className="h-screen relative w-full bg-black flex flex-col overflow-hidden rounded-md fade-mask">
        <div className="md:text-6xl text-3xl lg:text-6xl font-bold text-center text-white pt-20 mt-20">
          <p>Hello, I&apos;m Panagiotis</p>
          <TextGenerateEffect
            words="Welcome to my portofolio"
            className="text-3xl"
          />
        </div>
        <div className="w-full absolute inset-0 h-screen items-center justify-center mb-4">
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
          <MagicButton title="Download my CV" icon={<FiDownload/>} position="right"/>
        </a>
      </div>
    </div>
  );
}

export default Hero
