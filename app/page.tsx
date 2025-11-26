'use client';

// import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
// import Loading from '@/components/Loading';

const NavBar = dynamic(() => import('@/components/NavBar'), {
  loading: () => <div className="h-16 bg-transparent" />,
});

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-screen bg-black-100" />,
});

const AboutMe = dynamic(() => import('@/components/AboutMe'), {
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
