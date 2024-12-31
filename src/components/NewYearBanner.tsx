import { useState } from 'react';

export const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary p-4 text-white">
      <div className="container mx-auto text-center">
        <p className="animate-float font-semibold text-lg md:text-xl">
          🎉 Happy New Year 2025! 🎊
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 hover:text-white"
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  );
};