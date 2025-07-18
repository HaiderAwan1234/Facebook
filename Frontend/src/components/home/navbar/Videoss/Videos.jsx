import React from "react";
import VideoSidebar from "./VideoSidebar";
import GetVideos from "./GetVideos";
import Navbar from "../Navbar";

const Videos = () => {
  return (
    <>
      <div className="">
        <Navbar />
      </div>

      <div className="grid  grid-cols-12">
        <div className="col-span-4">
          <VideoSidebar />
        </div>

        <div className="h-[533px]  overflow-y-scroll hide-scrollbar col-span-8">
          <GetVideos />
        </div>
      </div>
    </>
  );
};

export default Videos;
