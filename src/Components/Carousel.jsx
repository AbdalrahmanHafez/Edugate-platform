import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel() {
  return (
    <CarouselCmp
      showArrows
      showStatus
      infiniteLoop
      autoPlay
      stopOnHover
      emulateTouch
      swipeable
      dynamicHeight
      onChange={() => {}}
      onClickItem={() => {}}
      onClickThumb={() => {}}
      centerMode
      centerSlidePercentage={60}
    >
      <div>
        <img src="carousel-1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="carousel-2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="carousel-3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="carousel-4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="carousel-5.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
    </CarouselCmp>
  );
}

export default Carousel;
