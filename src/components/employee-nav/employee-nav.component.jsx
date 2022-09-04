import React from "react";
import {
  EmployeeNavContainer,
  EmployeeNavItem,
  EmployeeNavList,
  EmployeeNavLogo,
  EmployeeNavTop,
  DashSvg,
  MenuIcon,
  SettingsSvg,
} from "./employee-nav.styles";

import Menu from "../../assets/svg/menu40.svg";
import { useNavigate } from "react-router";

const EmployeeNav = () => {
  const Navigate = useNavigate();

  return (
    <EmployeeNavContainer>
      <EmployeeNavTop>
        <EmployeeNavLogo>
          vms <MenuIcon src={Menu} />
        </EmployeeNavLogo>

        <EmployeeNavList>
          <EmployeeNavItem onClick={() => Navigate("/employee")}>
            <DashSvg />
            {/* <NavIcon src={DashIcon} /> */}
            Send Request
          </EmployeeNavItem>
          {/* <EmployeeNavItem onClick={() => Navigate("Requests")}>
            <ManageSvg />
            View Requests
          </EmployeeNavItem> */}
          <EmployeeNavItem>
            <SettingsSvg />
            Settings
          </EmployeeNavItem>
        </EmployeeNavList>
      </EmployeeNavTop>
    </EmployeeNavContainer>
  );
};

export default EmployeeNav;
