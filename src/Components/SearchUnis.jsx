import React from "react";
import { FaCaretDown, FaAesymmetrik } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";

export default function SearchUnis() {
  return (
    <div className="w-full h-full bg-red-400">
      {/* Search bar */}
      <div className="w-full h-fit mb-2 py-2 px-5 bg-[#3F3F3F] rounded-[11px] shadow-md">
        {/* Inner container */}
        <div className="w-full h-full flex flex-col lg:flex-row space-x-1">
          {/* Search input */}
          <div className="flex-[1] h-full">
            <input
              type="text"
              placeholder="Search University name"
              className="w-full h-full px-4 py-2 bg-[#4F4F4F] text-white rounded-[11px] outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-50"
            />
          </div>

          {/* Filter menus */}
          <div className="h-full flex-[1] flex lg:justify-end justify-center mt-2 items-center space-x-3 bg-[#3F3F3F] ">
            <label className={styles.filterlabel}>
              Faculty & Major <FaCaretDown />
            </label>

            <label className={styles.filterlabel}>
              City <FaCaretDown />
            </label>

            <label className={styles.filterlabel}>
              Budget <FaCaretDown />
            </label>
          </div>
        </div>
      </div>

      {/* Filtered Elements */}
      {/* TODO: overflow on x scroll ? */}
      <div className="w-full h-12 mb-3 min-h-[48px] flex flex-nowrap items-center gap-2 px-5 rounded-[11px] shadow-md bg-[#FDFDFD]">
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

      {/* TODO: Make the filters components since each has its own little search */}
      {/* TODO: add css to menus */}
      {/* Select City */}
      <div className="w-48 h-32 bg-white p-2 flex flex-col rounded">
        <input
          type="text"
          placeholder="Search Cities"
          className="w-full mb-2 bg-slate-200 p-1 rounded outline-none focus:ring-2 focus:ring-[#8a8a8a] focus:ring-opacity-50"
        />
        <div className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
          <label>Item 1</label>
          <RiCheckboxCircleLine className="ml-auto" />
        </div>

        <div className="flex items-center hover:bg-slate-200 rounded cursor-pointer px-2">
          <label>Item 2</label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  filterlabel:
    "flex flex-row justify-center items-center gap-2 text-white cursor-pointer",
  filteritemlabel:
    "rounded-full flex items-center gap-1 bg-[#ea2427] px-2 py-1 text-white cursor-pointer",
  searchresultcard:
    "w-32 min-h-[8rem] h-fit rounded-lg mr-5 bg-white p-3 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.10)] cursor-pointer",
};
