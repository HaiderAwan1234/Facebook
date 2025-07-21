import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdGppGood, MdPersonAddAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdShareAlt } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import ReactECharts from "echarts-for-react";
import { FcAbout } from "react-icons/fc";
import Navbar from "../../components/home/navbar/Navbar";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const buttonTap = {
  scale: 0.95,
};

const temperatureData = {
  Karachi: {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    temperatures: [28, 30, 32, 31, 29, 27, 26],
  },
  Lahore: {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    temperatures: [24, 26, 25, 27, 28, 26, 25],
  },
  Islamabad: {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    temperatures: [22, 23, 21, 22, 24, 23, 22],
  },
};

const ClimateCenter = () => {
  const [selectedCity, setSelectedCity] = useState("Karachi");

  const getChartOption = () => {
    const data = temperatureData[selectedCity];
    return {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: data.days,
      },
      yAxis: {
        type: "value",
        name: "°C",
      },
      series: [
        {
          data: data.temperatures,
          type: "line",
          smooth: true,
          name: "Temperature",
          lineStyle: {
            color: "#0F9E99",
            width: 3,
          },
          itemStyle: {
            color: "#0F9E99",
          },
        },
      ],
    };
  };

  return (
    <div className="w-full min-h-screen bg-[#F2F4F7] overflow-x-hidden">
      <div className="div">
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.div
        className="w-[90%] max-w-7xl mx-auto h-[300px] md:h-[400px] bg-gradient-to-r from-[#E4F5FE] via-[#E6EBE0] to-[#FEF3DF] rounded-b-xl cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full flex flex-col justify-end p-4 md:p-6">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title & Icon */}
            <motion.div
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-black">
                Climate Science Center
              </h3>
              <motion.img
                width={50}
                src="https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/ktw4C8enVa3.png"
                alt="climate"
                className="cursor-pointer"
                animate={{
                  rotate: [0, 5, -5, 5, 0],
                  y: [0, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <motion.button
                type="submit"
                className="h-10 px-4 bg-blue-500 text-white rounded-md font-semibold flex items-center gap-2 cursor-pointer"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <MdPersonAddAlt />
                Follow
              </motion.button>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-black">
                  <IoMdShareAlt size={22} />
                </Link>
              </motion.div>

              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-black">
                  <FcAbout size={22} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] max-w-7xl mx-auto py-10 text-black">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-xl shadow-md col-span-1 md:col-span-2 p-4 flex flex-col gap-4 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <span className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
            <IoIosInformationCircleOutline size={22} />
          </span>

          <p className="text-base md:text-lg">
            <strong>
              Add a climate frame to your profile picture for Earth Day.
            </strong>
            <br />
            We can all play a part in fighting climate change. Add a frame to
            inspire your friends to join the conversation.
          </p>

          <div className="flex flex-col items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Climate Frame"
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-[80%] md:w-[70%] cursor-pointer p-2 rounded-md font-semibold bg-gray-200"
            >
              Try it
            </motion.button>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 relative"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">
              In photos: climate solutions
            </strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

          <p className="text-base md:text-sm">
            See how people are tackling climate change across fashion, farming
            and more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            ].map((img, i) => (
              <img
                key={i}
                src={`${img}`}
                alt={`Climate ${i}`}
                className="w-full h-28 md:h-32 object-cover rounded cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl shadow-md bg-white col-span-2 p-3 h-[300px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">
              IPCC updates on adaptation
            </strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v4/yY/r/AgIUP2_rv0r.png"
              alt="Info icon"
              className="cursor-pointer"
            />
            <p className="max-w-lg">
              There are many low-cost and effective options available now to
              adapt to an already changing climate.
            </p>
          </div>

          <div className="flex items-center gap-2 my-2">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v4/yL/r/n5bJ1J5bmCt.png"
              alt="Info icon"
              className="cursor-pointer"
            />
            <p className="max-w-lg">
              In order to take advantage of the best adaptation options
              available, businesses, people, and governments will need to
              prioritize spending in this area.
            </p>
          </div>

          <div className="flex items-center gap-2 my-2">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/gWK1Mcy7wJ3.png"
              alt="Info icon"
              className="cursor-pointer"
            />
            <p className="max-w-lg">
              Options for adaptation can only help to a certain extent, and will
              work best when used together with the immediate roll out of global
              emission-reducing policies and systems.
            </p>
          </div>
        </motion.div>

        {/* Card 4 (span 1) */}
        <motion.div
          className="rounded-xl shadow-md bg-white col-span-1 p-3 h-[320px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">
              Recognized organizations
            </strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded cursor-pointer">
              <div className="flex gap-2 justify-center items-center rounded-full">
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="IPPC"
                />
                <div className="flex flex-col items-start">
                  <span className="flex items-center gap-1 text-blue-500">
                    IPPC <MdGppGood />
                  </span>
                  <p className="text-sm">Profit organization</p>
                </div>
              </div>

              <button className="bg-blue-200 cursor-pointer text-blue-500 p-2 px-6 rounded-md font-semibold">
                <span className="flex items-center gap-1">
                  <MdPersonAddAlt />
                  Follow
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded cursor-pointer">
              <div className="flex gap-2 justify-center items-center rounded-full">
                <img
                  className="rounded-full w-[50px] h-[50px]"
                  src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Meteorological"
                />
                <div className="flex flex-col items-start">
                  <span className="flex items-center text-sm text-blue-500">
                    Meteorological <MdGppGood />
                  </span>
                  <p className="text-sm">Inter Organization</p>
                </div>
              </div>

              <button className="bg-blue-200 cursor-pointer text-blue-500 p-2 px-6 rounded-md font-semibold">
                <span className="flex items-center gap-1">
                  <MdPersonAddAlt />
                  Follow
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between hover:bg-blue-100 p-2 transition-all duration-300 rounded cursor-pointer">
              <div className="flex gap-2 justify-center items-center rounded-full">
                <img
                  className="rounded-full w-[50px] h-[50px]"
                  src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="UN Environment"
                />
                <div className="flex flex-col items-start">
                  <span className="flex items-center gap-1 text-blue-500">
                    UN Environment <MdGppGood />
                  </span>
                  <p className="text-sm">UN Organization</p>
                </div>
              </div>

              <button className="bg-blue-200 cursor-pointer text-blue-500 p-2 px-6 rounded-md font-semibold">
                <span className="flex items-center gap-1">
                  <MdPersonAddAlt />
                  Follow
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* New Card 5 (span 3) */}

        <motion.div className="rounded-xl shadow-md bg-white col-span-3 p-3 ">
          <div className="mt-10">
            <label
              htmlFor="city-select"
              className="font-semibold text-gray-700"
            >
              Select City:
            </label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="ml-2 p-2 rounded border border-gray-300"
            >
              {Object.keys(temperatureData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Temperature Chart */}
          <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Weekly Temperature Overview – {selectedCity}
            </h2>
            <ReactECharts
              option={getChartOption()}
              style={{ height: "300px", width: "100%" }}
            />
          </div>
        </motion.div>

        {/* New Card 6 (span 3) */}
        <motion.div
          className="rounded-xl shadow-md bg-white col-span-3 p-3 h-[380px] overflow-y-auto"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex justify-between items-start">
            <strong className="text-lg md:text-xl">
              Facts about climate change
            </strong>
            <span className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all duration-200">
              <IoIosInformationCircleOutline size={22} />
            </span>
          </div>

          <p className="mt-2 mb-4">
            These facts from climate researchers correct common misconceptions
            about global warming and its impact.
          </p>

          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer">
            <img
              src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-Scientists-Small_light-4x.png"
              className="w-12 h-12 object-contain flex-shrink-0"
              alt="Scientists fact"
            />
            <p className="text-sm">
              There are many low-cost and effective options available now to
              adapt to an already changing climate.
            </p>
          </div>

          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer my-2">
            <img
              src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-CleanEnergy-Small_light-4x.png"
              className="w-12 h-12 object-contain flex-shrink-0"
              alt="Clean energy fact"
            />
            <p className="text-sm">
              In order to take advantage of the best adaptation options
              available, businesses, people, and governments will need to
              prioritize spending in this area.
            </p>
          </div>

          <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer my-2">
            <img
              src="https://www.facebook.com/images/assets_DO_NOT_HARDCODE/vs_climate_science_info_center_csic_mythbusters_module_t79943022/CSIC-Myth-WildFires-Small_light-4x.png"
              className="w-12 h-12 object-contain flex-shrink-0"
              alt="Policy fact"
            />
            <p className="text-sm">
              Options for adaptation can only help to a certain extent, and will
              work best when used together with the immediate roll out of global
              emission-reducing policies and systems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClimateCenter;
