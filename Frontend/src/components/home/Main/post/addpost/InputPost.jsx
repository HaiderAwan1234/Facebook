import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft, FaImages, FaTimes, FaUser } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { colorData } from "./data/colorData";
import { IoGrid } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { decorate_data } from "./data/decorate_data";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { postReset, servicePost } from "../../../../../features/post/postSlice";
import { toast } from "react-hot-toast";
import { HashLoader } from "react-spinners";
import axios from "axios";

export default function InputPost() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [paragraph, setParagraph] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [openColor, setopenColor] = useState(false);
  const [decorate, setDecorate] = useState(false);
  const [slide, setSlide] = useState(false);
  const [disable, setDisable] = useState(false);
  const [media, setMedia] = useState(false);
  const [selectImage, setSelectImage] = useState(false);
  const [url, setUrl] = useState(null);
  const [Image, setImage] = useState(null);
  const [cloudLink, setCloudLink] = useState("");
  const [cloudLoading, setCloudLoading] = useState(false);

  const { user, userMessage, userError, userSuccess, userLoading } =
    useSelector((state) => state.auth);

  const [selectedColor, setSelectedColor] = useState({
    startColor: "#ffffff",
    endColor: "#ffffff",
    image: "",
  });

  const { startColor, endColor, image } = selectedColor;

  const handleClose = () => {
    setOpen(false);
    setopenColor(false);
    setSelectedColor({
      startColor: "#ffffff",
      endColor: "#ffffff",
      image: "",
    });
    setSlide(false);
    setTextArea("");
    setMedia(false);
    setSelectImage(false);
    setUrl(null);
  };

  const textAreaChange = (e) => {
    setTextArea(e.target.value);
  };

  useEffect(() => {
    if (textArea.length > 0) {
      setParagraph(false);
      setDisable(false);
    } else {
      setParagraph(true);
      setDisable(true);
    }
  }, [textArea, paragraph]);

  useEffect(() => {
    if (url) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [url]);

  // ..
  // ..

  const changeImage = (e) => {
    let image = e.target.files[0];
    let imageUrl = URL.createObjectURL(image);

    setImage(image);
    setUrl(imageUrl);
    setSelectImage(true);
  };

  // ..

  // Cloudnary FUNCTION

  const cloudnaryFunction = async () => {
    setCloudLoading(true);
    // let username = dynqluico;
    // let password = txshpv85;
    try {
      const cloudnaryData = new FormData();
      cloudnaryData.append("file", Image);
      cloudnaryData.append("upload_preset", "txshpv85");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dynqluico/image/upload",
        cloudnaryData
      );

      setCloudLink(response.data.url);
      console.log(response.data.url);
      setCloudLoading(false);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  // ....
  // ..

  const { post, postSuccess, postError, postLoading, postMessage } =
    useSelector((state) => state.album);

  const dispatch = useDispatch();

  // .....BUTTON FUNCTION........

  const handleNext = async (e) => {
    e.preventDefault();

    const postData = {
      textArea,
      background: selectedColor,
      user_id: user?._id,
      cloudLink: await cloudnaryFunction(),
    };

    dispatch(servicePost(postData));

    setMedia(false);
    setSelectImage(false);
    setUrl(null);
  };

  useEffect(() => {
    if (postError) {
      toast.error(postMessage);
      dispatch(postReset());
    }

    if (postSuccess) {
      setTextArea("");

      setSelectedColor({
        startColor: "#ffffff",
        endColor: "#ffffff",
        image: "",
      });

      setOpen(false);

      dispatch(postReset());
    }
  }, [postError, postSuccess]);

  return (
    <>
      <div
        onClick={handleOpen}
        className="INPUT bg-[#edeef1] hover:bg-[#e4e4e4] transition-all py-[8.5px] w-full rounded-full cursor-pointer"
      >
        <p className="px-2 sm:px-3 text-gray-500 text-[14.5px] sm:text-[17px]">
          {" "}
          Whats on your mind , {user?.f_name}
        </p>
      </div>
      <Modal
        style={{ backdropFilter: "blur(1px)", background: "255,255,255,0.1" }}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`MAIN  flex justify-center items-center h-screen`}>
          <div
            className={`CARD transition-all duration-200  bg-white py-3 w-[95%] sm:w-[78%] md:w-[64%] lg:w-[50%] xl:w-[40%]  rounded-xl shadow-lg  relative overflow-hidden`}
          >
            <div className="TOP-FLEX  flex px-4">
              <p className="TOP-CHILD1 text-center font-bold text-[19px] sm:text-[21px] w-full">
                Create post
              </p>

              <div onClick={handleClose} className="TOP-CHILD2">
                <div className="CROSS cursor-pointer bg-gray-200 flex items-center justify-center h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] rounded-full">
                  <RxCross2 className="text-[21px] sm:text-[25px] text-gray-600 font-bold" />
                </div>
              </div>
            </div>

            <hr className="text-gray-300 mt-2 sm:mt-3" />

            {/* ........USER INFORMATION.......... */}

            <div className="flex items-center gap-4 sm:gap-2 pt-3 px-3">
              <div className="div">
                <div className=" cursor-pointer w-[39px] sm:w-[41px] h-[39px] sm:h-[41px] bg-gray-200 border-gray-300 rounded-full border flex justify-center items-center">
                  <FaUser className="text-gray-600 text-[21px] sm:text-[23px]" />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-[2px] sm:gap-[1px]">
                <p className="font-semibold pl-1">
                  {user?.f_name} {user?.l_name}
                </p>

                <div className="BOX cursor-pointer flex items-center justify-center gap-1 text-gray-900 bg-gray-200 px-1 py-1 rounded-md">
                  <div className="WORLD flex items-center justify-center">
                    <TiWorld />
                  </div>
                  <p className="text-[13px] font-semibold">Public</p>
                  <div className="arrow flex items-center justify-center ">
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </div>
            </div>

            {/* ........USER INFORMATION...END.... */}

            <div className="relative">
              {paragraph ? (
                <p className="absolute pointer-events-none text-white text-[19px] sm:text-[27px]  px-1 sm:px-4 mt-3 py-1 font-semibold top-17 left-2 sm:left-12 ">{`What's on your mind, ${user?.f_name}?`}</p>
              ) : (
                <p className=""></p>
              )}

              <textarea
                style={{
                  backgroundImage: decorate
                    ? `url(${image})`
                    : `linear-gradient(60deg,${startColor},${endColor})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className={`post-caption w-full mt-3 border-0 outline-0  transition-all duration-200   ${
                  startColor == "#ffffff"
                    ? media
                      ? "text-black h-[35px] py-1  text-[16px] sm:text-[17px] px-3 sm:px-4"
                      : "text-black h-[120px] py-1  text-[19px] sm:text-[22px] px-3 sm:px-4"
                    : "text-white h-[220px] pt-18 text-center font-semibold text-[19px] sm:text-[27px] px-3 sm:px-4"
                } `}
                placeholder={
                  startColor == "#ffffff"
                    ? `What's on your mind, ${user?.f_name}?`
                    : ""
                }
                value={textArea}
                onChange={textAreaChange}
              ></textarea>
            </div>

            <div
              className={` COLOR flex items-center justify-between px-1 sm:px-3 ${
                media ? "hidden" : "block"
              }`}
            >
              <div
                onClick={() => setopenColor(!openColor)}
                className="cursor-pointer"
              >
                {openColor ? (
                  <>
                    <div
                      className={` bg-gray-300 ml-1 w-[30px] h-[30px] sm:w-[33px] sm:h-[33px] rounded-md flex items-center justify-center`}
                    >
                      <MdArrowBackIos className="text-gray-700 ml-1" />
                    </div>
                  </>
                ) : (
                  <img
                    className="w-[30px] h-[30px]  sm:w-[33px] sm:h-[33px]"
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                  />
                )}
              </div>

              <div
                className={`flex items-center gap-2 overflow-x-scroll sm:overflow-hidden px-2 py-1 scrollbar3`}
              >
                {openColor && (
                  <div className="flex items-center justify-center gap-2 mt-[15px] sm:mt-0">
                    {colorData?.map((item, index) => {
                      return (
                        <motion.div
                          onClick={() => {
                            setTextArea("");
                            index == 7 ? setDecorate(true) : setDecorate(false);
                            setSelectedColor(
                              index == 7
                                ? {
                                    startColor: "",
                                    endColor: "",
                                    image: item?.image,
                                  }
                                : {
                                    startColor: item?.startColor,
                                    endColor: item?.endColor,
                                    image: "",
                                  }
                            );

                            item?.startColor === "#ffffff"
                              ? setParagraph(false)
                              : setParagraph(true);
                          }}
                          initial={{ opacity: 0, scale: 0, y: 16, rotate: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                          transition={{
                            delay: index * 0.07,
                            type: "spring",
                            stiffness: 250,
                            damping: 14,
                          }}
                          key={index}
                          style={{
                            background:
                              index == 7
                                ? `url(${item?.image})`
                                : `linear-gradient(60deg , ${item?.startColor},${item?.endColor})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                          className="cursor-pointer w-[29px] h-[29px] sm:w-[31px] sm:h-[31px] rounded-md border border-gray-300"
                        ></motion.div>
                      );
                    })}

                    {openColor && (
                      <motion.div
                        onClick={() => {
                          setSlide(!slide);
                        }}
                        initial={{ opacity: 0, scale: 0, y: 17 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: 0.6,
                          type: "spring",
                          stiffness: 250,
                          damping: 14,
                        }}
                        className="bg-gray-400 flex items-center justify-center cursor-pointer w-[29px] h-[29px] sm:w-[31px] sm:h-[31px] rounded-md border border-gray-300"
                      >
                        <IoGrid />
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              <div className="TIP flex items-center gap-1">
                <div className="div cursor-pointer">
                  <div className="tip flex gap-1 items-center bg-[#585858] px-2 py-[2px] rounded">
                    <div className="bulb">
                      <FaRegLightbulb className="text-[14px]" color="white" />
                    </div>
                    <p className="text-[11px] text-white font-semibold -tracking-tighter">
                      Tip
                    </p>
                  </div>
                </div>

                <div className="icon cursor-pointer">
                  <CiFaceSmile className="text-[26px] text-gray-400" />
                </div>
              </div>
            </div>

            {/* .............TRY........... */}

            {/* ............ SIDEBAR COLORS ............ */}

            <div
              className={`SIDEBAR-COLORS bg-white  absolute py-3 w-[95%] sm:w-[78%] md:w-[64%] lg:w-[50%]  xl:w-full rounded-lg shadow-lg h-[450px] transition-all duration-300 delay-200  ${
                slide
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }  ${
                startColor == "#ffffff" ? "-translate-y-75" : "-translate-y-100"
              }              `}
            >
              <div className="MAIN_CARD">
                {/* .......TOP CHILD....... */}
                <div className="TOP-CHILD2 px-4 flex sticky w-full">
                  <div
                    className="PARENT-cross w-full"
                    onClick={() => {
                      setSlide(false);
                    }}
                  >
                    <div className="CROSS cursor-pointer bg-gray-200 flex items-center justify-center h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] rounded-full hover:bg-gray-300 transition-all">
                      <IoMdArrowBack className="text-[21px] sm:text-[23px] text-gray-600 font-bold" />
                    </div>
                  </div>

                  <p className="TEXT -translate-x-14 sm:-translate-x-29 text-center font-bold text-[19px] sm:text-[21px] w-full">
                    Choose Background
                  </p>
                </div>

                <hr className="text-gray-300 mt-3" />

                {/* ..........MAP...... */}

                <div className="MAP px-5 h-[385px] overflow-y-scroll scrollbar">
                  {decorate_data?.map((item, index) => {
                    return (
                      <div key={index} className="MAIN">
                        <p className="text-[19px] sm:text-[17px] font-semibold pt-5 pb-2">
                          {item?.title}
                        </p>

                        <div className="GRID pb-3 w-full">
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2 w-full">
                            {item?.list?.map((item2, index2) => {
                              return (
                                <div
                                  key={index2}
                                  onClick={() => {
                                    setSlide(false);

                                    index == 2
                                      ? setDecorate(false)
                                      : setDecorate(true);

                                    index == 2
                                      ? setSelectedColor({
                                          startColor: item2,
                                          endColor: item2,
                                          image: "",
                                        })
                                      : setSelectedColor({
                                          startColor: "",
                                          endColor: "",
                                          image: item2?.image,
                                        });
                                  }}
                                  style={{
                                    background:
                                      index == 2
                                        ? `${item2}`
                                        : `url(${item2.image})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                  }}
                                  className="cursor-pointer w-full h-[80px] rounded-2xl bg-red-500 mt-[5px]"
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ........TRY........... */}

            <input
              onChange={changeImage}
              type="file"
              name="file"
              id="File"
              className="hidden"
            />

            {/* ........MEDIA................ */}

            {/* ....*/}

            {media && (
              <div className="px-2 sm:px-4">
                <label htmlFor="File">
                  <div
                    className={` h-[240px] rounded-xl  ${
                      selectImage
                        ? "p-0 outline-0"
                        : "p-2 outline-1 outline-gray-300"
                    }`}
                  >
                    <div
                      className={`relative h-full w-full max-w-xl  rounded-md border-0 p-1 flex flex-col  cursor-pointer items-center justify-center text-center ${
                        selectImage ? "" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {/* Close button (non-functional) */}

                      {url && (
                        <button
                          onClick={() => {
                            setSelectImage(false);
                            setUrl(null);
                          }}
                          className="absolute top-3 right-3 text-gray-600 hover:text-white  bg-white border border-gray-300 rounded-full p-2  hover:bg-gray-800 cursor-pointer transition-all duration-150"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      )}

                      {/* Empty state */}

                      {selectImage ? (
                        <div className="IMAGE overflow-y-scroll scrollbar3">
                          <img className="w-[510px]  rounded-md" src={url} />
                        </div>
                      ) : (
                        <>
                          <div className="bg-gray-200 p-4 rounded-full mb-4">
                            <FaImages className="text-gray-700 text-2xl" />
                          </div>
                          <p className="font-medium text-black text-lg">
                            Add photos/videos
                          </p>
                          <p className="text-gray-500 text-sm">
                            or drag and drop
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </label>
              </div>
            )}

            {/* .
            .

            . */}

            {/* ........TRY......... */}

            <div className="ADD_POST  flex justify-between items-center border boder-1 border-gray-300 w-[92%] py-3 sm:py-4 px-2 sm:px-4 mx-auto mt-5 rounded-lg shadow">
              <div className="text-[14px] font-semibold">Add to your post</div>
              <div className="icon flex gap-2 sm:gap-4 items-center">
                {/* ............ */}

                <div
                  onClick={() => setMedia(true)}
                  className="gallery cursor-pointer"
                >
                  <img
                    className="Gallery"
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                    alt=""
                  />
                </div>

                <div className="User  hidden sm:block">
                  <img
                    className="cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/b37mHA1PjfK.png?_nc_eui2=AeEqoau4P7ymL0lhacnm04-Cc9ExYuivsM1z0TFi6K-wzaCouKPbzRuPCRLC0qEMMUdm18lGvPqCTbAelV7KwsS5"
                    alt=""
                  />
                </div>

                <div className="Emogi">
                  <img
                    className="cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeFhHzYJLSh8b4ns9cYSqDlRfPQ6N5_OUfV89Do3n85R9X2jcsCGAZzlMhSSlAnKufNLmh7S_vkYB6BJxFVqOAob"
                    alt=""
                  />
                </div>

                <div className="Location hidden sm:block">
                  <img
                    className="cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/8zlaieBcZ72.png?_nc_eui2=AeHSMd2x3jI6yKqEy3VTyIEyu7QmHo__KE27tCYej_8oTVcwQAzrt0GUmIgtqzXH5kUEbtS-_w5FKhZ7mjoMXDFS"
                    alt=""
                  />
                </div>

                <div className="Whatsapp">
                  <img
                    className="cursor-pointer"
                    src="https://static.xx.fbcdn.net/rsrc.php/v4/y3/r/NeSKjwaLVhE.png?_nc_eui2=AeGYdOy1KLRhiKKlihnqgwzAIokjsgz5C4ciiSOyDPkLh9fBa0KFXl8Lt0pI8P7FRvhT8lOaJ-GS6mB3RcJSxkYF"
                    alt=""
                  />
                </div>

                <div className="dot text-gray-500 text-[21px]">
                  <HiOutlineDotsHorizontal cursor="pointer" />
                </div>
              </div>
            </div>

            <div className="BUTTON flex justify-center">
              <button
                disabled={disable || cloudLoading}
                onClick={handleNext}
                className={`text-white flex items-center justify-center w-[92%] py-2 mx-auto mt-4 rounded-lg shadow  cursor-pointer mb-1 ${
                  disable || postLoading ? "bg-gray-400" : "bg-[#0F5EEA]"
                }`}
              >
                {postLoading ? <HashLoader size={24} color="white" /> : " Next"}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
