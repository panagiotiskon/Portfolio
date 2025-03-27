'use client';

import Link from 'next/link';
import MagicButton from '@/components/ui/MagicButton';
import { LampContainer } from '@/components/ui/LampContainer';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div
      className="relative bg-black-100 flex justify-center
     items-center flex-col mx-auto sm:px-10
      min-h-screen"
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent "
        >
          <p className="text-8xl font-bold mb-4 font-jetbrains ">404</p>
          <p className="text-2xl mb-4 font-jetbrains ">Page Not Found</p>
          <Link href="/">
            <MagicButton
              title="Go Home"
              position="left"
              animation="2"
              width={144}
            />
          </Link>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default NotFound;
