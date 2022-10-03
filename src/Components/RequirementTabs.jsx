import React, { useState } from "react";

function RequirementTabs({ data }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleClick = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <div className="flex ">
      {/* Item Names */}
      <div
        className={
          "w-fit flex flex-col py-3 pr-0 gap-1 border-r-2 border-[#950003]"
        }
      >
        {data.map(({ name }, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <label
              className={
                "lg:px-5 px-1 py-1 cursor-pointer text-center rounded-l-md hover:text-white select-none " +
                (isSelected
                  ? "bg-[#950003] text-white"
                  : "text-black hover:bg-[#bb0003]")
              }
              onClick={() => handleClick(idx)}
            >
              {name}
            </label>
          );
        })}
      </div>

      {/* Description */}
      <div className="w-full p-4 ">{data[selectedIdx].description}</div>
    </div>
  );
}

export default RequirementTabs;
