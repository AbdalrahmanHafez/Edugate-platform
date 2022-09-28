import React, { useState } from "react";
export function ButtonsWithDesc(props) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="/bg-blue-200 flex lg:flex-row flex-col gap-3 mb-3">
        {/* Items */}

        <div className="/bg-blue-200 flex flex-col gap-3">
          {props.data.map((button, idx) => (
            <div key={idx} className="flex items-center">
              <button
                className={
                  "w-full px-10 px-10 py-3  rounded-lg lg:font-base " +
                  (idx === index
                    ? "font-bold bg-[#950003] text-white"
                    : "text-black bg-white border-2 border-[#950003] ")
                }
                onClick={() => {
                  setIndex(idx);
                }}
              >
                {button.name}
              </button>
              <div
                className="lg:block hidden"
                style={{
                  opacity: idx === index ? 100 : 0,
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "10px solid #950003",
                }}
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-[#EBEBEB] text-sm flex-1 px-3 py-1 rounded-lg text-justify">
          {props.data[index].description}
        </div>
      </div>
    </>
  );
}
