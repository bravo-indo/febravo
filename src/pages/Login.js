/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import {authLogin} from "../redux/actions/auth"

class Login extends React.Component {
  state = {
    email :"",
    password: ""
  }

  onLogin = (event) =>{
    event.preventDefault()
    const {email, password} = this.state
    this.props.authLogin( email, password)
  }

  // componentDidUpdate(){
  //   const { token} = this.props.auth
  //   if(token !== null){
  //   this.props.history.push("/")
  //   }
  // }


  render() {
    return (
      <section className="auth bg-gray-100">
        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:visible side-left px-16 md:p-10 w-full h-10 md:h-auto text-white">
              <p className="font-bold">
                <Link>Bravo</Link>
              </p>
              <h1 className="md:pt-60 pb-72 md:px-10 text-4xl font-bold">
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h1>
            </div>
            <div className="py-24 px-16 md:p-10">
              <h1 className="text-4xl font-bold">Halo Pewpeople</h1>
              <p className="py-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <form onSubmit={this.onLogin} className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Email</label>
                  <input
                    onChange={(event)=>this.setState({email: event.target.value})}
                    className="w-full px-2 py-3 rounded-md"
                    type="email"
                    name="email"
                    placeholder="Masukan Email"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Kata Sandi</label>
                  <input
                    onChange={(event)=>this.setState({password: event.target.value})}
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Masukan kata sandi"
                  />
                </div>
                <Link to="/forgotPass" className="text-gray-700 text-right">
                  Lupa kata sandi?
                </Link>
                <button className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
                  Masuk
                </button>
                <p className='text-center'>atau</p>
                {/* <Link to='/login/employee' className="w-full px-2 py-3 rounded-md bg-yellow-500 text-center text-white">
                  Login sebagai pekerja
                </Link> */}
                <p className="text-center text-gray-700">
                  Anda belum punya akun? Daftar di sini sebagai
                  {' '}
                  <Link
                    to="/register"
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    Pekerja
                  </Link>
                  /
                  <Link
                    to="/register/recruiter"
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    Perekrut
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

const mapStateToProps = (state) => ({
  auth: state.auth
})
const mapDispatchToProps = {authLogin}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
