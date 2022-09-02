import { EMPLOYEE_ACTION_TYPES } from "./employee-action-types";

const INITIAL_STATE = {
  EmployeeObj: [],
  EmployeeLog: [],
  ApprovalRequests: [],
};

const EmployeeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_ACTION:
      return { ...state, EmployeeObj: payload };
    case EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_CHECK_IN_ACTION:
      return { ...state, EmployeeLog: payload };
    case EMPLOYEE_ACTION_TYPES.SET_APPROVAL_REQUESTS_ACTION:
      return { ...state, ApprovalRequests: payload };
    case EMPLOYEE_ACTION_TYPES.SET_EMPLOYEE_LOG:
      return { ...state, EmployeeLog: payload };
    default:
      return state;
  }
};

export default EmployeeReducer;
