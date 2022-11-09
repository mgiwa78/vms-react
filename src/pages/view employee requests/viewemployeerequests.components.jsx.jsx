import React, { useEffect, useState } from "react";

import { RequetsBody, RequetsBtn } from "./viewemployeerequests.styles";

import {
  VRBody,
  VRCell,
  VRH,
  VRHead,
  VRRow,
  RequetsReportContainer,
  RequetsReportTitle,
  RequetsReportTable,
  RequetsReportTableContainer,
  RequetsReportHeader,
} from "./viewemployeerequests.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../../components/form-elements/form-elements.component";
import {
  FetchRequestsByIdAsync,
  FetchRequestsDataInDb,
} from "../../php/phpFuncs";
import { SetRequestRequestAction } from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ApproveProfileForm from "../../components/approve-profile-form/approve-profile-form.component";
import { SelectUser } from "../../store/employee/employee-selector";

const ViewEmployeeReqs = () => {
  const dispatch = useDispatch();

  const [filteredArray, SetFilteredArray] = useState({});
  const curUser = useSelector(SelectUser);
  const [displayRequests, setDisplayRequests] = useState([]);
  const [DefRequests, setDefRequests] = useState([]);

  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    console.log(curUser.curProfileID);
    if (allRequests.length === 0) {
      const FetchRequestsById = async (id) => {
        const a = await FetchRequestsByIdAsync(id);
        console.log(a);
        setAllRequests(a);
      };
      FetchRequestsById(curUser.curProfileID);
    }
  }, [curUser]);

  useEffect(() => {
    console.log(filteredArray);
    if (Object.keys(filteredArray).length === 0) return;
    if (filteredArray.sortedArray?.length === 0) return;

    setDisplayRequests(filteredArray.sortedArray);
  }, [filteredArray]);

  useEffect(() => {
    if (allRequests.length === 0) return;
    setDisplayRequests(allRequests);
    setDefRequests(allRequests);
  }, [allRequests]);

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
      SetFilteredArray({ sortedArray: DefRequests, SearchValue });
    } else {
      handleSearchAction(DefRequests, SearchValue);
    }
  }, [SearchValue]);

  const handleSearchAction = (DefRequests, SearchValue) => {
    if (SearchValue === "") {
    } else {
      const patchedSearchValu =
        SearchValue[0].toUpperCase() +
        SearchValue.slice(1, SearchValue.length + 1);
      if (!DefRequests) return;
      const sortedArray = DefRequests.filter((PersonLog) => {
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
            Request_ID: "",
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
  const [RequestsFields, setRequestsFields] = useState({
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

  const handleApproveBtn = (e, RequestItem) => {
    if (
      !(
        RequestItem.POSITIION ||
        RequestItem.NAME ||
        RequestItem.PRIORITY ||
        RequestItem.PURPOSE ||
        RequestItem.REQUESTED_BY ||
        RequestItem.PURPOSE ||
        RequestItem.Request_ID
      )
    )
      return;
    e.preventDefault();
    const enddate = calcEndTime(RequestItem.TIME_LENGHT);
    setRequestsFields({
      position: RequestItem.POSITIION,
      name: RequestItem.NAME,
      priority: RequestItem.PRIORITY,
      purpose: RequestItem.PURPOSE,
      pesRes: RequestItem.REQUESTED_BY,
      dept: RequestItem.PURPOSE,
      endDate: enddate,
      RequestID: RequestItem.Request_ID,
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
    <RequetsBody>
      <RequetsReportContainer fluid="true">
        <RequetsReportHeader fluid="true">
          <RequetsReportTitle>Request requests </RequetsReportTitle>

          <div className="header_class">
            <TextInput
              checkIn
              handleChange={(e) => handleInputChange(e)}
              bg={"#000"}
              value={SearchValue}
              RequestSearch
              name="SearchValue"
              placeholder="Search by ID and Name"
              lg={6}
            />
            <TextDrpDwn
              sortOption={true}
              options={["priority", "due date", "name", "purpose"]}
              handleChange={(e) => handleSortAction(e, displayRequests)}
            />
          </div>
        </RequetsReportHeader>

        <RequetsReportTableContainer>
          <RequetsReportTable striped>
            <VRHead className="headText">
              <VRRow>
                <VRH>Request ID</VRH>
                <VRH>PRIORITY</VRH>
                <VRH>NAME</VRH>
                <VRH>Due date</VRH>

                <VRH>Status</VRH>
              </VRRow>
            </VRHead>
            <VRBody>
              {console.log(displayRequests)}
              {displayRequests
                ? displayRequests.map((RequestItem) => {
                    const rand = Math.random() * 10000000;
                    const regDate = new Date(Number(`${RequestItem.DUE_DATE}`));

                    return (
                      <VRRow key={rand}>
                        <VRCell>{RequestItem.APPROVAL_ID}</VRCell>
                        <VRCell priority={`${RequestItem.PRIORITY}`}>
                          <span className="priority">
                            {RequestItem.PRIORITY}
                          </span>
                        </VRCell>
                        <VRCell>{RequestItem.NAME}</VRCell>

                        <VRCell>
                          {RequestItem.DUE_DATE
                            ? `${regDate?.getFullYear()}-${
                                months[regDate.getMonth() + 1]
                              }-${regDate.getDate()}`
                            : ""}
                        </VRCell>
                        <VRCell>{RequestItem.STATUS}</VRCell>
                      </VRRow>
                    );
                  })
                : ""}
            </VRBody>
          </RequetsReportTable>
        </RequetsReportTableContainer>
      </RequetsReportContainer>
    </RequetsBody>
  );
};

export default ViewEmployeeReqs;
