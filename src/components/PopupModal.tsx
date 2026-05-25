import React, { useState, useEffect, useRef } from 'react';

export const PopupModal: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const lastScrollY = useRef(0);
  const scrollUpAmount = useRef(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    // Mobile check (basic width check)
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      // Desktop: Exit intent
      const handleMouseOut = (e: MouseEvent) => {
        if (e.clientY < 50 && !hasTriggered) {
          setIsActive(true);
          setHasTriggered(true);
          setTimeout(() => setShow(true), 10);
          document.removeEventListener('mouseout', handleMouseOut);
        }
      };
      document.addEventListener('mouseout', handleMouseOut);
      return () => document.removeEventListener('mouseout', handleMouseOut);
    } else {
      // Mobile: scroll behavior
      const handleScroll = () => {
        if (hasTriggered) return;
        
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          scrollUpAmount.current += (lastScrollY.current - currentScrollY);
        } else {
          // Scrolling down
          scrollUpAmount.current = 0;
        }

        if (scrollUpAmount.current > 100 && currentScrollY < 100) {
          setHasTriggered(true);
          window.removeEventListener('scroll', handleScroll);
          setTimeout(() => {
            setIsActive(true);
            setTimeout(() => setShow(true), 10);
          }, 250);
        }
        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hasTriggered]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setIsActive(false), 300);
  };

  if (!isActive) return null;

  return (
    <div id="popup1" className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative transition-all duration-300 transform ${show ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="bg-[#db4e3d] text-white text-center py-2.5 relative">
          <span className="font-bold uppercase tracking-wider text-[15px] md:text-base">Hurry, Limited Time Offer</span>
          <button 
            className="hide-overlay absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors"
            onClick={handleClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8 items-center">
          {/* Left column: image */}
          <div className="w-full md:w-1/2">
            <img 
              src="/images/Shiny Smile Veneers.jpg" 
              alt="Shiny Smile Veneers" 
              className="w-full h-auto rounded shadow-sm border border-gray-100 object-cover"
            />
          </div>
          
          {/* Right column: offer headline, description, and CTA button */}
          <div className="w-full md:w-1/2 text-center flex flex-col justify-center">
            <h2 className="text-3xl md:text-[34px] font-black text-gray-900 mb-3 leading-tight tracking-tight">
              Claim Your <br />
              <span className="text-[#42b55f] text-4xl md:text-5xl">40% Off</span> <br />
              Today!
            </h2>
            <p className="text-gray-700 text-[15.5px] font-medium mb-6 leading-relaxed">
              Buy Shiny Smile Veneers now and get <strong className="text-gray-900">40% off</strong> the original price.
            </p>
            
            <a 
              href="https://go.consumerskills.org/click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center items-center bg-[#f6891f] hover:bg-[#e07715] transition-colors text-white font-bold text-lg md:text-[19px] py-4 px-6 rounded shadow-md transform hover:-translate-y-0.5 duration-200"
            >
              CLICK HERE TO SAVE NOW
              <svg className="w-[22px] h-[22px] ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
