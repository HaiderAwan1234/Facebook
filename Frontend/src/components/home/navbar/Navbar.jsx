import React, { useState } from "react";
import { FaArrowLeft, FaBell, FaFacebookMessenger } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { Data_mid } from "./data/Data_mid";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu_items from "./RightSide/menu/Menu_items";
import Profile from "./RightSide/profile/Profile";

const Navbar = () => {
  const [focus, setFocus] = useState(true);
  const [menue, setMenue] = useState(false);
  const [messenger, setMessenger] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setDisplay(false);
          setMenue(false);
          setMessenger(false);
          setNotification(false);
          setProfile(false);
        }}
        className={`fixed cursor-pointer h-full top-0 left-0 bg-transparent z-800 ${
          display ? "block" : "hidden"
        }`}
      ></div>

      <nav className="maindiv bg-[#ffff] min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-center justify-between gap-3 sm:gap-0 py-2 sm:py-1 shadow-md">
        {/* >>>>>>>>>.......Start Div........<<<<<<<<<<<< */}

        <div className="start flex-1 flex items-center justify-center sm:justify-start pr-1 sm:pr-0">
          <div
            className={`flex items-center transition-all duration-500 sm:duration-300 ${
              focus
                ? "gap-3 sm:gap-2"
                : "sm:shadow-xl sm:pb-2 sm:pr-3 gap-2 rounded-lg"
            }`}
          >
            <div
              className={`arrow text-[15px] sm:text-[16px] w-[29px]  h-[29px] flex items-center justify-center hover:bg-gray-200 hover:rounded-full ${
                focus
                  ? "opacity-0 hidden sm:block translate-x-7  sm:translate-x-10 duration:100 sm:duration-400 delay-100 transition-all"
                  : "opacity-100 block translate-x-2 duration:100 sm:duration-400 delay-100 transition-all"
              }`}
            >
              <FaArrowLeft className="text-gray-500 cursor-pointer" />
            </div>

            <div className="logo z-10">
              <img
                className={`w-10 transition-all cursor-pointer ${
                  focus ? "block" : "hidden"
                }`}
                src="/images/Facebook.png"
                alt="Logo"
              />
            </div>

            <div className="inputparent bg-[#F0F2F5] flex items-center px-2 sm:px-3 py-2 rounded-full gap-2">
              {focus && (
                <IoIosSearch className="text-[17px] sm:text-[18px] text-gray-700 transition-all" />
              )}

              <input
                onFocus={() => setFocus(false)}
                onBlur={() => setFocus(true)}
                className={`outline-0 border-0 bg-transparent ${
                  focus ? "w-37 sm:w-44" : "w-48 sm:w-61 pl-2 sm:pl-1"
                }`}
                placeholder="Search Facebook"
              />
            </div>
          </div>
        </div>

        {/* >>>>>>>>>..........Mid Div........<<<<<<<<<<< */}

        <div className="hidden  lg:block flex-1  justify-center z-200">
          <ul className="flex items-center justify-center gap-2 unstyled">
            {Data_mid.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex cursor-pointer group items-center justify-center px-10 py-3 rounded-lg hover:bg-gray-100 text-[#606366] text-[28px] transition-all relative"
                >
                  {item?.icon}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 text-[13px] bg-gray-700 text-white py-1 px-3 rounded-2xl my-2 shadow-md transition-all duration-200 delay-200 opacity-0 group-hover:opacity-100">
                    {item?.title}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* >>>>>>>>>....... End Div ........<<<<<<<<< */}

        <div className="flex-1 flex justify-center sm:justify-end gap-1 sm:gap-3 sm:pr-4 pl-8 sm:pl-0">
          {/* ..... */}

          <div
            onClick={() => {
              setDisplay(true);
              setMenue(!menue);
              setMessenger(false);
              setNotification(false);
              setProfile(false);
            }}
            className={`p-[8px] z-500 sm:p-[9.5px] flex items-center justify-center transition-all duration-100 rounded-full cursor-pointer relative group ${
              menue
                ? "bg-[#EBF5FF] text-[#3D82F2] hover:bg-[#DFE9F2]"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            <BsGrid3X3GapFill className="text-[18px] sm:text-[20px] relative" />

            <div className="absolute left-1/2 top-full -translate-x-1/2 text-[13px] bg-gray-700 text-white py-1 px-3 rounded-2xl my-3 shadow-md transition-all duration-200 delay-170 opacity-0 group-hover:opacity-100">
              Menu
            </div>
          </div>

          <div
            onClick={() => {
              setDisplay(true);
              setMessenger(!messenger);
              setNotification(false);
              setMenue(false);
              setProfile(false);
            }}
            className={`p-[8px] z-500 sm:p-[9.5px] flex items-center justify-center transition-all duration-100 rounded-full cursor-pointer relative group ${
              messenger
                ? "bg-[#EBF5FF] text-[#3D82F2] hover:bg-[#DFE9F2]"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            <FaFacebookMessenger className="text-[18px] sm:text-[20px] " />

            <div className="absolute left-1/2 top-full -translate-x-1/2 text-[13px] bg-gray-700 text-white py-1 px-3 rounded-2xl my-3 shadow-md transition-all duration-200 delay-170 opacity-0 group-hover:opacity-100">
              Messenger
            </div>
          </div>

          <div
            onClick={() => {
              setDisplay(true);
              setNotification(!notification);
              setMessenger(false);
              setMenue(false);
              setProfile(false);
            }}
            className={`p-[8px] z-500 sm:p-[9.5px] flex items-center justify-center transition-all duration-100 rounded-full cursor-pointer relative group ${
              notification
                ? "bg-[#EBF5FF] text-[#3D82F2] hover:bg-[#DFE9F2]"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            <FaBell className="text-[18px] sm:text-[20px] " />

            <div className="absolute left-1/2 top-full -translate-x-1/2 text-[13px] bg-gray-700 text-white py-1 px-3 rounded-2xl my-3 shadow-md transition-all duration-200 delay-170 opacity-0 group-hover:opacity-100">
              Notifications
            </div>
          </div>

          <div
            onClick={() => {
              setDisplay(true);
              setProfile(!profile);
              setMenue(false);
              setMessenger(false);
              setNotification(false);
            }}
            className={`p-[8px] z-500 sm:p-[9.5px] flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all duration-100 rounded-full cursor-pointer relative group `}
          >
            <CgProfile className="text-[18px] sm:text-[20px] " />

            <div className="absolute left-1/2 top-full -translate-x-1/2 text-[13px] bg-gray-700 text-white py-1 px-3 rounded-2xl my-3 shadow-md transition-all duration-200 delay-170 opacity-0 group-hover:opacity-100">
              Account
            </div>
            <div className="arrow absolute border-2 border-white bg-gray-300 h-[19px] w-[19px] text-[19px] rounded-full top-6 left-5 flex items-center justify-center">
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      </nav>
      {/* >>>>>>......... Menu-Items-Sisebar ........<<<<<<<<<< */}

      {menue && <Menu_items />}
      {/* {profile && <Profile />} */}
    </>
  );
};

export default Navbar;
