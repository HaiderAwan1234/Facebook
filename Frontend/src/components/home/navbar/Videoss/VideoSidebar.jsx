import React from "react";
import {
  FaSearch,
  FaHome,
  FaVideo,
  FaRegBookmark,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";

const VideoSidebar = () => {
  return (
    <div className="w-[360px]  h-[533px] overflow-y-scroll bg-white shadow-md shadow-gray-400 scrollbar3 py-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 px-4">
        <h2 className="text-[24px] font-bold">Video</h2>
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer text-[20px] text-gray-800">
          <FaCog />
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full mb-4 mx-4">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search videos"
          className="ml-2 bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 mx-2">
        <SidebarItem icon={<FaHome />} label="Home" active />
        <SidebarItem icon={<FaVideo />} label="Live" />
        <SidebarItem icon={<BiMoviePlay />} label="Reels" />
        <SidebarItem icon={<FaRocket />} label="Explore" />
        <SidebarItem icon={<FaRegBookmark />} label="Saved videos" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
      }`}
    >
      <div className="bg-gray-200 p-2 rounded-full text-[20px] text-gray-900">
        {icon}
      </div>
      <span className="text-[15px] font-semibold">{label}</span>
    </div>
  );
};

export default VideoSidebar;
