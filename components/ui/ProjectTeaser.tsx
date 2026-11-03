'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { projectTeaserTags, texts } from '@/app/data';
import colouredText from '../util/colouredText';

/**
 * Lead announcement for FencingRef. Keeps the shell of a BentoGridItem so it
 * sits full-width at the top of the projects grid, with a slightly soft
 * preview, teal wash, and shimmer so it still reads as the lead card.
 */
const ProjectTeaser = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="md:col-span-3 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4">
      <div className="relative flex items-center justify-center w-full h-full min-h-[8rem] rounded-xl overflow-hidden">
        <Image
          src="./fencingref.png"
          alt="FencingRef"
          fill
          className="object-contain p-6 opacity-80 blur-[2px] scale-105"
        />

        {/* Teal wash, pulling the blurred mark towards the site palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(55% 70% at 50% 50%, rgba(0,198,192,0.14) 0%, rgba(0,198,192,0.05) 45%, transparent 78%)',
          }}
        />

        {/* Soft edge fade so the blur never meets the card border */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(80% 90% at 50% 50%, transparent 52%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none mix-blend-screen"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(0,198,192,0.12) 50%, transparent 100%)',
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '300%' }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
          />
        )}
      </div>

      <div>
        <div className="mt-2 flex flex-wrap gap-1.5 items-center">
          {projectTeaserTags.map((tag) => (
            <a
              key={tag.skillName}
              href={tag.skillURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightBlue text-xs bg-teal-950 rounded-sm p-[2px]"
            >
              {tag.skillName}
            </a>
          ))}
          <a
            href="https://fencingref.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs font-jetbrains text-lightBlue border border-lightBlue/40 bg-teal-950/60 rounded-sm px-2 py-[2px] hover:bg-teal-900 hover:border-lightBlue transition-all duration-200 flex items-center gap-1 whitespace-nowrap"
          >
            Check Live ↗
          </a>
        </div>

        <div className="mt-3 mb-2 font-bold tracking-tight text-neutral-100 text-2xl md:text-3xl">
          {colouredText(texts.PROJECT_TEASER_TITLE)}
        </div>

        <div className="text-sm text-neutral-400">
          {texts.PROJECT_TEASER_BODY}
        </div>
      </div>
    </div>
  );
};

export default ProjectTeaser;
