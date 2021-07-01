/*eslint-disable*/
import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import {authRegisterRecruiter} from '../redux/actions/auth'

class RegisterRecruiter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      company: '',
      position: '',
      phone: '',
      password: '',
      passConfirm:''
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.authRegisterRecruiter(
      this.state.name,
      this.state.email,
      this.state.company,
      this.state.position,
      this.state.phone,
      this.state.password,
      this.state.passConfirm)
  }
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
              <form onSubmit={this.onSubmit}  className="flex flex-col space-y-8 text-gray-400">
                <div>
                  <label className="flex flex-row">Name</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                    placeholder="Masukan nama panjang"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Email</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                    placeholder="Masukan nama email"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Perusahaan</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="perusahaan"
                    value={this.state.company}
                    onChange={(e) => this.setState({company: e.target.value})}
                    placeholder="Masukan nama perusahaan"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Jabatan</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="jabatan"
                    value={this.state.position}
                    onChange={(e) => this.setState({position: e.target.value})}
                    placeholder="Posisi di perusahaan Anda"
                  />
                </div>
                <div>
                  <label className="flex flex-row">No handphone</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={(e) => this.setState({phone: e.target.value})}
                    placeholder="Masukan no handphone"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                    placeholder="Masukan kata password"
                  />
                </div>
                <div>
                  <label className="flex flex-row">Konfirmasi Kata Sandi</label>
                  <input
                    className="w-full px-2 py-3 rounded-md"
                    type="text"
                    type="password"
                    name="passConfirm"
                    value={this.state.passConfirm}
                    onChange={(e) => this.setState({passConfirm: e.target.value})}
                    placeholder="Masukan konfirmasi kata sandi"
                  />
                </div>
                <button type='submit' className="w-full px-2 py-3 rounded-md bg-yellow-500 text-white">
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { authRegisterRecruiter };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRecruiter);
