import React from "react";
import { Carousel as CarouselCmp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Unilogos = [
  ["1.png", "2.png", "3.png"],
  ["4.png", "5.png", "6.png"],
  ["7.png", "8.png", "9.png"],
  ["10.png", "11.png", "12.png"],
  ["13.png", "14.png", "15.png"],
];

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
      {Unilogos.map((unigroup, idx) => (
        <div key={idx}>
          <div className="flex p-5 gap-x-5 ">
            {unigroup.map((filename, idx) => (
              <a key={idx} href="/todolink" className="flex flex-col flex-1">
                <div
                  className="h-48 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(uni_logos/${filename})` }}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
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
