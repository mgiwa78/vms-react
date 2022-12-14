import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AdminHeader from "../admin-header/admin-header.component";
import AdminNav from "../admin-nav/admin-nav.component";
import { AdminNavLogo } from "../admin-nav/admin-nav.styles";
import ApprovalHeader from "../approval-header/approval-header.component";
import ApprovalReport from "../approval-widget/approval-widget.component";
import CheckInBrief from "../check-in-brief/check-in-brief.component";
import Dashboard from "../dashboard/dashboard.component";
import {
  ApprovalBody,
  ApprovalBtn,
  ApprovalHomeContainer,
} from "./approval-home.styles";

import {
  AWBody,
  AWCell,
  AWH,
  AWHead,
  AWRow,
  ApprovalReportContainer,
  ApprovalReportTitle,
  ApprovalReportTable,
  ApprovalReportTableContainer,
  ApprovalReportHeader,
} from "./approval-home.styles";
import data from "../../userData.json";
import {
  TextDrpDwn,
  TextInput,
} from "../form-elements/form-elements.component";
import { FetchApprovalsDataInDb, FetchUserDataAsync } from "../../php/phpFuncs";
import {
  SetApprovalRequestAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import {
  SelectApprovalRequests,
  SelectEmployeData,
} from "../../store/employee/employee-selector";
import { useSelector } from "react-redux";
import ApproveProfileForm from "../approve-profile-form/approve-profile-form.component";
import CustomBtn from "../custom-btn/custom-btn.component";

const ApprovalHome = () => {
  const dispatch = useDispatch();

  const [filteredArray, SetFilteredArray] = useState({});
  const [displayApprovals, setDisplayApprovals] = useState([]);
  const [DefApprovals, setDefApprovals] = useState([]);

  const EmployeeData = useSelector(SelectEmployeData);
  const ApprovalRequests = useSelector(SelectApprovalRequests);
  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    dispatch(SetEmployeeAction(a));
  };
  const FetchApprovalRequestsAsync = async () => {
    const a = await FetchApprovalsDataInDb();

    dispatch(SetApprovalRequestAction(a));
  };
  useEffect(() => {
    if (ApprovalRequests.length === 0) {
      FetchApprovalRequestsAsync();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(filteredArray).length === 0) return;
    if (filteredArray.sortedArray?.length === 0) return;

    setDisplayApprovals(filteredArray.sortedArray);
    console.log(ApprovalRequests);
  }, [filteredArray]);

  useEffect(() => {
    if (ApprovalRequests.length === 0) return;
    setDisplayApprovals(ApprovalRequests);
    setDefApprovals(ApprovalRequests);
  }, [ApprovalRequests]);

  const DefSearchFormFields = {
    SearchValue: "",
  };
  const [SearchFormFields, SetSearchFormFields] = useState(DefSearchFormFields);
  const { SearchValue } = SearchFormFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "SearchValue")
      SetSearchFormFields({ ...SearchFormFields, [name]: value });
  };

  useEffect(() => {
    if (SearchValue === "" || !SearchValue) {
      SetFilteredArray({ sortedArray: DefApprovals, SearchValue });
    } else {
      handleSearchAction(DefApprovals, SearchValue);
    }
  }, [SearchValue]);

  const handleSearchAction = (DefApprovals, SearchValue) => {
    if (SearchValue === "") {
    } else {
      const patchedSearchValu =
        SearchValue[0].toUpperCase() +
        SearchValue.slice(1, SearchValue.length + 1);
      if (!DefApprovals) return;

      const sortedArray = DefApprovals.filter((PersonLog) => {
        PersonLog.name.includes(patchedSearchValu) &&
          console.log(PersonLog.name);
        return (
          PersonLog.name.includes(patchedSearchValu) ||
          PersonLog.name.includes(SearchValue) ||
          PersonLog.time.includes(SearchValue)
        );
      });

      SetFilteredArray({ sortedArray, SearchValue });
    }
  };
  const handleSortAction = (e, arrayToSort, SearchValue) => {
    if (!arrayToSort) return;
    const sortValue = SearchValue ? SearchValue : e.target.value;

    switch (sortValue) {
      case "priority": {
        const priorityMap = {
          High: 2,
          Medium: 1,
          Low: 0,
        };

        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aPriority = priorityMap[a.priority];
          const bPriority = priorityMap[b.priority];

          if (aPriority > bPriority) return -1;
          if (aPriority < bPriority) return 1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "name": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aFirstLetter = a.name[0];
          const bFirstLetter = b.name[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "purpose": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aFirstLetter = a.purpose[0];
          const bFirstLetter = b.purpose[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "due date": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aTime = a.time.split("-").join("");
          const bTime = b.time.split("-").join("");

          if (aTime > bTime) return 1;
          if (aTime < bTime) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }

      default:
        break;
    }
  };
  const [approvalsFields, setApprovalsFields] = useState({
    personnel_ID: "",
    position: " ",
    name: "",
    priority: "",
    purpose: "",
    date: "",
    pesRes: "",
    duration: "",
    dept: "",
  });

  const handleApproveBtn = (e, approvalItem) => {
    e.preventDefault();
    console.log(approvalItem);
    const enddate = calcEndTime(approvalItem.TIME_LENGHT);
    setApprovalsFields({
      position: approvalItem.POSITIION,
      name: approvalItem.NAME,
      priority: approvalItem.PRIORITY,
      purpose: approvalItem.PURPOSE,
      pesRes: approvalItem.REQUESTED_BY,
      dept: approvalItem.DEPT,
      endDate: enddate,
      approvalID: approvalItem.APPROVAL_ID,
      block: approvalItem.BLOCK,
    });
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
  const calcEndTime = (duration) => {
    const curDate = Date.now();
    const timeLenght = () => {
      if (duration.includes("week")) {
        const value = Number(duration.split(" ")[0]);
        return value * 6.048e8;
      }
      if (duration.includes("day")) {
        const value = Number(duration.split(" ")[0]);
        return value * 8.64e7;
      }
      if (duration.includes("month")) {
        const value = Number(duration.split(" ")[0]);
        return value * 2.628e9;
      }
    };
    return curDate + timeLenght();
  };
  return (
    <ApprovalBody>
      <ApproveProfileForm approvalsFields={approvalsFields} />
      <ApprovalReportContainer fluid="true">
        <ApprovalReportHeader fluid="true">
          <ApprovalReportTitle>Approval requests </ApprovalReportTitle>

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
              options={["", "priority", "due date", "name", "purpose"]}
              handleChange={(e) => handleSortAction(e, displayApprovals)}
            />
          </div>
        </ApprovalReportHeader>

        <ApprovalReportTableContainer>
          <ApprovalReportTable striped>
            <AWHead className="headText">
              <AWRow>
                <AWH>app_id</AWH>
                <AWH>PRIORITY</AWH>
                <AWH>Due date</AWH>

                <AWH>Requested By</AWH>
                <AWH>Purpose</AWH>
                <AWH>Approve</AWH>
              </AWRow>
            </AWHead>
            <AWBody>
              {displayApprovals.map((approvalItem) => {
                const rand = Math.random() * 10000000;
                const regDate = new Date(Number(`${approvalItem.DUE_DATE}`));

                return (
                  <AWRow key={rand}>
                    <AWCell>{approvalItem.APPROVAL_ID}</AWCell>
                    <AWCell priority={`${approvalItem.PRIORITY}`}>
                      <span className="priority">{approvalItem.PRIORITY}</span>
                    </AWCell>

                    <AWCell>{`${regDate.getFullYear()}-${
                      months[regDate.getMonth() + 1]
                    }-${regDate.getDate()}`}</AWCell>
                    <AWCell>{approvalItem.NAME}</AWCell>
                    <AWCell>{approvalItem.PURPOSE}</AWCell>
                    <AWCell>
                      {" "}
                      <ApprovalBtn
                        onClick={(e) => handleApproveBtn(e, approvalItem)}
                      >
                        Approve
                      </ApprovalBtn>
                    </AWCell>
                  </AWRow>
                );
              })}
            </AWBody>
          </ApprovalReportTable>
        </ApprovalReportTableContainer>
      </ApprovalReportContainer>
    </ApprovalBody>
  );
};

export default ApprovalHome;
