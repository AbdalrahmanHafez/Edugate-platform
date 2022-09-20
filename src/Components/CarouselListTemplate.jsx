import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselListTemplate({ title, dark }) {
  const textColor = "text-[rgb(234,36,39)]";

  const Carousel = () => (
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
      showThumbs={false}
    >
      <div>
        <div className="flex p-5 space-x-5">
          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-2.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>
        </div>
      </div>

      <div>
        <div className="flex p-5 space-x-5">
          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-2.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className={"text-3xl " + textColor}>{title}</h1>
          </a>
        </div>
      </div>
    </CarouselCmp>
  );

  return (
    <section className={"rounded-lg bg-gray-200 mb-5"}>
      <div className="container px-6 py-10 mx-auto">
        <h1
          className={
            "text-3xl font-semibold capitalize lg:text-4xl mb-5 " + textColor
          }
        >
          {title}
        </h1>

        <Carousel />
      </div>
    </section>
  );
}

export default CarouselListTemplate;
