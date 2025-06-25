import React from 'react';
import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderNavProps {
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ] as const;

  return (
    <nav className={cn("w-full py-6 bg-background", className)}>
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2.5 cursor-pointer">
          <Asterisk className="h-8 w-8 text-foreground" />
          <span className="text-2xl font-bold text-foreground">Pulse Robot</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
