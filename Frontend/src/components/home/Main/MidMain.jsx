import React from "react";
import Addposts from "./post/addpost/Addposts";
import Getpost from "./post/getpost/Getpost";
import Story from "./story/Story";

const MidMain = () => {
  return (
    <>
      <div className="MidMain h-[525px] overflow-y-scroll">
        <Addposts />
        <Story />
        <Getpost />
        <Getpost />
        <Getpost />
      </div>
    </>
  );
};

export default MidMain;
