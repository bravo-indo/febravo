/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo2 } from '../assets';

function SideAuth() {
  return (
    <div className="side-left p-10 w-full h-auto text-white">
      <p className="font-bold">
        <Link>
          <img width="100" src={Logo2} alt="logo" />
        </Link>
      </p>
      <h1 className="pt-60 pb-72 px-10 text-4xl font-bold">
        Temukan developer berbakat & terbaik di berbagai bidang keahlian
      </h1>
    </div>
  );
}

export default SideAuth;
