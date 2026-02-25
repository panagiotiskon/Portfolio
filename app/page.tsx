'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';
import { texts } from './data';
// import Loading from '@/components/Loading';

const AboutMe = dynamic(() => import('@/components/AboutMe'), {
  ssr: false,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  ssr: false,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  ssr: false,
});

const Experience = dynamic(() => import('@/components/Experience'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

export default function Home() {
  const [prefillMessage, setPrefillMessage] = useState('');

  const handleResumeClick = () => {
    setPrefillMessage(texts.RESUME_PREFILL);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main
      className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen transition-opacity duration-0 visible relative"
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl w-full">
        <NavBar />
        <ScrollToTop />
        <Hero onResumeClick={handleResumeClick} />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact prefillMessage={prefillMessage} />
        <Footer />
      </div>
    </main>
  );
}
