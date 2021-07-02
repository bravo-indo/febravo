import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logo } from '../assets';
import { authLogout } from '../redux/actions/auth';
import Button from './Button';

// const logOut = () => {
//   this.props.authLogout();
// };

function Header({ auth }) {
  return (
    <nav className="flex flex-row justify-between items-center px-32 py-5 sticky top-0 bg-white">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      {auth.token !== null ? (
        <Button onClick={() => authLogout()} label="Log Out" />
      ) : (
        <div className="space-x-5 flex flex-row">
          <Button to="/login" label="Masuk" />
          <Button to="/register" label="Daftar" isPrimary />
        </div>
      )}

    </nav>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = { authLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
