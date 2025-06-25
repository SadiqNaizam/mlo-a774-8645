import React from 'react';
import { cn } from '@/lib/utils';
import FooterText from '../Home/FooterText';

interface FooterProps {
  className?: string;
}

/**
 * Layout component for the site footer.
 * This component acts as a structural wrapper for footer content.
 * For this template, it directly renders the FooterText organism.
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  // The `FooterText` component is already a self-contained `<footer>` element
  // with all necessary styling. We render it directly and pass through any
  // additional classes for layout-specific adjustments, avoiding redundant wrappers.
  return <FooterText className={cn(className)} />;
};

export default Footer;
