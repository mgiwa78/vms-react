import { Button } from "react-bootstrap/Button";
import React from "react";
import { PrimaryBtn } from "./custom-btn.styles";

const CustomBtn = ({
  checkIn,
  form_btn,
  lg,
  btnType,
  children,
  handleClick,
  state,
}) => {
  return (
    <PrimaryBtn
      lg={lg}
      form_btn={form_btn}
      btnType={btnType}
      onClick={handleClick}
      className={`baseBtn ${checkIn ? "checkInBtn" : ""} ${state}`}
    >
      {children}
    </PrimaryBtn>
  );
};

export default CustomBtn;
