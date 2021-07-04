/*eslint-disable*/
import React, { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { defaultuser, dummyuser1, porto1, porto2, porto3, toko } from "../assets";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardExperience from "../components/CardExperience";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {getProfileData ,getPorto, getExperience} from '../redux/actions/profile'


function UserProfile({auth, getProfileData, profile, getPorto, getExperience}) {

  useEffect(() => {
    getProfileData(auth.token)
    getPorto(auth.token)
    getExperience(auth.token)
  },[])

  return (
    <main className="bg-gray-100 pb-20">
      <div className="h-80 bg-purple-800 " />
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-10 lg:mx-32">
        <div className="w-80 -mt-64 bg-white px-8 py-8 space-y-4 rounded-lg">
          <div className="flex flex-col items-center">
          {profile.data.images !== null ? <img
            src={profile.data.images}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full object-cover"
          />: <img
            src={defaultuser}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full bg-white object-cover"
          />}
          </div>
          <h4 className="text-2xl font-semibold">{profile.data.name}</h4>
          <h4>{profile.data.job_desk}</h4>
          <div className="flex flex-row items-center space-x-1">
            <GoLocation color="gray" />
            <p className="text-gray-400">{profile.data.address}</p>
          </div>
          <h4 className="text-gray-400">Freelancer</h4>
          <p className="text-gray-400 text-sm">
            {profile.data.description}
          </p>
          <Link to='/profile/edit' className="justify-center flex flex-row bg-purple-800 text-white font-semibold py-3 w-full rounded-md">
            Edit Profile
          </Link>
          <p className="text-xl font-semibold pt-6">Skill</p>
          <ul className="grid grid-cols-3 gap-2">
          <li className="bg-yellow-400 text-white text-center rounded-md">
              PHP
            </li>
          </ul>
          <div className="flex flex-row items-center space-x-3 pt-8">
            <AiOutlineMail size={25} color="gray" />
            <p className="text-gray-400">{profile.data.email}</p>
          </div>
          {profile.data.instagram !== null ? <div className="flex flex-row items-center space-x-3">
            <FaInstagram size={25} color="gray" />
            <p className="text-gray-400">{profile.data.instagram}</p>
          </div> : <></>}
          {profile.data.github !== null ? <div className="flex flex-row items-center space-x-3">
            <FiGithub size={25} color="gray" />
            <p className="text-gray-400">{profile.data.github}</p>
          </div> : <></>}
          {profile.data.gitlab !== null ? <div className="flex flex-row items-center space-x-3">
            <FiGitlab size={25} color="gray" />
            <p className="text-gray-400">{profile.data.gitlab}</p>
          </div> : <></>}
        </div>
        <div className="bg-white lg:-mt-64 rounded-lg flex-1 ">
          <Tabs className="px-10 py-5">
            <TabList className="flex flex-row space-x-10">
              <Tab className="border-b-4 border-white cursor-pointer font-semibold text-md lg:text-2xl">
                Portofolio
              </Tab>
              <Tab className=" border-b-4 border-white cursor-pointer font-semibold text-md lg:text-2xl">
                Pengalaman Kerja
              </Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-4 pt-10 gap-y-5 gap-x-4">
                {profile.porto.map((data) => (
                  data.id !== null ?
                    <div className="flex flex-col items-center space-y-3" >
                      <img src={data.portofolios} alt="porto" className="w-52 h-36 rounded-md object-cover" />
                      <p className='text-center font-medium pt-2'>{data.project_name}</p>
                    </div> : <div className='flex flex-row w-96 font-semibold text-gray-500 text-xl'><p>you don't have any portfolio</p></div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="gap-y-5">
              {profile.experience.map((data) => (
                data.id !== null ?
                 <CardExperience
                  img={toko}
                  role={data.position}
                  office={data.company_name}
                  date={data.month_years}
                  month={6}
                  desc={data.description}
                /> : <div className='pt-10 flex flex-row w-96 font-semibold text-gray-500 text-xl'><p>you don't have any experience</p></div>
              ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  )
}


const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

const mapDisPatchToProps = { getProfileData, getPorto, getExperience }

export default connect(mapStateToProps, mapDisPatchToProps)( UserProfile);
