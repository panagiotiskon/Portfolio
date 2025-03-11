import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title?: string;
  icon: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {

  const randomDuration = (Math.random() * 1.5 + 1.5).toFixed(2) + "s";
  const randomDelay = (Math.random() * 2).toFixed(2) + "s";

  return (
    <button
      className="relative inline-flex h-12 w-14 mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        style={{
          animation: `spin ${randomDuration} linear infinite`,
          animationDelay: randomDelay,
        }}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-lightPurple px-4 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
