import { combineReducers } from "redux";
import EmployeeReducer from "./employee/employee-reducer";
// import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  employee: EmployeeReducer,
});
