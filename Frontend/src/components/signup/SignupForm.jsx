import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { serviceUser, userReset } from "../../features/user/userSlice";

import toast from "react-hot-toast";

const SignupForm = () => {
  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const [close, setClose] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [myDate] = useState(new Date());

  const [inputss, setInputss] = useState({
    f_name: "",
    l_name: "",
    inputEmail: "",
    inputPassword: "",
    date: myDate.getDate(),
    month: myDate.getMonth(),
    year: myDate.getFullYear(),
    gender: "",
  });

  const {
    f_name,
    l_name,
    inputEmail,
    inputPassword,
    date,
    month,
    year,
    gender,
  } = inputss;

  const changeInput = (e) => {
    setInputss({
      ...inputss,
      [e.target.name]: e.target.value,
    });
  };

  const blurrMe = (name) => {
    if (!f_name && name == "f_name") {
      setError("f_name");
    } else {
      setError("");
    }
    if (!l_name && name == "l_name") {
      setError("l_name");
    }
  };

  const years = () => {
    let empty = [];
    for (let i = 2025; i >= 1947; i--) {
      empty.push(i);
    }
    return empty;
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

  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    const userData = {
      f_name,
      l_name,
      inputEmail,
      inputPassword,
      date,
      month,
      year,
      gender,
    };

    dispatch(serviceUser(userData));
  };

  const { user, userError, userSuccess, userLoading, userMessage } =
    useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }

    if (userSuccess) {
      navigate("/home");
    }

    dispatch(userReset());
  }, [userError, userSuccess]);

  return (
    <>
      <form className="bg-[#FFFFFF] mb-5 rounded-sm sm:rounded-xl shadow-xl w-[100%] xl:w-[34%] lg:w-[36%] md:w-[48%] sm:w-[55%] pt-2">
        <p className="m-0 p-0 text-[24px] sm:text-[26px] text-center font-semibold tracking-tight">
          Create a new account
        </p>

        <p className="m-0 p-0 text-[14px] sm:text-[16px] text-center text-gray-600 tracking-tight">
          It's quick and easy.
        </p>

        <hr className="text-gray-300 w-[100%] my-3 sm:my-4" />

        <div className="flex inputparent gap-1 sm:gap-3 px-1 sm:px-4">
          <div className="parent relative w-[50%]">
            <input
              onBlur={(e) => blurrMe(e.target.name)}
              style={{
                boxShadow:
                  "rgba(1, 0, 30, 0.25) 0px 0px 10px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
              }}
              className={` rounded-md text-[16px] w-[100%]  outline-0  px-2 sm:px-3 py-2 relative sm:text-[16px] transition-all   ${
                error == "f_name"
                  ? "border-1 border-red-600"
                  : "border-1 border-gray-300 focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
              } `}
              type="text"
              placeholder="First name"
              name="f_name"
              value={f_name}
              onChange={changeInput}
            />
            {error == "f_name" && (
              <PiWarningCircleFill className="text-[17px] absolute text-red-700 right-3 top-[21.3px] transform -translate-y-1/2" />
            )}
          </div>

          <div className="parent relative w-[50%]">
            <input
              onBlur={(e) => blurrMe(e.target.name)}
              style={{
                boxShadow:
                  "rgba(1, 0, 30, 0.25) 0px 0px 10px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
              }}
              className={` rounded-md text-[16px] w-[100%]  outline-0  px-2 sm:px-3 py-2 relative sm:text-[16px] transition-all   ${
                error == "l_name"
                  ? "border-1 border-red-600"
                  : "border-1 border-gray-300 focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100"
              } `}
              type="text"
              placeholder="Surname"
              name="l_name"
              value={l_name}
              onChange={changeInput}
            />
            {error == "l_name" && (
              <PiWarningCircleFill className="text-[17px] absolute text-red-700 right-3 top-[21.3px] transform -translate-y-1/2" />
            )}
          </div>
        </div>

        <div className="flex items-center label/icon pt-2 gap-1 sm:gap-0 sm:pt-3">
          <label className="text-[13px] text-gray-600 px-2 sm:px-4">
            Date of birth
          </label>
          <AiFillQuestionCircle
            size={14}
            className="text-gray-500 -translate-x-2"
          />
        </div>

        <div className="flex inputparent2 gap-1 sm:gap-2 pt-2 sm:pt-1 px-2 sm:px-4">
          <select
            name="date"
            value={date}
            onChange={changeInput}
            className="border-1 border-gray-400 rounded-md text-[14px] sm:text-[15px] w-[33%] px-1 py-2"
          >
            {Array.from({ length: 31 }).map((_, index) => {
              return (
                <option value={index + 1} key={index}>
                  {index + 1}
                </option>
              );
            })}
          </select>

          <select
            name="month"
            value={month}
            onChange={changeInput}
            className="border-1 border-gray-400 rounded-md text-[14px] sm:text-[15px] w-[33%] px-1 py-2"
          >
            {months?.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>

          <select
            name="year"
            value={year}
            onChange={changeInput}
            className="border-1 border-gray-400 rounded-md text-[14px] sm:text-[15px] w-[33%] px-1 py-2"
          >
            {years().map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center label/icon2 pt-2 sm:pt-3">
          <label className="text-[13px] text-gray-600 px-2 sm:px-4">
            Gender
          </label>
          <AiFillQuestionCircle
            size={14}
            className="text-gray-500 -translate-x-2"
          />
        </div>

        <div className="flex gap-1 sm:gap-2 pt-2 sm:pt-1 px-2 sm:px-4">
          <div className="flex border-1 border-gray-400 justify-between rounded-md text-[14px] sm:text-[16px] w-[49%] items-center py-2 px-2 sm:px-3">
            <label>Female</label>
            <input
              name="gender"
              value={"female"}
              onChange={changeInput}
              type="radio"
              className="cursor-pointer"
            />
          </div>

          <div className="flex border-1 border-gray-400 justify-between rounded-md text-[14px] sm:text-[16px] w-[49%] items-center py-2 px-2 sm:px-3">
            <label>Male</label>
            <input
              name="gender"
              value={"male"}
              onChange={changeInput}
              type="radio"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="px-2 sm:px-4 pt-2 sm:pt-1">
          <input
            style={{
              boxShadow:
                "rgba(1, 0, 30, 0.25) 0px 0px 10px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
            }}
            className="border-1 border-gray-300 my-2  rounded-md text-[16px] w-[100%] focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100 outline-0 px-3 py-2 relative sm:text-[16px] transition-all"
            type="text"
            placeholder="Mobile number or email address"
            name="inputEmail"
            value={inputEmail}
            onChange={changeInput}
          />
          <div className="relative">
            <input
              style={{
                boxShadow:
                  "rgba(1, 0, 30, 0.25) 0px 0px 10px -17px inset, rgba(0, 0, 0, 0) 0px 0px 0px -50px inset",
              }}
              className="border-1 border-gray-300  rounded-md text-[16px] w-[100%] focus:border-1 focus:border-blue-500 focus:shadow focus:shadow-blue-100 outline-0 px-3 py-2 relative sm:text-[16px] transition-all"
              placeholder="New password"
              name="inputPassword"
              value={inputPassword}
              onChange={changeInput}
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
        </div>

        <p className="text-[12px] text-gray-500 px-2 sm:px-4 pt-5 sm:pt-5 tracking-tight">
          People who use our service may have uploaded your contact information
          to Facebook.{" "}
          <span className="text-blue-800 hover:underline">
            <a href="#"> Learn more.</a>
          </span>
        </p>

        <p className="text-[12px] text-gray-500 px-2 sm:px-4 pt-1 sm:pt-3 tracking-tight">
          By clicking Sign Up, you agree to our{" "}
          <span className="text-blue-800 hover:underline">
            <a href="#"> Terms</a>
          </span>{" "}
          ,{" "}
          <span className="text-blue-800 hover:underline">
            <a href="#"> Privacy Policy</a>
          </span>{" "}
          and{" "}
          <span className="text-blue-800 hover:underline">
            <a href="#"> Cookies Policy</a>
          </span>
          . You may receive SMS notifications from us and can opt out at any
          time.
        </p>

        <button
          onClick={handleSignup}
          className={`rounded-full cursor-pointer sm:rounded-md text-[16px] text-white w-[80%] block font-semibold mb-3 mt-6 mx-auto  py-2 sm:font-bold sm:text-[18px] sm:w-[47%] transition-all ${
            userLoading ? " bg-gray-500" : "bg-[#119F16]  hover:bg-[#36A420]"
          }`}
        >
          {userLoading ? (
            <HashLoader className="block m-auto" size={26} color="white" />
          ) : (
            " Sign Up"
          )}
        </button>
        <p className="text-center pb-5">
          <Link
            to="/"
            className="text-[#1877F2]  tracking-tight text-[14.5px] sm:text-[18px] text-center cursor-pointer hover:underline"
            href="http://localhost:5173/"
          >
            Already have an account?
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignupForm;
