import React from "react";
import { FiEdit2 } from "react-icons/fi";

// By default the edit icon is positioned top right absolutly
// if variant is "inline", the edit icon is next to the children

const EditableText = ({ text, className, onBlur, variant, ...rest }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const refDiv = React.useRef(null);

  const varInline = variant === "inline";

  React.useEffect(() => {
    if (isEditing) refDiv.current.focus();
  }, [refDiv, isEditing]);

  return (
    <p
      contentEditable={isEditing}
      className={className + " relative"}
      onBlur={() => {
        setIsEditing(false);
        onBlur?.(refDiv.current.innerText);
      }}
      ref={refDiv}
      suppressContentEditableWarning={true}
      {...rest}
    >
      {text}

      {!isEditing && (
        <FiEdit2
          className={
            varInline
              ? "inline-block"
              : "absolute top-1 right-1 inline-block text-xl"
          }
          onClick={(e) => setIsEditing(true)}
        />
      )}
    </p>
  );
};

export default EditableText;
