import React, { useEffect, useState } from "react";
import { FetchUniqueUserData } from "../../php/phpFuncs";
import { useDispatch } from "react-redux";
import CheckPointHeader from "../../components/check-header/check-point-header.components";
import ValidUserCheckin from "../../components/check-in-valid-user/check-in-valid-user.component";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { FormRow } from "../../components/edit-profile-form/edit-profile-form.styles";
import { TextInput } from "../../components/form-elements/form-elements.component";
import {
  CheckPointBody,
  CheckPointBodyContainer,
  CheckPointContainer,
  HeaderContainer,
  HeaderExitIcon,
  HeaderTtitle,
} from "./check-point-home.styles";
import {
  ListItem,
  ListValue,
  QRSvg,
  ValidUserCheckinContainer,
  ValidUserItem,
  ValidUserLeft,
  ValidUserList,
  ValidUserListItem,
  ValidUserProfile,
  ValidUserRight,
  ValidUserRow,
  ValidUserRowID,
  ValidUserRowItem,
} from "../../components/check-in-valid-user/check-in-valid-user.styles";
import ExitIcon from "../../assets/svg/logout.svg";
import { AddLogAction } from "../../store/employee/employee-actions";
import { useSelector } from "react-redux";
import { SelectEmployeLog } from "../../store/employee/employee-selector";
import CheckPointNav from "../../components/check-point-nav/check-point-nav.component";
import { Outlet, useNavigate } from "react-router";

const CheckPoint = () => {
  return (
    <CheckPointContainer>
      <CheckPointNav />

      <CheckPointBody>
        <CheckPointHeader />
        <CheckPointBodyContainer>
          <Outlet />
        </CheckPointBodyContainer>
      </CheckPointBody>
    </CheckPointContainer>
  );
};

export default CheckPoint;
