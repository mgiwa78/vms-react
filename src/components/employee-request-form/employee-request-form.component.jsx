import React, { useEffect, useState } from "react";
import {
  EmployeeRquestFormContainer,
  FormRow,
  FormTitle,
} from "./employee-request-form.styles";
import {
  FormInput,
  FormInputLabel,
  TextDrpDwnSelect,
} from "../form-elements/form-elements.styles";
import {
  TextDrpDwn,
  TextInput,
} from "../form-elements/form-elements.component";
import { useSelector } from "react-redux";
import CustomBtn from "../custom-btn/custom-btn.component";
import { SelectEmployeData } from "../../store/employee/employee-selector";
import {
  AddApprovalReqDataToDb,
  CreateNewUserWithData,
  DeleteApprovalRequest,
  FetchApprovalsDataInDb,
  FetchCheckInDataInDb,
  FetchUserDataAsync,
  SetApprovalReqDataInDb,
} from "../../php/phpFuncs";
import {
  SetApprovalRequestAction,
  SetCheckInLogAction,
  SetEmployeeAction,
} from "../../store/employee/employee-actions";
import { useDispatch } from "react-redux";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from "react-bootstrap";

const EmployeeRquestForm = ({ lg, approvalsFields }) => {
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
    employee_name: "",
    priority: "",
    purpose: "",
    date: "",
    personnel_name: "",
    duration: "",
    dept: "",
    dateDue: "",
  };
  const [formFields, SetFormFields] = useState({ ...DefFormFields });

  const [DueDate, setDueDate] = useState(new Date());
  const {
    dept,
    position,
    employee_name,
    priority,
    purpose,
    personnel_name,
    duration,
    dateDue,
  } = formFields;

  const handleClearFormFileds = (e) => {
    // FetchUniqueUserData(personnel_ID);
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
  const handleGetDate = (date) => {
    console.log(date);
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

    return `${date.getFullYear()}-${
      months[date.getMonth()]
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  };
  const [BtnState, setBtnState] = useState("Request");

  const handleDatabaseUpdate = async (e) => {
    if (BtnState !== "Request") return;
    setBtnState("Updating");

    // FetchUniqueUserData(personnel_ID);
    if (
      purpose === "" ||
      employee_name === "" ||
      position === "" ||
      personnel_name === "" ||
      priority === "" ||
      dept === ""
    ) {
      setBtnState("Request");
      return alert("invalid Fields Found");
    } else {
      const date = Date.now();
      console.log(typeof DueDate);
      if (typeof DueDate === "number") {
        console.log("number");
        setDueDate(new Date(DueDate));
      }
      console.log(DueDate);
      const dueDate = `${Date.UTC(
        DueDate.getFullYear(),
        DueDate.getMonth(),
        DueDate.getDate(),
        DueDate.getHours(),
        DueDate.getMinutes(),
        DueDate.getSeconds()
      )}`;
      const approvalrequest = {
        purpose,
        dateRequested: date,
        requestedBy: employee_name,
        timeLength: duration,
        position,
        name: personnel_name,
        priority,
        dueDate: Number(dueDate),
      };
      console.log(approvalrequest);
      try {
        const data = await AddApprovalReqDataToDb(approvalrequest);
        if (data) {
          setTimeout(async () => {
            alert("Request Sent");
            setBtnState("Updated");

            // await DeleteApprovalRequest(Number(approvalsFields.approvalID));

            // const c = await FetchApprovalsDataInDb();
            // dispatch(SetApprovalRequestAction(c));
            // await Ant();
            setTimeout(async () => {
              handleClearFormFileds();

              setBtnState("Request");
            }, 500);
          }, 2000);
        } else {
          setBtnState("Request");
        }
      } catch (error) {
        alert("An error occured");
      }
    }
  };
  const color = "#000";

  return (
    <EmployeeRquestFormContainer lg={lg}>
      <FormTitle>Request Profile Arppoval</FormTitle>
      <FormRow className="Bttom">
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          value={employee_name}
          name="employee_name"
          label="Employee Name"
          InputPosition="form_input"
        />
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
          value={personnel_name}
          name="personnel_name"
          label="Personel Name"
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
        <TextInput
          handleChange={(e) => handleInputChange(e)}
          bg={color}
          lg={6}
          value={duration}
          name="duration"
          label="Duration"
          InputPosition="form_input"
        />
        <div className="dateContainer">
          {/* <DatePicker
            className="datePicker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setStopDate(date);
            }}
          /> */}
          <FormInputLabel>Due Date</FormInputLabel>
          <DatePicker
            className="datePicker"
            selected={DueDate}
            onChange={(date) => {
              setDueDate(date);
            }}
            style={{ width: "200px" }}
          />
        </div>
      </FormRow>
      <FormRow className="Bttom">
        <CustomBtn
          handleClick={(e) => handleDatabaseUpdate(e)}
          state={`${BtnState === "Request" ? "active" : "off"}`}
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
    </EmployeeRquestFormContainer>
  );
};

export default EmployeeRquestForm;
