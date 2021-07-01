/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import SideAuth from "../components/SideAuth";

class ResetPass extends React.Component {
  render() {
    return (
      <section className="auth bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-2">
            <SideAuth />
            <div className="py-24 p-10">
              <h1 className="text-4xl font-bold">Reset password</h1>
              <p className="py-7">
                You need to change your password to activate your account
              </p>
              <form className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Masukan Kata Sandi"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Konfirmasi Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Masukan Konfirmasi Kata Sandi"
                  />
                </div>
                <Link to="confirmPass">
                  <button className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
                    Reset Password
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ResetPass;
