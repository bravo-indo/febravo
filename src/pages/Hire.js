/*eslint-disable*/
// import React from 'react';
import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { connect } from 'react-redux';
import { dummyuser1 } from '../assets';
import {getProfileData} from '../redux/actions/profile'
import {addHireData} from '../redux/actions/hire'

function Hire({auth, getProfileData, profile}) {
  useEffect(() => {
    getProfileData(auth.token)
  }, [])
  // console.log(profile.data.id)

  const id_recruiter = profile.data.id
  const id_worker = 27
  const [name, setName] = ""
  const [email, setEmail] = ""
  const [phone, setPhone] = ""
  const [description, setDescription] = ""


  const formData = (event) => {
    event.preventDefault()
    addHireData({id_recruiter, id_worker, name, email, phone, description}, auth.token)
  }

  return (
    <main className="bg-gray-100 px-32 py-10 flex flex-row space-x-20 pb-40">
      <section className="w-80 bg-white px-8 py-8 space-y-4 rounded-lg">
        <div className="flex flex-col items-center">
          <img src={dummyuser1} alt="user" className="w-32 h-32" />
        </div>
        <h4 className="text-2xl font-semibold">Louis Tomlinson</h4>
        <h4>Web Developer</h4>
        <div className="flex flex-row items-center space-x-1">
          <GoLocation color="gray" />
          <p className="text-gray-400">Purwokerto, Jawa Tengah</p>
        </div>
        <h4 className="text-gray-400">Freelancer</h4>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
          lacus fringilla, vestibulum risus at.
        </p>
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
      </section>
      <section className="space-y-5">
        <h3 className="text-2xl font-semibold">Hubungi Lous Tomlinson</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <form onSubmit={formData} className="space-y-4 flex flex-col">
          <label className="text-gray-400 text-sm">
            Tujuan tentang pesan ini
          </label>
          <div className="flex flex-col">
            <select className="pl-3 py-3 focus:outline-none rounded-lg">
              <option selected value="projek">
                Projek
              </option>
              <option value="fulltime">Full Time</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <label className="text-gray-400 text-sm">Nama lengkap</label>
          <input
             onChange={(event) => setName(event.target.value)}
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan nama lengkap"
          />
          <label className="text-gray-400 text-sm">Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan email"
          />
          <label className="text-gray-400 text-sm">No Handphone</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan no handphone"
          />
          <label className="text-gray-400 text-sm">Deskripsi</label>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className="h-44 pl-3 py-3 focus:outline-none rounded-lg"
            placeholder="Deskripsikan/jelaskan lebih detail "
          />
          <button className="bg-yellow-400 text-white font-semibold py-3 rounded-lg">
            Hire
          </button>
        </form>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  auth : state.auth,
  profile : state.profile
})

const mapDispatchToProps = {getProfileData}

export default connect(mapStateToProps, mapDispatchToProps)(Hire);
