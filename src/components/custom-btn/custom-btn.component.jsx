import { Button } from "react-bootstrap/Button";
import React from "react";
import { PrimarBtn } from "./custom-btn.styles";

const CustomBtn = ({ btnType, children, handleClick }) => {
  return (
    <PrimarBtn onClick={handleClick} className="baseBtn">
      {children}
    </PrimarBtn>
  );
};

export default CustomBtn;
