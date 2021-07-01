import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';

import Login from '../pages/Login';
import RegisterEmployee from '../pages/RegisterEmployee';
import RegisterRecruiter from '../pages/RegisterRecruiter';
import ForgotPass from '../pages/ForgotPass';
import NotifResetPass from '../pages/NotifResetPass';
import ResetPass from '../pages/ResetPass';
import ConfirmPass from '../pages/ConfirmPass';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import Hire from '../pages/Hire';
import EditProfile from '../pages/EditProfile';
import ProfileCompany from '../pages/ProfileCompany';
import EditProfileCompany from '../pages/EditProfileCompany';

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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/edit">
          <EditProfile />
        </Route>
        <Route exact path="/profile/company">
          <ProfileCompany />
        </Route>
        <Route path="/profile/company/edit">
          <EditProfileCompany />
        </Route>
        <Route path="/hire">
          <Hire />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <RegisterEmployee />
        </Route>
        <Route path="/register/recruiter">
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
