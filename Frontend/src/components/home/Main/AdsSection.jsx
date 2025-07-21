import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import gsap from "gsap";
import { RxCross2 } from "react-icons/rx";

const Ads = () => {
  const groupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleGroup = () => {
    if (!isOpen) {
      gsap.to(groupRef.current, {
        width: 330,
        height: 350,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(groupRef.current, {
        width: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full  relative overflow-hidden">
      <h1 className="font-semibold text-[18px] pt-4 px-2 text-gray-700">
        Sponsored
      </h1>

      {/* Ads */}
      <div className="h-[100px] w-full rounded-md flex gap-3 my-1 text-start hover:bg-gray-200 p-2 cursor-pointer">
        <img
          width={100}
          src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max"
          alt="Ads"
          className="rounded-md"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-[15px]">
            No interruption, just create your projects in MERN
          </p>
          <a className="text-xs">NeoCoder.com</a>
        </div>
      </div>

      <hr className="my-4 text-gray-300" />

      {/* Chats */}
      <div className="flex flex-col">
        <h1 className="font-semibold text-[1.2rem] text-black/90">
          Group chats
        </h1>
        <button
          onClick={handleToggleGroup}
          className="w-full p-2 mt-2 hover:bg-gray-200 transition-all duration-100 cursor-pointer rounded-lg flex items-center gap-3"
        >
          <span className="flex items-center justify-center w-[35px] h-[35px] bg-gray-300 rounded-full">
            <FaPlus />
          </span>
          Create a group chat
        </button>
      </div>

      {/* Animated Group Chat Box */}
      <div
        ref={groupRef}
        style={{ width: 0, height: 0, overflow: "hidden" }}
        className="rounded-lg bg-white shadow-lg mt-1 "
      >
        <div className="flex items-center justify-between  m-2">
          <p className="font-semibold">New Message</p>
          <RxCross2
            size={25}
            onClick={handleToggleGroup}
            className="hover:rotate-[180deg] text-purple-500 cursor-pointer transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Ads;
