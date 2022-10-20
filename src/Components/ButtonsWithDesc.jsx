import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrAddCircle, GrFormAdd } from "react-icons/gr";
import EditableText from "Components/EditableText";
export function ButtonsWithDesc({ data, editable, onAdd, onDelete, onEdit }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // console.log("[RENDER] ButtonWithDesc", data.length);
  });

  // Nothing is rendered if no data
  if (data.length === 0)
    return (
      <div className="mb-3 flex">
        <button className="mx-auto text-2xl" onClick={() => onAdd()}>
          <GrAddCircle />
        </button>
      </div>
    );

  return (
    <div className="/bg-blue-200 mb-3 flex flex-col gap-3 lg:flex-row">
      {/* Items */}
      <div className="/bg-blue-200 flex flex-col gap-3">
        {data.map((button, idx) => (
          <div key={idx} className="flex items-center">
            <button
              className={
                "lg:font-base w-full rounded-lg px-10 py-3 " +
                (idx === index
                  ? "bg-[#950003] font-bold text-white"
                  : "border-2 border-[#950003] bg-white text-black ")
              }
              onClick={() => {
                setIndex(idx);
              }}
            >
              <EditableText variant="inline" text={button.name} />
            </button>
            <div
              className="hidden lg:block"
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

        {editable && (
          <div className="flex justify-center">
            <button onClick={() => onAdd()}>
              <GrAddCircle />
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="flex flex-1 rounded-lg bg-[#EBEBEB] px-3 py-1 text-justify text-sm">
        {data[index].description}

        {editable && (
          <button
            className="ml-auto"
            onClick={() => {
              onDelete(index);
              setIndex(index ? index - 1 : 0);
            }}
          >
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
}
