/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

class RegisterRecruiter extends React.Component {
  render() {
    return (
      <section className="auth bg-gray-100">
        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-2">
            <div className="side-left p-10 w-full text-white">
              <p className="font-bold">
                <Link>Bravo</Link>
              </p>
              <h1 className="pt-60 pb-72 px-10 text-4xl font-bold">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
            <div className="py-24 p-10">
              <h1 className="text-4xl font-bold">Halo Pewpeople</h1>
              <p className="py-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <form className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Name</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="name"
                    placeholder="Masukan nama panjang"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Email</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="email"
                    placeholder="Masukan nama email"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Perusahaan</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="perusahaan"
                    placeholder="Masukan nama perusahaan"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Jabatan</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="jabatan"
                    placeholder="Posisi di perusahaan Anda"
                  />
                </div>
                <div>
                  <label className="flex flex-row">No handphone</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="phone"
                    placeholder="Masukan no handphone"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Masukan kata password"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Konfirmasi Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="passConfirm"
                    placeholder="Masukan konfirmasi kata sandi"
                  />
                </div>
                <button className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
                  Daftar
                </button>
                <p className="text-center text-gray-700">
                  Anda sudah punya akun?{" "}
                  <Link to="/login" className="text-yellow-500">
                    Masuk di sini
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterRecruiter;
