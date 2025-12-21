import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "rounded-full font-bold transition duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-[#FF623E] text-white hover:bg-[#e55635] shadow-[inset_4px_4px_4px_0px_rgba(255,255,255,0.25)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline:
      "border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-[#FF623E]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
