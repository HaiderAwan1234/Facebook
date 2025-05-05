import React from "react";
import SignupFooter from "./../../components/signup/SignupFooter";
import SignupForm from "./../../components/signup/SignupForm";

const SignUp = () => {
  return (
    <>
      <div className="main min-h-screen flex flex-col">
        <div className="parent sm:pb-15 lg:pb-20 bg-[#F2F4F7] flex flex-col gap-5 items-center justify-center">
          <img
            className="cursor-pointer"
            width={300}
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          />

          <SignupForm />
        </div>

        <SignupFooter />
      </div>
    </>
  );
};

export default SignUp;
