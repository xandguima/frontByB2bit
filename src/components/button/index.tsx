import React from 'react';

interface CustomButtonProps {
  title: string;
  className?: string;
  icon?: React.ElementType; 
}

export const CustomButton: React.FC<CustomButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ title, className = '', icon: Icon, ...rest }) => {
  return (
    <button className={`w-full font-bold flex flex-row items-center justify-center gap-2 py-3 rounded-lg bg-BlueB2 hover:bg-Tomato200 active:Tomato300 ${className}`} {...rest}>
      {Icon && <Icon className="w-5 h-5" />}
      {title}
    </button>
  );
};

export default CustomButton;