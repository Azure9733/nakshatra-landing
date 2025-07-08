
import React from 'react';

const IntegrationConnector = () => {
  return (
    <div className="flex items-center justify-center my-12 relative">
      {/* Connection line with pulse animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-red-500 opacity-50 animate-pulse"></div>
      </div>
      
      {/* Center integration badge */}
      <div className="relative z-10 bg-black border-2 border-green-400 rounded-full p-4 shadow-lg shadow-green-400/50">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
          <div className="text-black font-bold text-xs text-center">
            <div>⚡</div>
            <div>BUILT-IN</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationConnector;
