import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Unilogos from "Media/Unilogos.js";

function FeaturedArticles() {
  // console.log(Unilogos);
  // Unilogos.forEach((data, filename) => console.log(data, filename));

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
      {Unilogos.map((unigroup, idx) => {
        // console.log("unigrpo", unigroup);
        return (
          <div key={idx}>
            <div className="flex p-5 gap-x-5 ">
              {unigroup.map(([filename, data], idx) => {
                // console.log(smth);
                return (
                  <a
                    key={idx}
                    href="/todolink"
                    className="flex flex-col flex-1"
                  >
                    <div
                      className="h-48 bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(uni_logos/${filename})` }}
                    />
                    <h1 className="mb-5 text-lg text-[rgb(234,36,39)]">
                      {data}
                    </h1>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
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
