import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  HeaderExitIcon,
  HeaderContainer,
  HeaderTtitle,
} from "./check-point-header.styles";
import { useHref, useLocation, useParams } from "react-router";
import ExitIcon from "../../assets/svg/logout.svg";

const CheckPointHeader = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const [pageId, setPgeId] = useState("");

  useEffect(() => {
    console.log(location);
    const { pathname } = location;
    if (pathname) {
      const newLocation = pathname.split("/")[pathname.split("/").length - 1];
      console.log(newLocation.split("")[0].toUpperCase());
      const newPageId =
        newLocation.split("")[0].toUpperCase() + newLocation.slice(1);
      setPgeId(newPageId);
    } else {
      setPgeId("Dashboard");
    }
  }, [location]);
  return (
    <HeaderContainer>
      <HeaderTtitle>{pageId}</HeaderTtitle>
      <HeaderExitIcon onClick={() => Navigate("/")} src={ExitIcon} />
    </HeaderContainer>
  );
};

export default CheckPointHeader;
