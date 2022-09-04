import React, { useEffect, useState } from "react";
import {
  AdminManageBody,
  AdminManageBodyRow,
  AdminManageComponents,
  AdminManageContainer,
  AdminManageSECContainer,
  AdminManageTable,
  AdminManageTableContainer,
  AdminManageTableHead,
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
import {
  TextDrpDwn,
  TextInput,
} from "../../components/form-elements/form-elements.component";

const AdminManage = () => {
  const Navigate = useNavigate();

  const EmployeeData = useSelector(SelectEmployeData);

  const [filteredArray, SetFilteredArray] = useState({});
  const [displayProfiles, setDisplayProfiles] = useState([]);
  const [DefProfiles, setDefProfiles] = useState([]);
  const DefSearchFormFields = {
    SearchValue: "",
  };
  const [SearchFormFields, SetSearchFormFields] = useState(DefSearchFormFields);
  const { SearchValue } = SearchFormFields;

  useEffect(() => {
    console.log(filteredArray);
    if (Object.keys(filteredArray).length === 0) return;
    if (filteredArray.sortedArray?.length === 0) return;

    setDisplayProfiles(filteredArray.sortedArray);
  }, [filteredArray]);

  useEffect(() => {
    if (EmployeeData.length === 0) return;
    setDisplayProfiles(EmployeeData);
    setDefProfiles(EmployeeData);
  }, [EmployeeData]);

  // useEffect(() => {
  //   if (!EmployeeData) return;
  //   if (!EmployeeData.length) return;
  //   if (!EmployeeData === AllUserData) return;
  //   SetAllUserData(EmployeeData);
  // }, [EmployeeData]);

  useEffect(() => {
    if (SearchValue === "" || !SearchValue) {
      SetFilteredArray({ sortedArray: DefProfiles, SearchValue });
    } else {
      handleSearchAction(DefProfiles, SearchValue);
    }
  }, [SearchValue]);

  const handleSearchAction = (DefProfiles, SearchValue) => {
    if (SearchValue === "") {
    } else {
      const patchedSearchValu =
        SearchValue[0].toUpperCase() +
        SearchValue.slice(1, SearchValue.length + 1);
      if (!DefProfiles) return;
      const sortedArray = DefProfiles.filter((PersonLog) => {
        return (
          PersonLog.NAME.includes(patchedSearchValu) ||
          PersonLog.NAME.includes(SearchValue) ||
          PersonLog.DATE.includes(SearchValue)
        );
      });
      const emptyarray = {
        sortedArray: [
          {
            NAME: "",
            PRIORITY: "",
            REQUESTED_BY: "",
            PURPOSE: "",
            APPROVAL_ID: "",
          },
        ],
      };
      sortedArray.length !== 0
        ? SetFilteredArray({ sortedArray, SearchValue })
        : SetFilteredArray({ ...emptyarray, SearchValue });
    }
  };

  const handleSortAction = (e, arrayToSort, SearchValue) => {
    console.log(arrayToSort);
    if (!arrayToSort) return;
    const sortValue = SearchValue ? SearchValue : e.target.value;

    switch (sortValue) {
      case "position": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aFirstLetter = a.POSITION[0];
          const bFirstLetter = b.POSITION[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "department": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aFirstLetter = a.PURPOSE[0];
          const bFirstLetter = b.PURPOSE[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "reg date": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aDate = a.DATE;
          const bDate = b.DATE;

          if (aDate > bDate) return 1;
          if (aDate < bDate) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "id": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          console.log(a.ID);
          const aId = Number(a.ID);
          const bId = Number(b.ID);

          if (aId > bId) return 1;
          if (aId < bId) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }

      default:
        break;
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "SearchValue")
      SetSearchFormFields({ ...SearchFormFields, [name]: value });
  };

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
            <AdminManageSECContainer>
              <AdminManageTableHead>
                <AdminManageTableTitle>Profile Log</AdminManageTableTitle>
                <div className="header_class">
                  <TextInput
                    checkIn
                    handleChange={(e) => handleInputChange(e)}
                    bg={"#000"}
                    value={SearchValue}
                    approvalSearch
                    name="SearchValue"
                    placeholder="Search by ID and Name"
                    lg={12}
                  />
                  <TextDrpDwn
                    sortOption={true}
                    options={["reg date", "position", "department", "id"]}
                    handleChange={(e) => handleSortAction(e, displayProfiles)}
                  />
                </div>
              </AdminManageTableHead>
              <AdminManageTableContainer>
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
                    {displayProfiles?.map((person) => {
                      const regDate = new Date(Number(`${person.DATE}`));
                      return (
                        <AdminManageTRow
                          className="body_row"
                          key={person.ID ? person.ID : 0}
                        >
                          <AMTd>{person.ID}</AMTd>
                          <AMTd>
                            {person.DATE
                              ? `${regDate.getFullYear()}-${
                                  months[regDate.getMonth() + 1]
                                }-${regDate.getDate()}`
                              : ""}
                          </AMTd>
                          <AMTd className="name">{person.NAME}</AMTd>
                          <AMTd className="position">{person.POSITION}</AMTd>
                          <AMTd>{person.DEPT}</AMTd>
                        </AdminManageTRow>
                      );
                    })}
                  </AMBody>
                </AdminManageTable>
              </AdminManageTableContainer>
            </AdminManageSECContainer>
          </Col>
        </AdminManageBodyRow>
      </AdminManageBody>
    </AdminManageContainer>
  );
};

export default AdminManage;
