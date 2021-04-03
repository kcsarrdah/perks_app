import React from "react";
import "./App.css";
import EmpManagement from "./pages/EmpManagement";
import LoginPage from "./pages/loginPage";
import MyPerks from "./pages/myPerks";

function App() {
  return (
    <div>
      <LoginPage />
      {/* <MyPerks /> */}
      <EmpManagement />
    </div>
  );
}

export default App;
