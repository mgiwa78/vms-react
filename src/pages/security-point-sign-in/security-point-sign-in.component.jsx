import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import { SetlectCheckinUserInDb, SetlectUserInDb } from "../../php/phpFuncs";
import { SetUserAction } from "../../store/employee/employee-actions";
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
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const confirmUserLogin = async (userData) => {
    const [data] = await SetlectCheckinUserInDb(userData);

    if (data) {
      console.log(data);
      const userData = {
        curUserName: data.USERNAME,
        curPassword: data.PASSWORD,
        curProfileID: data.LOGIN_PROFILE_ID,
      };
      dispatch(SetUserAction({ ...userData }));
      Navigate("/checkpointhome");
    } else return alert("Invalid User");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const DefFormFields = {
    securityPointID: "",
  };
  const [formFields, setFormFields] = useState({ ...DefFormFields });

  const { securityPointID } = formFields;
  const handleLoginSubmit = (data) => {
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
    <CheckInContainerRight>
      <CheckInRightContainer>
        <CheckInRightTitle>CheckIn sign-in</CheckInRightTitle>
        <CheckInSubText>Enter check-in verification Id</CheckInSubText>

        <CheckInForm>
          <TextInput
            label="Verification ID"
            type="text"
            InputPosition="form_input_signIn"
            placeholder="Check-In Verification ID"
            value={securityPointID}
            name="securityPointID"
            handleChange={(e) => handleInputChange(e)}
          ></TextInput>

          <CheckInFormBtm>
            <CustomBtn
              handleClick={() => {
                const loginData = {
                  userType: "security_user",
                  userName: securityPointID,
                  userPassword: "DEFAULT",
                };
                handleLoginSubmit(loginData);
              }}
            >
              Sign In
            </CustomBtn>
          </CheckInFormBtm>
        </CheckInForm>
      </CheckInRightContainer>
    </CheckInContainerRight>
  );
};

export default CheckInPointSignIn;
