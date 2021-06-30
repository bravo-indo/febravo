import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import RegisterEmployee from "../pages/RegisterEmployee.js";
import RegisterRecruiter from "../pages/RegisterRecruiter.js";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registerEmployee">
          <RegisterEmployee />
        </Route>
        <Route path="/registerRecruiter">
          <RegisterRecruiter />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
