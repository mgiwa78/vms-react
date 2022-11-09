import "./App.css";
import { Button } from "react-bootstrap";

import ReportHome from "./pages/report-home/report-home.component";
import EmployeeHome from "./pages/employee-home/employee-home.component";
import EmployeeRquestForm from "./components/employee-request-form/employee-request-form.component";
import CheckInForm from "./components/check-in-form/check-in-form.component";
import CheckOutForm from "./components/check-out-form/check-out-form.component";
import { Routes, Route } from "react-router-dom";

import AdminSignIn from "./pages/admin-sign-in/admin-sign-in.component";
import EmployeeSignIn from "./pages/employee-sign-in/employee-sign-in.component";
import CheckInPointSignIn from "./pages/security-point-sign-in/security-point-sign-in.component";
import CheckPoint from "./pages/check-point-home/check-point-home.component";
import AdminHome from "./pages/admin-home/admin-home.component";
import Dashboard from "./components/dashboard/dashboard.component";
import AdminManage from "./pages/admin-manage/admin-mange.components";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import ApprovalHome from "./pages/approval-home/approval-home.component";
import Auth from "./routes/auth/auth.component";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SelectUser } from "./store/employee/employee-selector";
import { useEffect } from "react";
import ViewEmployeeReqs from "./pages/view employee requests/viewemployeerequests.components.jsx";

function App() {
  const location = useLocation();
  const curUser = useSelector(SelectUser);
  const Navigate = useNavigate();

  // useEffect(() => {
  //   if (location.pathname === "/") return;
  //   if (
  //     location.pathname === "/employeelogin" ||
  //     location.pathname === "/checkpointlogin"
  //   )
  //     return;
  //   if (!curUser) Navigate("/");

  //   console.log(location);
  // }, [location]);
  return (
    <div className="App">
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
          <Route path="report-log" element={<ReportHome />} />
        </Route>
        <Route path="employee" element={<EmployeeHome />}>
          <Route index element={<EmployeeRquestForm />} />
          <Route path="viewrequests" element={<ViewEmployeeReqs />} />
        </Route>
      </Routes>{" "}
    </div>
  );
}

export default App;
