import React, { useState } from "react";

function RequirementTabs({ data }) {
  // data = {name, description}

  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleClick = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <div className="flex ">
      {/* Item Names */}
      <div
        className={
          "flex w-fit flex-col gap-y-1 border-r-2 border-[#950003] py-3 pr-0"
        }
      >
        {data.map(({ name }, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <label
              key={idx}
              className={
                "cursor-pointer select-none rounded-l-md px-1 py-1 text-center hover:text-white lg:px-5 " +
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
