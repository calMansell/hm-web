/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import './style.css';
import { Tooltip } from '@mui/material';
import DotButton, { useDotButton } from './EmblaCarouselArrowDotButton';
import PrevButton, { NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';

interface ImageCarouselProps {
  images: string[];
  // eslint-disable-next-line react/require-default-props
  allowHighlight?: boolean;
  handleRemoveImage?: (index: number) => void;
}

// eslint-disable-next-line max-len
export default function ImageCarousel({ images, allowHighlight = false, handleRemoveImage }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const [highlightedImageIndex, setHighlightedImageIndex] = useState(-1);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleRemoveButtonClick = (index: number) => {
    if (handleRemoveImage) {
      handleRemoveImage(index);
      if (highlightedImageIndex === index) {
        setHighlightedImageIndex(-1);
      }
    }
  };

  const handleSelectHighlightImageButton = (index: number) => {
    setHighlightedImageIndex(highlightedImageIndex === index ? -1 : index);
  };

  return (
    <div className="carousel-wrapper">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <div
                className="embla__slide"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                style={{
                  border: highlightedImageIndex === index ? '6px solid yellow' : 'none', // Highlight with a border if this is the selected image
                }}
              >
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
                {allowHighlight && (
                  <Tooltip title="Select first image to be displayed">
                    <button
                      className="select-highlight-image-button"
                      onClick={() => handleSelectHighlightImageButton(index)}
                      disabled={highlightedImageIndex === index}
                    >
                      Highlight
                    </button>
                  </Tooltip>
                )}

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
