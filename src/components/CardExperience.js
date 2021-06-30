import React from "react";

function CardExperience({ img, role, office, date, month, desc }) {
  return (
    <div className="flex flex-row space-x-5 pr-20 pt-10">
      <img src={img} alt="logo" className="w-20 h-20" />
      <div className="border-b-2 border-gray-300 pb-10 space-y-1">
        <h4 className="font-semibold text-2xl">{role}</h4>
        <h4 className="font-medium text-xl text-gray-500">{office}</h4>
        <div className="flex flex-row space-x-3 text-gray-500">
          <h4>{date}</h4>
          <h4>{month} months</h4>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CardExperience;
