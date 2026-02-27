import React, { forwardRef, useEffect } from 'react';

const TimelineEra = forwardRef(({ era, isActive }, ref) => {
  useEffect(() => {
    if (isActive) {
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', era.styles.backgroundColor);
      }
    }
  }, [isActive, era]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center p-4 md:p-8 transition-all duration-1000"
      style={{
        backgroundColor: era.styles.backgroundColor,
        fontFamily: era.styles.fontFamily,
        color: era.styles.color,
        backgroundImage: era.styles.backgroundImage,
        backgroundSize: era.styles.backgroundSize,
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="text-8xl md:text-9xl font-bold mb-8 opacity-20 select-none"
          style={{ color: era.yearColor }}
        >
          {era.year}
        </div>
        
        <h2 className="text-4xl md:text-6xl mb-4 font-bold">{era.title}</h2>
        <p className="text-xl md:text-2xl mb-8 opacity-80">{era.subtitle}</p>
        
        <div className="relative mb-12 overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={era.image}
            alt={era.title}
            className={`w-full max-w-3xl mx-auto transition-all duration-700 hover:scale-105 ${era.imageStyle}`}
          />
        </div>
        
        <p className={`max-w-3xl mx-auto ${era.textStyle}`}>
          {era.description}
        </p>
        
        <div className="mt-16 h-1 w-32 mx-auto rounded-full" 
             style={{ backgroundColor: era.yearColor, opacity: 0.3 }}>
        </div>
      </div>
    </section>
  );
});

export default TimelineEra;