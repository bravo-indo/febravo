import React from "react";
import { Logo } from "../assets";
import Button from "./Button";

function Header() {
  return (
    <nav className="flex flex-row justify-between items-center px-32 py-5">
      <button>
        <img src={Logo} alt="logo" />
      </button>
      <div className="space-x-5 flex flex-row">
        <Button label="Masuk" />
        <Button label="Daftar" isPrimary />
      </div>
    </nav>
  );
}

export default Header;
