import styled from "styled-components/macro";

import Menu from "../../assets/svg/menu_icon.svg";

export const AdminNavContainer = styled.div`
  height: 100vh;
  background-color: #071b72;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AdminNavTop = styled.div`
  padding-top: 30px;
`;
export const AdminNavList = styled.ul`
  margin: 0;
  background-color: #ffffff3d;

  margin-top: 60px;
  padding: 0;
  list-style: none;
  width: 300px;
  height: max-content;
`;
export const AdminNavItem = styled.li`
  color: white;
  font-size: 20px;
  height: inherit;
  font-weight: 500;
  padding: 15px 25px;
  &:hover {
    background-color: #071b72;
  }
`;
export const AdminNavLogo = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0 26px;
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  text-align: center;
  font-size: 40px;
`;
export const MenuIcon = styled.img`
  margin-left: 15px;
`;
