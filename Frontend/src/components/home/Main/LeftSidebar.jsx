import React, { useState } from "react";
import { leftMainData } from "./leftData/leftMainData";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const listVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const LeftSidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);

  const seeMore = () => {
    setOpen(!open);
  };

  return (
    <div className="leftSidebar h-[525px] overflow-y-auto scrollbar2">
      {/* Profile Section */}
      <div className="pic flex items-center gap-4 mt-4 py-2 pl-4 hover:bg-[#E6E8EA] rounded-xl transition-all cursor-pointer">
        <div className="icon">
          <CgProfile size={30} className="sm:text-[18px]" />
        </div>
        <div className="text-[15px] font-semibold">
          {user?.f_name} {user?.l_name}
        </div>
      </div>

      {/* Menu Items */}
      <motion.ul
        variants={listVariant}
        initial="initial"
        animate="animate"
        className="DATA MAP space-y-1"
      >
        {leftMainData
          .slice(0, open ? leftMainData.length : 8)
          .map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariant}
              className="px-2 cursor-pointer"
            >
              <div className="flex items-center gap-4 py-2 px-2 hover:bg-[#E6E8EA] transition-all rounded-lg">
                <div className="icon">{item.logo}</div>
                <div className="title text-[15px] font-semibold">
                  {item.title}
                </div>
              </div>
            </motion.li>
          ))}
      </motion.ul>

      {/* See More Section */}
      <div onClick={seeMore} className="space-y-1 px-2">
        <div className="flex items-center justify-start gap-3 py-2 pl-3 hover:bg-[#E6E8EA] transition-all rounded-lg cursor-pointer ">
          <div className="flex items-center justify-center p-1 bg-gray-300 rounded-full">
            <IoIosArrowDown
              size={16}
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
            />
          </div>

          <div className="font-semibold text-[15px]">
            {open ? "See less" : "See more"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
