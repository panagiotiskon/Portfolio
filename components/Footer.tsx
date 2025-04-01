const Footer = () => {
  return (
    <footer className="w-full text-gray-400 text-center pb-6 flex flex-col items-center justify-center text-xs">
      <p className="max-w-xl px-4">
        Designed & Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-lightBlue transition-all duration-300 ease-in-out"
        >
          {' '}
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-lightBlue transition-all duration-300 ease-in-out"
        >
          Tailwind
        </a>
        . See source code{' '}
        <a
          href="https://github.com/panagiotiskon/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-lightBlue transition-all duration-300 ease-in-out"
        >
          here.
        </a>
      </p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Panagiotis Kontoeidis. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
