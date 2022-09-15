import React from "react";
import Button from "react-bootstrap/Button";
import {
  AuthContainer,
  AuthContainerLeft,
  AuthLoginSvg,
  AuthLoginText,
  AuthLoginTextContainer,
  LoginNav,
  Logodiv,
} from "./auth.styles";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  SelectEmployeLog,
  SelectEmployeData,
  SelectUser,
} from "../../store/employee/employee-selector";
import {
  FetchCheckInDataInDb,
  FetchUserDataAsync,
  SetApprovalReqDataInDb,
  SetCeckInDataInDb,
  SetDataInDb,
} from "../../php/phpFuncs";
import {
  SetCheckInLogAction,
  SetEmployeeAction,
  SetUserAction,
} from "../../store/employee/employee-actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InitData, InitCheckInData, InitApprovalData } from "../../init";
import { useLocation } from "react-router";
const Auth = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const EmployeeData = useSelector(SelectEmployeData);
  const EmployeeCheckInLog = useSelector(SelectEmployeLog);
  const location = useLocation();

  useEffect(() => {
    if (!curUser) Navigate("/");
    console.log(location);
  }, [location]);

  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    const b = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(b));

    dispatch(SetEmployeeAction(a));
  };
  const curUser = useSelector(SelectUser);

  useEffect(() => {
    // SetApprovalReqDataInDb(InitApprovalData);
    if (EmployeeData.length !== 0) return;
    Ant();
    dispatch(SetUserAction(null));
  }, []);

  // useEffect(() => {
  //   // SetApprovalReqDataInDb(InitApprovalData);
  //   if (!curUser) Navigate("/");
  // }, [curUser]);

  return (
    <AuthContainer>
      <AuthContainerLeft>
        <AuthLoginTextContainer>
          {" "}
          <Logodiv>VMS</Logodiv>
          <AuthLoginText>
            Ensuring security for your Organizations and visitors
          </AuthLoginText>
        </AuthLoginTextContainer>
        <AuthLoginSvg />
      </AuthContainerLeft>
      <Outlet />
      <LoginNav>
        <Button onClick={() => Navigate("/")} className="NavLink">
          Auth Sign
        </Button>
        <Button onClick={() => Navigate("employeelogin")} className="NavLink">
          Employee
        </Button>
        <Button onClick={() => Navigate("checkpointlogin")} className="NavLink">
          Check-Point
        </Button>
      </LoginNav>
    </AuthContainer>
  );
};

export default Auth;
