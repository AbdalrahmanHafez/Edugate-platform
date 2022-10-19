import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrAddCircle, GrFormAdd } from "react-icons/gr";
import EditableDiv from "Components/EditableDiv";
export function ButtonsWithDesc(props) {
  const [index, setIndex] = useState(0);
  const { editable, onAdd, onDelete, onEdit } = props;

  useEffect(() => {
    // console.log("[RENDER] ButtonWithDesc", props.data.length);
  });

  if (index > props.data.length - 1) {
    // TODO: REACT WTF?

    /**
 * 
   		t		remov
	  	0		1		2
sel		2		2		1
len		3		2		2
 * 
 */

    setIndex(props.data.length - 1);
    return null;
  }

  return (
    <>
      <div className="/bg-blue-200 mb-3 flex flex-col gap-3 lg:flex-row">
        {/* Items */}

        <div className="/bg-blue-200 flex flex-col gap-3">
          {props.data.map((button, idx) => (
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
                <EditableDiv variant="inline">{button.name}</EditableDiv>
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
          {props.data[index].description}

          {editable && (
            <button
              className="ml-auto"
              onClick={() => {
                onDelete(index);
                // console.log("data", props.data.length);
              }}
            >
              <MdDelete />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
