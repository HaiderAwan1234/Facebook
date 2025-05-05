import React from "react";
import Navbar from "../../components/home/navbar/Navbar";
import RightSidebar from "../../components/home/Main/RightSidebar";
import MidMain from "../../components/home/Main/MidMain";
import LeftSidebar from "../../components/home/Main/LeftSidebar";

const Home = () => {
  return (
    <>
      <div className="main min-h-screen min-w-screen bg-[#F2F4F7]">
        <Navbar />
      </div>
    </>
  );
};

export default Home;
