/*eslint-disable*/
import React from 'react';
import { GoLocation } from 'react-icons/go';

import Button from './Button';

function UserCard({
  img, name, role, location, skill, to
}) {
  return (
    <div className=" flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 px-5 py-10 items-center border-b-2 border-gray-200">
      <img src={img} alt="user" className="w-20 md:w-24 h-20 md:h-24" />
      <div className="flex flex-col items-center md:items-start space-y-2 flex-1">
        <h4 className="text-2xl font-semibold">{name}</h4>
        <h5 className="text-gray-400">{role}</h5>
        <div className="flex flex-row items-center space-x-1">
          <GoLocation color="gray" />
          {' '}
          <p className="text-gray-400">{location}</p>
        </div>
        <div className="flex flex-row space-x-3">
          <p className="bg-yellow-400 text-white py-1 px-3 rounded-md">
            {skill}
          </p>
        </div>
      </div>
      <Button to={to} label="Lihat Profile" isPrimary />
    </div>
  );
}

export default UserCard;
