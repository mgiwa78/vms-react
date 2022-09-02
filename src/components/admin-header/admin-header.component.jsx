import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderExitIcon,
  HeaderTtitle,
} from "./admin-header.styles";
import ExitIcon from "../../assets/svg/logout.svg";
import UserIcon from "../../assets/svg/person.svg";
import { useHref, useLocation, useNavigate, useParams } from "react-router";

const AdminHeader = () => {
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

export default AdminHeader;
