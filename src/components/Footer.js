import React from 'react';
import { Logo2 } from '../assets';

function Footer() {
  return (
    <footer className="bg-purple-800 invisible md:visible md:px-32 md:py-10 space-y-10">
      <img src={Logo2} alt="logo" />
      <p className="text-white w-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
        ipsum et dui rhoncus auctor.
      </p>
      <div className="flex flex-row justify-between border-t-2 pt-5">
        <p className="text-white">2020 Pewworld. All right reserved</p>
        <div className="flex flex-row space-x-10">
          <p className="text-white">Telepon</p>
          <p className="text-white">Email</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
