import React, { useEffect, useState } from "react";
import {
  HeaderBox,
  HeaderContainer,
  HeaderExitIcon,
  HeaderTtitle,
  HeaderUserName,
} from "./security-header.styles";
import ExitIcon from "../../assets/svg/logout.svg";
import UserIcon from "../../assets/svg/person.svg";
import { useHref, useLocation, useNavigate, useParams } from "react-router";
import { SelectUser } from "../../store/employee/employee-selector";
import { useDispatch, useSelector } from "react-redux";
import { SetUserAction } from "../../store/employee/employee-actions";

const SecurityHeader = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const UserState = useSelector(SelectUser);
  const [pageId, setPgeId] = useState("");
  const [userName, setUserName] = useState("");

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
  useEffect(() => {
    // if (!curUser) Navigate("/");

    if (UserState && UserState !== "") {
      console.log(UserState);
      setUserName(UserState.curUserName);
    } else return setUserName("");
  }, [UserState]);

  const handleLogout = () => {
    dispatch(SetUserAction(null));
    Navigate("/");
  };
  return (
    <HeaderContainer>
      <HeaderTtitle>{pageId}</HeaderTtitle>
      <HeaderBox>
        <HeaderUserName>{userName}</HeaderUserName>

        <HeaderExitIcon onClick={() => handleLogout()} src={ExitIcon} />
      </HeaderBox>
    </HeaderContainer>
  );
};

export default SecurityHeader;
