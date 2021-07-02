/*eslint-disable*/
import React from "react";
import { useEffect } from "react"
import { BsSearch } from "react-icons/bs";
import { connect } from "react-redux"

import { dummyuser1 } from "../assets";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import {getProfileData} from '../redux/actions/profile'
function Home({auth,getProfileData}) {
  useEffect(() => {
    console.log(auth.token)
    getProfileData(auth.token)
  },[])

  return (
    <main className="container mx-auto bg-red-500 ">
      <section className="bg-purple-800 py-5">
        <p className="text-white text-2xl font-semibold">Top Jobs</p>
      </section>
      <section className="bg-gray-100 py-5">
        <div className="flex flex-row items-center space-x-5 bg-white px-4 py-1 rounded-lg">
          <input
            type="text"
            placeholder="Search for any skill"
            className="p-4 flex-1 focus:outline-none"
          />
          <button>
            <BsSearch size={25} />
          </button>
          <select className="border-l-2 border-gray-400 focus:outline-none">
            <option value="name">Sortir berdasarkan nama</option>
            <option value="skill">Sortir berdasarkan Skill</option>
            <option value="location">Sortir berdasarkan Lokasi</option>
            <option value="freelance">Sortir berdasarkan freelance</option>
            <option value="fulltime">Sortir berdasarkan fulltime</option>
          </select>
          <Button label="Search" isPrimary />
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="rounded-xl bg-white">
          <UserCard
            img={dummyuser1}
            name="Harry Styles"
            location="Bandung"
            role="Web Developer"
            skill="PHP"
            to='/user/:id'
          />
          <UserCard
            img={dummyuser1}
            name="Harry Styles"
            location="Bandung"
            role="Web Developer"
            skill="PHP"
            to='/user/:id'
          />
          <UserCard
            img={dummyuser1}
            name="Harry Styles"
            location="Bandung"
            role="Web Developer"
            skill="PHP"
            to='/user/:id'
          />
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="flex flex-row justify-center items-center space-x-4">
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            {"<"}
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            1
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            2
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            3
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            4
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            5
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            6
          </button>
          <button className="bg-white p-5 text-gray-400 font-semibold ">
            {">"}
          </button>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDisPatchToProps = { getProfileData };
export default connect(mapStateToProps, mapDisPatchToProps)(Home) ;
