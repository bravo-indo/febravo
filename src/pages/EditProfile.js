/*eslint-disable*/
import React from 'react';
import { GoLocation } from 'react-icons/go';
import { dummyuser1 } from '../assets';
import 'react-tabs/style/react-tabs.css';
import { useDropzone } from 'react-dropzone';

const EditProfile = () => {
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
  return (
    <main className="bg-gray-100 pb-20">
      <div className="h-80 bg-purple-800 " />
      <div className="flex flex-row items-start space-x-10 mx-32">
        <div className="h-auto w-80 -mt-64 space-y-4">
          <div className="bg-white px-8 py-8 space-y-4 rounded-lg">
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
                    Nama Lengkap
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    name="name"
                    placeholder="Masukan nama lengkap"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-500">
                    Job Desk
                  </label>
                  <input
                    className="px-2 py-3 rounded-md border border-gray-200"
                    type="text"
                    name="jobdesk"
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
                    name="domisili"
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
                    name="tempatKerja"
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
                      name="skill"
                      placeholder="Java"
                    />
                    <button className="rounded-md px-5 py-3 bg-yellow-500 hover:bg-yellow-700 text-white border-2 font-semibold">
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

export default EditProfile;
