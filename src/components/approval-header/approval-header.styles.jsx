import styled from "styled-components/macro";

import Menu from "../../assets/svg/menu_icon.svg";

export const HeaderContainer = styled.div`
  background-color: #071b72;
  width: calc(100vw - 390px);
  height: 80px;
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
