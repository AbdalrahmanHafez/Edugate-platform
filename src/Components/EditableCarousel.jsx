import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { toast } from "react-toastify";
import Popover from "@mui/material/Popover";
import { Container, Draggable } from "react-smooth-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { FiUpload } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { FiTrash } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Item({ dragging, src, onEdit, onRemove }) {
  const iconStyle = "w-4 h-4 text-black";
  const btnStyle =
    "flex items-center justify-center hover:bg-gray-200 p-1 rounded-sm";
  return (
    <div className="group flex flex-col">
      <img
        draggable={false}
        alt=""
        src={src}
        className="h-36 border border-slate-400
	  "
      />
      <div
        className={
          "hidden h-6 items-center justify-center" +
          (dragging ? "" : " group-hover:flex")
        }
      >
        <button onClick={onRemove} className={"mr-5 " + btnStyle}>
          <BsFillTrashFill className={iconStyle} />
        </button>
        <button onClick={onEdit} className={btnStyle}>
          <FaPen className={iconStyle} />
        </button>
      </div>
    </div>
  );
}

function EditableCarousel({ onUpdate, imageUrls, className }) {
  const currentIndex = React.useRef(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const popoverOpen = Boolean(anchorEl);

  const [dragging, setdragging] = React.useState(false);

  function onDrop(dropres) {
    const { addedIndex, removedIndex } = dropres;
    // console.log("added", addedIndex, "removed", removedIndex);
    const newUrls = [...imageUrls];
    // remove item from old position
    newUrls.splice(removedIndex, 1);
    // add item to new position
    newUrls.splice(addedIndex, 0, imageUrls[removedIndex]);
    onUpdate(newUrls);
  }

  function selectFile(cb) {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        cb(reader.result);
      };
    };
    fileInput.click();
  }

  function onAdd() {
    selectFile((filedata) => {
      const newUrls = [...imageUrls];
      newUrls.push(filedata);
      onUpdate(newUrls);
    });
  }

  function onEdit(index) {
    selectFile((filedata) => {
      const newUrls = [...imageUrls];
      newUrls.splice(index, 1, filedata);
      onUpdate(newUrls);
    });
  }

  function onRemove(index) {
    const newUrls = [...imageUrls];
    newUrls.splice(index, 1);
    onUpdate(newUrls);
  }

  return (
    <div>
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

      <div className="flex">
        <button
          onClick={(e) => setAnchorEl(e.currentTarget)}
          className="ml-auto self-start rounded bg-white py-1 px-2 hover:bg-gray-100 hover:shadow"
        >
          Modify Carousel
        </button>

        <Popover
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="flex items-stretch">
            <div>
              <Container
                onDragStart={(e) => setdragging(true)}
                onDragEnd={(e) => setdragging(false)}
                lockAxis="x"
                orientation="horizontal"
                onDrop={onDrop}
              >
                {imageUrls.map((url, index) => (
                  <Draggable key={index}>
                    <Item
                      dragging={dragging}
                      src={url}
                      onEdit={() => onEdit(index)}
                      onRemove={() => onRemove(index)}
                    />
                  </Draggable>
                ))}
              </Container>
            </div>

            <button
              className="border-l-2 border-slate-400 bg-gray-100"
              onClick={onAdd}
            >
              <AiOutlinePlusCircle className="h-8 w-8" />
            </button>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default EditableCarousel;
