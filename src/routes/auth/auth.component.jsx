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

const Auth = () => {
  const Navigate = useNavigate();
  return (
    <AuthContainer>
      <AuthContainerLeft>
        <AuthLoginTextContainer>
          {" "}
          <Logodiv>SPECTRA</Logodiv>
          <AuthLoginText>
            Ensuring security for your Organizations and visitors
          </AuthLoginText>
        </AuthLoginTextContainer>
        <AuthLoginSvg />
      </AuthContainerLeft>
      <Outlet />
      <LoginNav>
        <Button onClick={() => Navigate("adminlogin")} className="NavLink">
          Auth Sign
        </Button>
        <Button onClick={() => Navigate("employeelogin")} className="NavLink">
          Employee
        </Button>
        <Button onClick={() => Navigate("checkpointhome")} className="NavLink">
          Check-Point
        </Button>
      </LoginNav>
    </AuthContainer>
  );
};

export default Auth;
