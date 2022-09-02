import styled from "styled-components/macro";

export const CheckPointContainer = styled.div`
  background-color: #f4f6f5;
  height: 100vh;
  display: flex;
  width: 100vw;
`;

export const CheckPointBody = styled.div`
  padding: 0 0 0 280px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CheckPointBodyContainer = styled.div`
  margin-top: 160px;
  padding: 0px 50px;
`;

export const HeaderContainer = styled.div`
  background-color: #071b72;
  height: 80px;
  width: calc(100vw - 380px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 50px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 9px #071b7247;
`;
export const HeaderExitIcon = styled.img``;
export const HeaderTtitle = styled.div`
  font-weight: 600;
  font-size: 30px;
`;
