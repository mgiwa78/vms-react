import styled from "styled-components/macro";
import { ReactComponent as AuthLogin } from "../../assets/svg/admin-login.svg";

export const AuthContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

export const AuthContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const AuthLoginTextContainer = styled.div`
  height: 50%;
  padding: 0px 20px;
  font-weight: 600;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AuthLoginText = styled.div`
  font-size: 20px;
  color: #0000006c;
  width: 440px;
`;

export const AuthLoginSvg = styled(AuthLogin)`
  width: 70%;
`;
export const Logodiv = styled.div`
  color: #0066ff;
  font-size: 47px;
  font-weight: 700;
`;
export const LoginNav = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  .NavLink {
    color: #0d6efd;
    background-color: #ffffff70;
    border: none;
    margin-right: 10px;
    &:hover {
      color: #fff;
      background-color: #0d6efd;
    }
    &:focus {
      box-shadow: none;
    }
  }
`;
