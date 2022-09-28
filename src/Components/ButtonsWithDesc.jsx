import React, { useState } from "react";
export function ButtonsWithDesc(props) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="/bg-blue-200 flex gap-3 mb-3">
        {/* Items */}

        <div className="/bg-blue-200 flex flex-col gap-3">
          {props.data.map((button, idx) => (
            <div key={idx} className="flex items-center">
              <button
                className="bg-[#950003] w-full px-10 px-10 py-3 text-white rounded-lg"
                onClick={() => {
                  setIndex(idx);
                }}
              >
                {button.name}
              </button>
              <div
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
