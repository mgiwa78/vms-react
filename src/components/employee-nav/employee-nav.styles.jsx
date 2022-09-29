import styled from "styled-components/macro";
import { ReactComponent as DashIcon } from "../../assets/svg/dash5.svg";
import { ReactComponent as ManageIcon } from "../../assets/svg/manage1.svg";
import { ReactComponent as ReportIcon } from "../../assets/svg/report1.svg";
import { ReactComponent as ApprovalIcon } from "../../assets/svg/approval1.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/settings1.svg";

import Menu from "../../assets/svg/menu_icon.svg";

export const EmployeeNavContainer = styled.div`
  height: 100vh;
  background-color: #062132;
  width: max-content;
  padding: 40px 20px 40px 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow: hidden !important;
  position: fixed;
`;
export const EmployeeNavTop = styled.div``;
export const EmployeeNavList = styled.ul`
  margin: 0;
  background-color: #062132;

  margin-top: 60px;
  padding: 0;
  list-style: none;
  width: 240px;
  height: max-content;
`;
export const NavIcon = styled.img`
  margin-right: 20px;
`;
export const DashSvg = styled(DashIcon)`
  margin-right: 20px;
`;
export const ManageSvg = styled(ManageIcon)`
  margin-right: 20px;
`;
export const ApprovalSvg = styled(ApprovalIcon)`
  margin-right: 20px;
`;
export const ReportSvg = styled(ReportIcon)`
  margin-right: 20px;
`;
export const SettingsSvg = styled(SettingsIcon)`
  margin-right: 20px;
`;
export const EmployeeNavItem = styled.li`
  color: #b5bcc2;
  font-size: 16px;
  height: inherit;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
  fill: #b5bcc2;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    fill: #4cbfb0;
    background-color: #071b725e;
    color: #4cbfb0;
  }
`;
export const EmployeeNavLogo = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  color: #4cbfb0;
  text-align: center;
  font-size: 30px;
`;
export const MenuIcon = styled.img`
  margin-left: 15px;
`;
