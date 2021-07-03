/* eslint-disable */
import React from 'react';
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

function toggleButton(){
  document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
  }
}

function Header({ auth, authLogout, profile }) {

  return (
    <div className="relative">
      <nav className="container mx-auto flex flex-row justify-between items-start px-5 lg:px-32 py-5 sticky top-0 bg-white">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        {auth.token !== null ? (
          <div className="flex flex-col items-end">
            <div class="block lg:hidden">
              <button id="nav-toggle" onClick={()=>toggleButton()} class="px-3 py-2 bg-purple-700 rounded-md">
                <VscListFlat size={24} color={'white'}/>
              </button>
            </div>
            
            <div class="w-full flex-grow bg-white" id="nav-content">
              <div className='w-full py-5 flex flex-col space-y-5 items-end font-semibold text-lg text-purple-800'>
                <Link to='/home' class="hover:text-purple-500">Home</Link>
                <Link to='/home' class="hover:text-purple-500">Mail</Link>
                <Link to='/home' class="hover:text-purple-500">Notification</Link>
                <div className="w-full flex flex-row space-x-3 justify-end">
                  <Link to={type_users !== 'recruiter' ? '/profile' : '/profile/company'}>  
                    {profile.data.images !== null ? <img
                    src={dummyuser1}
                    alt="user"
                    className="w-6 h-6 rounded-full object-cover"
                  /> : <img
                    src={defaultuser}
                    alt="user"
                    className="w-6 h-6 rounded-full bg-white object-cover"
                  />}
                  </Link>
                  <button label='Logout' onClick={authLogout}><RiShutDownLine size={24} color='#990000' /></button>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:inline-block">
              <div className='flex flex-row items-center space-x-20'>
                <Link to='/home' className='font-semibold text-lg text-purple-800'>Home</Link>
                <div className='flex flex-row space-x-5 items-center'>
                  <FiMail size={24} color='gray' />
                  <IoIosNotificationsOutline size={24} color='gray' />
                  <Link to={type_users !== 'recruiter' ? '/profile' : '/profile/company'}>
                    {profile.data.images !== null ? <img
                    src={dummyuser1}
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
            </div>
          </div>

        ) : (
          <div className="space-x-5 flex flex-row">
            <Button to="/login" label="Masuk" />
            <Button to="/register" label="Daftar" isPrimary />
          </div>
        )}
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});
const mapDispatchToProps = { authLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
