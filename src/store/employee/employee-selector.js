import { createSelector } from "reselect";

const EmployeeState = (state) => {
  return state.employee;
};

export const SelectEmployeData = createSelector(
  [EmployeeState],
  (EmployeeState) => {
    return EmployeeState.EmployeeObj;
  }
);
export const SelectEmployeLog = createSelector(
  [EmployeeState],
  (EmployeeState) => {
    return EmployeeState.EmployeeLog;
  }
);
export const SelectUser = createSelector([EmployeeState], (EmployeeState) => {
  return EmployeeState.user;
});
export const SelectApprovalRequests = createSelector(
  [EmployeeState],
  (EmployeeState) => {
    return EmployeeState.ApprovalRequests;
  }
);
