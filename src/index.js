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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index path="adminlogin" element={<AdminSignIn />} />
          <Route path="employeelogin" element={<EmployeeSignIn />} />
          <Route path="checkpointlogin" element={<CheckInPointSignIn />} />
        </Route>
        <Route index path="checkpointhome" element={<CheckPoint />} />
        <Route index path="adminhome" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
