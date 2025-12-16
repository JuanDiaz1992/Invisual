'use client';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import ReviewsMovile from './reviewsMovile';

export default function Reviews({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentExpanded, setCurrentExpanded] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const intervalRef = useRef(null);

  // --- Lógica del auto-play (Igual que antes) ---
  useEffect(() => {
    if (activeIndex !== null) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentExpanded((prev) => {
        const next = (prev + 1) % reviews.length;
        setIsMuted(true);
        return next;
      });
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, reviews.length]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setCurrentExpanded(index);
    setIsMuted(true);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(index);
    }
  };

  const toggleAudio = () => setIsMuted(!isMuted);

  const VideoControls = ({ youtubeLink }) => (
    <div className="absolute top-4 right-4 z-30 flex gap-2 items-center fade-in"> 
      {/* ... (Tu código de botones SVG igual que antes) ... */}
       {youtubeLink && (
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 hover:bg-[#FF0000] backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 group"
          title="Ver en YouTube"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleAudio();
        }}
        className="bg-black/40 hover:bg-white/20 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
        title={isMuted ? "Activar sonido" : "Silenciar"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
        )}
      </button>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex flex-row gap-6 w-full" role="list">
        {reviews.map((review, i) => {
          const isActive = currentExpanded === i;
          
          return (
            <article
              key={i}
              role="listitem"
              tabIndex={0}
              onClick={() => handleClick(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`h-full transition-all duration-700 cursor-pointer flex relative outline-none ${
                isActive ? 'w-6/12' : 'w-3/12'
              }`}
            >
              <h3 className={`text-[20px] font-bold absolute z-30 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] pointer-events-none ${isActive ? 'text-[#1b1b1b] bottom-[197px]' : 'text-white bottom-[30px]'}`}>
                {review.title}
              </h3>

              <div className='relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end'>
                <div className='lg:max-w-[15rem] relative'>
                  <p className='text-[#1b1b1b] text-[14px]'>{review.text}</p>
                </div>
              </div>

              {/* --- AQUÍ ESTÁ LA MAGIA DEL FADE --- */}
              <div className='absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px] overflow-hidden bg-gray-100'>
                
                {/* 1. LA IMAGEN BASE: Siempre se renderiza. Z-Index bajo. */}
                {/* Esto elimina el flash blanco porque siempre hay algo pintado */}
                <Image
                  src={review.img}
                  alt={`Work example: ${review.title}`}
                  fill
                  className="object-cover z-0"
                  sizes="(max-width: 768px) 100vw, 350px"
                />

                {/* 2. EL VIDEO: Se monta encima. Z-Index superior. */}
                {isActive && review.video && (
                  <>
                    <VideoControls youtubeLink={review.youtubeLink} />
                    <video
                      src={review.video}
                      poster={review.img} // Respaldo adicional
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      // CLAVE: transition-opacity y opacity-0 inicial
                      className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-opacity duration-700 opacity-0"
                      // CLAVE: Cuando el video tiene data, le quitamos opacity-0
                      onLoadedData={(e) => {
                          e.currentTarget.classList.remove('opacity-0');
                      }}
                    />
                  </>
                )}
                
                {/* Overlay oscuro para inactivos */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none transition-opacity duration-700" />
                )}
              </div>
            </article>
          );
        })}
      </div>
      <div className='block md:hidden w-full'>
        <ReviewsMovile reviews={reviews} />
      </div>
    </>
  );
}