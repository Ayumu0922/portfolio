import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillCaretRight } from "react-icons/ai";
import { amazonImg, profileImage, studyOverview } from "@/public";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id="project" className=" max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="作成したプロジェクト" titleNo="03" />
      <div className=" w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project 1 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className=" w-full xl:w-1/2 h-auto relative group"
              href="サイトのリンク張る"
              target="_blank"
            >
              <div>
                <Image
                  className=" w-full h-full object-contain"
                  src={studyOverview}
                  width={800}
                  alt="amazonImg"
                />
              </div>
            </a>
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className=" text-textGreen text-sm tracking-wide">
                feature project
              </p>
              <h3 className=" text-2xl font-bold">My Project</h3>
              <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-ml-12 md:p-6 rounded-xl ">
                このプロジェクトの説明
                <span className=" text-textGreen">
                  技fsddddddddddddddddd sdfsddddddddddddddddd sdfffasfdddddddddd
                  sdffffffffffffffffffafsdddddddddddddddddddddddddddd
                  sdffffffffffsafddddddddddffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </span>
              </p>
              <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
              </ul>
              <div className=" text-2xl flex gap-4">
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* project two */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className=" w-full xl:w-1/2 h-auto relative group"
              href="サイトのリンク張る"
              target="_blank"
            >
              <div>
                <Image
                  className=" w-full h-full object-contain"
                  src={studyOverview}
                  width={800}
                  alt="amazonImg"
                />
              </div>
            </a>
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className=" text-textGreen text-sm tracking-wide">
                feature project
              </p>
              <h3 className=" text-2xl font-bold">My Project</h3>
              <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
                このプロジェクトの説明
                <span className=" text-textGreen">
                  技fsddddddddddddddddd sdfsddddddddddddddddd sdfff
                  sdffffffffffffffffff
                  sdffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  sdfffffffffffffffffffffffffffffffffffffffffffffdsa
                  sdffffffffffffffffffffffffffffffffffffffffffffff術
                </span>
              </p>
              <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
                <li>next js </li>
              </ul>
              <div className=" text-2xl flex gap-4">
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
