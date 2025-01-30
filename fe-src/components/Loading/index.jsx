'use client';
import { useState, useEffect } from 'react';

const LoadingPage = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (<>
        <div className="fixed top-0 left-0 w-full h-full flex justify-center bg-white items-center overflow-hidden duration-500 ease-in-out">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                <p className="text-lg text-gray-700 mt-4">Loading...</p>
            </div>
        </div>
        </>
      )}
      <div className={`relative top-0 w-full h-full transition-opacity duration-500 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  );
};

export default LoadingPage;