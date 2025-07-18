import React from "react";
import { FaUser, FaGlobe, FaThumbsUp } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import EmojiReactions from "./EmojiReactions";
import moment from "moment"; // ✅ FIXED

const GetVideos = () => {
  const userInfo = { f_name: "John Doe" };
  const createdAt = "2025-05-20T14:00:00Z";
  const caption = "This is a static caption for testing.";
  const likes = [1, 2, 3];
  const comments = [{ text: "Nice!" }, { text: "Awesome video!" }];
  const videoUrl =
    "https://videos.pexels.com/video-files/4620563/4620563-uhd_1440_2732_25fps.mp4";

  return (
    <div className="cursor-pointer shadow-lg shadow-gray-400 xl:w-[90%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] bg-white rounded-md my-2">
      {/* Header */}
      <div className="flex p-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[45px] h-[45px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
            <FaUser size={25} className="text-gray-600" />
          </div>
          <div>
            <h6 className="font-semibold text-sm">{userInfo.f_name}</h6>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span className="font-semibold">
                {moment().diff(moment(createdAt), "hours") < 24
                  ? moment(createdAt).fromNow()
                  : moment(createdAt).format("MMM D, YYYY")}
              </span>
              <span className="h-[2px] w-[2px] rounded-full bg-gray-500 mx-1" />
              <FaGlobe />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-gray-900 p-3 my-2 capitalize">{caption}</p>

      {/* Video */}
      <div className="w-full">
        <video className="w-full max-h-[500px] object-contain" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Reactions and Comments Count */}
      <div className="flex gap-2 p-3">
        <div className="flex justify-between w-full text-gray-600">
          <div className="flex items-center gap-1">
            <span>👍</span>
            <span>{likes.length}</span>
          </div>
          <span>{comments.length} comments</span>
        </div>
      </div>

      <hr className="bg-gray-300 h-[1px] border-0" />

      {/* Bottom actions */}
      <div className="flex gap-2 py-3">
        <div className="flex justify-between w-full items-center p-3">
          <EmojiReactions />
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="div cursor-pointer flex justify-center items-center gap-2">
            <BiComment className="text-gray-600 " />
            <h6 className="font-semibold text-sm text-gray-600 ">Comment</h6>
          </div>
        </div>

        <div className="flex justify-center items-center w-full cursor-pointer">
          <div className="div cursor-pointer flex items-center gap-2">
            <PiShareFat className="text-gray-600" />
            <h6 className="font-semibold text-sm text-gray-600">Share</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetVideos;
