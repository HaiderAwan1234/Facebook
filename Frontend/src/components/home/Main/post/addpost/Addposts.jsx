import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import InputPost from "./InputPost";

const Addposts = () => {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-3 pb-2 px-3 sm:px-4 shadow w-[97%] md:w-[80%] lg:w-[83%] mx-auto bg-white mt-5 rounded-xl"
      >
        <div className="flex items-center gap-2">
          <div className="div">
            <div className="w-[40px] cursor-pointer sm:w-[43px] h-[40px] sm:h-[43px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
              <FaUser className="text-gray-600 text-[21px] sm:text-[23px]" />
            </div>
          </div>

          <InputPost />
        </div>

        <hr className="h-[1px] text-gray-200 mt-3" />

        <div className="flex items-center justify-center sm:justify-between mt-2">
          <div className="video flex items-center gap-2 py-3 px-2 sm:px-0 w-[50%] sm:w-[32%] justify-center cursor-pointer rounded-lg transition- hover:bg-gray-100">
            <div className="img">
              <img
                width="23px"
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeHexHbyr8NhlrhCLP62sM2RueRic5Ym8Wm55GJzlibxaaO9WrTLLhGKjrzzP-qGIp_iveUYuzmHAj9A87Tuepnf"
              />
            </div>
            <div className="text">
              <p className="text-gray-500 text-[14px] sm:text-[15px] font-semibold">
                Live Video
              </p>
            </div>
          </div>

          <div className="photo flex items-center gap-2 py-3 px-2 sm:px-0 w-[50%] sm:w-[32%] justify-center cursor-pointer rounded-lg transition- hover:bg-gray-100">
            <div className="img">
              <img
                width="23px"
                src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGlGXwBTUxrTpENQuk_kyO4kBVQC4m7dx6QFVALibt3HprxmkBLsW67SCi3hDaW6l8OaHadBDjYnAypHNzbyKh5"
              />
            </div>
            <div className="text">
              <p className="text-gray-500 text-[14px] sm:text-[15px] font-semibold">
                Photo/Video
              </p>
            </div>
          </div>

          <div className="reel flex items-center gap-2 py-3 sm:w-[32%] justify-center cursor-pointer rounded-lg transition-all sm:hover:bg-gray-100">
            <div className="img sm:block hidden">
              <img
                width="23px"
                src="https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/t2NS5_5UwDb.png?_nc_eui2=AeEluvzuoSaIS4Q2JohdzO4zfML26F-Gz8F8wvboX4bPwWX8SzvIloFS7sDkceKlZtv4AP6xJrjf8r3lpinugQg3"
              />
            </div>
            <div className="text sm:block hidden">
              <p className="text-gray-500 text-[14px] sm:text-[15px] font-semibold">
                Live Video
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Addposts;
