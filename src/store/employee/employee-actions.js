import { EMPLOYEE_ACTION_TYPES } from "./employee-action-types";

export const SetEmployeeAction = (employeeArray) => {
  return {
    type: EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_ACTION,
    payload: employeeArray,
  };
};
export const SetCheckInLogAction = (EmployeeCheckinLog) => {
  return {
    type: EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_CHECK_IN_ACTION,
    payload: EmployeeCheckinLog,
  };
};
export const SetApprovalRequestAction = (EmployeeCheckinLog) => {
  return {
    type: EMPLOYEE_ACTION_TYPES.SET_APPROVAL_REQUESTS_ACTION,
    payload: EmployeeCheckinLog,
  };
};
export const AddLogAction = (NewCheckinLog, EmployeeCheckinLog) => {
  const NewEmployeeCheckinLog = [...EmployeeCheckinLog, { ...NewCheckinLog }];

  console.log(NewEmployeeCheckinLog);
  return {
    type: EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_CHECK_IN_ACTION,
    payload: NewEmployeeCheckinLog,
  };
};
export const SetUserAction = (newUser) => {
  return {
    type: EMPLOYEE_ACTION_TYPES.SET_USER_AND_USER_TYPE,
    payload: newUser,
  };
};
