import React from 'react';
import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GradientCardProps {
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full max-w-5xl aspect-[2/1] rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden",
        "bg-gradient-to-br from-gradient-from to-accent",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Asterisk className="h-8 w-8 text-white" />
        <span className="text-2xl font-bold text-white">Pulse Robot</span>
      </div>

      <h2 
        className="font-serif text-6xl md:text-8xl italic text-white self-end tracking-tight"
      >
        Made By AI & Human
      </h2>
    </div>
  );
};

export default GradientCard;
