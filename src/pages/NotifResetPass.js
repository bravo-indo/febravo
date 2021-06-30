import React from "react";
import { Link } from "react-router-dom";
import { Logo, Lock } from "../assets";

const NotifResetPass = () => {
  return (
    <section className="bg-gray-100">
      <div className="container grid grid-cols-3 mx-auto py-20">
        <div className="col-start-2 h-auto py-16 px-16 bg-white rounded-xl border-b-8 border-purple-700">
          <div className="flex flex-col space-y-10 items-center text-center">
            <img src={Logo} alt="logo" />
            <p className="text-xl font-bold text-gray-700">
              Request to Reset Your Account Password
            </p>
            <img src={Lock} alt="Lock" />
            <p className="text-sm">
              The following is the button for you to reset the password.
            </p>
            <Link to="/resetPass">
              <button className="px-5 py-3 rounded-md bg-yellow-500 hover:bg-yellow-700 text-white">
                Change Password
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotifResetPass;
