import React from "react";

const SignupForm = () => {
  return (
    <>
      <form className="w-[100%] bg-[#FFFFFF] p-5 rounded-md shadow-xl text-center">
        <input
          className="w-[100%] text-[16px] sm:text-[18px] transition-all py-3 px-3 border-1 border-gray-300 outline-0 rounded-md focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
          type="text"
          placeholder="Email address or phone number"
        />

        <input
          className="w-[100%] text-[16px] sm:text-[18px] my-3 transition-all py-3 px-3 border-1 border-gray-300 outline-0 rounded-md focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
          type="password"
          placeholder="Password"
        />

        <button className="w-[100%]  cursor-pointer rounded-md bg-[#0866FF] hover:bg-[#0867ffec] text-white text-[16px] sm:text-[19px] font-bold  px-2 py-2 mb-3">
          Log in
        </button>

        <p className="pb-5">
          <a
            className="text-[#0058e7]  cursor-pointer text-center text-[14.5px] hover:underline"
            href="#"
          >
            Forgotten password?
          </a>
        </p>

        <hr className="w-[100%] text-gray-300" />

        <button className="w-[100%] sm:w-[55%] mx-auto block rounded-md bg-[#3db725] text-white font-semibold sm:font-bold text-[16px]  sm:text-[17px] px-2 py-3 mb-3 mt-6 hover:bg-[#36A420] transition-all">
          Create new account
        </button>
      </form>
    </>
  );
};

export default SignupForm;
