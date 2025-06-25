import React from 'react';
import { cn } from '@/lib/utils';

interface FooterTextProps {
  className?: string;
}

const FooterText: React.FC<FooterTextProps> = ({ className }) => {
  return (
    <footer className={cn("w-full max-w-5xl py-12 text-center", className)}>
      <p className="text-sm text-muted-foreground">
        This template takes inspiration from{' '}
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()} // Placeholder link
          className="font-medium text-accent hover:underline"
        >
          DesignJoy's
        </a>{' '}
        BUILD WARS design, built entirely with Lovable by{' '}
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()} // Placeholder link
          className="font-medium text-accent hover:underline"
        >
          Rezaul Arif
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterText;
