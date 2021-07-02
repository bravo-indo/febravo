/*eslint-disable*/
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { defaultuser, dummyuser1, dummyuser2 } from "../assets";
import {getProfileData} from '../redux/actions/profile'

function ProfileCompany({auth, getProfileData, profile}) {
  useEffect(() => {
    getProfileData(auth.token)
  },[])

  return (
    <main className="bg-gray-100 pt-20 py-40">
      <section className="mx-32">
        <div className=" h-40 rounded-t-lg pb-5 bg-purple-800 flex flex-row space-x-2 items-end justify-end">
          <button>
            <BsPencil color="white" size={24} />
          </button>
          <p className="font-semibold text-white text-xl pr-8">Ubah Latar</p>
        </div>
        <div className="flex flex-col items-center space-y-3 bg-white rounded-b-lg">
          {profile.data.images !== null ? <img
            src={profile.data.images}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full object-cover"
          /> : <img
            src={defaultuser}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full bg-white object-cover"
          />}
          <h3 className="text-xl font-semibold">{profile.data.company_name}</h3>
          <h3>{profile.data.position}</h3>
          <div className="flex flex-row items-center space-x-1">
            <GoLocation color="gray" />
            <p className="text-gray-400">{profile.data.address}</p>
          </div>
          <p className="px-60 text-center">
          {profile.data.description}
          </p>
          <div className="pt-5">
            <Link to='/profile/company/edit' className="px-20 rounded-md font-semibold text-white bg-purple-800 py-2 ">
              Edit profile
            </Link>
          </div>
          <div className="space-y-4 pb-20">
            <div className="flex flex-row items-center space-x-3 pt-8">
              <AiOutlineMail size={25} color="gray" />
              <p className="text-gray-400">{profile.data.email}</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <FaInstagram size={25} color="gray" />
              <p className="text-gray-400">{profile.data.instagram}</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <FiPhone size={25} color="gray" />
              <p className="text-gray-400">{profile.data.phone_number}</p>
            </div>
            <div className="flex flex-row items-center space-x-3 pb-10">
              <FiLinkedin size={25} color="gray" />
              <p className="text-gray-400">@Louistommo91</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

const mapDisPatchToProps = { getProfileData }

export default connect(mapStateToProps, mapDisPatchToProps)(ProfileCompany);
