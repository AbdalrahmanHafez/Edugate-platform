import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel() {
  return (
    <CarouselCmp
      showArrows={true}
      onChange={() => {}}
      onClickItem={() => {}}
      onClickThumb={() => {}}
    >
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="Edugate-logo.png" />
        <p className="legend">Legend 6</p>
      </div>
    </CarouselCmp>
  );
}

export default Carousel;
