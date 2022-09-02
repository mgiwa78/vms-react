import React, { useEffect, useState } from "react";
import { SelectEmployeLog } from "../../store/employee/employee-selector";
import {
  CBBody,
  CBCell,
  CBH,
  CBHead,
  CBRow,
  CheckInBriefContainer,
  CheckInBriefHeader,
  CheckInBriefTable,
  CheckInBriefTableContainer,
  CheckInBriefTitle,
} from "./check-in-brief.styles";

import { useSelector } from "react-redux";
import { TextDrpDwn } from "../form-elements/form-elements.component";
import { Col } from "react-bootstrap";

const CheckInBrief = ({ name }) => {
  const EmployeeCheckInLog = useSelector(SelectEmployeLog);

  const [CheckInLog, SetCheckInLog] = useState([]);
  useEffect(() => {
    if (!EmployeeCheckInLog.length) return;
    SetCheckInLog(EmployeeCheckInLog);
  }, [EmployeeCheckInLog]);

  const [filteredArray, SetFilteredArray] = useState({});

  useEffect(() => {
    if (!filteredArray.length) return;
    SetCheckInLog(filteredArray.sortedArray);
  }, [filteredArray]);

  const handleSortAction = (e, arrayToSort) => {
    if (!arrayToSort) return;
    const sortValue = e.target.value;

    switch (sortValue) {
      case "id": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aID = Number(a.ID);
          const bID = Number(b.ID);

          if (aID > bID) return 1;
          if (aID < bID) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
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
      case "check in": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aTime = a.CHECKIN;
          const bTime = b.CHECKIN;

          if (aTime > bTime) return 1;
          if (aTime < bTime) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "position": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aPostion = a.POSITION[0];
          const bPostion = b.POSITION[0];

          if (aPostion > bPostion) return 1;
          if (aPostion < bPostion) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }
      case "personel": {
        const sortedArray = arrayToSort;

        sortedArray.sort(function (a, b) {
          const aPersonel = a.personel[0];
          const bPersonel = b.personel[0];

          if (aPersonel > bPersonel) return 1;
          if (aPersonel < bPersonel) return -1;
          return 0;
        });

        return SetFilteredArray({ sortedArray, sortValue });
      }

      default:
        break;
    }
  };
  return (
    <CheckInBriefContainer lg={5}>
      <CheckInBriefHeader>
        <CheckInBriefTitle>{name}</CheckInBriefTitle>
        <TextDrpDwn
          sortOption={true}
          handleChange={(e) => handleSortAction(e, CheckInLog)}
          options={["position", "id", "name", "check in"]}
        />
      </CheckInBriefHeader>
      <CheckInBriefTableContainer>
        <CheckInBriefTable striped>
          <CBHead className="headText">
            <CBRow>
              <CBH>id</CBH>
              <CBH>Name</CBH>
              <CBH>Position</CBH>
              <CBH>CHECK IN</CBH>
            </CBRow>
          </CBHead>
          <CBBody>
            {CheckInLog.map((person) => {
              const rand = Math.random() * 10000000;
              const pesDate = new Date(Number(person.CHECKIN));

              return (
                <CBRow key={rand}>
                  <CBCell>{person.ID}</CBCell>
                  <CBCell>{person.NAME}</CBCell>
                  <CBCell>{person.POSITION}</CBCell>
                  <CBCell className="time">{`${pesDate.getFullYear()}-${pesDate.getMonth()}-${pesDate.getDate()} ${pesDate.getHours()}:${pesDate.getMinutes()}`}</CBCell>
                </CBRow>
              );
            })}
          </CBBody>
        </CheckInBriefTable>
      </CheckInBriefTableContainer>
    </CheckInBriefContainer>
  );
};

export default CheckInBrief;
