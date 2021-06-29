import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section className="auth bg-gray-100">
        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-2">
            <div className="side-left p-10 w-full text-white">
              <p className="font-bold">
                <Link>Bravo</Link>
              </p>
              <h1 className="pt-60 pb-72 px-10 text-4xl font-bold">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div className="py-24 p-10">
              <h1 className="text-4xl font-bold">Halo Pewpeople</h1>
              <p className="py-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <form className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Name</label>
                  <input className="w-full px-2 py-3 rounded-md" type="text" name="name" placeholder="Masukan nama panjang" />
                </div>
                <div>
                  <label className="flex flex-row">Name</label>
                  <input className="w-full px-2 py-3 rounded-md" type="text" name="name" placeholder="Masukan nama panjang" />
                </div>
                <Link className="text-gray-700 text-right">Lupa kata sandi?</Link>
                <button className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">Masuk</button>
                <p className="text-center text-gray-700">
                  Anda belum punya akun? <Link className="text-yellow-500">Daftar di sini</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
