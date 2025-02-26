import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/textGenerateEffect'

function AboutMe() {
  return (
    <div
      className="flex flex-row gap-4 p-6 items-center pt-60"
      id="about"
    >
        <Image
          src="/profile.png"
          alt="profile"
          className="rounded-full shadow-lg"
          width={256}
          height={256}
        />
      <div>
        <TextGenerateEffect
          words=""
          className="text-3xl"
        />
      </div>
    </div>
  );
}

export default AboutMe
