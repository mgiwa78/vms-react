import React from "react";
import {
  CheckedInWGTContainer,
  CheckedInWGTCount,
  CheckedInWGTTitle,
} from "./checkedIn-count-widgets.styles";

const CheckedInWGT = () => {
  return (
    <CheckedInWGTContainer>
      <CheckedInWGTCount>15</CheckedInWGTCount>
      <CheckedInWGTTitle>Total Checked-in</CheckedInWGTTitle>
    </CheckedInWGTContainer>
  );
};

export default CheckedInWGT;
