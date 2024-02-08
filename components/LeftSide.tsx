import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";

const LeftSide = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Ayumu0922" target="_blank">
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen  cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineGithub />
          </span>
        </a>

        <a href="https://www.instagram.com/ayumuu_0922/" target="_blank">
          <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen  cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <AiOutlineInstagram />
          </span>
        </a>
      </div>
      <div className=" w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
