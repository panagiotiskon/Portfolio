'use client';

// import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ScrollToTop from '@/components/ScrollToTop';
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
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      {/* {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-100">
          <Loading />
        </div>
      )} */}

      <main
        className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen transition-opacity duration-0 visible relative"
        suppressHydrationWarning={true}
      >
        <div className="max-w-7xl w-full">
          <NavBar />
          <ScrollToTop />
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
