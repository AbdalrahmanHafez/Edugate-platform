import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import React, { useState } from "react";

import Carousel from "Components/Carousel";
import FeaturedArticles from "Components/FeaturedArticles";
import FeaturedUniversities from "Components/FeaturedUniversities";
import SearchUnis from "Components/SearchUnis";
import StudyAbroad from "Components/StudyAbroad";
import FeaturedPrograms from "Components/FeaturedPrograms";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {
  return (
    <div className="w-full h-full bg-white bg-cover">
      <Navbar />

      <br />
      <br />
      <br />

      {/* Search Box */}
      <section className="h-96 mt-[20px] bg-[url('../public/Banner3.jpg')] bg-[rgba(0,0,0,.4)] bg-blend-multiply bg-cover bg-center flex flex-col justify-center items-center rounded-br-lg">
        <h1 className="text-5xl text-white mb-5 select-none drop-shadow-[2px_2px_0px_#000000]">
          Create The Future
        </h1>
        <div className={styles.searchBox}>
          <SearchUnis inHomePage={true} />
        </div>
      </section>

      {/* Content and Ads*/}
      <div className={styles.container}>
        {/* Content */}
        <div className={styles.mccontent}>
          <FeaturedUniversities />

          <StudyAbroad />
          <FeaturedPrograms />

          <div className="mx-3 mt-5">
            <Carousel />
          </div>

          <FeaturedArticles />
        </div>

        {/* Ads */}
        <div className={styles.adContainer}>
          <img className={styles.adImage} src="ad1.png" alt="" />
          <img className={styles.adImage} src="ad3.jpg" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: "/bg-red-400 w-full flex flex-col md:flex-row",
  adContainer:
    "/bg-green-400 hidden mt-3 md:flex md:h-auto flex-col w-2/12 items-start justify-start mr-3 gap-5",

  adImage: "sticky top-0 w-full",

  mccontent:
    "/bg-red-200 mx-3 md:w-10/12 flex flex-col justify-start items-start-center",

  searchBox: "md:w-8/12 w-full h-fit mx-auto",

  carousel: "w-full h-60 bg-green-600",
};

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default Home;
