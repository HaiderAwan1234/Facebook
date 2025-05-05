import React, { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [close, setClose] = useState(true);
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({
    inputEmail: "",
    inputPassword: "",
  });

  const { inputEmail, inputPassword } = inputs;

  const changeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const passwordIcon = () => {
    if (close) {
      setClose(!close);
    } else {
      setClose(!close);
    }
  };

  useEffect(() => {
    if (inputPassword.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [inputPassword]);

  return (
    <>
      <form className="w-[100%] bg-[#FFFFFF] p-5 rounded-md shadow-xl text-center">
        <input
          name="inputEmail"
          value={inputEmail}
          onChange={changeInput}
          style={{
            boxShadow:
              "rgba(1, 0, 30, 0.25) 0px 0px 30px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
          }}
          className=" w-[100%] text-[16px] sm:text-[17px] transition-all py-3 px-3 border-1 border-gray-300 outline-0 rounded-md focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
          type="text"
          placeholder="Email address or phone number"
        />

        <div className="relative">
          <input
            name="inputPassword"
            value={inputPassword}
            onChange={changeInput}
            style={{
              boxShadow:
                "rgba(1, 0, 30, 0.25) 0px 0px 30px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
            }}
            className="relative w-[100%] text-[16px] sm:text-[17px] my-3 transition-all py-3 px-3 pr-10 border-1 border-gray-300 outline-0 rounded-md focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
            placeholder="Password"
            type={close ? "password" : "text"}
          />

          {close ? (
            <FaEyeSlash
              onClick={passwordIcon}
              size={18.9}
              className={`absolute ${
                show ? "block" : "hidden"
              } text-gray-600 cursor-pointer right-4 top-1/2 transform -translate-y-1/2`}
            />
          ) : (
            <FaEye
              onClick={passwordIcon}
              size={18.9}
              className="absolute text-gray-600 cursor-pointer right-4 top-1/2 transform -translate-y-1/2"
            />
          )}
        </div>

        <button className="w-[100%]  cursor-pointer rounded-md bg-[#0866FF] hover:bg-[#0867ffec] text-white text-[16px] sm:text-[19px] font-bold  px-2 py-2 mb-3">
          Log in
        </button>

        <Link
          to="/"
          className="text-[#0058e7] pb-5  cursor-pointer text-center text-[14.5px] hover:underline"
        >
          Forgotten password?
        </Link>

        <hr className="w-[100%] text-gray-300" />

        <Link to="/signup">
          <button className="w-[100%] sm:w-[55%] mx-auto block rounded-md bg-[#3db725] text-white font-semibold sm:font-bold text-[16px]  sm:text-[17px] px-2 py-3 mb-3 mt-6 hover:bg-[#36A420] transition-all">
            Create new account
          </button>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
