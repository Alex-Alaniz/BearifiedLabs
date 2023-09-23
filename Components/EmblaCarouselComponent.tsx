import React from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';

export const EmblaCarouselComponent = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'center',
  });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div key={index} className="embla__slide">
            <div className="embla__slide__inner">
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <Image src={slide.image} alt={slide.title} width={500} height={500} />
              </a>
              <div className="author">{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
