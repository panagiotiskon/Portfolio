import React from 'react'
import { TextGenerateEffect } from './ui/textGenerateEffect'

function AboutMe() {
  return (
    <div
      className="flex flex-row gap-4 p-6 items-center pt-60"
      id="about"
    >
      <div className="justify-center">
        <img
          src="/profile.png"
          alt="profile"
          className="rounded-full h-64 w-64 shadow-lg"
        />
      </div>
      <div>
        <TextGenerateEffect
          words="Welcome to my portofolio"
          className="text-3xl"
        />
      </div>
    </div>
  );
}

export default AboutMe
