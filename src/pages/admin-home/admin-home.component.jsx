import React from "react";
import { Outlet } from "react-router";
import AdminHeader from "../../components/admin-header/admin-header.component";
import AdminNav from "../../components/admin-nav/admin-nav.component";

import { AdminBody, AdminHomeContainer } from "./admin-home.styles";

const AdminHome = () => {
  // mainData.forEach((data1) => {
  //   let formdata = new FormData();

  //   formdata.append("_id", data1._id);
  //   formdata.append("priority", data1.priority);
  //   formdata.append("purpose", data1.purpose);
  //   formdata.append("personnelType", data1.personnelType);
  //   formdata.append("personRes", data1.personRes);
  //   formdata.append("name", data1.name);
  //   formdata.append("dept", data1.dept);
  //   formdata.append("date", data1.date);
  //   formdata.append("duration", data1.duration);
  //   console.log(formdata);
  //   fetch("http://localhost/vms_back/index.php", {
  //     method: "POST",
  //     headers: {
  //       // Accept: "application/json",
  //       // "Content-Type": "application/json",
  //     },
  //     body: formdata,
  //   });
  // });

  // .then((res) => res.json())
  // .then((response) => console.log(response));
  // const obj = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     content: "test1",
  //   }),
  // };
  // let formdata = new FormData();

  // formdata.append("_id", "aa");
  // fetch("http://localhost/vms_back/index.php", {
  //   method: "POST",
  //   headers: {
  //     // Accept: "application/json",
  //     // "Content-Type": "application/json",
  //   },
  //   body: formdata,
  // })
  //   .then((response) => response.json())
  //   .then((data) => SetAllUserData(data));

  return (
    <AdminHomeContainer>
      <AdminNav fluid="true" />
      <AdminBody>
        <AdminHeader />
        <Outlet />
      </AdminBody>
    </AdminHomeContainer>
  );
};

export default AdminHome;
