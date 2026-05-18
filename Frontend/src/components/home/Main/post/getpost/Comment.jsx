import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700, // increased for proper layout
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: 3,
  padding: "0", // remove default padding (we'll control via Tailwind)
  outline: "none",
};

export default function BasicModal() {
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);

  const handleButton = () => {
    setComment("");
  };

  useEffect(() => {
    if (comment.length > 0) {
      setSend(true);
    } else {
      setSend(false);
    }
  }, [comment]);

  return (
    <div>
      {/* Comment Button */}
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-1 hover:bg-gray-100 transition px-2 sm:px-9 py-1 rounded-md cursor-pointer"
      >
        <FaRegComment className="translate-y-[1px]" />
        <span className="text-[14px] sm:text-[16px] font-semibold">
          Comment
        </span>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setComment("");
        }}
      >
        <Box sx={style}>
          {/* ... */}
          {/* Header */}

          <div className="HEADER TOP flex justify-between items-center px-3 py-3 border-b border-gray-500">
            {/* ////////...... */}
            <div className="div"></div>

            {/* .......////// */}

            <h2 className="text-[20px] font-bold">Alexender's Post</h2>

            <div className="CROSS">
              <div
                onClick={() => {
                  setOpen(false);
                  setComment("");
                }}
                className="bg-gray-200 w-9 h-9 flex items-center justify-center  rounded-full cursor-pointer"
              >
                <RxCross1 className="text-[18px]" />
              </div>
            </div>
          </div>

          {/* Comments */}

          <div className="full-Div h-[400px] overflow-y-scroll scrollbar">
            {/* ........../////// */}
            <div className="PROFILE py-2 px-4">
              <div className="FLEX MAIN flex justify-between items-center">
                <div className="FLEX flex justify-center items-center gap-2">
                  <div className="IMAGE bg-gray-200 w-9 h-9 rounded-full">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                      className="w-9 h-9 rounded-full cursor-pointer"
                    />
                  </div>

                  <div className="NAME leading-4">
                    <p className="text-[15px] font-semibold">
                      Alexender Daniel
                    </p>
                    <div className="text-[13.5px] font-semibold text-gray-600 flex items-center gap-1">
                      <p>2d</p>
                      <p className="pb-2">.</p>
                      <p>
                        <FaUserGroup />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-[22px] text-gray-600 cursor-pointer">
                  <HiOutlineDotsHorizontal />
                </div>
              </div>

              <div className="CAPTION pt-2">
                {" "}
                واجب تھی جس بات پر حیرانی بہت* *ہم لڑکھڑائے ، مسکرائے اور چل
                دیے* *...!!!!*💔🌚
              </div>
            </div>

            <div className="IMAGE BABAR">
              <div
                className="h-[500px] w-full bg-center bg-cover cursor-pointer"
                style={{
                  backgroundImage: `url("/commentImage/comment.png")`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* Optional overlay content */}
              </div>
            </div>

            <div className="p-3 space-y-2 max-h-[400px] overflow-y-auto">
              {/* Single Comment */}
              <div className="flex items-start relative ">
                <div className="IMAGE bg-gray-200 w-9 h-9 rounded-full mr-2 cursor-pointer">
                  <img
                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                    alt=""
                    className="w-9 h-9 rounded-full cursor-pointer"
                  />
                </div>

                <div>
                  <div className="bg-[#e4e6eb] rounded-2xl px-3 py-2 max-w-[300px]">
                    <span className="font-semibold text-sm block">
                      InoXent FaRi
                    </span>
                    <p className="text-sm">Dream 😢❤️</p>
                  </div>

                  <div className="text-xs text-gray-500 mt-1 ml-1 flex gap-3">
                    <span>1d</span>
                    <span className="cursor-pointer">Like</span>
                    <span className="cursor-pointer">Reply</span>
                  </div>
                </div>

                <span className="absolute right-0 top-1 text-gray-500 cursor-pointer">
                  •••
                </span>
              </div>
              {/* Single Comment */}

              {/* Single Comment */}
              <div className="flex items-start relative">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3Dhttps://via.placeholder.com/40"
                  alt=""
                  className="w-9 h-9 rounded-full mr-2 cursor-pointer"
                />

                <div>
                  <div className="bg-[#e4e6eb] rounded-2xl px-3 py-2 max-w-[300px]">
                    <span className="font-semibold text-sm block">
                      InoXent FaRi
                    </span>
                    <p className="text-sm">Dream 😢❤️</p>
                  </div>

                  <div className="text-xs text-gray-500 mt-1 ml-1 flex gap-3">
                    <span>1d</span>
                    <span className="cursor-pointer">Like</span>
                    <span className="cursor-pointer">Reply</span>
                  </div>
                </div>

                <span className="absolute right-0 top-1 text-gray-500 cursor-pointer">
                  •••
                </span>
              </div>
              {/* Single Comment */}
            </div>
          </div>

          {/* INPUT */}

          <div className="flex items-center gap-2 p-3 border-t border-gray-500">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-9 h-9 rounded-full cursor-pointer"
            />

            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="INPUT flex-1 bg-[#e4e6eb] text-gray-800 outline-0 rounded-full  px-4 py-2 text-sm cursor-pointer"
            />

            <button
              disabled={!send}
              value={send}
              onClick={handleButton}
              className={`SEND cursor-pointer text-[21px] ${send ? "text-black" : "text-gray-500"} `}
            >
              <IoSend />
            </button>
          </div>

          {/* ....... INPUT....... */}
        </Box>
      </Modal>
    </div>
  );
}
