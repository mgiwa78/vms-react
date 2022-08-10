import React from "react";
import AdminNav from "../../components/admin-nav/admin-nav.component";
import { AdminNavLogo } from "../../components/admin-nav/admin-nav.styles";
import { AdminHomeContainer } from "./admin-home.styles";

const AdminHome = () => {
  return (
    <AdminHomeContainer>
      <AdminNav />
    </AdminHomeContainer>
  );
};

export default AdminHome;
