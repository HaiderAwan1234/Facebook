import React from "react";
import { BiPointer } from "react-icons/bi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { GiExitDoor, GiTriangleTarget } from "react-icons/gi";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { IoMoonSharp, IoPeopleCircleOutline } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { TbSquareRoundedLetterC } from "react-icons/tb";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, userError, userSuccess, userLoading, userMessage } =
    useSelector((state) => state.auth);

  return (
    <>
      <div className="right-Side-Bar fixed top-30 sm:top-14 right-[6px] sm:right-5 h-[462px] w-68 sm:w-90 bg-[#FCFCFC] shadow-xl shadow-gray-300 rounded-2xl z-700">
        {/* // .....card */}

        <div className="card py-1 px-1 shadow-lg mt-3 mb-4 bg-[#FFFFFF] w-[94%] sm:w-[91%] mx-auto rounded-xl">
          <div className="pic py-3 px-2 flex items-center gap-3 hover:bg-gray-100 rounded-xl transition-all cursor-pointer">
            <div className="icon">
              <CgProfile size={34} className="" />
            </div>
            <div className="text-[16.4px] font-semibold">
              {user?.f_name} {user?.l_name}
            </div>
          </div>

          <hr className="text-gray-200 my-1 mx-4" />

          <button className="mt-3 mb-2 mx-4 py-2 flex gap-2 items-center justify-center w-[90%] bg-gray-200 font-semibold rounded-xl hover:bg-gray-300 transition-all cursor-pointer ">
            <div className="icon">
              <FaArrowsDownToPeople size={20} />
            </div>
            <p>See all profiles</p>
          </button>
        </div>

        <div className="row">
          <div className="setting hover:bg-[#F2F2F2] mx-2 px-2 py-2 rounded-xl transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="start flex items-center  gap-3">
                <div className="icon bg-[#D6D9DD] flex items-center justify-center text-gray-800 p-[5px] rounded-full">
                  <IoMdSettings size={22} />
                </div>
                <p className="font-semibold text-[15px] ">Setting & privacy</p>
              </div>
              <div className="end">
                <div className="icon text-gray-600">
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div className="Help hover:bg-[#F2F2F2] mx-2 px-2 py-2 rounded-xl transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="start flex items-center  gap-3">
                <div className="icon bg-[#D6D9DD] flex items-center justify-center text-gray-800 p-[7px] rounded-full">
                  <BsFillQuestionCircleFill size={19} />
                </div>
                <p className="font-semibold text-[15px] ">Help & Support</p>
              </div>
              <div className="end">
                <div className="icon text-gray-600">
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div className="Display hover:bg-[#F2F2F2] mx-2 px-2 py-2 rounded-xl transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="start flex items-center  gap-3">
                <div className="icon bg-[#D6D9DD] flex items-center justify-center text-gray-800 p-[6px] rounded-full rotate-16">
                  <IoMoonSharp size={20} />
                </div>
                <p className="font-semibold text-[15px] ">
                  Display & accessibility
                </p>
              </div>
              <div className="end">
                <div className="icon text-gray-600">
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div className="feedback hover:bg-[#F2F2F2] mx-2 px-2 py-2 rounded-xl transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="start flex items-center  gap-3">
                <div className="icon bg-[#D6D9DD] flex items-center justify-center text-gray-800 p-[6px] rounded-full">
                  <MdFeedback size={21} />
                </div>
                <p className="font-semibold text-[15px] ">Give feedback</p>
              </div>
              <div className="end">
                <div className="icon text-gray-600">
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div className="Logout hover:bg-[#F2F2F2] mx-2 px-2 py-2 rounded-xl transition-all cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="start flex items-center  gap-3">
                <div className="icon bg-[#D6D9DD] flex items-center justify-center text-gray-800 p-[5px] rounded-full">
                  <GiExitDoor size={22} />
                </div>
                <p className="font-semibold text-[15px] ">Log Out</p>
              </div>
              <div className="end">
                <div className="icon text-gray-600">
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav sm:leading-4 pt-3 flex gap-2 items-center justify-center text-[11px] sm:text-[13px] font-semibold text-gray-500 mx-1 sm:mx-3">
          <div className="p hover:underline cursor-pointer">Privacy </div>
          <div className="p hover:underline cursor-pointer"> Terms </div>
          <div className="p hover:underline cursor-pointer">Advertising </div>
          <div className="p flex items-center gap-1">
            <p className="hover:underline cursor-pointer">Ad choices </p>
            <GiTriangleTarget className="rotate-90 hidden sm:block" />
          </div>
          <div className="p hover:underline cursor-pointer"> Cookies </div>
        </div>

        <div className="flex pl-1 gap-2 items-center text-[11px] sm:text-[13px] text-gray-500 mx-2 sm:mx-3">
          <div className="p cursor-pointer hover:underline">More </div>
          <div className="p flex items-center gap-1">
            <p className="p cursor-pointer hover:underline">Meta </p>
            <TbSquareRoundedLetterC className="cursor-pointer" />
            <div className=" text-[12px] sm:text-[13px] cursor-pointer hover:underline">
              2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
