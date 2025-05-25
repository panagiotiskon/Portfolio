'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactMe from '@/components/Contact';
import Loading from '@/components/Loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-100 ">
          <Loading />
        </div>
      )}

      <main
        className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen transition-opacity duration-700 ${
          loading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        suppressHydrationWarning={true}
      >
        <div className="max-w-7xl w-full">
          <NavBar />
          <ScrollToTop />
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </main>
    </>
  );
}
