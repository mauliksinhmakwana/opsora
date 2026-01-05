
import React from 'react';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    outline: "bg-transparent text-white border border-white/30 backdrop-blur-md hover:bg-white/10"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default LiquidButton;
