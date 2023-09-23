// components/EmblaCarouselComponent.tsx

import React, { useEffect, useState } from 'react';
import EmblaCarousel from 'embla-carousel';

const EmblaCarouselComponent: React.FC = () => {
  const [emblaApi, setEmblaApi] = useState(null);

  useEffect(() => {
    const emblaNode = document.querySelector('.embla');
    const options = { loop: false };
    const embla = EmblaCarousel(emblaNode, options);
    setEmblaApi(embla);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      {/* Your carousel items go here */}
    </div>
  );
};

export default EmblaCarouselComponent;
