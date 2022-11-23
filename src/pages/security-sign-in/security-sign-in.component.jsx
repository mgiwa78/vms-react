import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import { SetlectSecurityUserInDb } from "../../php/phpFuncs";
import { SetUserAction } from "../../store/employee/employee-actions";
import {
  SecurityContainerRight,
  SecurityForm,
  SecurityFormBtm,
  SecurityRightContainer,
  SecurityRightTitle,
  SecuritySubText,
} from "./security-sign-in.styles";

const SecuritySignIn = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const confirmUserLogin = async (userData) => {
    const [data] = await SetlectSecurityUserInDb(userData);
    if (data) {
      console.log(data);
      const userData = {
        curUserName: data.USERNAME,
        curPassword: data.PASSWORD,
        curProfileID: data.LOGIN_PROFILE_ID,
      };
      dispatch(SetUserAction({ ...userData }));
      Navigate("/secutrityhome");
    } else return alert("Invalid User");
  };

  const DefFormFields = {
    securityPassword: "",
    securityName: "",
  };
  const [formFields, setFormFields] = useState({ ...DefFormFields });

  const { securityName, securityPassword } = formFields;
  const handleLoginSubmit = (data) => {
    console.log(data);
    if (
      data.userType.length === 0 ||
      data.userName.length === 0 ||
      data.userPassword.length === 0
    )
      return;
    confirmUserLogin(data);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SecurityContainerRight>
      <SecurityRightContainer>
        <SecurityRightTitle>Security sign-in</SecurityRightTitle>
        <SecuritySubText>Enter Security Id and password</SecuritySubText>

        <SecurityForm>
          <TextInput
            type={"text"}
            label="ID"
            placeholder="Security ID"
            InputPosition="form_input_signIn"
            value={securityName}
            name={"securityName"}
            handleChange={(e) => handleInputChange(e)}
          ></TextInput>
          <TextInput
            label="Password"
            type="password"
            placeholder="Security Password"
            InputPosition="form_input_signIn"
            value={securityPassword}
            name={"securityPassword"}
            handleChange={(e) => handleInputChange(e)}
          ></TextInput>
          <SecurityFormBtm>
            <CustomBtn
              handleClick={() => {
                const loginData = {
                  userType: "security_type",
                  userName: securityName,
                  userPassword: securityPassword,
                };
                handleLoginSubmit(loginData);
              }}
            >
              Sign In
            </CustomBtn>
          </SecurityFormBtm>
        </SecurityForm>
      </SecurityRightContainer>
    </SecurityContainerRight>
  );
};

export default SecuritySignIn;
