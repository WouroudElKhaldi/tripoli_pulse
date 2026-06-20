import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 ${className}`} 
      {...props} 
    />
  );
}
