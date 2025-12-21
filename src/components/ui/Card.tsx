import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = false,
}) => {
  return (
    <div
      className={`
      bg-gray-50 border border-gray-200 dark:bg-[#0E1117] dark:border-[#1E1E1E] 
      rounded-2xl p-6 lg:p-8 transition-colors
      ${hoverEffect ? "hover:border-[#FF623E] shadow-lg" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Card;
