/*eslint-disable*/
import React from "react";
import {
  dummyuser1,
  dummyuser2,
  dummyuser3,
  hero1,
  hero2,
  hero3,
} from "../assets";
import Button from "../components/Button";
import { HiCheckCircle } from "react-icons/hi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function LandingPage() {
  return (
    <main className="container mt-10 mx-auto px-5 lg:px-32">
      <section className="bg-white">
        <section className="flex py-32 md:py-0 md:flex-row justify-between items-center items-center md:space-x-20 mb-10 text-center md:text-left">
          <div className="flex-1 space-y-10 md:space-y-5">
            <h3 className="font-semibold text-4xl capitalize">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              placeat ad recusandae. Hic illo libero recusandae voluptas quam
              quaerat dolorem iusto. Consectetur dolores distinctio soluta
              sapiente maxime incidunt, deserunt rerum.
            </p>
            <Button label="Mulai dari sekarang" isPrimary />
          </div>
          <div className="flex-1 hidden md:inline-block overflow-hidden  ">
            <img className="" src={hero1} alt="hero" />
          </div>
        </section>
        <section className="md:py-0 flex flex-col md:flex-row justify-between items-center space-x-20 mb-10">
          <div className="md:flex-1 overflow-hidden">
            <img src={hero2} alt="hero" />
          </div>
          <div className="md:flex-1 space-y-10">
            <h3 className="font-semibold text-4xl text-center md:text-left capitalize">
              Kenapa harus mencari tallent di peworld
            </h3>
            <ul className="space-y-3">
              <li className="flex flex-row items-center space-x-2">
                <div>
                  <HiCheckCircle color="#5E50A1" size={22} />
                </div>
                <p>Mudah bersosialisasi</p>
              </li>
              <li className="flex flex-row items-center space-x-2">
                <div>
                  <HiCheckCircle color="#5E50A1" size={22} />
                </div>
                <p>Bertanggung Jawab</p>
              </li>
              <li className="flex flex-row items-center space-x-2">
                <div>
                  <HiCheckCircle color="#5E50A1" size={22} />
                </div>
                <p>Tidak mudah menyerah</p>
              </li>
              <li className="flex flex-row items-center space-x-2">
                <div>
                  <HiCheckCircle color="#5E50A1" size={22} />
                </div>
                <p>Ahli menanggapi masalah</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-row py-32 md:py-0 justify-between items-center space-x-20 mb-10">
          <div className="flex-1 space-y-5">
            <h3 className="font-semibold text-4xl text-center md:text-left">Skill Tallent</h3>
            <p className="text-center md:text-left">
              Kemampuan yang dimiliki talent kami dapat membantu anda untuk
              mencapai bisnis yg sangat baik
            </p>
            <div className="flex flex-row justify-center md:justify-start space-x-20">
              <div>
                <ul className="space-y-3">
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>Java</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>Kotlin</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>PHP</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>JavaScript</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>Golang</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>C++</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>Ruby</p>
                  </li>
                  <li className="flex flex-row items-center space-x-2">
                    <div>
                      <HiCheckCircle color="#FBB017" size={22} />
                    </div>
                    <p>10+ Bahasa Lainnya</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:inline-block overflow-hidden">
            <img src={hero3} alt="hero" />
          </div>
        </section>
      </section>
      <section className="bg-gray-100 py-20">
        <h3 className="font-semibold text-4xl justify-center flex flex-row pb-10 text-center md:text-left capitalize">
          Their opinion about peworld
        </h3>
        <div className="flex flex-row space-x-5 items-center justify-center">
          <IoIosArrowDropleftCircle size={45} color="#5E50A1" />
          <div className="flex flex-row space-x-5 overflow-x-auto pb-10">
            <div className="flex flex-col bg-white items-center px-10 py-5 shadow-xl rounded-xl space-y-2">
              <div className="w-24 h-24 bg-yellow-200 flex justify-center items-center rounded-full">
                <img src={dummyuser1} alt="user" className="w-20 h-20" />
              </div>
              <h4 className="text-2xl font-semibold">Harry Styles</h4>
              <h5 className="text-gray-400">Web Developer</h5>
              <p className="w-44 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
            <div className="flex flex-col bg-white items-center px-10 py-5 shadow-xl rounded-xl space-y-2">
              <div className="w-24 h-24 bg-yellow-200 flex justify-center items-center rounded-full">
                <img src={dummyuser2} alt="user" className="w-20 h-20" />
              </div>
              <h4 className="text-2xl font-semibold">Niall Horan</h4>
              <h5 className="text-gray-400">Web Developer</h5>
              <p className="w-44 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
            <div className="flex flex-col bg-white items-center px-10 py-5 shadow-xl rounded-xl space-y-2">
              <div className="w-24 h-24 bg-yellow-200 flex justify-center items-center rounded-full">
                <img src={dummyuser3} alt="user" className="w-20 h-20" />
              </div>
              <h4 className="text-2xl font-semibold">Louis Tomlinson</h4>
              <h5 className="text-gray-400">Web Developer</h5>
              <p className="w-44 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
          </div>
          <IoIosArrowDroprightCircle size={45} color="#5E50A1" />
        </div>
      </section>
      <section className="px-10 md:px-32 bg-white py-20">
        <div className="bg-purple-800 flex flex-col md:flex-row justify-between px-10 py-14 items-center rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg space-y-10 md:space-y-0">
          <p className="text-white text-2xl w-44">Lorem ipsum dolor sit amet</p>
          <Button label="Mulai Dari Sekarang" />
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
