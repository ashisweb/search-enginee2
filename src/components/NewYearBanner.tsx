import { useState } from 'react';

export const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary p-4 text-white">
      <div className="container mx-auto text-center">
        <p className="animate-float font-semibold">
          🎉 Welcome to 2025! Start your year with knowledge 🎊
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};