export const FetchUserDataAsync = async (formdata) => {
  let data = new FormData();
  data.append(formdata.key, formdata.value);
  try {
    const AllEmpData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpData;
  } catch (error) {
    alert(error);
  }
};

export const FetchUniqueUserData = async (id) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 2 };

  formdata.append(action.key, action.value);
  formdata.append("ID", id);
  try {
    formdata.append("FETCH_USER", true);
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const UpdateUserDataWithId = async (userData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 3 };
  formdata.append(action.key, action.value);

  formdata.append("personelID", userData.personnel_ID);
  formdata.append("purpose", userData.purpose);
  formdata.append("date", userData.date);
  formdata.append("name", userData.name);
  formdata.append("position", userData.position);
  formdata.append("duration", userData.duration);
  formdata.append("pesRes", userData.pesRes);
  formdata.append("priority", userData.priority);
  console.log(formdata.has("pesRes"));
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const CreateNewUserWithData = async (userData) => {
  console.log(userData);
  let formdata = new FormData();
  const action = { key: "ACTION", value: 4 };
  formdata.append(action.key, action.value);

  formdata.append("personelID", userData.personnel_ID);
  formdata.append("purpose", userData.purpose);
  formdata.append("dept", userData.dept);
  formdata.append("date", userData.date);
  formdata.append("name", userData.name);
  formdata.append("position", userData.position);
  formdata.append("duration", userData.duration);
  formdata.append("pesRes", userData.pesRes);
  formdata.append("priority", userData.priority);
  formdata.append("appId", userData.appId);
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const SetDataInDb = async (Alldata) => {
  console.log(Alldata);
  Alldata.forEach(async (userData) => {
    let formdata = new FormData();
    const action = { key: "ACTION", value: 10 };
    formdata.append(action.key, action.value);
    formdata.append("id", userData.id);
    formdata.append("purpose", userData.purpose);
    formdata.append("date", userData.date);
    formdata.append("name", userData.name);
    formdata.append("position", userData.position);
    formdata.append("duration", userData.duration);
    formdata.append("pesRes", userData.personRes);
    formdata.append("priority", userData.priority);
    formdata.append("dept", userData.dept);
    console.log(formdata.has("pesRes"));
    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const SetApprovalReqDataInDb = async (Alldata) => {
  Alldata.forEach(async (userData) => {
    console.log(userData);

    let formdata = new FormData();
    const action = { key: "ACTION", value: 21 };
    formdata.append(action.key, action.value);
    formdata.append("approvalId", userData.approvalId);
    formdata.append("purpose", userData.purpose);
    formdata.append("name", userData.name);
    formdata.append("requestedBy", userData.requestedBy);
    formdata.append("dateRequested", userData.dateRequested);
    formdata.append("dueDate", userData.dueDate);
    formdata.append("position", userData.position);
    formdata.append("priority", userData.priority);
    formdata.append("timeLength", userData.timeLength);

    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const SetCeckInDataInDb = async (Alldata) => {
  console.log(Alldata);
  Alldata.forEach(async (userData) => {
    let formdata = new FormData();
    const action = { key: "ACTION", value: 11 };
    formdata.append(action.key, action.value);
    formdata.append("id", userData.id);
    formdata.append("purpose", userData.purpose);
    formdata.append("name", userData.name);
    formdata.append("position", userData.position);
    formdata.append("pesRes", userData.personRes);
    formdata.append("checkin", userData.checkIn);
    formdata.append("checkout", userData.checkOut);
    try {
      const Data = await fetch("http://localhost/vms_back/index.php", {
        method: "POST",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "application/json",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => data);

      return Data;
    } catch (error) {
      alert(error);
    }
  });
};
export const InsertCeckInDataInDb = async (EmployeeLog) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 11 };
  formdata.append(action.key, action.value);
  formdata.append("id", EmployeeLog.id);
  formdata.append("purpose", EmployeeLog.purpose);
  formdata.append("name", EmployeeLog.name);
  formdata.append("position", EmployeeLog.position);
  formdata.append("pesRes", EmployeeLog.personRes);
  formdata.append("checkin", EmployeeLog.checkIn);
  formdata.append("tableId", EmployeeLog.tableId);
  console.log(formdata.has("pesRes"));
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const InsertCeckOutDataInDb = async (userData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 13 };
  formdata.append(action.key, action.value);
  formdata.append("id", userData.id);
  formdata.append("tableId", userData.tableId);

  formdata.append("checkout", userData.checkOut);
  console.log(userData);
  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const FetchCheckInDataInDb = async (formdata) => {
  let data = new FormData();
  data.append(formdata.key, formdata.value);
  try {
    const AllEmpLogData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpLogData;
  } catch (error) {
    alert(error);
  }
};
export const FetchApprovalsDataInDb = async () => {
  let data = new FormData();
  const action = { key: "ACTION", value: 20 };

  data.append(action.key, action.value);
  try {
    const AllEmpLogData = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {},
      body: data,
    })
      .then((response) => response.json())
      .then((dat) => dat);
    return AllEmpLogData;
  } catch (error) {
    alert(error);
  }
};
export const DeleteApprovalRequest = async (approvalID) => {
  let formdata = new FormData();
  console.log(approvalID);
  const action = { key: "ACTION", value: 22 };

  formdata.append(action.key, action.value);
  formdata.append("approvalID", approvalID);
  try {
    formdata.append("FETCH_USER", true);
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const FetchRequestsByIdAsync = async (PesID) => {
  let formdata = new FormData();
  console.log(PesID);
  const action = { key: "ACTION", value: 24 };

  formdata.append(action.key, action.value);
  formdata.append("PesID", PesID);
  try {
    formdata.append("FETCH_USER", true);
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
export const AddApprovalReqDataToDb = async (employeeRequestData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 23 };
  formdata.append(action.key, action.value);
  formdata.append("purpose", employeeRequestData.purpose);
  formdata.append("name", employeeRequestData.name);
  formdata.append("requestedBy", employeeRequestData.requestedBy);
  formdata.append("dateRequested", employeeRequestData.dateRequested);
  formdata.append("dueDate", employeeRequestData.dueDate);
  formdata.append("position", employeeRequestData.position);
  formdata.append("priority", employeeRequestData.priority);
  formdata.append("timeLength", employeeRequestData.timeLength);
  formdata.append("reqById", Number(employeeRequestData.req_by_id));

  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => true);

    return Data;
  } catch (error) {
    alert(error);
  }
};
export const SetlectUserInDb = async (userLoginData) => {
  let formdata = new FormData();
  const action = { key: "ACTION", value: 30 };
  formdata.append(action.key, action.value);

  formdata.append("userName", userLoginData.userName);
  formdata.append("userPassword", userLoginData.userPassword);
  formdata.append("userType", userLoginData.userType);
  console.log(userLoginData.userType);

  try {
    const Data = await fetch("http://localhost/vms_back/index.php", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        // "Content-Type": "application/json",
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => data);
    return Data;
  } catch (error) {
    alert(error);
  }
};
