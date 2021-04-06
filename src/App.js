import React from "react";
import "./App.css";
import AdminProfile from "./pages/adminProfilePage";
import EmpManagement from "./pages/EmpManagement";
import LoginPage from "./pages/loginPage";
import MyPerks from "./pages/myPerks";
import MyTransactions from "./pages/myTransactions";

function App() {
  return (
    <div>
      <LoginPage />
      <MyPerks />
      <EmpManagement />
      <MyTransactions />
      {/* <AdminProfile /> */}
    </div>
  );
}

export default App;
