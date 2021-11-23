import React from "react";
import Popover from "@mui/material/Popover";
import Calender from "./Calender";

function PopoverComponent({ open, anchorEl, handleClose }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 140, left: 440 }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      style={{ position: "absolute" }}
    >
      <Calender width="250px" height="270px" padding="p-2" />
    </Popover>
  );
}

export default PopoverComponent;
