/*eslint-disable*/
import React from "react";
import { useState } from "react"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import SideAuth from "../components/SideAuth";
import {forgotPass} from '../redux/actions/auth'


function ForgotPass({forgotPass}) {

  let history = useHistory()
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    forgotPass(email)
    history.push('/resetPass')
  }

  return (
    <section className="auth bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-2">
            <SideAuth />
            <div className="py-24 p-10">
              <h1 className="text-4xl font-bold">Reset your Password</h1>
              <p className="py-7">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
              <form className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Email</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="email"
                    value={email}
                    onChange={(value) => setEmail(value.target.value)}
                    placeholder="Masukan Email"
                  />
                </div>
                  <button onClick={onSubmit} className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
                    Send Password reset email
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}


const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { forgotPass };

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
