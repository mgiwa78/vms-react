import React from "react";

import { Button } from "react-bootstrap";
import {
  CheckInContainerRight,
  CheckInForm,
  CheckInFormBtm,
  CheckInFormInput,
  CheckInFormLabel,
  CheckInRightContainer,
  CheckInRightTitle,
  CheckInSubText,
  LoginNav,
} from "./security-point-sign-in.styles";

const CheckInPointSignIn = () => {
  return (
    <CheckInContainerRight>
      <CheckInRightContainer>
        <CheckInRightTitle>CheckIn sign-in</CheckInRightTitle>
        <CheckInSubText>Enter check-in verification Id</CheckInSubText>

        <CheckInForm>
          <CheckInFormLabel>Verification-ID</CheckInFormLabel>
          <CheckInFormInput
            type="number"
            placeholder="Check-In Verification ID"
          ></CheckInFormInput>

          <CheckInFormBtm>
            <Button>Sign In</Button>
          </CheckInFormBtm>
        </CheckInForm>
      </CheckInRightContainer>
    </CheckInContainerRight>
  );
};

export default CheckInPointSignIn;
