import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactMe from '@/components/Contact';

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center
     items-center flex-col overflow-hidden mx-auto sm:px-10
     px-5 min-h-screen"
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
  );
}
