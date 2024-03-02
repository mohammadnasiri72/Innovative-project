import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import { MdContactless } from "react-icons/md";
import { AiTwotoneContacts } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";

export default function ShowMenu() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className="bg-blue-300 h-screen p-10">
      <div className="relative">
        <FiPlus
          style={{ transform: isShowMenu ? "rotate(45deg)" : "rotate(0deg)" }}
          className="text-6xl text-white rounded-full p-2 bg-slate-700 cursor-pointer duration-300"
          onClick={showMenuHandler}
        />
        <div
          style={{
            transform: isShowMenu
              ? "translate(-300% , 0%)"
              : "translate(0% , 0%)",
            opacity: isShowMenu ? "1" : "0",
            visibility: isShowMenu ? "visible" : "hidden",
          }}
          className="w-16 h-16 rounded-full absolute top-0 right-0 duration-300 flex justify-center items-center cursor-pointer bg-slate-800 text-white"
        >
          <FaHome className="text-2xl" />
        </div>
        <div
          style={{
            transform: isShowMenu
              ? "translate(-260% , 150%)"
              : "translate(0% , 0%)",
            opacity: isShowMenu ? "1" : "0",
            visibility: isShowMenu ? "visible" : "hidden",
          }}
          className="w-16 h-16 rounded-full absolute top-0 right-0 duration-300 flex justify-center items-center cursor-pointer bg-slate-800 text-white"
        >
          <AiTwotoneContacts className="text-2xl" />
        </div>
        <div
          style={{
            transform: isShowMenu
              ? "translate(-150% , 260%)"
              : "translate(0% , 0%)",
            opacity: isShowMenu ? "1" : "0",
            visibility: isShowMenu ? "visible" : "hidden",
          }}
          className="w-16 h-16 rounded-full absolute top-0 right-0 duration-300 flex justify-center items-center cursor-pointer bg-slate-800 text-white"
        >
          <MdContactless className="text-2xl" />
        </div>
        <div
          style={{
            transform: isShowMenu
              ? "translate(0% , 300%)"
              : "translate(0% , 0%)",
            opacity: isShowMenu ? "1" : "0",
            visibility: isShowMenu ? "visible" : "hidden",
          }}
          className="w-16 h-16 rounded-full absolute top-0 right-0 duration-300 flex justify-center items-center cursor-pointer bg-slate-800 text-white"
        >
          <RiContactsFill  className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
