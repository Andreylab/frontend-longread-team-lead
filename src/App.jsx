import React from 'react';
import { eras } from './data/erasData';
import { useScrollSpy } from './components/useScrollSpy';
import TimelineEra from './components/TimelineEra';
import YearIndicator from './components/YearIndicator';
import './App.css';

function App() {
  const { activeEra, eraRefs } = useScrollSpy(eras);
  const years = eras.map(era => era.year);

  return (
    <div className="relative">
      {eras.map((era, index) => (
        <TimelineEra
          key={era.id}
          era={era}
          ref={(el) => (eraRefs.current[index] = el)}
          isActive={activeEra.id === era.id}
        />
      ))}
      
      <YearIndicator activeYear={activeEra.year} years={years} />
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-4 md:bottom-32 md:right-8 bg-white bg-opacity-20 backdrop-blur-md text-white p-3 rounded-full hover:bg-opacity-30 transition-all z-50"
        aria-label="Наверх"
      >
        ↑
      </button>
    </div>
  );
}

export default App;