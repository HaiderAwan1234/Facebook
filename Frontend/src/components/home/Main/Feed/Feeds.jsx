import React from "react";
import { FaAddressCard } from "react-icons/fa";
import Navbar from "./../../navbar/Navbar";
import { feedsData } from "./FeedsData";
import Videos from "./../../navbar/Videoss/Videos";
import GetVideos from "../../navbar/Videoss/GetVideos";

const Feeds = () => {
  return (
    <>
      <div className="sticky top-0 z-10 shadow-md bg-white ">
        <Navbar />
      </div>
      <div className="grid grid-cols-12">
        {/* col-span3  */}
        <div className="col-span-3 bg-white py-3 shadow-2xl sticky top-16 h-[89vh]">
          <h1 className="font-bold text-2xl px-4">Feeds</h1>
          {/* All */}
          <div className="flex items-center gap-3 mx-2 mt-4 p-2 bg-blue-50 rounded-md my-2 cursor-pointer">
            <div className=" h-[35px] w-[35px] p-1 bg-[#1877F2] rounded-full flex items-center justify-center">
              <FaAddressCard color="white" size={17} />
            </div>
            <p className="text-[15px] font-semibold">All</p>
          </div>
          <ul className="flex flex-col gap-1 items-center justify-center mx-2">
            {feedsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center w-full p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2 items-center justify-center h-[37px] w-[37px] rounded-full bg-gray-200">
                      {item.icon}
                    </div>
                    <span className="text-[16px] text-gray-800 font-semibold">
                      {item.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-9 bg-gray-200 flex items-center justify-center">
          <div className="w-[68%]">
            <GetVideos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;
