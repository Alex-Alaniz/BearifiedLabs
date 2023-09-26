import React, { useEffect, useState, useRef } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import styles from './EmblaCarousel.module.css';

type Slide = {
  title: string;
  imageUrl: string;
  link: string;
  description?: string;
};

type EmblaCarouselProps = {
  slides: Slide[];
};

export const EmblaCarouselComponent: React.FC<EmblaCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const mouseDownTimeRef = useRef<number | null>(null);

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

  const handleMouseDown = () => {
    mouseDownTimeRef.current = Date.now();
  };

  const handleSlideClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const clickDuration = Date.now() - (mouseDownTimeRef.current || 0);
    if (emblaApi && (emblaApi.clickAllowed() || clickDuration < 200)) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
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
            onMouseDown={handleMouseDown}
          >
            <div className={styles.embla__slide__inner}>
              <a 
                href={slide.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.fullCardLink}
                onClick={(e) => handleSlideClick(e, slide.link)}
              >
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <Image 
                      src={slide.imageUrl} 
                      alt={slide.title} 
                      width={500}
                      height={500}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.projectDetails}>
                    <div className={styles.author}>{slide.title}</div>
                    <div className="description">{slide.description}</div>
                  </div>
                </div>
              </a>
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