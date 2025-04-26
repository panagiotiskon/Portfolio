import SectionHeader from './SectionHeader';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { projects } from '@/app/data';


const Projects = () => {
  return (
    <section
      className="py-24 flex-col flex justify-center items-center min-h-screen space-y-9 max-w-[1000px] mx-auto"
      id="projects"
    >
      <SectionHeader
        title="Noticable Projects."
        align="left"
        className="max-w-4xl"
      />
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[23rem]">
        {projects.map((item, i) => (
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
    </section>
  );
};

export default Projects;
