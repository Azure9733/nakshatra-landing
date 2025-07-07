import React from 'react';

const EmergencyBadge = () => {
  return (
    <div className="relative">
      {/* Flagship Badge */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg shadow-red-500/50">
          🚨 FLAGSHIP FEATURE
        </div>
      </div>
      
      {/* Main Badge */}
      <div className="relative w-32 h-32 mx-auto">
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 animate-ping"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-red-500/50 to-orange-500/50 animate-pulse"></div>
        
        {/* Core badge */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-xl shadow-red-500/50">
          <div className="text-center text-white">
            <div className="text-2xl mb-1">🛡️</div>
            <div className="text-xs font-bold">EMERGENCY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBadge;
