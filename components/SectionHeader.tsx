import React from "react";

interface SectionHeaderProps {
  title: string;
  align?: "left" | "right"; 
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, align = "left", className }) => {
  return (
    <div className={`flex items-center w-full text-gray-300 px-4 ${className}`}>
      {align === "left" && <h2 className="text-lightBlue font-jetbrains text-2xl font-bold md:text-2xl mr-4">{title}</h2>}
      <div className="flex-grow border-t border-grey"></div>
      {align === "right" && <h2 className="text-lightBlue font-jetbrains font-bold text-2xl md:text-2xl ml-4">{title}</h2>}
    </div>
  );
};

export default SectionHeader;
