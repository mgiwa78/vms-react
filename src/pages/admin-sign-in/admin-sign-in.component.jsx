import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import { SetlectUserInDb } from "../../php/phpFuncs";
import {
  AdminContainerRight,
  AdminForm,
  AdminFormBtm,
  AdminRightContainer,
  AdminRightTitle,
  AdminSubText,
} from "./admin-sign-in.styles";
import { useDispatch } from "react-redux";
import { SetUserAction } from "../../store/employee/employee-actions";

const AdminSignIn = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const confirmUserLogin = async (userData) => {
    const [data] = await SetlectUserInDb(userData);
    if (data) {
      console.log(data);
      const userData = {
        curUserName: data.USERNAME,
        curPassword: data.PASSWORD,
        curProfileID: data.LOGIN_PROFILE_ID,
      };
      dispatch(SetUserAction({ ...userData }));
      Navigate("/adminhome");
    } else return alert("Invalid User");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const DefFormFields = {
    adminName: "",
    adminPassword: "",
  };
  const [formFields, setFormFields] = useState({ ...DefFormFields });

  const { adminName, adminPassword } = formFields;
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
  const Navigate = useNavigate();
  return (
    <AdminContainerRight>
      <AdminRightContainer>
        <AdminRightTitle>Admin sign-in</AdminRightTitle>
        <AdminSubText>Enter admin Name and password</AdminSubText>

        <AdminForm>
          <TextInput
            handleChange={(e) => handleInputChange(e)}
            InputPosition="form_input_signIn"
            label="Name"
            type="text"
            value={adminName}
            name={"adminName"}
            placeholder="Admin Name"
          ></TextInput>

          <TextInput
            label="Password"
            type="password"
            placeholder="Admin Password"
            value={adminPassword}
            name={"adminPassword"}
            handleChange={(e) => handleInputChange(e)}
            InputPosition="form_input_signIn"
          ></TextInput>

          <AdminFormBtm>
            <CustomBtn
              handleClick={() => {
                const loginData = {
                  userType: "admin_users",
                  userName: adminName,
                  userPassword: adminPassword,
                };
                handleLoginSubmit(loginData);
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
