import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";

import Login from "../pages/Login";
import RegisterEmployee from "../pages/RegisterEmployee.js";
import RegisterRecruiter from "../pages/RegisterRecruiter.js";
import ForgotPass from "../pages/ForgotPass.js";
import NotifResetPass from "../pages/NotifResetPass.js";
import ResetPass from "../pages/ResetPass.js";
import ConfirmPass from "../pages/ConfirmPass.js";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../pages/Profile";
import Hire from "../pages/Hire";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/hire">
          <Hire />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registerEmployee">
          <RegisterEmployee />
        </Route>
        <Route path="/registerRecruiter">
          <RegisterRecruiter />
        </Route>
        <Route path="/forgotPass">
          <ForgotPass />
        </Route>
        <Route path="/confirmPass">
          <ConfirmPass />
        </Route>
        <Route path="/resetPass">
          <ResetPass />
        </Route>
        <Route path="/notifResetPass">
          <NotifResetPass />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
