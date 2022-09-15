import React, { useEffect, useState } from "react";
import CustomBtn from "../../components/custom-btn/custom-btn.component";
import { TextInput } from "../../components/form-elements/form-elements.component";

import {
  ListItem,
  ValidUserCheckinContainer,
  ValidUserItem,
  ValidUserLeft,
  ValidUserList,
  ValidUserRight,
} from "../../components/check-in-valid-user/check-in-valid-user.styles";

import { CheckInFormContainer } from "./check-in-form.style";
import { SetCheckInLogAction } from "../../store/employee/employee-actions";
import { useDispatch, useSelector } from "react-redux";
import { SelectEmployeLog } from "../../store/employee/employee-selector";

import {
  FetchCheckInDataInDb,
  FetchUniqueUserData,
  InsertCeckInDataInDb,
} from "../../php/phpFuncs";

const CheckInForm = () => {
  const EmployeLog = useSelector(SelectEmployeLog);

  const dispatch = useDispatch();
  const DefFormFields = {
    CheckInID: "",
    purpose: "",
    time: "",
    name: "",
    position: "",
    dept: "",
    priority: "",
  };

  const [formFields, SetFormFields] = useState(DefFormFields);
  const [fullUserData, SetfullUserData] = useState({});
  const [confirmState, setConfirmState] = useState("Confirm Check-in");
  const [VerifyState, setVerifyState] = useState("Verify");
  const [timeParse, setTimeParse] = useState("");
  const { CheckInID, position, purpose, name, dept, time } = formFields;

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
    if (confirmState !== "Confirm Check-in") return;
    if (VerifyState !== "Verified") return;

    if (
      CheckInID.length === 0 ||
      position.length === 0 ||
      name.length === 0 ||
      dept.length === 0 ||
      time.length === 0
    )
      return alert("Invalid Entry");

    const avaLog = EmployeLog.find(
      (log) =>
        (log.ID === CheckInID && !log.CHECKOUT) ||
        (log.ID === CheckInID && log.CHECKOUT === "0")
    );
    console.log(EmployeLog, avaLog);

    if (avaLog) {
      setConfirmState("Rejected");

      setTimeout(() => {
        alert("Rejected");

        setTimeout(() => {
          SetFormFields({ ...DefFormFields });
          setTimeParse("");
          setConfirmState("Confirm Check-in");
          setVerifyState("Verify");
        }, 500);
      }, 500);
      return;
    }
    if (avaLog && avaLog.CHECKIN && !avaLog.CHECKOUT) {
      alert("invalid checkout process");
      setTimeout(() => {
        setConfirmState("Rejected");

        setTimeout(() => {
          SetFormFields({ ...DefFormFields });
          setTimeParse("");
          setConfirmState("Confirm Check-in");
          setVerifyState("Verify");
        }, 500);
      }, 50);
    }
    if ((avaLog && avaLog.CHECKIN && avaLog.CHECKOUT) || !avaLog) {
      // const ww = EmployeLog.filter((data) => {
      //   return data.ID !== CheckInID;
      // });\
      setConfirmState("Confirming");

      setTimeout(async () => {
        setConfirmState("Confirmed");

        console.log(fullUserData);
        await InsertCeckInDataInDb({
          id: fullUserData.ID,
          purpose: fullUserData.PURPOSE,
          name: fullUserData.NAME,
          personRes: fullUserData.PE_RES,
          position: fullUserData.POSITION,
          checkIn: time,
        });
        await fetchLogsData();
        setTimeout(() => {
          SetFormFields({ ...DefFormFields });
          setTimeParse("");
          setConfirmState("Confirm Check-in");
          setVerifyState("Verify");
        }, 300);
      }, 800);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "CheckInID") SetFormFields({ ...formFields, [name]: value });
  };
  const handleVerifyAction = async (e, ID = CheckInID) => {
    // FetchUniqueUserData(personnel_ID);

    if (!ID) alert("Invalid ID");

    const [UserData] = await FetchUniqueUserData(ID);
    if (!UserData) return;
    setVerifyState("Verified");
    const getTime = Date.now();
    SetfullUserData({ ...UserData });
    SetFormFields({
      ...formFields,
      position: UserData.POSITION,
      name: UserData.NAME,
      dept: UserData.DEPT,
      purpose: UserData.PURPOSE,
      time: getTime,
    });
  };

  return (
    <CheckInFormContainer>
      <div>
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={"#000"}
          lg={12}
          value={CheckInID}
          name="CheckInID"
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
                value={CheckInID}
                name="CheckInID"
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
              <ListItem>Check-In Time:</ListItem>

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
              state={`${
                confirmState === "Confirm Check-in"
                  ? "active"
                  : confirmState === "Rejected"
                  ? "danger"
                  : "off"
              }`}
              handleClick={(e) => handleConfirmPersonnel(e)}
              checkIn
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
    </CheckInFormContainer>
  );
};

export default CheckInForm;
