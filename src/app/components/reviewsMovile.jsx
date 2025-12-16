import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewsMovile({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const mobileSwiperRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {}, 600);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);
  const toggleAudio = () => setIsMuted(!isMuted);

  const VideoControls = ({ youtubeLink }) => (
    <div className="absolute top-4 right-4 z-30 flex gap-2 items-center">
      {youtubeLink && (
        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/40 hover:bg-[#FF0000] backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 group"
          title="Ver en YouTube"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );
  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.6}
          centeredSlides={true}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 15 },
            480: { slidesPerView: 1.4, spaceBetween: 15 },
            768: { slidesPerView: 1.6, spaceBetween: 15 },
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
            setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
          }}
          onSlideChange={(swiper) => {
            const idx = swiper.realIndex ?? swiper.activeIndex;
            setActiveIndex(idx);
            setIsMuted(true);
          }}
          className="mobile-reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full overflow-hidden"
                style={{ minHeight: "655px" }}
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-[455px] bg-cover bg-center transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "filter-none z-0"
                      : "filter grayscale brightness-75 z-30"
                  }`}
                  style={{ backgroundImage: `url(${review.img})` }}
                />
                {activeIndex === index && (
                  <div className="relative z-20 h-[455px]">
                    {" "}
                    <VideoControls youtubeLink={review.youtubeLink} />
                    <video
                      src={review.video}
                      poster={review.img}
                      autoPlay
                      muted={isMuted}
                      loop
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`absolute left-0 right-0 bottom-0 bg-white p-6 min-h-[262px] h-[262px] transition-transform duration-500 ease-out shadow-md ${
                    activeIndex === index
                      ? "translate-y-0 z-40 opacity-100 pointer-events-auto"
                      : "-translate-y-full z-40 opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <p className="text-[18px] font-bold text-[#1b1b1b] mb-4">
                    {review.title}
                  </p>
                  <p className="text-[14px] text-[#1b1b1b] ">{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination !relative !bottom-0 !mt-6" />
      </div>
    </>
  );
}
