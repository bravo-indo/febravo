/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { defaultuser, dummyuser1, Logo } from '../assets';
import { authLogout } from '../redux/actions/auth';
import Button from './Button';
import {FiMail} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlineHome} from "react-icons/ai"
import {RiShutDownLine} from 'react-icons/ri'
import {VscListFlat} from 'react-icons/vsc'
import {getProfileData , getPorto, getExperience} from '../redux/actions/profile'
import Swal from 'sweetalert2'

function toggleButton(){
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
  }
}

function Header({ message, auth, authLogout, profile, getProfileData, getPorto, getExperience  }) {

  useEffect(() => {
    getProfileData(auth.token)
    getPorto(auth.token)
    getExperience(auth.token)
  },[])

  const onPress = () => {
    message.history.map((msg) => {
      return Swal.fire(`you have been hired by ${msg.name_recruiter} for ${msg.project}`)
    })
  }

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
          <button onClick={onPress}>
            <IoIosNotificationsOutline size={24} color='gray' />
          </button>
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
  profile: state.profile,
  message: state.message
});
const mapDispatchToProps = { authLogout, getProfileData, getPorto, getExperience };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
