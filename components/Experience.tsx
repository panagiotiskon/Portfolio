"use client"; 

import { StickyScroll } from "./ui/stickyScroll";
import SectionHeader from "./SectionHeader";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-red-800 to-red-950 flex items-center justify-center text-white">
        <img
          src="/kots.svg"
          alt="Logo"
          className="h-44 w-44 scale-150"
        />
      </div>
    ),
  },
  {
    title: "Software Engineer Intern, Backend @ Logicea",
    subtitle: "February - August 2024" , 
    description:
      "- Developed RESTful APIs using the Spring Boot Framework and MySQL relational databases.\n" +
      "- Actively contributed as a member of a large Agile team, demonstrating strong collaboration and communication skills.\n" +
      "- Integrated and tested APIs and tools to ensure seamless functionality.\n" +
      "- Specialized in backend development and web application deployment.\n" +
      "- Gained extensive experience in Java and the Spring Framework.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-purple-950 flex items-center justify-center text-white">
        <img
          src="/logicea.svg"
          alt="Logicea Logo"
          className="h-32 w-32"
        />
      </div>
    ),
  }
];


const Experience = () => {
    return (
      <div
        className="py-24 flex-col flex justify-center items-center h-screen space-y-14 max-w-[1000px] mx-auto"
        id="experience"
      >
        <SectionHeader
          title=".Experience"
          align="right"
          className="max-w-4xl"
        />
        <StickyScroll content={content} />
      </div>
    );
};

export default Experience;