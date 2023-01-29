import React from "react";
import { FiEdit2 } from "react-icons/fi";
import SimpleReactValidator from "simple-react-validator";
import Snackbar from "@mui/material/Snackbar";

// By default the edit icon is positioned top right absolutly
// if variant is "inline", the edit icon is next to the children

const EditableText = ({
  text,
  className,
  onBlur,
  variant,
  validators,
  ...rest
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const refDiv = React.useRef(null);
  const refValidator = React.useRef(new SimpleReactValidator());

  const varInline = variant === "inline";

  React.useEffect(() => {
    if (isEditing) refDiv.current.focus();
  }, [refDiv, isEditing]);

  const [errorPopup, setErrorPopup] = React.useState(false);
  const [errormsg, setErrormsg] = React.useState("");
  
  React.useEffect(() => {
	  console.log(`EDT: ${text} rendered`)
  })
  

  return (
    <>
      <p
        contentEditable={isEditing}
        className={className + " relative"}
        onBlur={() => {
          const value = refDiv.current.innerText;

          // console.log("VALUE IS ", value);
          // const validator = new SimpleReactValidator();
          refValidator.current.message("text", value, validators);
          // check if value contains a new line
          if (value.includes("\n")) {
            // alert("Please don't use new lines");
            refDiv.current.innerText = text;
            console.log("Please don't use new lines");
            setErrormsg("Please don't use new lines");
            setErrorPopup(true);
          }

          if (!refValidator.current.check(value, validators)) {
            refDiv.current.innerText = text;
            const msg = refValidator.current.getErrorMessages().text;
            console.log(msg);
            setErrormsg(msg);
            setErrorPopup(true);
            // console.log(validator.showMessageFor("text"));
          }

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

      <Snackbar
        ContentProps={{
          sx: {
            background: "#950003",
          },
        }}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorPopup}
        onClose={() => setErrorPopup(false)}
        message={errormsg}
        ClickAwayListenerProps={{ onClickAway: () => null }}
        key={{ vertical: "top" } + { horizontal: "center" }}
      />
    </>
  );
};

export default EditableText;
