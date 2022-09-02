import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AdminHeader from "../../components/admin-header/admin-header.component";
import AdminNav from "../../components/admin-nav/admin-nav.component";
import { AdminNavLogo } from "../../components/admin-nav/admin-nav.styles";
import CheckInBrief from "../../components/check-in-brief/check-in-brief.component";
import Dashboard from "../../components/dashboard/dashboard.component";
import {
  AdminBody,
  AdminHomeContainer,
  AdminWidgets,
} from "./admin-home.styles";
import axios from "axios";

import { useSelector } from "react-redux";
import { FetchUserDataAsync } from "../../php/phpFuncs";
import {
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import {
  SelectEmployeLog,
  SelectEmployeData,
} from "../../store/employee/employee-selector";
import { useDispatch } from "react-redux";

const AdminHome = () => {
  const dispatch = useDispatch();

  const [initialCheckedIn, setInitialCheckedIn] = useState([]);

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
