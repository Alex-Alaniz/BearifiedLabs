import React, { useEffect, useState, useRef } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';
import styles from './EmblaCarousel.module.css';

type Slide = {
  title: string;
  imageUrl: string;
  link: string;
  description: string;
};

const slidesData = [
  {
    title: "BearifiedCo",
    imageUrl: "/images/bearifiedco.png",
    link: "https://Bearified.co/",
    description: "a Web3 Fashion Brand"
  },
  {
    title: "OBYC Labs (No Rug Studio)",
    imageUrl: "/images/OBYCLabs.png",
    link: "https://obyclabs.com/",
    description: "OkayBearsYachClub™ & MvM™"
  },
  {
    title: "Okay Bears Yacht Club™",
    imageUrl: "/images/OBYC.png",
    link: "https://opensea.io/collection/okaybearsyachtclub",
    description: "Bear Themed PFP Collection"
  },
  {
    title: "OBYC Hazmat Division",
    imageUrl: "/images/OBYCHazmat.png",
    link: "https://opensea.io/collection/obyc-hazmat-division",
    description: "Lab Items for OBYC Bears"
  },
  {
    title: "Mutants vs Machines",
    imageUrl: "/images/MvM.png",
    link: "https://opensea.io/collection/mutantsvsmachines",
    description: "OBYC Expansion Collection"
  },
  {
    title: "Jungle Bay",
    imageUrl: "/images/JungleBay.png",
    link: "https://junglebayisland.com/",
    description: "We do what we want"
  },
  {
    title: "Project EVE",
    imageUrl: "/images/EVE.png",
    link: "https://projecteve.io/",
    description: "Empowering Women to be the Vangaurd of Web3 supported by everyone"
  }
];

export const EmblaCarouselComponent: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const mouseDownTimeRef = useRef<number | null>(null);
  const [mouseDownPos, setMouseDownPos] = useState<{ x: number, y: number } | null>(null);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownTimeRef.current = Date.now();
    setMouseDownPos({ x: e.clientX, y: e.clientY });
  };

  const handleSlideClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    const clickDuration = Date.now() - (mouseDownTimeRef.current || 0);
    const mouseUpPos = { x: e.clientX, y: e.clientY };

    // Check if mouse has moved significantly
    if (mouseDownPos && (Math.abs(mouseDownPos.x - mouseUpPos.x) < 10 && Math.abs(mouseDownPos.y - mouseUpPos.y) < 10)) {
      if (emblaApi && (emblaApi.clickAllowed() || clickDuration < 600)) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
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
        {slidesData.map((slide, index) => (
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