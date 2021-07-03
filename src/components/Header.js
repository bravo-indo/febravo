/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { defaultuser, dummyuser1, Logo } from '../assets';
import { authLogout } from '../redux/actions/auth';
import Button from './Button';
import {FiMail} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {getProfileData , getPorto, getExperience} from '../redux/actions/profile'

function Header({ auth, authLogout, profile, getProfileData, getPorto, getExperience  }) {

  useEffect(() => {
    getProfileData(auth.token)
    getPorto(auth.token)
    getExperience(auth.token)
  },[])

  return (
    <nav className="container mx-auto flex flex-row justify-between items-center px-5 lg:px-32 py-5 sticky top-0 bg-white">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      {auth.token !== null ? (
        <div className='flex flex-row items-center space-x-20'>
        <Link to='/home' className='font-semibold text-lg text-purple-800'>Home</Link>
        <div className='flex flex-row space-x-5 items-center'>
          <FiMail size={24} color='gray' />
          <IoIosNotificationsOutline size={24} color='gray' />
          <Link to={profile.data.type_users !== 'recruiter' ? '/profile' : '/profile/company'}>
            {profile.data.images !== null ? <img
            src={profile.data.images}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          /> : <img
            src={defaultuser}
            alt="user"
            className="w-8 h-8 rounded-full bg-white object-cover"
          />}
          </Link>
          <Button label='Logout' onClick={authLogout}/>
        </div>
        </div>
      ) : (
        <div className="space-x-5 flex flex-row">
          <Button to="/login" label="Masuk" />
          <Button to="/register" label="Daftar" isPrimary />
        </div>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});
const mapDispatchToProps = { authLogout, getProfileData, getPorto, getExperience };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
