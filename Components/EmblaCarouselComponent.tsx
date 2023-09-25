import React, { useEffect, useState } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import styles from '../components/EmblaCarousel.module.css';

export const EmblaCarouselComponent = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
    containScroll: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`${styles.embla__slide} ${index === selectedIndex ? styles['embla__slide--selected'] : ''}`}
          >
            <div className={styles.embla__slide__inner}>
              <div className="card">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={slide.imageUrl} 
                    alt={slide.title} 
                    width={500}  // Adjust width as needed
                    height={500} // Adjust height as needed
                    layout="responsive"
                  />
                </a>
              </div>
              <div className="details">
                <div className={styles.author}>{slide.title}</div>
                <div className="description">{slide.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.embla__button} ${styles.embla__button_prev}`} onClick={scrollPrev} disabled={!prevBtnEnabled}>
        <Image src="/images/left-alignment.png" alt="Previous" width={24} height={24} />
      </button>
      <button className={`${styles.embla__button} ${styles.embla__button_next}`} onClick={scrollNext} disabled={!nextBtnEnabled}>
        <Image src="/images/right.png" alt="Next" width={24} height={24} />
      </button>
    </div>
  );
};

export default EmblaCarouselComponent;