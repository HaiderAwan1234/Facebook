import React from "react";
import { FaComment, FaHeart, FaRegComment, FaThumbsUp } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { TiWorld } from "react-icons/ti";
import { IoIosShareAlt } from "react-icons/io";
import { GoThumbsup } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Getpost = () => {
  return (
    <>
      <div className="GETPOST  pt-3 pb-2 sm:pb-1 shadow w-[95%] md:w-[80%] lg:w-[83%] mx-auto bg-white  rounded-xl mb-10">
        {/* ..........TOP........ */}

        <div className="TOP flex items-center justify-between px-1 sm:px-3">
          <div className="Left flex items-center gap-2 sm:gap-3">
            <div className="icon flex items-center justify-center h-[40px] w-[40px] sm:w-[50px] sm:h-[50px] rounded-full">
              <img
                className="rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>

            <div className="text leading-5 flex flex-col">
              <p className="font-semibold text-[14px] sm:text-[16px] cursor-pointer hover:underline">
                Alexender Daneil
              </p>

              <div className="TIME/PUBLIC flex items-center gap-2 text-gray-600 ">
                <p className="text-[13px] cursor-pointer">6h</p>
                <div className="ICON translate-y-[1px] cursor-pointer">
                  <TiWorld />
                </div>
              </div>
            </div>
          </div>

          <div className="Right flex items-center justify-center gap-2 pr-1 sm:pr-3">
            <div className="dot text-gray-600 text-[20px] sm:text-[23px] cursor-pointer">
              <HiDotsHorizontal />
            </div>
            <div className="cross text-gray-600 text-[20px] sm:text-[23px] cursor-pointer">
              <RxCross2 />
            </div>
          </div>
        </div>

        <p className="text-[13px] sm:text-[15px] px-2 sm:px-3 text-gray-900 leading-5 mt-2 font-semibold">
          Get a fresh trading boost — App Suite by FX Blue. Available now on the
          FTMO trading platform for all MetaTrader accounts Study on courses
          designed for international students who don't meet our entry
          requirements. Try it today!
        </p>

        <div className="IMAGE h-[340px] sm:h-[460px] bg-teal-100 mt-3 sm:mt-4 cursor-pointer"></div>

        <div className="LIKE/COMMENT flex items-center justify-between px-2 mt-3">
          <div className="LEFT flex items-center gap-2">
            <div className="ICONS flex items-center">
              <div className="h-[20px] w-[20px] bg-blue-500 rounded-full flex items-center justify-center p-1 translate-x-[3px] cursor-pointer">
                <FaThumbsUp className="text-white cursor-pointer" />
              </div>

              <div className="h-[20px] w-[20px] bg-red-400 rounded-full flex items-center justify-center p-1 cursor-pointer">
                <FaHeart className="text-white cursor-pointer" />
              </div>
            </div>

            <div className="TEXT">
              <p className="text-[15px] cursor-pointer">6.3K</p>
            </div>
          </div>

          <div className="RIGHT flex items-center gap-3 text-gray-600">
            <div className="COMMENT flex items-center gap-1">
              <div className="text text-[15px] cursor-pointer">8</div>
              <div className="icon cursor-pointer">
                <FaComment />
              </div>
            </div>
            <div className="SHARE flex items-center">
              <div className="text text-[15px] cursor-pointer">22</div>
              <div className="icon text-2xl cursor-pointer">
                <IoIosShareAlt />
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-3 mt-2 text-gray-300" />

        <div className="WRITE/LIKE/COMMENT/SHARE flex items-center justify-between px-1 sm:px-5 mt-1 text-gray-600">
          <div className="LIKE flex items-center justify-center gap-1 hover:bg-gray-100 transition-all px-3 sm:px-13 py-1 rounded-md cursor-pointer">
            <div className="icon translate-y-[1px] cursor-pointer">
              <GoThumbsup />
            </div>
            <div className="text  text-[14px] sm:text-[16px] font-semibold cursor-pointer">
              Like
            </div>
          </div>

          <div className="COMMENT flex items-center justify-center gap-1  hover:bg-gray-100 transition-all px-2 sm:px-9 py-1 rounded-md cursor-pointer">
            <div className="icon translate-y-[1px] cursor-pointer">
              <FaRegComment />
            </div>
            <div className="text  text-[14px] sm:text-[16px] font-semibold cursor-pointer">
              Comment
            </div>
          </div>

          <div className="SHARE flex items-center justify-center gap-1  hover:bg-gray-100 transition-all px-3 sm:px-13 py-1 rounded-md cursor-pointer">
            <div className="icon translate-y-[1px] cursor-pointer">
              <RiShareForwardLine />
            </div>
            <div className="text  text-[14px] sm:text-[16px] font-semibold cursor-pointer">
              Share
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getpost;
