import React from "react";
import Navbar from "../../components/home/navbar/Navbar";
import MidMain from "../../components/home/Main/MidMain";
import LeftSidebar from "./../../components/home/Main/LeftSidebar";
import Ads from "./../../components/home/Main/AdsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="lg:block hidden w-3/12">
          <LeftSidebar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <MidMain />
        </div>

        <div className="hidden md:block w-5/12 lg:w-3/12">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default Home;
