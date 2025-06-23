import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Rightside_data } from "../data/Rightside_data";
import { Create_data } from "../data/Create_data";

const Menu_items = () => {
  return (
    <>
      <div className="right-Side-Bar z-700 h-[513px] overflow-y-hidden bg-[#F8F9FB] fixed top-14 right-5 w-155  pb-15 shadow-2xl rounded-xl pr-1">
        <div className="fixed bg-[#F8F9FB] w-[45%] pt-2 rounded-xl px-4">
          <p className="text-[24px] font-bold">Menu</p>
        </div>

        <div className="overflow-y-scroll w-[99%] h-full mt-13 pb-2 px-4 scrollbar">
          <div className="grid  grid-cols-1 sm:grid-cols-3 items-center gap-4">
            <div className="left sm:col-span-2 bg-[#FFFFFF] rounded-lg py-4 shadow-sm">
              {/* ...input.... */}
              <div className="px-4">
                <div className="inputparent bg-[#F0F2F5] flex items-center px-2 sm:px-3 py-2 rounded-full gap-2">
                  <IoIosSearch className="text-[17px] sm:text-[18px] text-gray-700 transition-all" />

                  <input
                    className={`outline-0 border-0 bg-transparent `}
                    placeholder="Search Facebook"
                  />
                </div>
              </div>

              {/* .......>>>>>Rightside_data<<<<<<<........ */}

              <div className="MAP flex flex-col">
                {Rightside_data?.map((item, index) => {
                  return (
                    <div key={index} className="">
                      <p className="py-3 px-4 text-[17px] font-semibold">
                        {item.heading}
                      </p>
                      {item?.list?.map((item2, index2) => {
                        return (
                          <div
                            key={index2}
                            className="Padding px-2 cursor-pointer"
                          >
                            <div className="div flex items-center gap-4 py-2 px-2 hover:bg-[#ececec] transition-all rounded-lg">
                              <div className="icon">{item2.logo}</div>
                              <div className="text">
                                <div className="title text-[16px] font-semibold">
                                  {item2.title}
                                </div>
                                <div className="para text-[13px] text-gray-900 leading-4">
                                  {item2.para}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {index !== Rightside_data.length - 1 && (
                        <hr className="text-gray-300 mt-4 mx-5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="right sticky top-0 w-[105%] sm:col-span-1 bg-[#FFFFFF] rounded-lg flex flex-col self-start shadow-sm">
              <div className="pt-2 pb-3 px-4 rounded-xl ">
                <p className="text-[20px] font-bold -tracking-normal">Create</p>
              </div>

              {/* ........>>>>>>>Create_Data Map .......<<<<<<<<<< */}

              <ul className="px-2">
                {Create_data?.map((item, index) => {
                  return (
                    <div key={index} className="div">
                      <li className="hover:bg-gray-100 transition-all px-3 py-2 rounded-md flex gap-3 items-center cursor-pointer">
                        <div className="icon bg-gray-200 p-2 rounded-full flex items-center justify-center text-gray-800 text-[20px]">
                          {item.icon}
                        </div>

                        <p className="title font-semibold text-[15px]">
                          {item.title}
                        </p>
                      </li>

                      {index == 3 && <hr className="text-gray-300 my-2" />}
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu_items;
