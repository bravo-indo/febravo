/*eslint-disable*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ children, auth, ...rest }) => {
  const { token } = auth;
  return (
    <Route
      render={() => {
        if (token !== null) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
      {...rest}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
