import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoThumbsup } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  postReset,
  serviceReaction,
} from "../../../../../features/post/postSlice";
import { toast } from "react-hot-toast";

const REACTIONS = [
  { key: "like", label: "Like", emoji: "👍" },
  { key: "love", label: "Love", emoji: "❤️" },
  { key: "haha", label: "Haha", emoji: "😂" },
  { key: "wow", label: "Wow", emoji: "😮" },
  { key: "sad", label: "Sad", emoji: "😢" },
  { key: "angry", label: "Angry", emoji: "😡" },
];

function useClickOutside(ref, handler) {
  useEffect(() => {
    function onClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) handler?.();
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, [ref, handler]);
}

export default function EmojiReactions({
  userReaction = null,
  post_id,
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  // ✅ reaction states
  const [reaction, setReaction] = useState(userReaction); // confirmed emoji
  const [pendingReaction, setPendingReaction] = useState(null); // waiting for API confirm

  const rootRef = useRef(null);
  useClickOutside(rootRef, () => setOpen(false));

  const active = REACTIONS.find((r) => r.key === reaction) || null;

  const { user } = useSelector((state) => state.auth);
  const { reactionSuccess, reactionError, postMessage } = useSelector(
    (state) => state.album
  );

  const dispatch = useDispatch();

  const handlePick = (key) => {
    if (key === reaction) {
      setPendingReaction(null);
      setReaction(null);
      onChange(null);
    } else {
      setPendingReaction(key); // wait for API success
      handleEmogi({ key });
    }
    setOpen(false);
  };

  const handleEmogi = (r) => {
    const reactionData = {
      post_id,
      user_id: user?._id,
      emogi: r.key,
    };
    dispatch(serviceReaction(reactionData));
  };

  // 🔥 update only when API confirms success
  useEffect(() => {
    if (reactionError) {
      toast.error(postMessage);
      setPendingReaction(null);
    }

    if (reactionSuccess && pendingReaction) {
      setReaction(pendingReaction);
      onChange(pendingReaction);
      setPendingReaction(null);
    }

    dispatch(postReset());
  }, [reactionError, reactionSuccess]);

  return (
    <div ref={rootRef} className="relative inline-flex flex-col items-center">
      {/* Emoji Picker */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-16 sm:-top-18 translate-x-26 sm:translate-x-7 bg-white rounded-2xl shadow-xl px-1 sm:px-2 py-1 sm:py-2 flex sm:gap-2 z-20"
          >
            {REACTIONS.map((r, i) => (
              <motion.button
                key={r.key}
                type="button"
                onClick={() => handlePick(r.key)}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(-1)}
                className="relative w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <motion.span
                  initial={{ y: 0, scale: 1 }}
                  animate={{
                    y: hoverIndex === i ? -6 : 0,
                    scale: hoverIndex === i ? 1.3 : 1,
                    rotate: hoverIndex === i ? -8 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="text-[22px]"
                >
                  {r.emoji}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Like Button */}
      <div
        onMouseEnter={() => setOpen(true)}
        className="LIKE flex items-center justify-center gap-1 hover:bg-gray-100 transition-all px-3 sm:px-13 py-1 rounded-md cursor-pointer"
      >
        <div className="icon translate-y-[1px] cursor-pointer">
          {active ? (
            <span className="text-lg">{active.emoji}</span>
          ) : (
            <GoThumbsup />
          )}
        </div>
        <div className="text text-[14px] sm:text-[16px] font-semibold cursor-pointer">
          {active ? active.label : "Like"}
        </div>
      </div>
    </div>
  );
}
