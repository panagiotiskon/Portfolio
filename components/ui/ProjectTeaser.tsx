'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { texts } from '@/app/data';
import colouredText from '../util/colouredText';

/**
 * Placeholder card teasing an unannounced project. Keeps the shell of a
 * BentoGridItem so it sits in the grid as a project card, but the preview is
 * blurred out and the title is set larger, in the site's mono face, so it
 * reads as an announcement rather than another entry. Inert by design: no
 * link, no hover response, nothing focusable.
 */
const ProjectTeaser = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="md:col-span-3 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 cursor-default select-none">
      <div className="relative flex items-center justify-center w-full h-full min-h-[8rem] rounded-xl overflow-hidden">
        <Image
          src="./PK-icon.png"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain p-10 opacity-[0.3] blur-lg scale-105"
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
          <span className="flex items-center gap-1.5 font-jetbrains uppercase tracking-[0.2em] text-lightBlue text-[10px] bg-teal-950 rounded-sm px-2 py-1">
            <span className="relative flex h-1.5 w-1.5">
              {!reduceMotion && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightBlue opacity-75" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lightBlue" />
            </span>
            {texts.PROJECT_TEASER_BADGE}
          </span>
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
