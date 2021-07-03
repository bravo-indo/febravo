/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { GoLocation } from 'react-icons/go';
import { defaultuser, dummyuser1 } from '../assets';
import 'react-tabs/style/react-tabs.css';
import { useDropzone } from 'react-dropzone';
import { connect } from "react-redux"
import {getProfileData, updateProfile} from '../redux/actions/profile'

const EditProfile = ({auth, getProfileData, profile, updateProfile}) => {

  useEffect(() => {
    getProfileData(auth.token)
  },[])

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path}
      {' '}
      -
      {' '}
      {file.size}
      {' '}
      bytes
    </li>
  ));

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const [name, setName] = useState(profile.data.name)
  const [bidang, setBidang] = useState(profile.data.job_desk)
  const [address, setAddress] = useState(profile.data.address)
  const [compName, setCompName] = useState(profile.data.company_name)
  const [desc, setDesc] = useState(profile.data.description)
  const [file, setFile] = useState(null)


  const formData = (e) => {
    e.preventDefault()
    updateProfile({
      name,
      bidang,
      address,
      compName,
      desc,
      file
    }, auth.token)
  }

  return (
    <main className="bg-gray-100 pb-20">
      <div className="h-80 bg-purple-800 " />
      <div className="flex flex-row items-start space-x-10 mx-32">
        <div className="h-auto w-80 -mt-64 space-y-4">
          <div className="bg-white px-8 py-8 space-y-4 rounded-lg">
            <div className="flex flex-col items-center">
            {profile.data.images !== null ? <button onClick={handleClick}><img
            src={profile.data.images}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full object-cover"
          /></button> : <button onClick={handleClick}><img
            src={defaultuser}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full bg-white object-cover"
          /></button>}
          <input style={{ display: "none" }} ref={hiddenFileInput} type="file" onChange={(value) => setFile(value.target.files[0])}/>
            </div>
            <h4 className="text-2xl font-semibold">{profile.data.name}</h4>
            <h4>{profile.data.job_desk}</h4>
            <div className="flex flex-row items-center space-x-1">
              <GoLocation color="gray" />
              <p className="text-gray-400">{profile.data.address}</p>
            </div>
            <h4 className="text-gray-400">Freelancer</h4>
          </div>
          <button onClick={formData} className="bg-purple-800 text-white font-semibold py-3 w-full rounded-md">
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
                    Nama Lengkap
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    placeholder="Masukan nama lengkap"
                    onChange={(value) => setName(value.target.value)}
                    value={name}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Job Desk
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    onChange={(value) => setBidang(value.target.value)}
                    value={bidang}
                    placeholder="Masukan Job Desk"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Domisili
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    onChange={(value) => setAddress(value.target.value)}
                    value={address}
                    placeholder="Masukan Domisili"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Tempat Kerja
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    onChange={(value) => setCompName(value.target.value)}
                    value={compName}
                    placeholder="Masukan Tempat Kerja"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows="4"
                    className="px-2 py-3 rounded-md border border-gray-200"
                    onChange={(value) => setDesc(value.target.value)}
                    value={desc}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg ">
            <div className="px-10 py-5 border-b-2 border-gray-300">
              <h3 className="font-semibold text-2xl text-gray-700">Skill</h3>
            </div>
            <div className="px-10 py-5">
              <form className="space-y-8">
                <div className="flex flex-col space-y-2">
                  <div className="grid grid-cols-5 gap-x-5">
                    <input
                      className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                      type="text"
                      placeholder="Java"
                    />
                    <button type='submit' className="rounded-md px-5 py-3 bg-yellow-500 hover:bg-yellow-700 text-white border-2 font-semibold">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg ">
            <div className="px-10 py-5 border-b-2 border-gray-300">
              <h3 className="font-semibold text-2xl text-gray-700">
                Pengalaman Kerja
              </h3>
            </div>
            <div className="px-10 py-5">
              <form className="space-y-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">Posisi</label>
                  <input
                    className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    name="posisi"
                    placeholder="Web Developer"
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold text-gray-500">
                      Nama Perusahaan
                    </label>
                    <input
                      className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                      type="text"
                      name="perusahaan"
                      placeholder="PT Nusa Kambangan"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold text-gray-500">
                      Bulan/Tahun
                    </label>
                    <input
                      className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                      type="text"
                      name="lamaPengalaman"
                      placeholder="Juni 30"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows="4"
                    className="px-2 py-3 rounded-md border border-gray-200"
                    placeholder="Deskripsi pekerjaan Anda"
                    name="deskripsiJob"
                  />
                </div>
                <button className="rounded-md w-full px-5 py-3 border-yellow-500 hover:border-yellow-700 text-yellow-500 border-2 font-semibold">
                  Tambah Pengalaman Kerja
                </button>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg ">
            <div className="px-10 py-5 border-b-2 border-gray-300">
              <h3 className="font-semibold text-2xl text-gray-700">
                Portofolio
              </h3>
            </div>
            <div className="px-10 py-5">
              <form className="space-y-8">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Nama Aplikasi
                  </label>
                  <input
                    className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    name="appName"
                    placeholder="Masukan nama aplikasi"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Link Repository
                  </label>
                  <input
                    className="col-span-4 px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    name="repoLink"
                    placeholder="Masukan alamat link repository Anda"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Type Porfolio
                  </label>
                  <div className="flex flex-row justify-between w-1/2">
                    <label>
                      <input
                        className="mr-5"
                        type="radio"
                        name="portoType"
                        value="Aplikasi Mobile"
                      />
                      Aplikasi Mobile
                    </label>
                    <label>
                      <input
                        className="mr-5"
                        type="radio"
                        name="portoType"
                        value="Aplikasi Web"
                      />
                      Aplikasi Web
                    </label>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Upload Gambar
                  </label>

                  <section className="container">
                    <div
                      {...getRootProps({
                        className:
                          'dropzone, flex flex-col items-center justify-center border-2 h-40 border-dashed',
                      })}
                    >
                      <input {...getInputProps()} />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside>
                  </section>
                </div>
                <hr className=" border border-gray-300" />
                <button className="rounded-md w-full px-5 py-3  border-yellow-500 hover:border-yellow-700 text-yellow-500 border-2 font-semibold">
                  Tambah Portfolio
                </button>
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

const mapDisPatchToProps = { getProfileData, updateProfile }

export default connect(mapStateToProps, mapDisPatchToProps)(EditProfile) ;
