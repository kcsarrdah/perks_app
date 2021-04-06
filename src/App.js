import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import AdminProfile from "./pages/adminProfilePage";
import EmpManagement from "./pages/EmpManagement";
import LoginPage from "./pages/loginPage";
import MyPerks from "./pages/myPerks";
import MyTransactions from "./pages/myTransactions";
import EmployeeDashboard from "./pages/employeeDashboard.jsx";


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          
          <LoginPage />
        </Route>

        <Route path="/myPerks" exact>
          <MyPerks />
        </Route>

        <Route path="/empManagement" exact>
          <EmpManagement />
        </Route>

        <Route path="/myTransaction" exact>
          <MyTransactions />
        </Route>

        <Route path="/adminProfile" exact>
          <AdminProfile />
        </Route>

        <Route path="/empDashboard" exact>
          <EmployeeDashboard />
        </Route>
        <Route path="/" exact>

        </Route>
        <Route path="/" exact>

        </Route>
        <Route path="/" exact>

        </Route>





      </Switch>
    </Router>
  );
}

export default App;
