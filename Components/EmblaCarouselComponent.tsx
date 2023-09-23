import React, { useEffect, useState } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import styles from '../styles/EmblaCarousel.module.css';

export const EmblaCarouselComponent = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'center',
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = () => {
    if (!emblaApi) return;
    const activeIndex = emblaApi.selectedScrollSnap();
    const nodes = emblaApi.slideNodes();
    nodes.forEach((node, index) => {
      if (index === activeIndex) {
        node.style.opacity = "1";
      } else {
        node.style.opacity = "0.5";
      }
    });
  };

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.embla__slide}>
            <div className={styles.embla__slide__inner}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <Image src={slide.image} alt={slide.title} width={500} height={500} />
              </a>
              <div className={styles.author}>{slide.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
