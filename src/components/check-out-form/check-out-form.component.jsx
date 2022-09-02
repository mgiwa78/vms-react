import React, { useEffect, useState } from "react";
import ValidUserCheckOut from "../check-in-valid-user/check-in-valid-user.component";
import CustomBtn from "../custom-btn/custom-btn.component";
import { FormRow } from "../edit-profile-form/edit-profile-form.styles";
import { TextInput } from "../form-elements/form-elements.component";

import {
  ListItem,
  ListValue,
  QRSvg,
  ValidUserCheckinContainer,
  ValidUserItem,
  ValidUserLeft,
  ValidUserList,
  ValidUserListItem,
  ValidUserProfile,
  ValidUserRight,
  ValidUserRow,
  ValidUserRowID,
  ValidUserRowItem,
} from "../check-in-valid-user/check-in-valid-user.styles";
import ExitIcon from "../../assets/svg/logout.svg";

import { CheckOutFormContainer } from "./check-out-form.style";
import {
  AddLogAction,
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch, useSelector } from "react-redux";
import { SelectEmployeLog } from "../../store/employee/employee-selector";
import CheckPointNav from "../check-point-nav/check-point-nav.component";
import { Outlet, useNavigate } from "react-router";
import {
  FetchCheckInDataInDb,
  FetchUniqueUserData,
  InsertCeckInDataInDb,
  InsertCeckOutDataInDb,
} from "../../php/phpFuncs";

const CheckOutForm = () => {
  const Navigate = useNavigate();
  const EmployeLog = useSelector(SelectEmployeLog);
  const dispatch = useDispatch();
  const DefFormFields = {
    CheckOutID: "",
    purpose: "",
    time: "",
    name: "",
    position: "",
    dept: "",
    priority: "",
    timeParse: "",
  };

  const [formFields, SetFormFields] = useState(DefFormFields);
  const [confirmState, setConfirmState] = useState("Confirm");
  const [VerifyState, setVerifyState] = useState("Verify");
  const [timeParse, setTimeParse] = useState("");
  const { CheckOutID, position, purpose, name, dept, time } = formFields;
  const [fullUserData, SetfullUserData] = useState({});

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
    if (time === "") return;
    const pesTime = new Date(Number(time));
    setTimeParse(
      `${pesTime?.getFullYear()}-${
        pesTime?.getMonth() + 1
      }-${pesTime?.getDate()}   ${pesTime?.getHours()}:${pesTime?.getMinutes()}:${
        pesTime?.getSeconds() < 10
          ? "0" + pesTime?.getSeconds()
          : pesTime?.getSeconds()
      }`
    );
  }, [time]);

  const handleConfirmPersonnel = (e) => {
    if (
      CheckOutID.length === 0 ||
      position.length === 0 ||
      name.length === 0 ||
      dept.length === 0 ||
      time.length === 0
    )
      return alert("Invalid Entry");
    if (confirmState !== "Confirm") return;
    if (VerifyState !== "Verified") return;
    const newEmployeeLog = () => {
      const avaLog = EmployeLog.find(
        (log) => log.ID === CheckOutID && log.CHECKIN
      );

      if (!avaLog) {
        alert("invalid checkout process");
        return;
      }
      if ((avaLog && !avaLog.CHECKOUT) || (avaLog && avaLog.CHECKOUT === "0")) {
        const ww = EmployeLog.filter((data) => {
          return data.ID !== CheckOutID;
        });
        return [...ww, { ...avaLog, CHECKOUT: time }];
      } else {
        alert("invalid checkout process");
        return;
      }
    };
    // EmployeLog.forEach((log) => {
    //   if (log.ID === CheckOutID && log.CHECKIN && log.CHECKOUT) {
    //     alert("no valid check-in record");
    //     return;
    //   }
    //   if (log.ID === CheckOutID && log.CHECKIN && !log.CHECKOUT) {
    //     const ww = [...EmployeLog, { ...log, CHECKOUT: time }];
    //     console.log(ww);
    //   }
    // });
    const dateEnt = newEmployeeLog();
    console.log(fullUserData);

    setConfirmState("Confirming");
    if (dateEnt) {
      setTimeout(async () => {
        await InsertCeckOutDataInDb({
          id: Number(fullUserData.ID),
          tableId: Number(fullUserData.TABLEID),

          checkOut: time,
        });
        await fetchLogsData();
        setConfirmState("Confirmed");

        setTimeout(() => {
          SetFormFields({ ...DefFormFields });
          setTimeParse("");
          setConfirmState("Confirm");
          setVerifyState("Verify");
        }, 300);
      }, 800);
    } else {
      setTimeout(() => {
        setConfirmState("Rejected");

        setTimeout(() => {
          SetFormFields({ ...DefFormFields });
          setTimeParse("");
          setConfirmState("Confirm");
          setVerifyState("Verify");
        }, 200);
      }, 500);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "CheckOutID") SetFormFields({ ...formFields, [name]: value });
  };
  const handleVerifyAction = async (e, ID = CheckOutID) => {
    // FetchUniqueUserData(personnel_ID);

    if (!ID) alert("Invalid ID");

    const [UserData] = await FetchUniqueUserData(ID);
    if (!UserData) return;
    setVerifyState("Verified");
    const getTime = Date.now();

    SetFormFields({
      ...formFields,
      position: UserData.POSITION,
      name: UserData.NAME,
      dept: UserData.DEPT,
      purpose: UserData.PURPOSE,
      time: getTime,
    });
    const avaLog = EmployeLog.find(
      (log) => log.ID === CheckOutID && log.CHECKIN
    );
    SetfullUserData(avaLog);
  };

  return (
    <CheckOutFormContainer>
      <div>
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={"#000"}
          lg={12}
          value={CheckOutID}
          name="CheckOutID"
          label="ID"
          InputPosition="form_input"
        />
        <br />
        <CustomBtn
          handleClick={(e) => handleVerifyAction(e)}
          lg={3}
          size="lg"
          className="red push-up"
          state={`${VerifyState === "Verify" ? "active" : "off"}`}
        >
          {VerifyState}
        </CustomBtn>
      </div>
      <ValidUserCheckinContainer>
        <ValidUserLeft>
          <ValidUserList>
            <ValidUserItem>
              <ListItem>Personel ID:</ListItem>

              <TextInput
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={CheckOutID}
                name="CheckOutID"
                lg={6}
                InputPosition="form_input"
              />
            </ValidUserItem>

            <ValidUserItem>
              <ListItem>Name:</ListItem>

              <TextInput
                InputPosition="form_input"
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={name}
                name="name"
                lg={6}
              />
            </ValidUserItem>

            <ValidUserItem>
              <ListItem>Department:</ListItem>

              <TextInput
                InputPosition="form_input"
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={dept}
                name="dept"
                lg={6}
              />
            </ValidUserItem>

            <ValidUserItem>
              <ListItem>Personnel Type:</ListItem>

              <TextInput
                InputPosition="form_input"
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={position.toLocaleUpperCase()}
                name="position"
                lg={6}
              />
            </ValidUserItem>

            <ValidUserItem>
              <ListItem>Check-Out:</ListItem>

              <TextInput
                InputPosition="form_input"
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={timeParse}
                name="time"
                lg={6}
              />
            </ValidUserItem>

            <ValidUserItem>
              <ListItem>Purpose:</ListItem>

              <TextInput
                InputPosition="form_input"
                handleChange={(e) => handleInputChange(e)}
                bg={"#000"}
                value={purpose}
                name="purpose"
                lg={6}
              />
            </ValidUserItem>

            <CustomBtn
              confirmState={confirmState}
              state={`${confirmState === "Confirm" ? "active" : "off"}`}
              handleClick={(e) => handleConfirmPersonnel(e)}
              CheckOut
            >
              {confirmState}
            </CustomBtn>
          </ValidUserList>
        </ValidUserLeft>

        <ValidUserRight>
          {/* <ValidUserProfile
              style={{
                backgroundImage:
                  "url('https://cdn.pixabay.com/photo/2016/11/21/6/42/beard-1845166_960_720.jpg')",
              }}
            ></ValidUserProfile> */}
        </ValidUserRight>
      </ValidUserCheckinContainer>
    </CheckOutFormContainer>
  );
};

export default CheckOutForm;
