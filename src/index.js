import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./routes/auth/auth.component";
import AdminSignIn from "./pages/admin-sign-in/admin-sign-in.component";
import EmployeeSignIn from "./pages/employee-sign-in/employee-sign-in.component";
import CheckInPointSignIn from "./pages/security-point-sign-in/security-point-sign-in.component";
import CheckPoint from "./pages/check-point-home/check-point-home.component";
import AdminHome from "./pages/admin-home/admin-home.component";
import Dashboard from "./components/dashboard/dashboard.component";
import AdminManage from "./pages/admin-manage/admin-mange.components";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import ApprovalHome from "./pages/approval-home/approval-home.component";

import { Provider } from "react-redux";
import { store } from "./store/store";
import ReportHome from "./pages/report-home/report-home.component";
import EmployeeHome from "./pages/employee-home/employee-home.component";
import EmployeeRquestForm from "./components/employee-request-form/employee-request-form.component";
import CheckInForm from "./components/check-in-form/check-in-form.component";
import CheckOutForm from "./components/check-out-form/check-out-form.component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {" "}
    <Provider store={store}>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<AdminSignIn />} />
            <Route path="employeelogin" element={<EmployeeSignIn />} />
            <Route path="checkpointlogin" element={<CheckInPointSignIn />} />
          </Route>
          <Route path="checkpointhome" element={<CheckPoint />}>
            <Route index element={<CheckInForm />} />
            <Route path="check-out" element={<CheckOutForm />} />
          </Route>
          <Route path="adminhome" element={<AdminHome />}>
            <Route index element={<Dashboard />} />
            <Route path="manage" element={<AdminManage />} />{" "}
            <Route path="approval" element={<ApprovalHome />} />
            <Route path="report" element={<ReportHome />} />
          </Route>
          <Route path="employee" element={<EmployeeHome />}>
            <Route index element={<EmployeeRquestForm />} />
          </Route>
        </Routes>{" "}
      </ThemeProvider>{" "}
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
