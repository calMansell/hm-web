/* eslint-disable react/button-has-type */
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import './style.css';
import DotButton, { useDotButton } from './EmblaCarouselArrowDotButton';
import PrevButton, { NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';

interface ImageCarouselProps {
  images: string[];
  handleRemoveImage?: (index: number) => void;
}

// eslint-disable-next-line max-len
export default function ImageCarousel({ images, handleRemoveImage }: ImageCarouselProps) {
  (0);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { highlightedImageIndex, setHighlightedImageIndex } = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleRemoveButtonClick = (index: number) => {
    if (handleRemoveImage) {
      handleRemoveImage(index);
    }
  };

  const handleSelectHighlightImageButton = (index: number) => {
    setHighlightedImageIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div className="embla__slide" key={index}>
                <img src={image} alt="slide" />
                {handleRemoveImage && (
                  // eslint-disable-next-line react/button-has-type
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveButtonClick(index)}
                  >
                    Remove
                  </button>
                )}
                <button
                  className="select-highlight-image-button"
                  onClick={() => handleSelectHighlightImageButton(index)}
                >
                  Highlight
                </button>

              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
              // eslint-disable-next-line react/no-array-index-key
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}

ImageCarousel.defaultProps = {
  handleRemoveImage: undefined,
};
