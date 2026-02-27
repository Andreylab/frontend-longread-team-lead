import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollSpy = (eras) => {
  const [activeEra, setActiveEra] = useState(eras[0]);
  const eraRefs = useRef([]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (let i = 0; i < eraRefs.current.length; i++) {
      const ref = eraRefs.current[i];
      if (ref) {
        const { offsetTop, offsetHeight } = ref;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (activeEra.id !== eras[i].id) {
            setActiveEra(eras[i]);
          }
          break;
        }
      }
    }
  }, [activeEra, eras]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { activeEra, eraRefs };
};