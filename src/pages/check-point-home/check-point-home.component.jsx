import React from "react";
import ValidUserCheckin from "../../components/check-in-valid-user/check-in-valid-user.component";
import CheckPointNav from "../../components/check-point-nav/check-point-nav.components";
import { CheckPointBody, CheckPointContainer } from "./check-point-home.styles";

const CheckPoint = () => {
  return (
    <CheckPointContainer>
      <CheckPointNav />
      <CheckPointBody>
        <ValidUserCheckin></ValidUserCheckin>
      </CheckPointBody>
    </CheckPointContainer>
  );
};

export default CheckPoint;
