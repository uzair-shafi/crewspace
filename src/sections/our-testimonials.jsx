"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Coffee, WrenchIcon, Zap } from "lucide-react";

const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/Amazon_icon.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/Apple_logo_black.svg_seeetv.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800359/WISE.L-b3d3de3c_rexehe.png",
];

const lineWidth = 80;
const lineHeight = 2;

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-[#000] border border-slate-500  rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Zap size={25} className="text-white" />
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#535353",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-75"
            initial={{ x: "-40px" }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="relative bg-black border-2 border-indigo-500 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#1A1450]">
          <Coffee size={40} />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div
          className="relative"
          style={{
            width: `${lineWidth}px`,
            height: `${lineHeight}px`,
            backgroundColor: "#535353",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-75"
            initial={{ x: "40px" }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        </div>
        <div className="bg-black border border-slate-500 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <Book size={40} />
        </div>
      </div>
    </div>
  );
};

const CardWithEffect = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-none flex-1 rounded-xl border border-slate-700 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#1a145093",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};

const AWSIcon = () => {
  return (
    <div className="flex flex-col justify-start h-full items-left relative md:pt-0 pt-2 pl-2">
      <div>
        <img
          src="/assets/kitchen.jpg"
          width={350}
          height={350}
          alt="kitchen"
          className="shadow-2xl rounded-[20px] z-10000"
        />
      </div>

      <div className="flex flex-col">
        <div className="text-left p-1 mt-6">
          <h1 className="text-white md:text-xl  text-lg min-w-2xl font-semibold">
            Aesthetic workspaces :{" "}
            <span className="md:text-md text-slate-400 font-medium text-sm -mt-[10px]">
              you’ll love working from
            </span>
          </h1>
        </div>
        <div className="text-left p-1 mt-2">
          <h1 className="text-white md:text-xl   text-lg min-w-2xl font-semibold">
            Cafes & restaurants :{" "}
            <span className="md:text-md text-slate-400 font-medium text-sm -mt-[10px]">
              at walking distance
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  return (
    <div className="bg-none flex justify-center items-center md:p-5 md:mb-0 mb-[600px] pl-[10px] rounded-lg  ">
      <div className="flex flex-col md:flex-row gap-4 w-[550px] md:w-full min-h-[800px] md:min-h-[800px] md:h-[800px]">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4 px-6 mt-6">
              <div className="flex justify-between items-center mb-6 pb-2">
                <h2 className="text-black text-xl"></h2>
                <div className="flex items-center">
                  <div className="h-1 bg-black w-8 rounded-lg"></div>
                  <span className="ml-2 flex items-center gap-1 text-slate-400 font-semibold text-sm">
                    <WrenchIcon className="w-4 h-4" />
                    24/7 cleaning
                  </span>
                </div>
              </div>
              <div className="relative w-full mt-12"></div>
            </div>
            <div className="flex flex-row justify-start pl-6">
              <img
                src="/public/assets/washroom.jpg"
                width={380}
                height={350}
                alt="washroom"
                className="shadow-2xl rounded-[20px] -mt-[60px] z-100"
              ></img>
            </div>
            <div className="text-left p-6 ">
              <h1 className="text-white md:text-2xl text-xl font-semibold mb-2">
                Neat & clean restrooms
              </h1>
              <p className=" md:text-md text-slate-400 text-sm">
                because this actually matters
              </p>
            </div>
          </div>
        </CardWithEffect>
        <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
          <CardWithEffect>
            <div className="flex flex-col justify-center h-full">
              <LogoBeam />
              <div className="text-left p-2 flex ">
                <h1 className="text-white md:text-xl text-lg font-semibold ">
                  High-speed internet :{" "}
                  <span className="md:text-md text-slate-400 font-medium text-sm -mt-[10px]">
                    yes, torrents and heavy downloads work
                  </span>
                </h1>
              </div>
              <div className="text-left p-2 flex ">
                <h1 className="text-white md:text-xl text-lg font-semibold ">
                  Private kitchen :{" "}
                  <span className="md:text-md text-slate-400 font-medium text-sm -mt-[10px]">
                    with tea, coffee, kettle & microwave
                  </span>
                </h1>
              </div>
              <div className="text-left p-2 flex ">
                <h1 className="text-white md:text-xl text-lg font-semibold ">
                  Book library :{" "}
                  <span className="md:text-md text-slate-400 font-medium text-sm -mt-[10px]">
                    with multiple genres to reset your mind
                  </span>
                </h1>
              </div>
            </div>
          </CardWithEffect>
          <CardWithEffect>
            <AWSIcon />
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};

function Bentodemo() {
  return (
    <div className="h-screen flex items-center justify-center md:mt-[30px] mt-[400px]  ">
      <BentoBox1 />
    </div>
  );
}

export default Bentodemo;
