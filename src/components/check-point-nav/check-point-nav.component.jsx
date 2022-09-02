import React from "react";
import {
  CheckInSvg,
  CheckOutSvg,
  CheckPointNavContainer,
  CheckPointNavItem,
  CheckPointNavList,
  CheckPointNavLogo,
  CheckPointNavTop,
  MenuIcon,
} from "./check-point-nav.styles";

import Menu from "../../assets/svg/menu40.svg";
import { useNavigate } from "react-router";

const CheckPointNav = () => {
  const Navigate = useNavigate();
  return (
    <CheckPointNavContainer>
      <CheckPointNavTop>
        <CheckPointNavLogo>
          vms <MenuIcon src={Menu} />
        </CheckPointNavLogo>

        <CheckPointNavList>
          <CheckPointNavItem onClick={() => Navigate("/checkpointhome")}>
            <CheckInSvg />
            Check In
          </CheckPointNavItem>
          <CheckPointNavItem onClick={() => Navigate("check-out")}>
            <CheckOutSvg />
            Check Out
          </CheckPointNavItem>
        </CheckPointNavList>
      </CheckPointNavTop>
    </CheckPointNavContainer>
  );
};

export default CheckPointNav;
