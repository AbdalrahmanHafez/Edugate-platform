import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion({ name, description }) {
  return (
    <div>
      <Accordion
        style={{
          backgroundColor: "#EBEBEB",
          color: "#000",
          // border: "1px solid #000",
          borderRadius: "5px",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          style={{
            borderRadius: "0.5rem",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontSize: "1.25rem", margin: "0 !important" }}>
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#EBEBEB] rounded">
          <Typography
            style={{
              fontSize: "0.875rem",
            }}
          >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
