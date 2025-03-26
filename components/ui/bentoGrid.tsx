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
  description,
  header,
  skills,
}: {
  className?: string;
  title?: string | React.ReactNode;
  link?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  skills?: { skillName: string; skillURL: string }[];
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 ">
        {skills && (
          <div className="mt-2 flex flex-wrap space-x-2 ">
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
          </div>
        )}
        <div className="mt-2 mb-2 font-bold text-neutral-600 dark:text-neutral-200 text-xl">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:hover:text-neutral-300"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-300 text-justify">
          {description}
        </div>
      </div>
    </div>
  );
};
