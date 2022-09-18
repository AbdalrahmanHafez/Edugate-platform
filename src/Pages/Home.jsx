import Footer from "Components/Footer";
import Navbar from "Components/Navbar";
import React, { useState } from "react";
import classNames from "classnames";
import Carousel from "Components/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function Home() {
  const [hmbShowNav, sethmbShowNav] = useState(false);
  return (
    <div className="h-full w-full bg-white bg-cover">
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Ads1 - Content - Ads3 */}
      <div className={styles.container}>
        <div className={styles.adContainer13}>
          <img className={styles.adImage13} src="ad1.png" alt="" />
        </div>
        <div className={styles.mccontent}>
          <div className={styles.searchBox}>Search Box</div>
          {/* Ads 2 */}
          <div className={styles.adContainer2}>
            <img className={styles.adImage2} src="ad2.png" alt="" />
          </div>

          {/* Content */}
          <Carousel />
        </div>
        <div className={styles.adContainer13}>
          <img className={styles.adImage13} src="ad3.jpg" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: "/bg-red-400 w-full flex flex-col md:flex-row ",
  adContainer2:
    "bg-gray-200 mx-auto md:w-3/4 mb-4 flex justify-center max-h-24",
  adContainer13:
    "/bg-green-400 md:mx-5 md:w-2/12 md:h-auto md:flex items-start justify-center hidden",
  adImage13: "sticky top-28 w-full",
  adImage2: "h-full w-auto",
  mccontent:
    "bg-red-200 md:w-8/12 flex flex-col justify-start items-start-center",
  searchBox: "bg-slate-400 w-full h-20 mx-auto mb-4",

  carousel: "w-full h-60 bg-green-600",
};

// https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
export default Home;
