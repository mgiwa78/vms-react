import styled from "styled-components/macro";
import { ReactComponent as QRCode } from "../../assets/svg/qr-code.svg";

export const ValidUserCheckinContainer = styled.div`
  height: max-content;
  border-radius: 8px;
  padding: 60px 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
`;
export const ValidUserLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
`;
export const ValidUserRight = styled.div``;
export const ListItem = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #00000060;
`;
export const ListValue = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
export const ValidUserList = styled.div``;
export const ValidUserProfile = styled.div`
  height: 300px;
  width: 300px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;
export const QRSvg = styled(QRCode)``;
