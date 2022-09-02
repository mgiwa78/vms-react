import React, { useEffect, useState } from "react";
import {
  AdminManageBody,
  AdminManageBodyRow,
  AdminManageComponents,
  AdminManageContainer,
  AdminManageTable,
  AdminManageTableContainer,
  AdminManageTableTitle,
  AdminManageThead,
  AdminManageTRow,
  AMBody,
  AMTd,
  AMTH,
  HeaderContainer,
  HeaderExitIcon,
  HeaderItem,
  HeaderItems,
  HeaderTtitle,
} from "./admin-manage.styles";
import ExitIcon from "../../assets/svg/logout.svg";
import ApprovalWidget from "../../components/approval-widget/approval-widget.component";
import AddProfileForm from "../../components/add-visitor-form/add-visitor-form.component";
import EditProfileForm from "../../components/edit-profile-form/edit-profile-form.component";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  SelectEmployeLog,
  SelectEmployeData,
} from "../../store/employee/employee-selector";
import { FetchUniqueUserData } from "../../php/phpFuncs";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { SetCheckInLogAction } from "../../store/employee/employee-actions";
import AdminHeader from "../../components/admin-header/admin-header.component";
import { Col } from "react-bootstrap";

const AdminManage = () => {
  const Navigate = useNavigate();

  const EmployeeData = useSelector(SelectEmployeData);

  const [AllUserData, SetAllUserData] = useState([]);

  useEffect(() => {
    if (!EmployeeData) return;
    if (!EmployeeData.length) return;
    if (!EmployeeData === AllUserData) return;
    SetAllUserData(EmployeeData);
  }, [EmployeeData]);

  const months = {
    1: "jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return (
    <AdminManageContainer>
      <AdminHeader />
      <AdminManageBody>
        <AdminManageBodyRow>
          <Col lg={6}>
            <AddProfileForm />
          </Col>
          <Col lg={6}>
            <EditProfileForm />
          </Col>
        </AdminManageBodyRow>
        <AdminManageBodyRow>
          <Col>
            <AdminManageTableContainer>
              <AdminManageTableTitle>Profile log Log</AdminManageTableTitle>

              <AdminManageTable>
                <AdminManageThead>
                  <AdminManageTRow>
                    <AMTH>ID</AMTH>
                    <AMTH>REG DATE</AMTH>
                    <AMTH>Name</AMTH>
                    <AMTH>Position</AMTH>
                    <AMTH>Department</AMTH>
                  </AdminManageTRow>
                </AdminManageThead>
                <AMBody>
                  {AllUserData?.map((person) => {
                    const regDate = new Date(Number(`${person.DATE}`));
                    return (
                      <AdminManageTRow className="body_row" key={person.ID}>
                        <AMTd>{person.ID}</AMTd>
                        <AMTd>{`${regDate.getFullYear()}-${
                          months[regDate.getMonth() + 1]
                        }-${regDate.getDate()}`}</AMTd>
                        <AMTd className="name">{person.NAME}</AMTd>
                        <AMTd className="position">{person.POSITION}</AMTd>
                        <AMTd>{person.DEPT}</AMTd>
                      </AdminManageTRow>
                    );
                  })}
                </AMBody>
              </AdminManageTable>
            </AdminManageTableContainer>
          </Col>
        </AdminManageBodyRow>
      </AdminManageBody>
    </AdminManageContainer>
  );
};

export default AdminManage;
