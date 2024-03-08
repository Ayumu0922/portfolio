import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillCaretRight } from "react-icons/ai";
import {
  animationSite,
  transparentSite,
  imageStorageApp,
  dicom_viewer,
} from "@/public";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id="project" className=" max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="作成したプロジェクト" titleNo="03" />
      <div className=" w-full flex flex-col items-center justify-between mt-10 ">
        {/* project 1 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10 mb-40">
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
              <h3 className=" text-2xl font-bold">Login Form</h3>
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

      {/* project two*/}
      <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10 mb-40">
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          {/* 動画を含むリンク */}

          <div
            className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat md:w-[600px]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              src={imageStorageApp}
              alt=""
              width={600}
              className=" cursor-pointer "
            />
            <a
              href="https://photo-storage-3i2pf7gwo-ayumu0922s-projects.vercel.app/"
              target="_blank"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>

          <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left  z-10">
            <p className=" text-textGreen text-sm tracking-wide">
              プロジェクト2
            </p>
            <h3 className=" text-2xl font-bold">Image Storage App </h3>
            <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
              写真をアップロードして、保存できるアプリケーションを開発しました。アプリケーションに登録いただいた方は画像をアップロードすることが可能になります。フレームワークには、
              <span className=" text-textGreen">Next.js 14</span>
              バックエンドには <span className=" text-textGreen">Supabase</span>
              を使用しています。レイアウトは
              <span className=" text-textGreen">Tailwind CSS</span>
              を使用しています。画像をクリックしていただければサイトのURLに遷移します。{" "}
              <span className=" text-textGreen"></span>
            </p>
            <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between  text-textGreen">
              <li>Next.js 14</li>
              <li>TailWind CSS</li>
              <li>Supabase</li>
            </ul>
            <div className=" text-2xl flex gap-4">
              <a
                className=" hover:text-textGreen duration-300"
                href="https://github.com/Ayumu0922/photo-storage-app"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className=" hover:text-textGreen duration-300"
                href="https://photo-storage-3i2pf7gwo-ayumu0922s-projects.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* project 3 */}
        <div className=" w-full flex flex-col items-center justify-center gap-28 mt-10 mb-40">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div
              className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat md:w-[600px]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src={dicom_viewer}
                alt=""
                width={600}
                className=" cursor-pointer "
              />
              <a
                href="https://study-ui-henna.vercel.app/dashboard/patients"
                target="_blank"
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>

            <div className=" w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-left  z-10">
              <p className=" text-textGreen text-sm tracking-wide">
                プロジェクト3
              </p>
              <h3 className=" text-2xl font-bold">医療診断支援システム</h3>
              <p className=" bg-[#112240] text-sm md:text-base p-2 xl:-mr-12 md:p-6 rounded-xl ">
                現在研究内容として開発した外反母趾自動検出アルゴリズムを実際にシステム化して現場に導入し利用していただくことを目的として作成しています。
                医師の方が診断に介在できるようなインタラクティブな機能と患者さんの情報を一元管理できるような機能を搭載する予定です。
                フレームワークには、
                <span className=" text-textGreen">Next.js 14</span>
                レイアウトには、
                <span className=" text-textGreen">Tailwind CSS</span>,{" "}
                <span className=" text-textGreen">chadcn/ui</span>
                を使用しています。画像をクリックしていただければサイトのURLに遷移します。{" "}
                <span className=" text-textGreen"></span>
              </p>
              <ul className=" text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between  text-textGreen">
                <li>Next.js 14</li>
                <li>TailWind CSS</li>
                <li>chadcn/ui</li>
              </ul>
              <div className=" text-2xl flex gap-4">
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://github.com/Ayumu0922/study-ui"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className=" hover:text-textGreen duration-300"
                  href="https://study-ui-henna.vercel.app/dashboard/patients"
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
