/*eslint-disable*/
import React from 'react';
import { useState } from 'react'
import { GoLocation } from 'react-icons/go';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { dummyuser1 } from '../assets';
import { hire } from '../redux/actions/hire'
import { getDetailProfile } from '../redux/actions/profile'

function Hire({user, auth, hire}) {

  const [purpose, setPurpose] = useState("projek")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const {slug} = useParams()

  const form = {
    purpose,
    name,
    email,
    phone,
    desc
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    hire(form, slug, auth.token)
  }

  return (
    <main className="bg-gray-100 px-32 py-10 flex flex-row space-x-20 pb-40">
      <section className="w-80 bg-white px-8 py-8 space-y-4 rounded-lg">
        <div className="flex flex-col items-center">
        {user.user.map((data) => {
          return <img src={data.images} alt="user" className="object-cover rounded-full w-32 h-32" />
        })}
        </div>
        {user.user.map((data) => {
          return <div className='space-y-2  flex flex-col'>
          <h4 className="text-2xl font-semibold">{data.name}</h4>
        <h4>{data.job_desk}</h4>
        <div className="flex flex-row items-center space-x-1">
          <GoLocation color="gray" />
          <p className="text-gray-400">{data.address}</p>
        </div>
        <h4 className="text-gray-400">Freelancer</h4>
        <p className="text-gray-400 text-sm">
          {data.description}
        </p>
          </div>
        })}
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
      {user.user.map((data) => {
        return <h3 className="text-2xl font-semibold">Hubungi {data.name}</h3>
      })}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <form className="space-y-4 flex flex-col">
          <label className="text-gray-400 text-sm">
            Tujuan tentang pesan ini
          </label>
          <div className="flex flex-col">
            <select value={purpose} onChange={(e) => setPurpose(e.target.value)} className="pl-3 py-3 focus:outline-none rounded-lg">
              <option selected value="projek">
                Projek
              </option>
              <option value="fulltime">Full Time</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <label className="text-gray-400 text-sm">Nama lengkap</label>
          <input
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan nama lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-gray-400 text-sm">Email</label>
          <input
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-gray-400 text-sm">No Handphone</label>
          <input
            className="pl-3 py-3 focus:outline-none rounded-lg"
            type="text"
            placeholder="Masukan no handphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="text-gray-400 text-sm">Deskripsi</label>
          <textarea
            className="h-44 pl-3 py-3 focus:outline-none rounded-lg"
            placeholder="Deskripsikan/jelaskan lebih detail "
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={onSubmit} className="bg-yellow-400 text-white font-semibold py-3 rounded-lg">
            Hire
          </button>
        </form>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  user: state.user
});

const mapDispatchToProps = {getDetailProfile, hire}

export default connect(mapStateToProps, mapDispatchToProps)(Hire);
