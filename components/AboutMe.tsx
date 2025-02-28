import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from './ui/textGenerateEffect'

function AboutMe() {
  return (
    <div
      className="py-96 flex items-center justify-center h-screen"
      id="about"
    >
      <div className="flex flex-row gap-4 p-6 items-center">
        <Image
          src="/profile.png"
          alt="profile"
          className="rounded-full shadow-lg"
          width={256}
          height={256}
        />
        <div>
          <TextGenerateEffect
            words="eeeeeeeeeeeeeee"
            className="text-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe
