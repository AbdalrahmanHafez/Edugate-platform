import React from "react";
import EditableCarousel from "./EditableCarousel";

function TextWithCarousel({ text, editableCarousel = false, imageUrls }) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg bg-[#EBEBEB] px-3 py-1 text-sm lg:flex-row">
      <div className="flex-1 text-justify">{text}</div>
      <div className="mx-auto h-60 w-full max-w-[15rem] flex-1 lg:ml-auto">
        {/* <img src="https://via.placeholder.com/500x400" alt="" /> */}

        <EditableCarousel
          editable={editableCarousel}
          className="h-44 bg-contain bg-center bg-no-repeat"
          imageUrls={imageUrls}
        />
      </div>
    </div>
  );
}

export default TextWithCarousel;
