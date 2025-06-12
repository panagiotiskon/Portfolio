import { ReactNode } from 'react';
import Image from 'next/image';

export const texts = {
  NAME: 'Panagiotis',
  FULL_NAME: 'Panagiotis Kontoeidis',
  GREETING: "Hi, I'm",
  WELCOME: 'Welcome to my digital playground',
  INTRO: 'Full Stack Developer',
  EMAIL: 'panos.kontoeidis@gmail.com',
  CONTACT: 'Want to connect ? Grab my email.',
  CONTACT_BUTTON: "Let's get in touch",
  CV_BUTTON: 'Get a copy',
  COPIED: 'Copied',
  ABOUT_ME_NEW_1:
    'I’m Panagiotis, a Computer Science graduate from the University of Athens with a passion for web development and crafting impactful digital experiences.',
  ABOUT_ME_NEW_2:
    'My journey started in high school, I competed in contests over programming, astrophysics, and business administration contests, including the 5th Experimental Physics Olympiad, gaining knowledge, experience, and communication skills through presenting to juries and the public.',
  ABOUT_ME_NEW_3:
    'During my academic years, I developed a strong interest in web development and data management, actively participating in hackathons and seminars to refine my skills and explore emerging technologies.',
  ABOUT_ME_NEW_4:
    'Outside the tech world, I’ve spent over 16 years as a Sabre Fencing athlete, 9 at a professional level. As a five-time Panhellenic Champion, I’ve proudly represented Greece on the global stage, competing in European and World Championships and securing top-64 world rankings.',
  ABOUT_ME_NEW_5:
    'Most recently, I took part in the 2023 European Games and Senior World Championships.',
  ABOUT_ME_NEW_6:
    'Beyond competing, I am also a certified International Fencing Referee, officiating high-level tournaments.',
  ABOUT_ME_NEW_7:
    'Whether in tech or on the piste, I am eager to succeed through strategy, precision, and an unstoppable drive to improve.',
};

export type ExperienceItem = {
  title: string;
  subtitle: string;
  description: string;
  content: ReactNode;
};

export const experienceContent: ExperienceItem[] = [
  {
    title: 'Software Engineer, ReactJS & NodeJS @ Kotsovolos PPC Group',
    subtitle: 'December 2024 - Present',
    description: `
      - Develop and optimize the front layer of the Kotsovolos website and KRetail B2B site using ReactJS and Redux.
      - Work on the NodeJS microservices layer, adding new features and improving performance.
      - Collaborate closely within an Agile team, ensuring effective teamwork and knowledge sharing.
      - Optimize application performance and ensure seamless integration between frontend and backend systems.
      - Gain experience in developing scalable and maintainable microservices architectures.
    `,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-red-800 to-red-950 flex items-center justify-center text-white">
        <Image
          src="./kots.svg"
          alt="Kotsovolos Logo"
          width={176}
          height={176}
          className="scale-150"
        />
      </div>
    ),
  },
  {
    title: 'Software Engineer Intern, Backend @ Logicea',
    subtitle: 'February - August 2024',
    description: `
          - Developed RESTful APIs using the Spring Boot Framework and MySQL relational databases.
          - Actively contributed as a member of a large Agile team, demonstrating strong collaboration and communication skills.
          - Integrated and tested APIs and tools to ensure seamless functionality.
          - Specialized in backend development and web application deployment.
          - Gained extensive experience in Java and the Spring Framework.
        `,
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-purple-950 flex items-center justify-center text-white">
        <Image
          src="./logicea.svg"
          alt="Logicea Logo"
          width={128}
          height={128}
          className="h-32 w-32"
        />
      </div>
    ),
  },
];

const Skeleton: React.FC<{ imageSrc: string; otherClassNames?: string }> = ({
  imageSrc,
  otherClassNames = '',
}) => (
  <div className="relative flex w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-transparent">
    <Image
      src={imageSrc}
      alt="Project Image"
      className={`absolute object-contain self-center ${otherClassNames}`}
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const projects = [
  {
    title: 'ConnectIn - Professional Networking Application',
    link: 'https://github.com/panagiotiskon/Connect-In',
    description:
      'LinkedIn-style professional networking application that allows users to create profiles, manage connections, and interact with other professionals. The application features user role management, job listings, private messaging, and personalized recommendations for job postings and content through Matrix Factorization Algorithm.',
    header: <Skeleton imageSrc={'./ConnectIn.png'} />,
    className: 'md:col-span-2',
    skills: [
      { skillName: 'SpringBoot', skillURL: 'https://spring.io/' },
      { skillName: 'React', skillURL: 'https://reactjs.org/' },
      { skillName: 'Mysql', skillURL: 'https://www.mysql.com/' },
      { skillName: 'Flyway', skillURL: 'https://flywaydb.org/' },
    ],
  },
  {
    title: 'Extendible Hashing for DBMS',
    link: 'https://github.com/panagiotiskon/Extendible-Hashing-for-DBMS',
    description:
      'A low-level implementation in C of extendible hashing for database systems.This method uses directories and buckets to hash data and to maximize flexibility and efficiency in computing time.',
    header: (
      <Skeleton imageSrc={'./test2.svg'} otherClassNames=" h-max scale-[2.2]" />
    ),
    className: 'md:col-span-1',
    skills: [
      {
        skillName: 'Extendible Hashing',
        skillURL: 'https://en.wikipedia.org/wiki/Extendible_hashing',
      },
    ],
  },
  {
    title: 'Polygonization Tactics and Methods',
    link: 'https://github.com/panagiotiskon/Software-Development-for-Algorithmic-Problems-Full-Project',
    description:
      'This project implements and optimizes Incremental and Convex Hull algorithms using Local Search, Simulated Annealing, and preprocessing, then applies them to test sets and outputs results for analysis.',
    header: (
      <Skeleton
        imageSrc={'./test3.svg'}
        otherClassNames=" h-max scale-[1.3] "
      />
    ),
    className: 'md:col-span-1',
    skills: [
      { skillName: 'CGAL', skillURL: 'https://www.cgal.org/' },
      { skillName: 'C++', skillURL: 'https://www.cplusplus.com/' },
      {
        skillName: 'Convex Hull',
        skillURL: 'https://en.wikipedia.org/wiki/Convex_hull',
      },
    ],
  },
  {
    title: 'MiniJava Compiler',
    link: 'https://github.com/panagiotiskon/Minijava-Compiler',
    description:
      'Compiler for MiniJava, a subset of Java that can be compiled by a full Java compiler like javac. Performs Semantic Analysis on a set of files and then generates intermediate code used by LLVM compiler.',
    header: (
      <Skeleton imageSrc={'./test4.svg'} otherClassNames="scale-[1.1] h-max" />
    ),
    className: 'md:col-span-2',
    skills: [
      {
        skillName: 'Visitor Pattern',
        skillURL: 'https://en.wikipedia.org/wiki/Visitor_pattern',
      },
      { skillName: 'LLVM', skillURL: 'https://llvm.org/' },
      { skillName: 'JavaCC', skillURL: 'https://javacc.github.io/javacc/' },
    ],
  },
];
