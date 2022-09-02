import React from "react";
import { AdminWidgets } from "./dashboard.styles";
import ExitIcon from "../../assets/svg/logout.svg";
import UserIcon from "../../assets/svg/person.svg";
import AdminHeader from "../admin-header/admin-header.component";
import CheckInBrief from "../check-in-brief/check-in-brief.component";
import ApprovalWidget from "../approval-widget/approval-widget.component";
import { useDispatch } from "react-redux";
import {
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  SelectEmployeLog,
  SelectEmployeData,
} from "../../store/employee/employee-selector";
import { FetchCheckInDataInDb, FetchUserDataAsync } from "../../php/phpFuncs";

import Col from "react-bootstrap/Col";
import CheckedInWGT from "../checkedIn-count-widgets/checkedIn-count-widgets.component";

const Dashboard = () => {
  const dispatch = useDispatch();
  const EmployeeCheckInLog = useSelector(SelectEmployeLog);

  const EmployeeData = useSelector(SelectEmployeData);

  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    const b = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(b));

    dispatch(SetEmployeeAction(a));
  };
  useEffect(() => {
    if (!EmployeeData) return;
    if (EmployeeCheckInLog.length !== 0) return;
    console.log("no");
    Ant();
  }, []);

  return (
    <>
      <AdminHeader />
      <AdminWidgets>
        <ApprovalWidget />
        <CheckInBrief name="Just Checked In" />
        <Col lg={2}>
          <CheckedInWGT></CheckedInWGT>
        </Col>
      </AdminWidgets>
    </>
  );
};

export default Dashboard;
