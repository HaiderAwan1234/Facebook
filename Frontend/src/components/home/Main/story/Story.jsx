import React from "react";

const Story = () => {
  return (
    <div className="STORY w-[93%] md:w-[80%] lg:w-[83%] mx-auto mt-3 overflow-x-scroll scrollbar-thin scrollbar3 py-1">
      <div className="flex gap-2 whitespace-nowrap">
        <div className="CARD bg-white shadow min-w-[44%] sm:min-w-[23%] h-[190px] rounded-xl flex-shrink-0 cursor-pointer"></div>

        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="CARD bg-white shadow min-w-[44%] sm:min-w-[23%] h-[190px] rounded-xl flex-shrink-0 cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Story;
