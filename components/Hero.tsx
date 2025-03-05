"use client";

import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import MagicButton from "./ui/magicButton";
import { FiDownload } from "react-icons/fi";
import { texts } from "../app/data";


const Hero = () => {
  return (
    <div className="">
      <div className=" relative w-full flex flex-col overflow-hidden rounded-md h-screen">
        <div className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white pt-20 mt-20 ">
            <p className="text-3xl">{texts.WELCOME}</p>
            <p className="mt-4">
            {texts.GREETING} <span className="font-jetbrains text-lightBlue">Panagiotis</span>
            </p>
          <TextGenerateEffect
            words={texts.INTRO}
            className="text-lg font-jetbrains"
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
        <a
          href="#about"
          className="items-center justify-center flex"
        >
          <MagicButton
            title={texts.CV_BUTTON}
            icon={<FiDownload />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
