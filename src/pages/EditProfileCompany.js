/*eslint-disable*/
import React, { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { defaultuser, dummyuser1 } from "../assets";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux"
import {getProfileData} from '../redux/actions/profile'

const EditProfileCompany = ({auth, getProfileData, profile}) => {

  useEffect(() => {
    getProfileData(auth.token)
  },[])

  return (
    <main className="bg-gray-100 pb-20">
      <div className="h-80 bg-purple-800 " />
      <div className="flex flex-row items-start space-x-10 mx-32">
        <div className="h-auto w-80 -mt-64 space-y-4">
          <div className="bg-white px-8 py-8 space-y-4 rounded-lg">
            <div className="flex flex-col items-center">
            {profile.data.images !== null ? <img
            src={dummyuser1}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full object-cover"
          /> : <img
            src={defaultuser}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full bg-white object-cover"
          />}
            </div>
            <h4 className="text-2xl text-center font-semibold">{profile.data.company_name}</h4>
            <h4 className='text-center'>{profile.data.position}</h4>
            <div className="flex flex-row items-center space-x-1 justify-center">
              <GoLocation color="gray" />
              <p className="text-gray-400 ">{profile.data.address}</p>
            </div>
          </div>
          <button className="bg-purple-800 text-white font-semibold py-3 w-full rounded-md">
            Simpan
          </button>
          <button className="bg-white border-2 border-purple-800 text-purple-800 font-semibold py-3 w-full rounded-md">
            Batal
          </button>
        </div>
        <div className="flex-1 space-y-10">
          <div className="bg-white -mt-64 rounded-lg ">
            <div className="px-10 py-5 border-b-2 border-gray-300">
              <h3 className="font-semibold text-2xl text-gray-700">
                Data Diri
              </h3>
            </div>
            <div className="px-10 py-5">
              <form className="space-y-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Nama Perusahaan
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nama perusahaan"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">Bidang</label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan bidang perusahaan ex:financial"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">Kota</label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nama kota"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows="4"
                    className="px-2 py-3 rounded-md border border-gray-200"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">Email</label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Instagram
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nama Instagram"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Nomor Telepon
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nomor telepon"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    LinkedIn
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nama LinkedIn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
})

const mapDisPatchToProps = { getProfileData }
export default connect(mapStateToProps, mapDisPatchToProps)(EditProfileCompany);
