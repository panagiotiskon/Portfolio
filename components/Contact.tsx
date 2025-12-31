'use client';
import Image from 'next/image';
import { ContactForm } from './ui/ContactForm';
import SectionHeader from './SectionHeader';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          console.log('Success');
          setIsLoading(false);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        },
        (error) => {
          console.log('Error:', error.text);
          setIsLoading(false);
          setError('Something went wrong. Please try again.');
          setTimeout(() => setError(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <SectionHeader title="Contact Me." align="left" className="max-w-4xl" />
      <div
        className="
          relative z-10 mt-9 max-w-4xl w-full mx-auto flex flex-col
          items-center justify-center rounded-2xl mb-24
          bg-lightPurple
          before:absolute before:-inset-[20px] before:rounded-2xl before:-z-10
          before:backdrop-blur-md
        "
      >
        <div className="w-full max-w-3xl mx-auto px-6 md:px-0 py-10">
          <ContactForm handleSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
      {error && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 rounded-lg bg-red-500 px-6 py-4 md:px-4 md:py-2 text-white shadow-lg w-[90%] md:w-auto text-center">
          {error}
        </div>
      )}
      <div className="w-full absolute left-0 bottom-0 min-h-[23rem] pointer-events-none">
        <Image
          src="./footer-grid.svg"
          alt="footer grid"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full opacity-50"
        />
      </div>
    </section>
  );
};

export default Contact;
