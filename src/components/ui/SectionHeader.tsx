import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-3 mb-16 ${
        align === "center" ? "text-center mx-auto" : "text-start"
      } ${className}`}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-medium text-gray-600 dark:text-[#A4A7AE] text-sm lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
