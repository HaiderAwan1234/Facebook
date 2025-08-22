import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoThumbsup } from "react-icons/go";

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
  onChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  // ✅ keep local state for selected emoji
  const [reaction, setReaction] = useState(userReaction);

  const rootRef = useRef(null);
  useClickOutside(rootRef, () => setOpen(false));

  const active = REACTIONS.find((r) => r.key === reaction) || null;

  const handlePick = (key) => {
    if (key === reaction) {
      setReaction(null);
      onChange(null);
    } else {
      setReaction(key);
      onChange(key);
    }
    setOpen(false);
  };

  const handleEmogi = (r) => {
    console.log(r);
  };

  return (
    <div ref={rootRef} className="relative inline-flex flex-col items-center">
      {/* Picker */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-19 left-16 -translate-x-1/3 bg-white rounded-2xl shadow-xl px-2 py-2 flex gap-2 z-20"
          >
            {/* ..........HANDLE EMOGI ............ 

            .
            .          
            .
            .
            */}

            {REACTIONS.map((r, i) => (
              <motion.button
                key={r.key}
                type="button"
                onClick={() => {
                  handlePick(r.key);
                  handleEmogi(r);
                }}
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
                {/* Tooltip label */}
                {hoverIndex === i && (
                  <motion.span
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    className="absolute -bottom-6 text-xs font-semibold text-gray-700"
                  >
                    {r.label}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Like Button */}
      <div
        onMouseEnter={() => setOpen(true)}
        onClick={() => (active ? setReaction(null) : setOpen(!open))}
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
