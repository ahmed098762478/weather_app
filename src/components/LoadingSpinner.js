import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12 animate-fade-in">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        
        {/* Loading Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/80 text-sm font-medium">
            Chargement...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 