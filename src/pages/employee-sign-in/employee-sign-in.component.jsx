import React from "react";

import { Button } from "react-bootstrap";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import {
  EmployeeContainerRight,
  EmployeeForm,
  EmployeeFormBtm,
  EmployeeFormInput,
  EmployeeFormLabel,
  EmployeeRightContainer,
  EmployeeRightTitle,
  EmployeeSubText,
  LoginNav,
} from "./employee-sign-in.styles";

const EmployeeSignIn = () => {
  return (
    <EmployeeContainerRight>
      <EmployeeRightContainer>
        <EmployeeRightTitle>Employee sign-in</EmployeeRightTitle>
        <EmployeeSubText>Enter Employee Id and password</EmployeeSubText>

        <EmployeeForm>
          <TextInput
            type={"text"}
            label="ID"
            placeholder="Employee ID"
          ></TextInput>
          <TextInput
            label="Password"
            type="password"
            placeholder="Employee Password"
          ></TextInput>
          <EmployeeFormBtm>
            <CustomBtn>Sign In</CustomBtn>
          </EmployeeFormBtm>
        </EmployeeForm>
      </EmployeeRightContainer>
    </EmployeeContainerRight>
  );
};

export default EmployeeSignIn;
