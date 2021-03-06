import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import Button from "./Button";

function Header() {
  return (
    <nav className="flex flex-row justify-between items-center px-32 py-5 sticky top-0 bg-white">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="space-x-5 flex flex-row">
        <Button to="/login" label="Masuk" />
        <Button to="/registerEmployee" label="Daftar" isPrimary />
      </div>
    </nav>
  );
}

export default Header;
