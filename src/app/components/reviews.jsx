'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image"; // Importamos Image

export default function Reviews({ reviews }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentExpanded, setCurrentExpanded] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentExpanded((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, reviews.length]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setCurrentExpanded(index);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(index);
    }
  };

  return (
    <div className="flex flex-row gap-6 w-full" role="list">
      {reviews.map((review, i) => (
        <article
          key={i}
          role="listitem"
          tabIndex={0}
          onClick={() => handleClick(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className={`h-full transition-all duration-700 cursor-pointer flex relative outline-none ${
            currentExpanded === i ? 'w-6/12' : 'w-3/12'
          }`}
        >
          <h3
            className={`text-[20px] font-bold absolute z-30 lg:w-[10rem] left-[30px] transition-all duration-700 leading-[24px] pointer-events-none ${
              currentExpanded === i ? 'text-[#1b1b1b] bottom-[197px]' : 'text-white bottom-[30px]'
            }`}
          >
            {review.title}
          </h3>

          <div className='relative z-0 left-0 bg-white w-full min-h-[550px] p-6 content-end'>
            <div className='lg:max-w-[15rem] relative'>
              <p className='text-[#1b1b1b] text-[14px]'>
                {review.text}
              </p>
            </div>
          </div>

          <div
            className='absolute z-10 right-0 w-full lg:max-w-[315px] min-h-[550px]'
          >
            <Image
              src={review.img}
              alt={`Work example: ${review.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
            />
          </div>
        </article>
      ))}
    </div>
  );
}