import React from "react";

import { Button } from "react-bootstrap";
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
          <EmployeeFormLabel>ID</EmployeeFormLabel>
          <EmployeeFormInput placeholder="Employee ID"></EmployeeFormInput>
          <EmployeeFormLabel>Password</EmployeeFormLabel>
          <EmployeeFormInput
            type="password"
            placeholder="Employee Password"
          ></EmployeeFormInput>
          <EmployeeFormBtm>
            <Button>Sign In</Button>
          </EmployeeFormBtm>
        </EmployeeForm>
      </EmployeeRightContainer>
    </EmployeeContainerRight>
  );
};

export default EmployeeSignIn;
