import React from "react";
import {
  SecurityNavContainer,
  SecurityNavItem,
  SecurityNavList,
  SecurityNavLogo,
  SecurityNavTop,
  ApprovalSvg,
  DashSvg,
  ManageSvg,
  MenuIcon,
  ReportSvg,
  SettingsSvg,
} from "./security-nav.styles";

import Menu from "../../assets/svg/menu40.svg";
import { useNavigate, useParams } from "react-router";

const SecurityNav = () => {
  const Navigate = useNavigate();

  return (
    <SecurityNavContainer>
      <SecurityNavTop>
        <SecurityNavLogo>
          vms <MenuIcon src={Menu} />
        </SecurityNavLogo>

        <SecurityNavList>
          <SecurityNavItem onClick={() => Navigate("/secutrityhome")}>
            <DashSvg />
            {/* <NavIcon src={DashIcon} /> */}
            Dasboard
          </SecurityNavItem>
        </SecurityNavList>
      </SecurityNavTop>
    </SecurityNavContainer>
  );
};

export default SecurityNav;
