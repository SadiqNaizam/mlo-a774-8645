import React from 'react';
import { cn } from '@/lib/utils';
import HeaderNav from '../Home/HeaderNav';

interface HeaderProps {
  className?: string;
}

/**
 * Layout component for the site header.
 * It provides a fixed, blurred background container for the main navigation,
 * ensuring it remains visible on scroll.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm',
        className
      )}
    >
      {/* 
        The HeaderNav component contains the logo and navigation links.
        We override its default padding to match layout requirements and remove
        its background to prevent style conflicts with the header wrapper.
      */}
      <HeaderNav className="bg-transparent py-4" />
    </header>
  );
};

export default Header;
