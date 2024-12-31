import { useEffect } from 'react';

export const SearchBox = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=86728cb4e8bc44ada";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 transition-all duration-300 hover:scale-[1.02]">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="gcse-search"></div>
      </div>
    </div>
  );
};