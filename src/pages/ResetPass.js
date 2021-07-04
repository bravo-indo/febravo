/*eslint-disable*/
import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import SideAuth from "../components/SideAuth";
import {resetPassword} from '../redux/actions/resetPassword'

class ResetPass extends React.Component {
  state = {
    password: '',
    confirm_password: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.resetPassword(this.state,this.props.resetPass.email)

  }
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
              <form onSubmit={this.onSubmit} className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    placeholder="Masukan Kata Sandi"
                    onChange={(e) => this.setState({password: e.target.value})}
                  />
                </div>
                <div>
                  <label className="flex flex-row">Konfirmasi Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    placeholder="Masukan Konfirmasi Kata Sandi"
                    onChange={(e) => this.setState({confirm_password: e.target.value})}
                  />
                </div>
                  <button type='submit' className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
                    Reset Password
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  resetPass: state.resetPass,
});
const mapDispatchToProps = { resetPassword };

export default connect(mapStateToProps, mapDispatchToProps)(ResetPass) ;
