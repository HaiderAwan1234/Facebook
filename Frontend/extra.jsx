import React, { useEffect } from "react";
import { FaComment, FaHeart, FaRegComment, FaThumbsUp } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { TiWorld } from "react-icons/ti";
import { IoIosShareAlt } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  postReset,
  serviceGetPost,
  serviceGetReaction,
} from "../../../../../features/post/postSlice";
import toast from "react-hot-toast";
import moment from "moment";
import EmojiReactions from "./Emogi";

const Getpost = () => {
  const {
    post,
    postSuccess,
    postError,
    postMessage,
    postLoading,
    reactionSuccess,
    reactionError,
    reactionLoading,
  } = useSelector((state) => state.album);

  const dispatch = useDispatch();

  // fetch posts
  useEffect(() => {
    dispatch(serviceGetPost());
  }, [dispatch]);

  // handle post success/error
  useEffect(() => {
    if (postError) {
      toast.error(postMessage);
    }
    if (postSuccess) {
      toast.success("Posted Successfully !!!");
      console.log(post);
    }
    dispatch(postReset());
  }, [postError, postSuccess, dispatch, postMessage]);

  // fetch reactions for each post after posts are loaded
  useEffect(() => {
    if (post?.length > 0) {
      post.forEach((p) => {
        if (p?._id) {
          dispatch(serviceGetReaction({ post_id: p._id }));
        }
      });
    }
  }, [post, dispatch]);

  // handle reaction success/error
  useEffect(() => {
    if (reactionSuccess) {
      toast.success("Like Successfully");
    }
    if (reactionError) {
      toast.error(postMessage);
    }
  }, [reactionSuccess, reactionError, postMessage]);

  return (
    <div className="div">
      {post.map((item, index) => (
        <div
          key={item?._id || index}
          className="GETPOST pt-3 pb-2 sm:pb-1 shadow w-[95%] md:w-[80%] lg:w-[83%] mx-auto bg-white rounded-xl mb-4"
        >
          {/* TOP */}
          <div className="TOP flex items-center justify-between px-1 sm:px-3">
            <div className="Left flex items-center gap-2 sm:gap-3">
              <div className="icon flex items-center justify-center h-[40px] w-[40px] sm:w-[50px] sm:h-[50px] rounded-full">
                <img
                  className="rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
              </div>

              <div className="text leading-5 flex flex-col">
                <p className="font-semibold text-[14px] sm:text-[16px] cursor-pointer hover:underline">
                  Alexender Daneil
                </p>

                <div className="TIME/PUBLIC flex items-center gap-2 text-gray-600">
                  <p className="text-[13px] cursor-pointer">
                    {moment().diff(moment(item?.createdAt), "hours") < 24
                      ? moment(item?.createdAt).fromNow()
                      : moment(item?.createdAt).format("MMM D, YYYY")}
                  </p>
                  <div className="ICON translate-y-[1px] cursor-pointer">
                    <TiWorld />
                  </div>
                </div>
              </div>
            </div>

            <div className="Right flex items-center justify-center gap-2 pr-1 sm:pr-3">
              <div className="dot text-gray-600 text-[20px] sm:text-[23px] cursor-pointer">
                <HiDotsHorizontal />
              </div>
              <div className="cross text-gray-600 text-[20px] sm:text-[23px] cursor-pointer">
                <RxCross2 />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <p className="text-[13px] sm:text-[15px] px-2 sm:px-3 text-gray-900 leading-5 mt-3 font-semibold first-letter:uppercase">
            {item?.textArea}
          </p>

          {/* BACKGROUND IMAGE / COLOR */}
          <div
            style={{
              backgroundImage:
                item?.background?.image || item?.cloudLink
                  ? `url(${
                      item?.cloudLink
                        ? item?.cloudLink
                        : item?.background?.image
                    })`
                  : `linear-gradient(${item?.background?.startColor},${item?.background?.endColor})`,
              backgroundPosition: "center",
              backgroundSize: item?.cloudLink ? "contain" : "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className={`IMAGE mt-3 sm:mt-4 cursor-pointer flex items-center justify-center ${
              item?.background?.image || item?.cloudLink
                ? "h-[300px] sm:h-[480px] text-white"
                : item?.background?.startColor == "#ffffff"
                ? "h-[0px] text-black"
                : "h-[300px] sm:h-[480px] text-white"
            }`}
          >
            <p className="first-letter:uppercase text-[19px] sm:text-[25px] px-3 sm:px-9">
              {item?.background?.startColor == "#ffffff" ? "" : item?.textArea}
            </p>
          </div>

          {/* LIKE/COMMENT COUNT */}
          <div className="LIKE/COMMENT flex items-center justify-between px-2 mt-3">
            <div className="LEFT flex items-center gap-2">
              <div className="ICONS flex items-center">
                <div className="h-[20px] w-[20px] bg-blue-500 rounded-full flex items-center justify-center p-1 translate-x-[3px] cursor-pointer">
                  <FaThumbsUp className="text-white cursor-pointer" />
                </div>
                <div className="h-[20px] w-[20px] bg-red-400 rounded-full flex items-center justify-center p-1 cursor-pointer">
                  <FaHeart className="text-white cursor-pointer" />
                </div>
              </div>
              <div className="TEXT">
                <p className="text-[15px] cursor-pointer">6.3K</p>
              </div>
            </div>

            <div className="RIGHT flex items-center gap-3 text-gray-600">
              <div className="COMMENT flex items-center gap-1">
                <div className="text text-[15px] cursor-pointer">8</div>
                <div className="icon cursor-pointer">
                  <FaComment />
                </div>
              </div>
              <div className="SHARE flex items-center">
                <div className="text text-[15px] cursor-pointer">22</div>
                <div className="icon text-2xl cursor-pointer">
                  <IoIosShareAlt />
                </div>
              </div>
            </div>
          </div>

          <hr className="mx-3 mt-2 text-gray-300" />

          {/* LIKE/COMMENT/SHARE ACTIONS */}
          <div className="WRITE/LIKE/COMMENT/SHARE flex items-center justify-between px-1 sm:px-5 mt-1 text-gray-600">
            <EmojiReactions post_id={item?._id} />

            <div className="COMMENT flex items-center justify-center gap-1 hover:bg-gray-100 transition-all px-2 sm:px-9 py-1 rounded-md cursor-pointer">
              <div className="icon translate-y-[1px] cursor-pointer">
                <FaRegComment />
              </div>
              <div className="text text-[14px] sm:text-[16px] font-semibold cursor-pointer">
                Comment
              </div>
            </div>

            <div className="SHARE flex items-center justify-center gap-1 hover:bg-gray-100 transition-all px-3 sm:px-13 py-1 rounded-md cursor-pointer">
              <div className="icon translate-y-[1px] cursor-pointer">
                <RiShareForwardLine />
              </div>
              <div className="text text-[14px] sm:text-[16px] font-semibold cursor-pointer">
                Share
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getpost;
