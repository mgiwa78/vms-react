import React from "react";
import { Outlet } from "react-router";
import SecurityHeader from "../../components/security-header/security-header.component";
import SecurityNav from "../../components/security-nav/security-nav.component";

import { SecurityBody, SecurityHomeContainer } from "./security-home.styles";

const SecurityHome = () => {
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
    <SecurityHomeContainer>
      <SecurityNav fluid="true" />
      <SecurityBody>
        <SecurityHeader />
        <Outlet />
      </SecurityBody>
    </SecurityHomeContainer>
  );
};

export default SecurityHome;
