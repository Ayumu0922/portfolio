"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";
import { profileImage } from "@/public";

const About = () => {
  return (
    <section
      id="about"
      className=" max-w-contentContainer mx-auto py-10 lgl:py-24 flex flex-col gap-8"
    >
      <SectionTitle title="自己紹介" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-20 xl:gap-40">
        <div className=" w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            幼少期から様々なことに取り組んできました。その中でも現在の私を作り上げているのは、高校時代に和太鼓部に所属し
            全国大会 へ出場した経験です。 さらに大学院では、大学時代に学んでいた
            生命科学から情報科学 へと分野を変更し、新たな挑戦を続けています。
            <div className="flex justify-end">
              <a
                href="/img/projects/ES_portfolio.pdf"
                className="text-underline"
                target="_blank"
              >
                <span className=" text-textGreen inline-flex cursor-pointer h-5 overflow-hidden group ">
                  詳しく見る
                </span>
              </a>
            </div>
          </p>
          <ul className=" max-w-[650px]  text-base grid grid-cols-2 gap-4 mt-6  ">
            <li className="flex items-center gap-2">
              <span className=" text-textGreen">
                <AiFillCaretRight />
              </span>
              希望業界：医療業界、SIer業界
            </li>

            <li className="flex items-center gap-2">
              <span className=" text-textGreen">
                <AiFillCaretRight />
              </span>
              長所：挑戦を恐れず取り組む主体性
            </li>
            <li className="flex items-center gap-2">
              <span className=" text-textGreen">
                <AiFillCaretRight />
              </span>
              希望職種：SE、研究開発
            </li>
            <li className="flex items-center gap-2">
              <span className=" text-textGreen">
                <AiFillCaretRight />
              </span>
              短所：集中が講じて視野が狭くなる
            </li>
          </ul>
        </div>
        <div className=" w-full lgl:w-1/3 h-80 relative  group">
          <div className=" absolute w-75 h-80 -left-6 -top-6 rounded-lg">
            <div className=" w-full h-full relative z-30 flex pl-6 lgl:pl-0">
              <Image
                className=" rounded-lg h-full object-cover"
                src={profileImage}
                alt="profileImg"
              />
              <div className=" hidden lgl:inline-block absolute w-full h-80 bg-textGreen/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-[230px] h-80 border-2 border-b-textGreen border-r-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 "></div>
        </div>
      </div>
    </section>
  );
};

export default About;
