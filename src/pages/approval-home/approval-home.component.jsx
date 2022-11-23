import React, { useEffect, useState } from "react";

import { ApprovalBody, ApprovalBtn } from "./approval-home.styles";

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
import {
  TextDrpDwn,
  TextInput,
} from "../../components/form-elements/form-elements.component";
import { FetchApprovalsDataInDb } from "../../php/phpFuncs";
import { SetApprovalRequestAction } from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import { SelectApprovalRequests } from "../../store/employee/employee-selector";
import { useSelector } from "react-redux";
import ApproveProfileForm from "../../components/approve-profile-form/approve-profile-form.component";

const ApprovalHome = () => {
  const dispatch = useDispatch();

  const [filteredArray, SetFilteredArray] = useState({});
  const [displayApprovals, setDisplayApprovals] = useState([]);
  const [DefApprovals, setDefApprovals] = useState([]);

  const ApprovalRequests = useSelector(SelectApprovalRequests);

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
    console.log(filteredArray);
    if (Object.keys(filteredArray).length === 0) return;
    if (filteredArray.sortedArray?.length === 0) return;

    setDisplayApprovals(filteredArray.sortedArray);
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
        return (
          PersonLog.REQUESTED_BY.includes(patchedSearchValu) ||
          PersonLog.REQUESTED_BY.includes(SearchValue) ||
          PersonLog.DUE_DATE.includes(SearchValue)
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
          const aFirstLetter = a.REQUESTED_BY[0];
          const bFirstLetter = b.REQUESTED_BY[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "purpose": {
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
      case "due date": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aTime = a.DUE_DATE.split("-").join("");
          const bTime = b.DUE_DATE.split("-").join("");

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
    block: "",
  });

  const handleApproveBtn = (e, approvalItem) => {
    if (
      !(
        approvalItem.POSITIION ||
        approvalItem.NAME ||
        approvalItem.PRIORITY ||
        approvalItem.PURPOSE ||
        approvalItem.REQUESTED_BY ||
        approvalItem.PURPOSE ||
        approvalItem.APPROVAL_ID
      )
    )
      return;
    e.preventDefault();
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
      status: approvalItem.STATUS,
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
              options={["priority", "due date", "name", "purpose"]}
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
              {console.log(displayApprovals)}
              {displayApprovals
                ? displayApprovals.map((approvalItem) => {
                    const rand = Math.random() * 10000000;
                    const regDate = new Date(
                      Number(`${approvalItem.DUE_DATE}`)
                    );

                    return (
                      <AWRow key={rand}>
                        <AWCell>{approvalItem.APPROVAL_ID}</AWCell>
                        <AWCell priority={`${approvalItem.PRIORITY}`}>
                          <span className="priority">
                            {approvalItem.PRIORITY}
                          </span>
                        </AWCell>

                        <AWCell>
                          {approvalItem.DUE_DATE
                            ? `${regDate?.getFullYear()}-${
                                months[regDate.getMonth() + 1]
                              }-${regDate.getDate()}`
                            : ""}
                        </AWCell>
                        <AWCell>{approvalItem.REQUESTED_BY}</AWCell>
                        <AWCell>{approvalItem.PURPOSE}</AWCell>
                        <AWCell>
                          {" "}
                          <ApprovalBtn
                            onClick={(e) => handleApproveBtn(e, approvalItem)}
                          >
                            {approvalItem.REQUESTED_BY ||
                            approvalItem.REQUESTED_BY ||
                            approvalItem.DUE_DATE ||
                            approvalItem.PRIORITY ||
                            approvalItem.APPROVAL_ID
                              ? "Approve"
                              : "Invalid"}
                          </ApprovalBtn>
                        </AWCell>
                      </AWRow>
                    );
                  })
                : ""}
            </AWBody>
          </ApprovalReportTable>
        </ApprovalReportTableContainer>
      </ApprovalReportContainer>
    </ApprovalBody>
  );
};

export default ApprovalHome;
