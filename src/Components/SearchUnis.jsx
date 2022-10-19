import React from "react";
import { FaCaretDown, FaAesymmetrik } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import MultiRangeSlider from "Components/multiRangeSlider/MultiRangeSlider";

import { BsSearch } from "react-icons/bs";

export default function SearchUnis({ inHomePage }) {
  const SearchBar = () => (
    <div
      className={
        "mb-2 h-fit w-full rounded-[11px] bg-white py-2 px-5 shadow-md" +
        (inHomePage ? " shadow-[0_5px_30px_#c5c5c54a]" : "")
      }
    >
      {/* Inner container */}
      <div className="flex h-full w-full flex-col space-x-1 lg:flex-row">
        {/* Search input */}
        <div className="h-full flex-[1]">
          <input
            type="text"
            placeholder="Search University name"
            className="h-full w-full rounded-[11px] bg-gray-200 px-4 py-2 text-black outline-none focus:ring-2 focus:ring-[#afafaf80] focus:ring-opacity-50"
          />
        </div>

        {/* Filter menus */}
        <div className="mt-2 flex flex-[1] items-center justify-center space-x-3 lg:mt-0 lg:justify-end">
          {/* Faculty and Major */}
          <div className="group relative">
            <label className={styles.filterlabel}>
              Faculty & Major <FaCaretDown />
            </label>

            <div
              className="absolute z-10 hidden h-fit w-40 flex-col space-y-2 rounded bg-white p-2 shadow-lg group-focus-within:flex group-hover:flex lg:w-96 lg:flex-row lg:space-x-4 lg:space-y-0"
              style={{ inset: "100% 0 auto auto" }}
            >
              <div className="flex flex-1 flex-col">
                <div className="mb-1 w-full">
                  <label className="text-sm">Faculty</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full rounded bg-slate-200 p-1 text-sm outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
                  />
                </div>
                <div className="grow overflow-y-auto">
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Faculty 1
                    <RiCheckboxCircleLine className="ml-auto" />
                  </label>
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Faculty 2
                  </label>
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Faculty 3
                  </label>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-1 w-full">
                  <label className="text-sm">Major</label>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full rounded bg-slate-200 p-1 text-sm outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
                  />
                </div>
                <div className="grow overflow-y-auto">
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Major 1
                    <RiCheckboxCircleLine className="ml-auto" />
                  </label>
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Major 2
                  </label>
                  <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                    Major 3
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* City */}
          <div className="group relative">
            <label className={styles.filterlabel}>
              City <FaCaretDown />
            </label>

            {/* City Filter */}
            <div
              className="absolute z-10 hidden h-64 w-48 flex-col rounded bg-white p-2 shadow-lg group-focus-within:flex group-hover:flex"
              style={{ inset: "100% 0 auto auto" }}
            >
              <input
                type="text"
                placeholder="Search Cities"
                className="mb-2 w-full rounded bg-slate-200 p-1 outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
              />
              <div className="grow overflow-y-auto">
                <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                  Item 1
                  <RiCheckboxCircleLine className="ml-auto" />
                </label>
                <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                  Item 2
                </label>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="group relative">
            <label className={styles.filterlabel}>
              Budget <FaCaretDown />
            </label>

            <div
              className="absolute z-10 hidden h-64 w-48 flex-col rounded bg-white p-2 shadow-lg group-hover:flex"
              style={{ inset: "100% 0 auto auto" }}
            >
              {/* price slider */}
              <label className="text-sm">Range</label>
              <div className="mb-5 h-10 w-full py-3 px-2 text-black">
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) => {
                    // console.log(`min = ${min}, max = ${max}`)
                  }}
                />
              </div>

              {/* OR divider */}
              <div className="relative mb-2 flex items-center py-1">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-4 flex-shrink text-xs text-gray-400">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              {/* price range presets*/}
              <label className="text-sm">Preset</label>
              <div className="grow overflow-y-auto">
                <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                  Price range 1
                  <RiCheckboxCircleLine className="ml-auto" />
                </label>
                <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                  Price range 2
                </label>
                <label className="flex cursor-pointer items-center rounded px-2 hover:bg-slate-200">
                  Price range 3
                </label>
              </div>
            </div>
          </div>

          {inHomePage && (
            <button className="rounded-full bg-white p-2 text-xl text-black ring-gray-500 focus:ring-2">
              <BsSearch />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (inHomePage) return <SearchBar />;

  return (
    <div className="h-full w-full ">
      {/* Search bar */}
      <SearchBar />

      {/* Filtered Elements */}
      <div className="mb-3 flex h-12 min-h-[48px] w-full flex-nowrap items-center gap-2 overflow-x-auto overflow-y-hidden rounded-[11px] bg-[#FDFDFD] px-5 shadow-md">
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

        <label className={styles.filteritemlabel + " ml-auto bg-red-800"}>
          Clear All
        </label>
      </div>

      {/* Search Results */}
      <div className="flex h-full w-full flex-wrap justify-center rounded-[11px] bg-[#FDFDFD] p-5 shadow-md">
        {Array(20)
          .fill()
          .map((_, i) => (
            <div className={styles.searchresultcard}>
              <img
                className="w-full rounded-lg object-contain"
                src={`/uni_logos/${(i % 14) + 1}.png`}
                alt=""
              />
              <div className="text-sm leading-4">
                German University in Cairo {i}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const styles = {
  filterlabel:
    "flex flex-row justify-center items-center gap-1 text-black cursor-pointer",
  filteritemlabel:
    "rounded-full min-w-fit flex items-center gap-1 bg-[#ea2427] px-2 py-1 text-white cursor-pointer",
  searchresultcard:
    "m-3 w-48 min-h-[8rem] h-fit rounded-lg bg-white p-3 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.10)] cursor-pointer hover:outline-[#950003] hover:outline hover:outline-2",
};
