import styled from "styled-components/macro";
import { ReactComponent as AdminLogin } from "../../assets/svg/admin-login.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

export const AdminContainerRight = styled.div`
  background-color: #f3f5f9;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AdminLoginTextContainer = styled.div`
  height: 50%;
  padding: 0px 20px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AdminLoginText = styled.div`
  font-size: 20px;
  color: #0000006c;
  width: 440px;
`;
export const AdminRightContainer = styled.div`
  width: 450px;
  text-align: left;
`;
export const AdminRightTitle = styled.p`
  font-size: 27px;
  font-weight: 600;
  margin: 0;
`;
export const AdminSubText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #00000071;
  margin-bottom: 23;
`;
export const AdminForm = styled.form`
  display: flex;
  text-align: left;
  flex-direction: column;
`;
export const AdminFormBtm = styled.div``;
export const AdminFormInput = styled.input`
  width: 100%;
  line-height: 1.5;
  color: #000000;
  background-color: #ffffff;
  font-size: 30px;
  border: 0 !important;
  margin-bottom: 15px;

  border-radius: 0.85rem !important;
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  &::placeholder {
    color: #00000049;
  }
`;
export const AdminFormLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`;

export const Logodiv = styled.div`
  color: #0066ff;
  font-size: 47px;
  font-weight: 700;
`;
