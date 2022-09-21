import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function FeaturedArticles() {
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
      interval={5000}
    >
      <div className="">
        <div className="flex p-5 gap-x-5 ">
          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-2.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>
        </div>
      </div>

      <div>
        <div className="flex p-5 space-x-5">
          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-2.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>

          <a href="/todolink" className="flex flex-col flex-1">
            <div className="h-48 bg-cover bg-center bg-[url('../public/carousel-3.jpeg')]" />
            <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
              University Name
            </h1>
          </a>
        </div>
      </div>
    </CarouselCmp>
  );

  return (
    <section className="bg-gray-200 mt-3 rounded-lg mb-5">
      <div className="px-3 py-4 mx-auto">
        <h1 className="text-3xl font-semibold capitalize text-[rgb(234,36,39)]">
          Featured Universities
        </h1>

        <Carousel />
      </div>
    </section>
  );
}

export default FeaturedArticles;
