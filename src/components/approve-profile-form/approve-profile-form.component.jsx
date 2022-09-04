import React, { useEffect, useState } from "react";
import {
  ApproveFormContainer,
  FormRow,
  FormTitle,
} from "./approve-profile-form.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../form-elements/form-elements.component";
import { useSelector } from "react-redux";
import CustomBtn from "../custom-btn/custom-btn.component";
import { SelectEmployeData } from "../../store/employee/employee-selector";
import {
  CreateNewUserWithData,
  DeleteApprovalRequest,
  FetchApprovalsDataInDb,
  FetchCheckInDataInDb,
  FetchUserDataAsync,
} from "../../php/phpFuncs";
import {
  SetApprovalRequestAction,
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ApproveProfileForm = ({ lg, approvalsFields }) => {
  const dispatch = useDispatch();

  const EmployeeData = useSelector(SelectEmployeData);
  const Ant = async () => {
    const a = await FetchUserDataAsync({ key: "ACTION", value: 1 });
    dispatch(SetEmployeeAction(a));
    const b = await FetchCheckInDataInDb({ key: "ACTION", value: 12 });
    dispatch(SetCheckInLogAction(b));
  };

  useEffect(() => {
    if (Object.keys(EmployeeData).length) return;
    Ant();
  }, []);

  const DefFormFields = {
    position: " ",
    name: "",
    priority: "",
    purpose: "",
    date: "",
    pesRes: "",
    duration: "",
    dept: "",
    personnel_ID: "",
  };
  const [formFields, SetFormFields] = useState({ ...approvalsFields });

  const [startDate, setStartDate] = useState(Date.now());
  const [stopDate, setStopDate] = useState(new Date());
  const { dept, personnel_ID, position, name, priority, purpose, pesRes } =
    formFields;

  useEffect(() => {
    console.log(approvalsFields);

    if (
      approvalsFields.purpose === "" ||
      approvalsFields.name === "" ||
      approvalsFields.position === "" ||
      approvalsFields.pesRes === "" ||
      approvalsFields.priority === "" ||
      approvalsFields.dept === ""
    )
      return;
    handleGenerateId();

    SetFormFields({ ...formFields, ...approvalsFields });
    setStopDate(new Date(approvalsFields?.endDate));
  }, [approvalsFields]);

  const handleClearFormFileds = (e) => {
    // FetchUniqueUserData(personnel_ID);
    setBtnState("Update");
    SetFormFields({
      ...DefFormFields,
    });
  };

  const handleGenerateId = (e) => {
    const allIDs = EmployeeData.map((data) => data.ID);
    let newID = 0;
    while (allIDs.includes(`${newID}`)) {
      newID = newID + 1;
    }
    const newDate = new Date();
    newDate.getMilliseconds();
    // const CurDate = `${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()} ${newDate.getHours()}-${newDate.getMinutes()}}`;
    SetFormFields({ ...formFields, personnel_ID: newID, date: newDate });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "personnel_ID") return;
    SetFormFields({ ...formFields, [name]: value });
  };

  const [BtnState, setBtnState] = useState("Update");

  const handleDatabaseUpdate = async (e) => {
    if (BtnState !== "Update") return;
    setBtnState("Updating");

    // FetchUniqueUserData(personnel_ID);
    if (
      !personnel_ID === "" ||
      purpose === "" ||
      name === "" ||
      position === "" ||
      pesRes === "" ||
      priority === "" ||
      dept === ""
    ) {
      setBtnState("Update");
      return alert("invalid Fields Found");
    } else {
      const date = new Date().getMilliseconds();
      console.log(typeof startDate);
      if (typeof startDate === "number") {
        console.log("number");
        const beginDate = new Date(startDate);
        console.log(beginDate, startDate);
        console.log(stopDate, "--", startDate);
        console.log(beginDate);
        const duration = `${
          typeof startDate === "number"
            ? Date.UTC(
                beginDate.getFullYear(),
                beginDate.getMonth(),
                beginDate.getDate(),
                beginDate.getHours(),
                beginDate.getMinutes(),
                beginDate.getSeconds()
              )
            : (startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate(),
              startDate.getHours(),
              startDate.getMinutes(),
              startDate.getSeconds())
        }-${Date.UTC(
          stopDate.getFullYear(),
          stopDate.getMonth(),
          stopDate.getDate(),
          stopDate.getHours(),
          stopDate.getMinutes(),
          stopDate.getSeconds()
        )}`;
        const data = await CreateNewUserWithData({
          personnel_ID,
          purpose,
          date,
          name,
          dept,
          position,
          duration,
          pesRes,
          priority,
        });
        console.log(
          personnel_ID,
          purpose,
          date,
          name,
          dept,
          duration,
          position,
          pesRes,
          priority
        );

        if (data) {
          setTimeout(async () => {
            setBtnState("Updated");

            console.log(approvalsFields.approvalID);
            console.log(Number(approvalsFields.approvalID));
            await DeleteApprovalRequest(Number(approvalsFields.approvalID));

            const c = await FetchApprovalsDataInDb();
            dispatch(SetApprovalRequestAction(c));
            await Ant();
            setTimeout(async () => {
              handleClearFormFileds();

              setBtnState("Update");
            }, 500);
          }, 2000);
        } else {
          setBtnState("Update");
        }
      }
    }
  };
  const color = "#000";

  return (
    <ApproveFormContainer lg={lg}>
      <FormTitle>Request Approval</FormTitle>
      <FormRow className="Bttom">
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          value={name}
          name="name"
          label="Name"
          InputPosition="form_input"
        />
        <TextInput
          bg={color}
          value={personnel_ID}
          handleChange={(e) => handleInputChange(e)}
          name="personnel_ID"
          lg={2}
          label="Gen Id"
          InputPosition="form_input"
        />
        <CustomBtn
          form_btn
          handleClick={(e) => handleGenerateId(e)}
          lg={3}
          size="lg"
          className="red"
          state={`${BtnState === "Update" ? "active" : "off"}`}
        >
          Gen
        </CustomBtn>
      </FormRow>
      <FormRow className="Bttom">
        <TextInput
          bg={color}
          handleChange={(e) => handleInputChange(e)}
          name="purpose"
          value={purpose}
          label="Purpose"
          lg={6}
          InputPosition="form_input"
        />
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          value={priority}
          name="priority"
          label="Priority"
          lg={6}
          InputPosition="form_input"
        />
      </FormRow>
      <FormRow className="Bttom">
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          value={pesRes}
          name="pesRes"
          label="Personel responsible"
          InputPosition="form_input"
        />
        <TextDrpDwn
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={3}
          name="position"
          options={[
            "Employee",
            "IT Personnel",
            "Management",
            "Visitor",
            "Service manager",
            "Consultant",
          ]}
          label="Position"
          value={position}
          InputPosition="form_input"
        />
      </FormRow>
      <FormRow className="Bttom" style={{ marginBottom: "30px" }}>
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          value={dept}
          name="dept"
          label="Department"
          InputPosition="form_input"
        />
        <div className="dateContainer">
          <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setStopDate(date);
            }}
          />
          <DatePicker
            className="datePicker"
            selected={stopDate}
            onChange={(date) => {
              console.log(startDate);
              setStopDate(date);
            }}
            style={{ width: "200px" }}
          />
        </div>
      </FormRow>
      <FormRow className="Bttom">
        <CustomBtn
          handleClick={(e) => handleDatabaseUpdate(e)}
          state={`${BtnState === "Update" ? "active" : "off"}`}
          form_btn
          lg={6}
          size="lg"
          className="red"
        >
          {BtnState}
        </CustomBtn>
        <CustomBtn
          handleClick={(e) => handleClearFormFileds(e)}
          form_btn
          lg={3}
          btnType="red"
        >
          Cancel
        </CustomBtn>
      </FormRow>
    </ApproveFormContainer>
  );
};

export default ApproveProfileForm;
