import React, { useState } from "react";
import {
  EditProfileFormContainer,
  FormRow,
  FormTitle,
} from "./edit-profile-form.styles";
import { FormInputLabel } from "../form-elements/form-elements.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../form-elements/form-elements.component";
import CustomBtn from "../custom-btn/custom-btn.component";
import {
  FetchCheckInDataInDb,
  FetchUniqueUserData,
  FetchUserDataAsync,
  UpdateUserDataWithId,
} from "../../php/phpFuncs";
import {
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Col } from "react-bootstrap";

const EditProfileForm = ({ lg }) => {
  const DefFormFields = {
    personnel_ID: "",
    position: " ",
    name: "",
    priority: "",
    purpose: "",
    date: "",
    pesRes: "",
    duration: "",
    dept: "",
  };
  const dispatch = useDispatch();

  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    const b = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(b));
    dispatch(SetEmployeeAction(a));
  };
  const [formFields, SetFormFields] = useState(DefFormFields);
  const {
    personnel_ID,
    position,
    name,
    priority,
    purpose,
    date,
    duration,
    pesRes,
    dept,
  } = formFields;
  const [VerificationBtnState, setVerificationBtnState] = useState(
    "Verify and Retrieve"
  );
  const [UpdateBtnState, setUpdateBtnState] = useState(" ");

  const handleUserUpdate = async (e) => {
    if (UpdateBtnState !== "Update") return;
    setUpdateBtnState("Updating");
    // FetchUniqueUserData(personnel_ID);
    console.log(formFields);
    if (
      !personnel_ID &&
      purpose &&
      date &&
      name &&
      position &&
      duration &&
      pesRes &&
      priority
    )
      return;
    console.log(position);
    const data = await UpdateUserDataWithId({
      personnel_ID,
      purpose,
      date,
      name,
      position,
      duration,
      pesRes,
      priority,
    });
    if (data) {
      setTimeout(() => {
        setUpdateBtnState("Updated");
        Ant();
        setVerificationBtnState("Verify and Retrieve");
        handleClearFormFileds();
        setTimeout(() => {
          setUpdateBtnState("");
        }, 1200);
      }, 1200);
    }
    console.log(data);
  };
  const handleVerifyAction = async (e, ID = personnel_ID) => {
    // FetchUniqueUserData(personnel_ID);
    if (VerificationBtnState !== "Verify and Retrieve") return;
    if (!ID) return alert("Invalid ID");
    setVerificationBtnState("Verifying");

    const [UserData] = await FetchUniqueUserData(ID);
    if (!UserData) {
      setVerificationBtnState("Invalid ID");
      setTimeout(() => {
        setVerificationBtnState("Verify and Retrieve");
      }, 1500);
    } else {
      setTimeout(() => {
        setVerificationBtnState("Verified");
        setUpdateBtnState("Update");
      }, 500);
      SetFormFields({
        ...formFields,
        position: UserData.POSITION,
        dept: UserData.DEPT,
        name: UserData.NAME,
        priority: UserData.PRIORITY,
        purpose: UserData.PURPOSE,
        date: UserData.DATE,
        duration: UserData.DURATION,
        pesRes: UserData.PE_RES,
      });
      setStartDate(Number(UserData.DURATION.split("-")[0]));
      setStopDate(Number(UserData.DURATION.split("-")[1]));
    }
  };
  const handleClearFormFileds = (e) => {
    // FetchUniqueUserData(personnel_ID);
    setVerificationBtnState("Verify and Retrieve");
    setUpdateBtnState(" ");
    SetFormFields({
      ...DefFormFields,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    SetFormFields({ ...formFields, [name]: value });
  };
  const color = "#000";

  const [startDate, setStartDate] = useState(new Date());
  const [stopDate, setStopDate] = useState(new Date());
  const handleDateChange = (key, date) => {
    console.log(date);
    switch (key) {
      case "start":
        const startPointToSet =
          `${
            typeof date === "number"
              ? (date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds())
              : Date.UTC(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  date.getHours(),
                  date.getMinutes(),
                  date.getSeconds()
                )
          }` +
          "-" +
          duration.split("-")[1];
        console.log(startPointToSet);
        console.log(duration);
        SetFormFields({ ...formFields, duration: startPointToSet });

        break;
      case "stop":
        const stopPointToSet =
          duration.split("-")[0] +
          "-" +
          `${
            typeof date === "number"
              ? (date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds())
              : Date.UTC(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  date.getHours(),
                  date.getMinutes(),
                  date.getSeconds()
                )
          }`;
        SetFormFields({ ...formFields, duration: stopPointToSet });
        console.log(stopPointToSet);
        break;
      default:
        break;
    }
  };
  return (
    <EditProfileFormContainer>
      <FormTitle>Manage personel profile</FormTitle>
      <FormRow className="Bttom">
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          name="personnel_ID"
          label="Personnel ID"
          value={personnel_ID}
          className="formInputs"
          InputPosition="form_input"
        />
        <CustomBtn
          handleClick={() => handleVerifyAction()}
          form_btn
          className="red"
          state={`${
            VerificationBtnState === "Verify and Retrieve" ? "active" : "off"
          }`}
        >
          {VerificationBtnState}
        </CustomBtn>
      </FormRow>
      <FormRow className="Bttom">
        <TextInput
          InputPosition="form_input"
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          value={name}
          name="name"
          lg={4}
          label="Name"
        />
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          value={priority}
          bg={color}
          lg={4}
          name="priority"
          InputPosition="form_input"
          label="Priority"
        />
        <TextDrpDwn
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={4}
          options={["employee", "IT personel", "management", "visitor", " "]}
          label="Position"
          value={position}
        />
      </FormRow>
      <FormRow className="Bttom">
        <TextInput
          InputPosition="form_input"
          handleChange={(e) => handleInputChange(e)}
          value={purpose}
          name="purpose"
          bg={color}
          lg={4}
          label="Purpose"
        />
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          value={dept}
          name="dept"
          bg={color}
          lg={4}
          InputPosition="form_input"
          label="Department"
        />
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          value={pesRes}
          name="pesRes"
          bg={color}
          lg={4}
          InputPosition="form_input"
          label="Personnel responsible"
        />
      </FormRow>
      <FormRow className="Bttom">
        <FormInputLabel className="dateLabel">Select duration</FormInputLabel>
        <Col className="datePickerContainer" lg={5}>
          <div className="dateContainer">
            <DatePicker
              selected={startDate}
              className="datePicker"
              onChange={(date) => {
                setStartDate(date);
                setStopDate(date);
                handleDateChange("start", date);
              }}
            />
            <DatePicker
              className="datePicker"
              selected={stopDate}
              onChange={(date) => {
                setStopDate(date);
                handleDateChange("stop", date);
              }}
            />
          </div>
        </Col>{" "}
        <CustomBtn
          handleClick={(e) => handleClearFormFileds(e)}
          form_btn
          lg={3}
          btnType="red"
        >
          Cancel
        </CustomBtn>
        <CustomBtn
          state={`${UpdateBtnState === "Update" ? "active" : "off"}`}
          handleClick={(e) => handleUserUpdate(e)}
          form_btn
          lg={3}
        >
          {UpdateBtnState}
        </CustomBtn>
      </FormRow>
    </EditProfileFormContainer>
  );
};

export default EditProfileForm;
