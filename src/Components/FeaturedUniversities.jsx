import React from "react";

function FeaturedArticles() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Featured Universities
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <div className="lg:flex">
            <img
              className="object-cover w-full h-40 rounded-lg lg:w-64"
              src="https://rizme.fra1.digitaloceanspaces.com/public/American%20University%20in%20Cairo.png"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                American University in Cairo (AUC)
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Ranked: 1
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-contain bg-white w-full h-40 rounded-lg lg:w-64"
              src="https://rizme.fra1.digitaloceanspaces.com/public/Beni-Suef%20University.png"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Beni-Suef University
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Ranked: 2
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-cover w-full h-40 rounded-lg lg:w-64"
              src="https://rizme.fra1.digitaloceanspaces.com/public/Egypt%20Japan%20University%20of%20Science%20&%20Technology.png"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Egypt Japan University of Science & Technology
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Ranked: 3
              </span>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="object-contain bg-white w-full h-40 rounded-lg lg:w-64"
              src="https://rizme.fra1.digitaloceanspaces.com/public/ipcEVR3GddnszOXa0XBayb5rDo67qaK8kFaWowRJ.png"
              alt=""
            />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="/"
                className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              >
                Egyptian Russian University
              </a>

              <span className="text-sm text-gray-500 dark:text-gray-300">
                Ranked: 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;
