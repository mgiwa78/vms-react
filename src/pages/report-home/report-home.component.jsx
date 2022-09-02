import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import AdminHeader from "../../components/admin-header/admin-header.component";
import AdminNav from "../../components/admin-nav/admin-nav.component";
import { AdminNavLogo } from "../../components/admin-nav/admin-nav.styles";
import ApprovalHeader from "../../components/approval-header/approval-header.component";
import ApprovalReport from "../../components/approval-widget/approval-widget.component";
import CheckInBrief from "../../components/check-in-brief/check-in-brief.component";
import Dashboard from "../../components/dashboard/dashboard.component";
import { ReportBody } from "./report-home.styles";

import {
  RBody,
  RCell,
  RH,
  RHead,
  RRow,
  ReportContainer,
  ReportTitle,
  ReportTable,
  ReportTableContainer,
  ReportHeader,
  HeaderContainer,
  HeaderExitIcon,
  HeaderItem,
  HeaderItems,
  HeaderTtitle,
} from "./report-home.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../../components/form-elements/form-elements.component";
import { FetchCheckInDataInDb, FetchUserDataAsync } from "../../php/phpFuncs";
import {
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import {
  SelectEmployeLog,
  SelectEmployeData,
} from "../../store/employee/employee-selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ExitIcon from "../../assets/svg/logout.svg";

const ReportHome = () => {
  const Navigate = useNavigate();
  const EmployeLog = useSelector(SelectEmployeLog);

  const dispatch = useDispatch();

  const [filteredArray, SetFilteredArray] = useState({});
  const [displayReports, setDisplayReports] = useState([]);
  const [DefReports, setDefReports] = useState([]);

  const EmployeeData = useSelector(SelectEmployeData);

  const fetchLogsData = async () => {
    const data = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(data));
  };
  useEffect(() => {
    if (!EmployeLog.length) {
      fetchLogsData();
    }
  }, []);
  useEffect(() => {
    if (!EmployeLog.length) return;
    console.log(EmployeLog);
    setDisplayReports(EmployeLog);
    setDefReports(EmployeLog);
  }, [EmployeLog]);
  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    const b = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(b));

    dispatch(SetEmployeeAction(a));
  };

  useEffect(() => {
    if (Object.keys(filteredArray).length === 0) return;
    if (filteredArray.sortedArray?.length === 0) return;

    setDisplayReports(filteredArray.sortedArray);
  }, [filteredArray]);

  const DefFormFields = {
    SearchValue: "",
  };
  const [formFields, SetFormFields] = useState(DefFormFields);
  const { SearchValue } = formFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "SearchValue") SetFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    if (SearchValue === "" || !SearchValue) {
      SetFilteredArray({ sortedArray: DefReports, SearchValue });
    } else {
      handleSearchAction(DefReports, SearchValue.toLocaleLowerCase());
    }
  }, [SearchValue]);

  const handleSearchAction = (DefReports, SearchValue) => {
    if (SearchValue === "") {
    } else {
      const patchedSearchValu =
        SearchValue[0].toUpperCase() +
        SearchValue.slice(1, SearchValue.length + 1);
      if (!DefReports) return;
      const sortedArray = DefReports.filter((PersonLog) => {
        console.log(SearchValue);

        return (
          PersonLog.NAME.includes(patchedSearchValu) ||
          PersonLog.NAME.includes(SearchValue) ||
          PersonLog.ID.includes(SearchValue) ||
          PersonLog.POSITION.includes(SearchValue) ||
          PersonLog.POSITION.includes(patchedSearchValu)
        );
      });

      SetFilteredArray({ sortedArray, SearchValue });
    }
  };
  const handleSortAction = (e, arrayToSort, SearchValue) => {
    if (!arrayToSort) return;
    const sortValue = SearchValue ? SearchValue : e.target.value;

    switch (sortValue) {
      case "name": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aFirstLetter = a.NAME[0];
          const bFirstLetter = b.NAME[0];

          if (aFirstLetter > bFirstLetter) return 1;
          if (aFirstLetter < bFirstLetter) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
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
      case "check In": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aCheckIn = Number(a.CHECKIN);
          const bCheckIn = Number(b.CHECKIN);

          if (aCheckIn > bCheckIn) return 1;
          if (aCheckIn < bCheckIn) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "check out": {
        const sortedArray = arrayToSort;
        console.log(sortedArray);

        sortedArray.sort(function (a, b) {
          const aCheckOut = Number(a.CHECKOUT);
          const bCheckOut = Number(b.CHECKOUT);

          if (aCheckOut > bCheckOut) return 1;
          if (aCheckOut < bCheckOut) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      // case "due date": {
      //   const sortedArray = arrayToSort;

      //   sortedArray.sort(function (a, b) {
      //     const aTime = a.time.split("-").join("");
      //     const bTime = b.time.split("-").join("");

      //     if (aTime > bTime) return 1;
      //     if (aTime < bTime) return -1;
      //     return 0;
      //   });

      //   return SetFilteredArray({ sortedArray, sortValue });
      // }

      default:
        break;
    }
  };
  return (
    <>
      <ReportBody>
        <ReportContainer fluid="true">
          <ReportHeader fluid="true">
            <div className="header_class">
              <TextInput
                checkIn
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={SearchValue}
                InputPosition="reportSearch"
                name="SearchValue"
                placeholder="Search by ID and Name"
                lg={12}
              />
              <TextDrpDwn
                sortOption={true}
                options={["id", "check In", "name", "check out", "position"]}
                handleChange={(e) => handleSortAction(e, displayReports)}
              />
            </div>
          </ReportHeader>

          <ReportTableContainer>
            <ReportTable striped>
              <RHead className="headText">
                <RRow>
                  <RH>REC-ID</RH>
                  <RH>PERSONNEL-ID</RH>
                  <RH>NAME</RH>
                  <RH>POSITION</RH>

                  <RH>CHECK IN</RH>
                  <RH>CHECK OUT</RH>
                </RRow>
              </RHead>
              <RBody>
                {displayReports.map((dat) => {
                  const rand = Math.random() * 10000000;
                  const InDate = new Date(Number(dat.CHECKIN));
                  const OutDate = new Date(Number(dat?.CHECKOUT));
                  return (
                    <RRow key={rand}>
                      <RCell>{dat.TABLEID}</RCell>
                      <RCell>{dat.ID}</RCell>
                      <RCell>{dat.NAME}</RCell>
                      <RCell>{dat.POSITION}</RCell>
                      <RCell>{`${InDate.getFullYear()}-${InDate.getMonth()}-${InDate.getDate()} ${InDate.getHours()}:${InDate.getMinutes()}`}</RCell>
                      <RCell>
                        {dat.CHECKOUT === "0" || !dat.CHECKOUT
                          ? "Still In"
                          : `${OutDate.getFullYear()}-${OutDate.getMonth()}-${OutDate.getDate()} ${OutDate.getHours()}:${OutDate.getMinutes()}`}
                      </RCell>
                    </RRow>
                  );
                })}
              </RBody>
            </ReportTable>
          </ReportTableContainer>
        </ReportContainer>
      </ReportBody>
    </>
  );
};

export default ReportHome;
