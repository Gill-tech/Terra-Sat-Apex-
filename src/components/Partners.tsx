import ksaLogo from 'figma:asset/5451a244adb12755a41b07336176949b4a430c10.png';
import expertiseFranceLogo from 'figma:asset/ab9bfd0598313ab3b16011fdd707161c3ae43d64.png';
import uonLogo from 'figma:asset/ab7c96ffb2ffbed6057add425ba6ae0634a07d00.png';
import c4dLabLogo from 'figma:asset/95d0d4bfba0da6ebf25cf425701c5c9808bb8d24.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Partners() {
  const partners = [
    { name: 'Kenya Space Agency', logo: ksaLogo, needsWhiteBg: true },
    { name: 'Expertise France', logo: expertiseFranceLogo, needsWhiteBg: false },
    { name: 'University of Nairobi', logo: uonLogo, needsWhiteBg: false },
    { name: 'C4D Lab', logo: c4dLabLogo, needsWhiteBg: false },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const visiblePartners = [];
  for (let i = 0; i < itemsPerView; i++) {
    visiblePartners.push(partners[(currentIndex + i) % partners.length]);
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  return (
    <section className="bg-[#0F2727] py-16 border-t border-[#D4E89E]/10">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-white text-2xl font-light mb-12">Our Partners</h3>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#D4E89E]/20 hover:bg-[#D4E89E]/30 text-[#D4E89E] rounded-full p-2 transition-colors"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#D4E89E]/20 hover:bg-[#D4E89E]/30 text-[#D4E89E] rounded-full p-2 transition-colors"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Partners Grid */}
          <div className={`grid gap-8 grid-cols-${itemsPerView}`} style={{ 
            gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))` 
          }}>
            {visiblePartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="transition-opacity duration-500 ease-in-out"
              >
                <div 
                  className={`flex items-center justify-center w-full h-32 p-6 rounded-lg transition-all ${
                    partner.needsWhiteBg ? 'bg-white' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#D4E89E] w-6' : 'bg-[#D4E89E]/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}