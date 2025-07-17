import React from "react";
import Navbar from "../../components/home/navbar/Navbar";
import FriendCode from "../../components/home/navbar/friends/FriendCode";
import LeftSidebar from "./../../components/home/Main/LeftSidebar";

const Friends = () => {
  return (
    <>
      <div className="Friends min-h-screen bg-[#F2F4F7] flex flex-col">
        <div className="div z-1">
          <Navbar />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="lg:block hidden w-3/12 bg-white shadow-md shadow-gray-300">
            <LeftSidebar />
          </div>

          <div className="flex-1 overflow-y-auto">
            <FriendCode />
          </div>
          {/* ..........
        .
        .
        . */}
        </div>
      </div>
    </>
  );
};

export default Friends;
