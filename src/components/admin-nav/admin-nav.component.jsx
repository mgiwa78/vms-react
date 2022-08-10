import React from "react";
import {
  AdminNavContainer,
  AdminNavItem,
  AdminNavList,
  AdminNavLogo,
  AdminNavTop,
  MenuIcon,
} from "./admin-nav.styles";

import Menu from "../../assets/svg/menu40.svg";

const AdminNav = () => {
  return (
    <AdminNavContainer>
      <AdminNavTop>
        <AdminNavLogo>
          vms <MenuIcon src={Menu} />
        </AdminNavLogo>

        <AdminNavList>
          <AdminNavItem>Dasboard</AdminNavItem>
          <AdminNavItem>Manage</AdminNavItem>
          <AdminNavItem>Reports</AdminNavItem>
          <AdminNavItem>Aprovals</AdminNavItem>
          <AdminNavItem>Settings</AdminNavItem>
        </AdminNavList>
      </AdminNavTop>
    </AdminNavContainer>
  );
};

export default AdminNav;
