import SectionHeader from './SectionHeader';
import { BentoGrid, BentoGridItem } from './ui/bentoGrid';

const Skeleton = ({ imageSrc, otherClassNames = '' }) => (
  <div className="relative flex w-full h-full min-h-[6rem] rounded-xl overflow-hidden bg-transparent">
    <img
      src={imageSrc}
      alt="Project Preview"
      className={`absolute top-[-10px] right-0 object-contain rounded-xl w-max h-max rounded-xl ${otherClassNames}`}
    />
  </div>
);
const items = [
  {
    title: 'ConnectIn - Professional Networking Application',
    link: 'https://github.com/panagiotiskon/Connect-In',
    description:
      'LinkedIn-style professional networking application that allows users to create profiles, manage connections, and interact with other professionals. The application features user role management, job listings, private messaging, and personalized recommendations for job postings and content through Matrix Factorization Algorithm.',
    header: <Skeleton imageSrc={'/connectIn.jpg'} otherClassNames="" />,
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
    header: <Skeleton imageSrc={'/ig.png'} />,
    className: 'md:col-span-1',
    skills: [
      {
        skillName: 'Extendable Hashing',
        skillURL: 'https://en.wikipedia.org/wiki/Extendible_hashing',
      },
    ],
  },
  {
    title: 'Polygonization Tactics and Methods',
    link: 'https://github.com/panagiotiskon/Software-Development-for-Algorithmic-Problems-Full-Project',
    description:
      'This project implements and optimizes Incremental and Convex Hull algorithms using Local Search, Simulated Annealing, and preprocessing, then applies them to test sets and outputs results for analysis.',
    header: <Skeleton imageSrc={'/ig.png'} />,
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
    header: <Skeleton imageSrc={'/ig.png'} otherClassNames="opacity-75" />,
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

const Projects = () => {
  return (
    <div
      className="py-24 flex-col flex justify-center items-center min-h-screen space-y-9 max-w-[1000px] mx-auto"
      id="projects"
    >
      <SectionHeader
        title="Noticable Projects."
        align="left"
        className="max-w-4xl"
      />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[23rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            link={item.link}
            description={item.description}
            header={item.header}
            className={item.className}
            skills={item.skills}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Projects;
