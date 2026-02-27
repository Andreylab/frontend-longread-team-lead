import React from 'react';

const YearIndicator = ({ activeYear, years }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md text-white py-4 z-50">
      <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto px-4">
        {years.map((year) => (
          <span
            key={year}
            className={`
              font-mono text-xl md:text-2xl transition-all duration-300 whitespace-nowrap
              ${activeYear === year 
                ? 'opacity-100 scale-125 text-blue-300 font-bold' 
                : 'opacity-40 hover:opacity-70'}
            `}
            style={{
              textShadow: activeYear === year ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
            }}
          >
            {year}
          </span>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-300"
           style={{
             width: `${((years.indexOf(activeYear) + 1) / years.length) * 100}%`,
             opacity: 0.5
           }}>
      </div>
    </div>
  );
};

export default YearIndicator;