import React from "react";

import { Button } from "react-bootstrap";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import {
  CheckInContainerRight,
  CheckInForm,
  CheckInFormBtm,
  CheckInFormLabel,
  CheckInRightContainer,
  CheckInRightTitle,
  CheckInSubText,
} from "./security-point-sign-in.styles";

const CheckInPointSignIn = () => {
  return (
    <CheckInContainerRight>
      <CheckInRightContainer>
        <CheckInRightTitle>CheckIn sign-in</CheckInRightTitle>
        <CheckInSubText>Enter check-in verification Id</CheckInSubText>

        <CheckInForm>
          <TextInput
            label="Verification ID"
            type="number"
            placeholder="Check-In Verification ID"
          ></TextInput>

          <CheckInFormBtm>
            <CustomBtn>Sign In</CustomBtn>
          </CheckInFormBtm>
        </CheckInForm>
      </CheckInRightContainer>
    </CheckInContainerRight>
  );
};

export default CheckInPointSignIn;
