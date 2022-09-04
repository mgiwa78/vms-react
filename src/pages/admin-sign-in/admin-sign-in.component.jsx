import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
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
  const handleFormSubmit = (e) => {};
  const Navigate = useNavigate();
  return (
    <AdminContainerRight>
      <AdminRightContainer>
        <AdminRightTitle>Admin sign-in</AdminRightTitle>
        <AdminSubText>Enter admin Id and password</AdminSubText>

        <AdminForm>
          <TextInput
            InputPosition="form_input_signIn"
            label="ID"
            type="text"
            placeholder="Admin ID"
          ></TextInput>

          <TextInput
            label="Password"
            type="password"
            placeholder="Admin Password"
            InputPosition="form_input_signIn"
          ></TextInput>

          <AdminFormBtm>
            <CustomBtn
              handleClick={() => {
                Navigate("/adminhome");
              }}
            >
              Sign In
            </CustomBtn>
          </AdminFormBtm>
        </AdminForm>
      </AdminRightContainer>
    </AdminContainerRight>
  );
};

export default AdminSignIn;
