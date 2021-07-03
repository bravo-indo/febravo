/*eslint-disable*/
import React, { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { dummyuser1, porto1, porto2, porto3, toko } from "../assets";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardExperience from "../components/CardExperience";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {getProfileData} from '../redux/actions/profile'


function UserProfile({auth, getProfileData, profile}) {

  useEffect(() => {
    getProfileData(auth.token)
  },[])

  return (
    <main className="bg-gray-100 pb-20">
      <div className="h-80 bg-purple-800 " />
      <div className="flex flex-row space-x-10 mx-32">
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
              Python
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              Laravel
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              Golang
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              Javascript
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              PHP
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              HTML
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              C++
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              Kotlin
            </li>
            <li className="bg-yellow-400 text-white text-center rounded-md">
              Swift
            </li>
          </ul>
          <div className="flex flex-row items-center space-x-3 pt-8">
            <AiOutlineMail size={25} color="gray" />
            <p className="text-gray-400">{profile.data.email}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <FaInstagram size={25} color="gray" />
            <p className="text-gray-400">@Louist91</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <FiGithub size={25} color="gray" />
            <p className="text-gray-400">@Louistommo</p>
          </div>
          <div className="flex flex-row items-center space-x-3 pb-10">
            <FiGitlab size={25} color="gray" />
            <p className="text-gray-400">@Louistommo91</p>
          </div>
        </div>
        <div className="bg-white -mt-64 rounded-lg flex-1 ">
          <Tabs className="px-10 py-5">
            <TabList className="flex flex-row space-x-10">
              <Tab className="border-b-4 border-white cursor-pointer font-semibold text-2xl">
                Portofolio
              </Tab>
              <Tab className=" border-b-4 border-white cursor-pointer font-semibold text-2xl">
                Pengalaman Kerja
              </Tab>
            </TabList>
            <TabPanel>
              <div className="-ml-8 grid grid-cols-3 pt-10 gap-y-5">
                <div className="flex flex-col items-center space-y-3 ">
                  <img src={porto1} alt="porto" className="w-52 h-36" />
                  <p>Remainder app</p>
                </div>
                <div className="flex flex-col items-center space-y-3 ">
                  <img src={porto2} alt="porto" />
                  <p>Social media app</p>
                </div>
                <div className="flex flex-col items-center space-y-3 ">
                  <img src={porto3} alt="porto" />
                  <p>Project management web</p>
                </div>
                <div className="flex flex-col items-center space-y-3 ">
                  <img src={porto3} alt="porto" />
                  <p>Project management web</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="gap-y-5">
                <CardExperience
                  img={toko}
                  role="Engineer"
                  office="Tokopedia"
                  date="July 2019 - January 2020"
                  month={6}
                  desc="Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum erat orci,
                  mollis nec gravida sed, ornare quis urna.
                  Curabitur eu lacus fringilla,
                  vestibulum risus at."
                />
                <CardExperience
                  img={toko}
                  role="Engineer"
                  office="Tokopedia"
                  date="July 2019 - January 2020"
                  month={6}
                  desc="Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum erat orci,
                  mollis nec gravida sed, ornare quis urna.
                  Curabitur eu lacus fringilla,
                  vestibulum risus at."
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

const mapDisPatchToProps = { getProfileData }

export default connect(mapStateToProps, mapDisPatchToProps)( UserProfile);
