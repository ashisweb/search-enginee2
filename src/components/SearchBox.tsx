import { useEffect } from 'react';

export const SearchBox = () => {
  useEffect(() => {
    // Load Google Custom Search script
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=86728cb4e8bc44ada";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="gcse-search"></div>
    </div>
  );
};