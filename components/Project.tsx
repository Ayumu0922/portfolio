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
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            {/* 動画を含むリンク */}
            <a
              className=" w-full xl:w-1/2 h-auto relative group"
              href="プロジェクトのURL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                className=" w-full h-full object-contain"
                src="./video/project1.mp4"
                width={800}
                controls
              />
            </a>
            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left  z-10">
              <p className=" text-textGreen text-sm tracking-wide">
                プロジェクト1
              </p>
              <h3 className=" text-2xl font-bold">認証アプリケーション</h3>
              <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
                認証機能を <span className=" text-textGreen">Supabase</span>
                をバックエンドに使用して実装しました。
                Googleもしくは、Email,Passwordを使用してログインすることができます。
                レイアウトには{" "}
                <span className=" text-textGreen">Tailwind CSS</span>
                を使用しており、フレームワークは
                <span className=" text-textGreen">Next.js14</span>
                を使用しています。
                <span className=" text-textGreen"></span>
              </p>
              <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between  text-textGreen">
                <li>Next.js 14</li>
                <li>Supabase</li>
                <li>TailWind CSS</li>
                <li>PostgresSQL</li>
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
      {/* project two */}
    </section>
  );
};

export default Project;
