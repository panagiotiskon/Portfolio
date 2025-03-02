"use client"; 

import { StickyScroll } from "./ui/stickyScroll";
import SectionHeader from "./SectionHeader";

const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
        title: "Collaborative Editing",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            Collaborative Editing
          </div>
        ),
      },
]


const Experience = () => {
    return (
      <div
        className="py-24 flex-col flex jystify-center items-center h-screen space-y-14"
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