/*eslint-disable*/
import React from "react";
import { useEffect } from "react"
import { BsSearch } from "react-icons/bs";
import { connect } from "react-redux"

import { defaultuser, dummyuser1 } from "../assets";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import { getHistory } from "../redux/actions/history"
import {getProfileData, getPorto, getExperience, getPortoById, getExperienceById} from '../redux/actions/profile'
import {getUserWorker} from '../redux/actions/user'
import Swal from 'sweetalert2'

function Home({getHistory, getPortoById, getExperienceById, profile, user, auth, getProfileData, getPorto, getExperience, getUserWorker}) {
  useEffect(() => {
    console.log(auth.token)
    getProfileData(auth.token)
    getPorto(auth.token)
    getExperience(auth.token)
    getUserWorker(auth.token)
    getPortoById(4, auth.token)
    getExperienceById(4, auth.token)
    getHistory(auth.token)
  },[profile.data])

  const loadMore = () => {
    const { nextPage } = user.pagination;
    if (nextPage !== null) {
      getUserWorker(nextPage);
    } else {
      Swal.fire('no more users')
    }
  };

  return (
    <main>
      <section className="bg-purple-800 py-5 lg:px-32">
        <p className="px-5 text-white text-2xl font-semibold">Top Jobs</p>
      </section>
      <section className="bg-gray-100 md:px-32 py-5">
        <div className="flex flex-row  items-center space-x-5 bg-white px-4 py-1 rounded-lg">
            <input
            type="text"
            placeholder="Search for any skill"
            className="p-4 flex-1 w-96 focus:outline-none"
            />
            <BsSearch size={25} />
            <select className="hidden md:inline-block focus:outline-none">
              <option value="name">Sortir berdasarkan nama</option>
              <option value="skill">Sortir berdasarkan Skill</option>
              <option value="location">Sortir berdasarkan Lokasi</option>
              <option value="freelance">Sortir berdasarkan freelance</option>
              <option value="fulltime">Sortir berdasarkan fulltime</option>
            </select>
            {/* <Button className="hidden md:inline-block " label="Search" isPrimary /> */}
            <button className="hidden md:inline-block rounded-md py-3 px-4 bg-purple-800 text-white border-2 border-purple-800 font-semibold">Search</button>
        </div>
      </section>
      <section className="bg-gray-100 md:px-32">
        <div className="rounded-xl bg-white">
        {user.data.map((data) => {
          return <UserCard
            img={data.images ? data.images : defaultuser}
            name={data.Name_Worker}
            location={data.address}
            role="Web Developer"
            skill={data.skills}
            to={`/user/${data.id}`}
          />
        })}
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="flex flex-row justify-center items-center space-x-4">
        {user.data &&
        <button onClick={loadMore} className="bg-white p-5 text-gray-400 font-semibold ">
            {"Next"}
          </button>
        }
        </div>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  user: state.user
});

const mapDisPatchToProps = {getHistory, getPortoById, getExperienceById, getUserWorker, getProfileData, getPorto, getExperience };
export default connect(mapStateToProps, mapDisPatchToProps)(Home) ;
