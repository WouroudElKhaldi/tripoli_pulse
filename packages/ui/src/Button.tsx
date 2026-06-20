import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = 'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none';
  const variantStyle = variant === 'primary' 
    ? 'bg-[#00C2FF] text-black hover:bg-[#009ecc]' 
    : 'bg-zinc-800 text-white hover:bg-zinc-700';

  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`} 
      {...props} 
    />
  );
}
