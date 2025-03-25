const Footer = () => {
  return (
    <footer className="w-full text-gray-400 text-center pb-6 flex flex-col items-center justify-center text-xs ">
      <p className="max-w-xl px-4">
        Designed & Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-gray-300"
        >
          {' '}
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://ui.aceternity.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-gray-300"
        >
          Aceternity
        </a>
        .
      </p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Panagiotis Kontoeidis. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
