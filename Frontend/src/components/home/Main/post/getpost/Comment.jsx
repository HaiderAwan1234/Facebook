import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { FaRegComment } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500, // increased for proper layout
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: 3,
  padding: "0", // remove default padding (we'll control via Tailwind)
  outline: "none",
};

export default function BasicModal() {
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
          {/* Header */}
          <div className="relative flex justify-center items-center py-4 border-b">
            <h2 className="text-lg font-semibold">NuMaN's Post</h2>
            <span
              onClick={() => setOpen(false)}
              className="absolute right-4 cursor-pointer text-lg"
            >
              ✕
            </span>
          </div>

          {/* Comments */}
          <div className="p-3 space-y-3 max-h-[400px] overflow-y-auto">
            {/* Single Comment */}
            <div className="flex items-start relative">
              <img
                src="https://via.placeholder.com/40"
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

                <div className="text-xs text-gray-500 mt-1 flex gap-3">
                  <span>1d</span>
                  <span className="cursor-pointer">Like</span>
                  <span className="cursor-pointer">Reply</span>
                </div>
              </div>

              <span className="absolute right-0 top-1 text-gray-500 cursor-pointer">
                •••
              </span>
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t">
            <img
              src="https://via.placeholder.com/40"
              alt=""
              className="w-9 h-9 rounded-full"
            />
            <div className="flex-1 bg-[#e4e6eb] rounded-full px-4 py-2 text-gray-500 text-sm">
              Write a comment...
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
