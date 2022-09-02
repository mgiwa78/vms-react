import React from "react";
import {
  HeaderContainer,
  HeaderTtitle,
  HeaderExitIcon,
} from "./approval-header.styles";
import ExitIcon from "../../assets/svg/logout.svg";

import Menu from "../../assets/svg/menu40.svg";
import { useNavigate } from "react-router";

const ApprovalHeader = () => {
  const Navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderTtitle>Approvals</HeaderTtitle>
      <HeaderExitIcon onClick={() => Navigate("/")} src={ExitIcon} />
    </HeaderContainer>
  );
};

export default ApprovalHeader;
