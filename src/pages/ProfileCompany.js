import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { dummyuser1 } from "../assets";

function ProfileCompany() {
  return (
    <main className="bg-gray-100 pt-20 py-40">
      <section className="mx-32">
        <div className=" h-40 rounded-t-lg pb-5 bg-purple-800 flex flex-row space-x-2 items-end justify-end">
          <button>
            <BsPencil color="white" size={24} />
          </button>
          <p className="font-semibold text-white text-xl pr-8">Ubah Latar</p>
        </div>
        <div className="flex flex-col items-center space-y-3 bg-white rounded-b-lg">
          <img
            src={dummyuser1}
            alt="user"
            className="-mt-16 w-32 h-32 rounded-full"
          />
          <h3 className="text-xl font-semibold">PT. Martabat Jaya Abadi</h3>
          <h3>Financial</h3>
          <div className="flex flex-row items-center space-x-1">
            <GoLocation color="gray" />
            <p className="text-gray-400">Purwokerto, Jawa Tengah</p>
          </div>
          <p className="px-60 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
          <div className="pt-5">
            <button className="px-20 rounded-md font-semibold text-white bg-purple-800 py-2 ">
              Edit profile
            </button>
          </div>
          <div className="space-y-4 pb-20">
            <div className="flex flex-row items-center space-x-3 pt-8">
              <AiOutlineMail size={25} color="gray" />
              <p className="text-gray-400">Louistommo@gmail.com</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <FaInstagram size={25} color="gray" />
              <p className="text-gray-400">@Louist91</p>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <FiPhone size={25} color="gray" />
              <p className="text-gray-400">@Louistommo</p>
            </div>
            <div className="flex flex-row items-center space-x-3 pb-10">
              <FiLinkedin size={25} color="gray" />
              <p className="text-gray-400">@Louistommo91</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfileCompany;
