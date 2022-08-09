import React from "react";
import { Button } from "react-bootstrap";
import {
  AdminContainer,
  AdminContainerLeft,
  AdminContainerRight,
  AdminForm,
  AdminFormBtm,
  AdminFormInput,
  AdminFormLabel,
  AdminLoginSvg,
  AdminLoginText,
  AdminLoginTextContainer,
  AdminRightContainer,
  AdminRightTitle,
  AdminSubText,
  LoginNav,
  Logo,
  Logodiv,
  LogoSvg,
} from "./admin-sign-in.styles";

const AdminSignIn = () => {
  return (
    <AdminContainerRight>
      <AdminRightContainer>
        <AdminRightTitle>Admin sign-in</AdminRightTitle>
        <AdminSubText>Enter admin Id and password</AdminSubText>

        <AdminForm>
          <AdminFormLabel>ID</AdminFormLabel>
          <AdminFormInput placeholder="Admin ID"></AdminFormInput>
          <AdminFormLabel>Password</AdminFormLabel>
          <AdminFormInput
            type="password"
            placeholder="Admin Password"
          ></AdminFormInput>
          <AdminFormBtm>
            <Button>Sign In</Button>
          </AdminFormBtm>
        </AdminForm>
      </AdminRightContainer>
    </AdminContainerRight>
  );
};

export default AdminSignIn;
