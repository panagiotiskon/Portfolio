import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[23rem] md:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  link,
  liveLink,
  description,
  header,
  skills,
}: {
  className?: string;
  title?: string | React.ReactNode;
  link?: string;
  liveLink?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  skills?: { skillName: string; skillURL: string }[];
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none',
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 ">
        {skills && (
          <div className="mt-2 flex flex-wrap gap-1.5 items-center">
            {skills.map((skill, idx) => (
              <a
                key={idx}
                href={skill.skillURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBlue text-xs bg-teal-950 rounded-sm p-[2px]"
              >
                {skill.skillName}
              </a>
            ))}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-jetbrains text-lightBlue border border-lightBlue/40 bg-teal-950/60 rounded-sm px-2 py-[2px] hover:bg-teal-900 hover:border-lightBlue transition-all duration-200 flex items-center gap-1 whitespace-nowrap"
              >
                Check Live ↗
              </a>
            )}
          </div>
        )}
        <div className="mt-2 mb-2 font-bold  text-neutral-200 text-xl">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lightBlue transition-all duration-300 ease-in-out"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        <div className="text-sm  text-neutral-300 text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};
