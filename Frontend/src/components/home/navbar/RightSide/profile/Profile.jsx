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
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const { user, userError, userSuccess, userLoading, userMessage } =
    useSelector((state) => state.auth);

  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference on initial load
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return saved ? JSON.parse(saved) : prefersDark;
  });

  // Sync DOM and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleDisplay = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={`right-Side-Bar fixed top-30 sm:top-14 right-[6px] sm:right-5 h-[462px] w-68 sm:w-90 shadow-xl shadow-gray-300 rounded-2xl z-700 transition-all duration-300 ease-in-out ${
          darkMode ? "bg-gray-900 text-white" : "bg-white"
        }`}
      >
        {/* // .....card */}

        <div
          className={`card py-1 px-1  mt-3 mb-4 w-[94%] sm:w-[91%] mx-auto rounded-xl transition-all duration-300 ease-in-out ${
            darkMode ? "bg-gray-800 shadow-2xl" : "bg-[#FFFFFF] shadow-lg"
          }`}
        >
          <div
            className={`pic py-3 px-2 flex items-center gap-3 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
            }`}
          >
            <div className="icon">
              <CgProfile
                size={34}
                className={`transition-colors duration-200 ${
                  darkMode ? "text-gray-300" : ""
                }`}
              />
            </div>
            <div
              className={`text-[16.4px] font-semibold transition-colors duration-200 ${
                darkMode ? "text-white" : ""
              }`}
            >
              {user?.f_name} {user?.l_name}
            </div>
          </div>

          <hr
            className={`my-1 mx-4 transition-colors duration-300 ${
              darkMode ? "text-gray-600" : "text-gray-200"
            }`}
          />

          <button
            className={`mt-3 mb-2 mx-4 py-2 flex gap-2 items-center justify-center w-[90%] font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode
                ? "bg-gray-600 hover:bg-gray-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            <div className="icon">
              <FaArrowsDownToPeople size={20} />
            </div>
            <p>See all profiles</p>
          </button>
        </div>

        <div className="row">
          <div
            className={`setting mx-2 px-2 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-[#F2F2F2]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="start flex items-center gap-3">
                <div
                  className={`icon flex items-center justify-center p-[5px] rounded-full transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-[#D6D9DD] text-gray-800"
                  }`}
                >
                  <IoMdSettings size={22} />
                </div>
                <p
                  className={`font-semibold text-[15px] transition-colors duration-200 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Setting & privacy
                </p>
              </div>
              <div className="end">
                <div
                  className={`icon transition-colors duration-200 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`Help mx-2 px-2 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-[#F2F2F2]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="start flex items-center gap-3">
                <div
                  className={`icon flex items-center justify-center p-[7px] rounded-full transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-[#D6D9DD] text-gray-800"
                  }`}
                >
                  <BsFillQuestionCircleFill size={19} />
                </div>
                <p
                  className={`font-semibold text-[15px] transition-colors duration-200 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Help & Support
                </p>
              </div>
              <div className="end">
                <div
                  className={`icon transition-colors duration-200 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={handleDisplay}
            className={`Display mx-2 px-2 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-[#F2F2F2]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="start flex items-center gap-3">
                <div
                  className={`icon flex items-center justify-center p-[6px] rounded-full rotate-16 transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-[#D6D9DD] text-gray-800"
                  }`}
                >
                  <IoMoonSharp size={20} />
                </div>
                <p
                  className={`font-semibold text-[15px] transition-colors duration-200 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Display & accessibility
                </p>
              </div>
              <div className="end">
                <div
                  className={`icon transition-colors duration-200 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`feedback mx-2 px-2 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-[#F2F2F2]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="start flex items-center gap-3">
                <div
                  className={`icon flex items-center justify-center p-[6px] rounded-full transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-[#D6D9DD] text-gray-800"
                  }`}
                >
                  <MdFeedback size={21} />
                </div>
                <p
                  className={`font-semibold text-[15px] transition-colors duration-200 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Give feedback
                </p>
              </div>
              <div className="end">
                <div
                  className={`icon transition-colors duration-200 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`Logout mx-2 px-2 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-[#F2F2F2]"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="start flex items-center gap-3">
                <div
                  className={`icon flex items-center justify-center p-[5px] rounded-full transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-[#D6D9DD] text-gray-800"
                  }`}
                >
                  <GiExitDoor size={22} />
                </div>
                <p
                  className={`font-semibold text-[15px] transition-colors duration-200 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  Log Out
                </p>
              </div>
              <div className="end">
                <div
                  className={`icon transition-colors duration-200 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <IoIosArrowForward size={21} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`nav sm:leading-4 pt-3 flex gap-2 items-center justify-center text-[11px] sm:text-[13px] font-semibold mx-1 sm:mx-3 transition-colors duration-200 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="p hover:underline cursor-pointer transition-all duration-200">
            Privacy{" "}
          </div>
          <div className="p hover:underline cursor-pointer transition-all duration-200">
            {" "}
            Terms{" "}
          </div>
          <div className="p hover:underline cursor-pointer transition-all duration-200">
            Advertising{" "}
          </div>
          <div className="p flex items-center gap-1">
            <p className="hover:underline cursor-pointer transition-all duration-200">
              Ad choices{" "}
            </p>
            <GiTriangleTarget
              className={`rotate-90 transition-all duration-200 ${
                darkMode ? "text-gray-400" : ""
              } hidden sm:block`}
            />
          </div>
          <div className="p hover:underline cursor-pointer transition-all duration-200">
            {" "}
            Cookies{" "}
          </div>
        </div>

        <div
          className={`flex pl-1 gap-2 items-center text-[11px] sm:text-[13px] mx-2 sm:mx-3 transition-colors duration-200 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div className="p cursor-pointer hover:underline transition-all duration-200">
            More{" "}
          </div>
          <div className="p flex items-center gap-1">
            <p className="p cursor-pointer hover:underline transition-all duration-200">
              Meta{" "}
            </p>
            <TbSquareRoundedLetterC className="cursor-pointer transition-all duration-200" />
            <div className="text-[12px] sm:text-[13px] cursor-pointer hover:underline transition-all duration-200">
              2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
