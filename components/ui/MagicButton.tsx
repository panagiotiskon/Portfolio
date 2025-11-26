import React from 'react';

const MagicButton = ({
  id,
  title,
  icon,
  position,
  handleClick,
  animation = '2',
  width = 54,
  otherClasses,
}: {
  id: string;
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  animation?: '1' | '2' | '3';
  width?: number;
  otherClasses?: string;
}) => {
  const animationClasses = {
    '1': 'animate-spin_slow',
    '2': 'animate-spin_medium',
    '3': 'animate-spin_fast',
  };

  const spinnerAnimation = animation
    ? animationClasses[animation]
    : 'animate-spin_medium';
  return (
    <button
      id={id}
      style={{ width: `${width}px` }}
      className={`relative inline-flex h-12 mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      <span
        className={`absolute inset-[-1000%] ${spinnerAnimation} bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-lightPurple px-4 text-sm font-medium text-white backdrop-blur-3xl`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
