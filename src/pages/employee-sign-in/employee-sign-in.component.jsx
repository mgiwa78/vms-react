import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";
import { SetlectUserInDb } from "../../php/phpFuncs";
import { SetUserAction } from "../../store/employee/employee-actions";
import {
  EmployeeContainerRight,
  EmployeeForm,
  EmployeeFormBtm,
  EmployeeRightContainer,
  EmployeeRightTitle,
  EmployeeSubText,
} from "./employee-sign-in.styles";

const EmployeeSignIn = () => {
  const Navigate = useNavigate();
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
      Navigate("/employee");
    } else return alert("Invalid User");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const DefFormFields = {
    employeePassword: "",
    employeeName: "",
  };
  const [formFields, setFormFields] = useState({ ...DefFormFields });

  const { employeeName, employeePassword } = formFields;
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
    <EmployeeContainerRight>
      <EmployeeRightContainer>
        <EmployeeRightTitle>Employee sign-in</EmployeeRightTitle>
        <EmployeeSubText>Enter Employee Id and password</EmployeeSubText>

        <EmployeeForm>
          <TextInput
            type={"text"}
            label="ID"
            placeholder="Employee ID"
            InputPosition="form_input_signIn"
            value={employeeName}
            name={"employeeName"}
            handleChange={(e) => handleInputChange(e)}
          ></TextInput>
          <TextInput
            label="Password"
            type="password"
            placeholder="Employee Password"
            InputPosition="form_input_signIn"
            value={employeePassword}
            name={"employeePassword"}
            handleChange={(e) => handleInputChange(e)}
          ></TextInput>
          <EmployeeFormBtm>
            <CustomBtn
              handleClick={() => {
                const loginData = {
                  userType: "employee_users",
                  userName: employeeName,
                  userPassword: employeePassword,
                };
                handleLoginSubmit(loginData);
              }}
            >
              Sign In
            </CustomBtn>
          </EmployeeFormBtm>
        </EmployeeForm>
      </EmployeeRightContainer>
    </EmployeeContainerRight>
  );
};

export default EmployeeSignIn;
