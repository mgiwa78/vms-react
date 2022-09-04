import React from "react";
import {
  CheckedInWGTContainer,
  CheckedInWGTCount,
  CheckedInWGTTitle,
} from "./checkedIn-count-widgets.styles";

const CheckedInWGT = ({ value }) => {
  return (
    <CheckedInWGTContainer>
      <CheckedInWGTCount>{value}</CheckedInWGTCount>
      <CheckedInWGTTitle>Total Checked-in</CheckedInWGTTitle>
    </CheckedInWGTContainer>
  );
};

export default CheckedInWGT;
