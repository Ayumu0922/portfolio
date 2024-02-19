import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillCaretRight } from "react-icons/ai";
import {
  animationSite,
  profileImage,
  studyOverview,
  transparentSite,
} from "@/public";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id="project" className=" max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="作成したプロジェクト" titleNo="03" />
      <div className=" w-full flex flex-col items-center justify-between gap-32 mt-10">
        {/* project 1 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            {/* 動画を含むリンク */}

            <div
              className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat md:w-[600px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={transparentSite}
                alt=""
                width={600}
                className=" cursor-pointer "
              />
              <a
                href="https://transparent-website-sigma.vercel.app/"
                target="_blank"
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>

            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left  z-10">
              <p className=" text-textGreen text-sm tracking-wide">
                プロジェクト1
              </p>
              <h3 className=" text-2xl font-bold">Login Form 1</h3>
              <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
                ポップアップアニメーションをつけたLogin Formを作成しました。
                LoginボタンをクリックしていただくとLogin
                Formがポップアップします。 フレームワークには、
                <span className=" text-textGreen">Next.js 14</span>
                レイアウトには、
                <span className=" text-textGreen">Tailwind CSS</span>
                を使用しています。画像をクリックしていただければサイトのURLに遷移します。{" "}
                <span className=" text-textGreen"></span>
              </p>
              <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between  text-textGreen">
                <li>Next.js 14</li>
                <li>TailWind CSS</li>
              </ul>
              <div className=" text-2xl flex gap-4">
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com/Ayumu0922/transparent-website"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://transparent-website-sigma.vercel.app/"
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
      <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          {/* 動画を含むリンク */}

          <div
            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat md:w-[600px]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              src={animationSite}
              alt=""
              width={600}
              className=" cursor-pointer "
            />
            <a href="https://ui-test-iota.vercel.app/" target="_blank">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>

          <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left  z-10">
            <p className=" text-textGreen text-sm tracking-wide">
              プロジェクト2
            </p>
            <h3 className=" text-2xl font-bold">Login Form 2</h3>
            <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
              背景にアニメーションを使用した透明感のあるLogin
              Formを作成しました。 フレームワークには、
              <span className=" text-textGreen">Next.js 14</span>
              レイアウトには、
              <span className=" text-textGreen">Tailwind CSS</span>
              を使用しています。画像をクリックしていただければサイトのURLに遷移します。{" "}
              <span className=" text-textGreen"></span>
            </p>
            <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between  text-textGreen">
              <li>Next.js 14</li>
              <li>TailWind CSS</li>
            </ul>
            <div className=" text-2xl flex gap-4">
              <a
                className=" hover:text-textGreen duration-300"
                href="https://github.com/Ayumu0922/ui-test"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className=" hover:text-textGreen duration-300"
                href="https://ui-test-iota.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
