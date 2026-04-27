import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

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
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          {/* ... */}
          {/* Header */}

          <div className="relative flex justify-center items-center py-4 border-b border-gray-500">
            <h2 className="text-[20px] font-bold">Alexender Daniel</h2>

            <div className="CROSS absolute right-5">
              <div
                onClick={() => setOpen(false)}
                className="bg-gray-200 w-9 h-9 flex items-center justify-center  rounded-full cursor-pointer"
              >
                <RxCross1 className="text-[18px]" />
              </div>
            </div>
          </div>

          {/* Comments */}

          <div className="overflow-y-scroll scrollbar"></div>

          <div className="full-Div h-[400px] overflow-y-scroll scrollbar">
            <div className="div">
              <img
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="image h-[500px] w-full"
                src="https://scontent.fisb31-1.fna.fbcdn.net/v/t39.30808-6/674594046_1341553171352342_5699683895942687483_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGiUvMHlumxbFLWiMNwvTSC5BCPkJAi6TnkEI-QkCLpOXT5Y3qhqnCNqcshe8cNvHuepn4fEmirnLmd6XqjkgGG&_nc_ohc=Rm9UMZik65cQ7kNvwElaRGB&_nc_oc=Adp0hPKnwEohIttqV5htmCYdtc9RxkVgHfTxWvvU2G77jm_7k1OFtJG07NIRRR6UMOA&_nc_zt=23&_nc_ht=scontent.fisb31-1.fna&_nc_gid=yQF40AbmhuX1NjRqQQXC2g&_nc_ss=7a3a8&oh=00_Af1gECiyztcRGnGlRLZ0NB8dNcszn5sliTi-Fh6Eigzjcg&oe=69EBBA26"
              />
            </div>

            <div className="p-3 space-y-3 max-h-[400px] overflow-y-auto">
              {/* Single Comment */}
              <div className="flex items-start relative">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3Dhttps://via.placeholder.com/40"
                  alt=""
                  className="w-9 h-9 rounded-full mr-2"
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

              {/* Single Comment */}
              <div className="flex items-start relative">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3Dhttps://via.placeholder.com/40"
                  alt=""
                  className="w-9 h-9 rounded-full mr-2"
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
              className="w-9 h-9 rounded-full"
            />

            <input
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="Write a comment..."
              className="flex-1 bg-[#e4e6eb] text-gray-800 outline-0 rounded-full  px-4 py-2 text-sm"
            />
          </div>

          {/* ....... INPUT....... */}
        </Box>
      </Modal>
    </div>
  );
}
