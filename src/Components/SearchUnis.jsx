import React from "react";
import { FaCaretDown, FaAesymmetrik } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import MultiRangeSlider from "Components/multiRangeSlider/MultiRangeSlider";

export default function SearchUnis({ inHomePage }) {
  const SearchBar = () => (
    <div className="w-full h-fit mb-2 py-2 px-5 bg-gray-900 rounded-[11px] shadow-md">
      {/* Inner container */}
      <div className="w-full h-full flex flex-col lg:flex-row space-x-1">
        {/* Search input */}
        <div className="flex-[1] h-full">
          <input
            type="text"
            placeholder="Search University name"
            className="w-full h-full px-4 py-2 bg-white text-black rounded-[11px] outline-none focus:ring-2 focus:ring-[#afafaf80] focus:ring-opacity-50"
          />
        </div>

        {/* Filter menus */}
        <div className="flex-[1] flex lg:justify-end lg:mt-0 justify-center mt-2 items-center space-x-3">
          {/* Faculty and Major */}
          <div className="relative group">
            <label className={styles.filterlabel}>
              Faculty & Major <FaCaretDown />
            </label>

            <div className="lg:left-[-180%] left-[-20%] absolute hidden group-hover:flex group-focus-within:flex lg:flex-row flex-col z-10 lg:w-96 w-40 h-fit bg-white p-2 lg:space-x-4 lg:space-y-0 space-y-2 rounded shadow-lg">
              <div className="flex-1 flex flex-col">
                <div className="w-full mb-1">
                  <label className="text-sm">Faculty</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-sm bg-slate-200 p-1 rounded outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
                  />
                </div>
                <div className="overflow-y-auto grow">
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Faculty 1
                    <RiCheckboxCircleLine className="ml-auto" />
                  </label>
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Faculty 2
                  </label>
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Faculty 3
                  </label>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="w-full mb-1">
                  <label className="text-sm">Major</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-sm bg-slate-200 p-1 rounded outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
                  />
                </div>
                <div className="overflow-y-auto grow">
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Major 1
                    <RiCheckboxCircleLine className="ml-auto" />
                  </label>
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Major 2
                  </label>
                  <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                    Major 3
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* City */}
          <div className="relative group">
            <label className={styles.filterlabel}>
              City <FaCaretDown />
            </label>

            {/* City Filter */}
            <div className="left-[-300%] hidden group-focus-within:flex group-hover:flex absolute z-10 w-48 h-64 flex-col p-2 rounded shadow-lg bg-white">
              <input
                type="text"
                placeholder="Search Cities"
                className="w-full mb-2 bg-slate-200 p-1 rounded outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
              />
              <div className="overflow-y-auto grow">
                <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                  Item 1
                  <RiCheckboxCircleLine className="ml-auto" />
                </label>
                <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                  Item 2
                </label>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="relative group">
            <label className={styles.filterlabel}>
              Budget <FaCaretDown />
            </label>

            <div className="left-[-160%] absolute hidden group-hover:flex flex-col z-10 w-48 h-64 bg-white p-2 rounded shadow-lg">
              {/* price slider */}
              <label className="text-sm">Range</label>
              <div className="w-full h-10 py-3 px-2 text-black mb-5">
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => {
                    // console.log(`min = ${min}, max = ${max}`)
                  }}
                />
              </div>

              {/* OR divider */}
              <div className="relative flex py-1 items-center mb-2">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink text-xs mx-4 text-gray-400">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              {/* price range presets*/}
              <label className="text-sm">Preset</label>
              <div className="overflow-y-auto grow">
                <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                  Price range 1
                  <RiCheckboxCircleLine className="ml-auto" />
                </label>
                <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                  Price range 2
                </label>
                <label className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
                  Price range 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (inHomePage) return <SearchBar />;

  return (
    <div className="w-full h-full bg-red-400">
      {/* Search bar */}
      <SearchBar />

      {/* Filtered Elements */}
      <div className="overflow-x-auto overflow-y-hidden w-full h-12 mb-3 min-h-[48px] flex flex-nowrap items-center gap-2 px-5 rounded-[11px] shadow-md bg-[#FDFDFD]">
        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>

        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>
        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>
        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>
        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>
        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>

        <label className={styles.filteritemlabel}>
          City Cairo
          <AiOutlineClose />
        </label>

        <label className={styles.filteritemlabel + " bg-red-800 ml-auto"}>
          Clear All
        </label>
      </div>

      {/* Search Results */}
      <div className="w-full h-full p-5 bg-[#FDFDFD] rounded-[11px] flex justify-center flex-wrap shadow-md">
        <div className={styles.searchresultcard}>
          <img
            className="object-contain w-full h-2/6 rounded-lg "
            src="Edugate-logo.png"
            alt=""
          />
          <label>German University in Cairo</label>
        </div>

        <div className={styles.searchresultcard}>
          <img
            className="object-contain w-full h-2/6 rounded-lg "
            src="Edugate-logo.png"
            alt=""
          />
          <label>German University in Cairo</label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  filterlabel:
    "flex flex-row justify-center items-center gap-1 text-white cursor-pointer",
  filteritemlabel:
    "rounded-full min-w-fit flex items-center gap-1 bg-[#ea2427] px-2 py-1 text-white cursor-pointer",
  searchresultcard:
    "w-32 min-h-[8rem] h-fit rounded-lg mr-5 bg-white p-3 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.10)] cursor-pointer",
};
