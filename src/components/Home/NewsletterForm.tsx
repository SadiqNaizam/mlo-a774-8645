import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    console.log('Subscribing email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className={cn("w-full text-center py-8", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Subscribe to the newsletter
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Be first to hear about breakthroughs, partnerships, and deployment opportunities
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg mx-auto items-center gap-4"
      >
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-14 flex-1 rounded-full border-input bg-white px-6 text-base shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Email address for newsletter"
        />
        <Button
          type="submit"
          className="h-14 rounded-full bg-accent px-8 text-base font-semibold text-primary-foreground hover:bg-accent/90 transition-transform active:scale-95"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
