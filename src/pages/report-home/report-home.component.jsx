import React, { useEffect, useState } from "react";

import { ReportBody, RPTPageBtn, RPTPagination } from "./report-home.styles";

import {
  RBody,
  RCell,
  RH,
  RHead,
  RRow,
  ReportContainer,
  ReportTable,
  ReportTableContainer,
  ReportHeader,
} from "./report-home.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../../components/form-elements/form-elements.component";
import { FetchCheckInDataInDb } from "../../php/phpFuncs";
import { SetCheckInLogAction } from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import { SelectEmployeLog } from "../../store/employee/employee-selector";
import { useSelector } from "react-redux";

const ReportHome = () => {
  const EmployeLog = useSelector(SelectEmployeLog);

  const dispatch = useDispatch();

  const [filteredArray, SetFilteredArray] = useState({});
  const [displayReports, setDisplayReports] = useState([]);
  const [DefReports, setDefReports] = useState([]);

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
    SetpageMax(Math.ceil(EmployeLog.length / DefaultMaxPerPage));
  }, [EmployeLog]);

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
        SetpageNumber(1);

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "id": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aF = Number(a.REC_ID);
          const bF = Number(b.REC_ID);

          if (aF < bF) return -1;
          if (aF > bF) return 0;
          return 0;
        });
        SetpageNumber(1);

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "position": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aF = a.POSITION[0];
          const bF = b.POSITION[0];

          if (aF > bF) return 1;
          if (aF < bF) return -1;
          return 0;
        });

        SetpageNumber(1);

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "check In": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aCheckIn = Number(a.CHECKIN);
          const bCheckIn = Number(b.CHECKIN);

          if (aCheckIn > bCheckIn) return -1;
          if (aCheckIn < bCheckIn) return 0;
          return 0;
        });
        SetpageNumber(1);

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "check out": {
        const sortedArray = arrayToSort;
        console.log(sortedArray);

        sortedArray.sort(function (a, b) {
          const aCheckOut = Number(a.CHECKOUT);
          const bCheckOut = Number(b.CHECKOUT);

          if (aCheckOut > bCheckOut) return -1;
          if (aCheckOut < bCheckOut) return 0;
          return 0;
        });
        SetpageNumber(1);

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

  const DefaultMaxPerPage = 10;
  const [pageNumber, SetpageNumber] = useState(1);
  const [pageMax, SetpageMax] = useState(1);
  const handleSetpageNumber = (actionCase, num) => {
    switch (actionCase) {
      case "dec":
        if (num - 1 !== 0) {
          return SetpageNumber(num - 1);
        }
        break;
      case "inc":
        console.log(actionCase, num + 1, pageMax);

        if (num + 1 > pageMax) return;
        SetpageNumber(num + 1);

        break;

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
                {displayReports
                  .filter((app, index) => {
                    const k = DefaultMaxPerPage * pageNumber;

                    return index >= k - DefaultMaxPerPage && index <= k;
                  })
                  .map((dat) => {
                    const rand = Math.random() * 10000000;
                    const InDate = new Date(Number(dat.CHECKIN));
                    const OutDate = new Date(Number(dat?.CHECKOUT));
                    return (
                      <RRow key={rand}>
                        <RCell>{dat.REC_ID}</RCell>
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
            <RPTPagination>
              <RPTPageBtn
                className={`${pageNumber - 1 === 0 ? "disabled" : ""}`}
                onClick={() => handleSetpageNumber("dec", pageNumber)}
              >
                {pageNumber - 1 === 0 ? " " : pageNumber - 1}
              </RPTPageBtn>
              <RPTPageBtn>{pageNumber}</RPTPageBtn>
              <RPTPageBtn
                className={`${pageNumber + 1 > pageMax ? "disabled" : ""}`}
                onClick={() => handleSetpageNumber("inc", pageNumber)}
              >
                {pageNumber + 1}
              </RPTPageBtn>
            </RPTPagination>
          </ReportTableContainer>
        </ReportContainer>
      </ReportBody>
    </>
  );
};

export default ReportHome;
