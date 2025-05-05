import React from "react";
import LoginForm from "../../components/login/LoginForm";
import LoginFooter from "./../../components/login/LoginFooter";

const Login = () => {
  return (
    <>
      <div className="main min-h-screen flex flex-col">
        <div className="parent p-5 pb-10 sm:pb-25 lg:pb-43 bg-[#F2F4F7] grid gap-5 sm:gap-10 md:gap-0 lg:gap-10 grid-cols-1 sm:grid-cols-2">
          <div className="left  pt-1 sm:pt-17 md:pt-24 lg:pt-39 px-0 sm:px-1 md:px-3 lg:px-0 lg:pl-22 ">
            <img
              className="cursor-pointer"
              width={321}
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            />
            <p className="tracking-tight text-[18.5px] sm:text-[20px] md:text-[22px] lg:text-[27px] pl-7 sm:mt-[-10px] ">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          <div className="right flex flex-col text-center items-center justify-center px-0  xl:px-26 pt-3 sm:pt-10 lg:pt-27 lg:translate-x-[-40px]">
            <LoginForm />{" "}
            <p className="text-[14px] pt-7 ">
              <span className="font-semibold cursor-pointer hover:underline">
                Create a Page
              </span>{" "}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>

        <LoginFooter />
      </div>
    </>
  );
};

export default Login;
