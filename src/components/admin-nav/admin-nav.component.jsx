import React from "react";
import {
  AdminNavContainer,
  AdminNavItem,
  AdminNavList,
  AdminNavLogo,
  AdminNavTop,
  ApprovalSvg,
  DashSvg,
  ManageSvg,
  MenuIcon,
  ReportSvg,
  SettingsSvg,
} from "./admin-nav.styles";

import Menu from "../../assets/svg/menu40.svg";
import { useNavigate, useParams } from "react-router";

const AdminNav = () => {
  const Navigate = useNavigate();

  return (
    <AdminNavContainer>
      <AdminNavTop>
        <AdminNavLogo>
          vms <MenuIcon src={Menu} />
        </AdminNavLogo>

        <AdminNavList>
          <AdminNavItem onClick={() => Navigate("/adminhome")}>
            <DashSvg />
            {/* <NavIcon src={DashIcon} /> */}
            Dasboard
          </AdminNavItem>
          <AdminNavItem onClick={() => Navigate("manage")}>
            <ManageSvg />
            Manage
          </AdminNavItem>
          <AdminNavItem onClick={() => Navigate("report-log")}>
            <ReportSvg />
            Reports
          </AdminNavItem>
          <AdminNavItem onClick={() => Navigate("approval")}>
            <ApprovalSvg />
            Aprovals
          </AdminNavItem>
          <AdminNavItem>
            <SettingsSvg />
            Settings
          </AdminNavItem>
        </AdminNavList>
      </AdminNavTop>
    </AdminNavContainer>
  );
};

export default AdminNav;
