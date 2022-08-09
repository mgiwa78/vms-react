import React from "react";
import {
  CheckPointLink,
  CheckPointNavContainer,
  CheckPointNavLeft,
  CheckPointNavRight,
} from "./check-point-nav.styles";

const CheckPointNav = () => {
  return (
    <CheckPointNavContainer>
      <CheckPointNavLeft>
        <CheckPointLink>Search</CheckPointLink>
        <CheckPointLink>Scan QR</CheckPointLink>
      </CheckPointNavLeft>

      <CheckPointNavRight>
        <CheckPointLink>Sign out</CheckPointLink>
      </CheckPointNavRight>
    </CheckPointNavContainer>
  );
};

export default CheckPointNav;
