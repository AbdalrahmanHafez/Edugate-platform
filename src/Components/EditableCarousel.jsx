import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FiUpload } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";

function EditableCarousel({
  editable = false,
  imageUrls,
  onAdd,
  onRemove,
  onUpdate,
  className,
}) {
  const currentIndex = React.useRef(null);

  return (
    <div className="">
      <Carousel
        showArrows
        showStatus
        infiniteLoop
        autoPlay
        stopOnHover
        emulateTouch
        swipeable
        dynamicHeight
        onChange={(newIndex) => (currentIndex.current = newIndex)}
        onClickItem={() => {}}
        onClickThumb={() => {}}
        showThumbs={false}
        interval={5000}
      >
        {imageUrls.map((src, idx) => (
          <div
            key={idx}
            className={className}
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </Carousel>

      {editable && (
        <div className="mt-2 flex justify-end gap-2">
          <button className={styles.editButton} onClick={() => onAdd()}>
            <GrFormAdd />
          </button>

          {imageUrls.length > 0 && (
            <>
              <button
                className={styles.editButton}
                onClick={() => {
                  // TODO: implement uploading to server
                  const fileInput = document.createElement("input");
                  fileInput.type = "file";
                  fileInput.accept = "image/*";
                  fileInput.onchange = (e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      onUpdate(currentIndex.current, reader.result);
                    };
                  };
                  fileInput.click();
                }}
              >
                <FiUpload />
              </button>
              <button
                className={styles.editButton}
                onClick={() => onRemove(currentIndex.current)}
              >
                <FiTrash />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  editButton: "rounded-full bg-white p-3 text-black",
};

export default EditableCarousel;
