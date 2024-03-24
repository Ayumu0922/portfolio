import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Study_B from "./works/Study_B";
import Study_D from "./works/Study_D";
import StudyOverview from "./works/StudyOverview";
import Paper from "./works/Paper";

const Study = () => {
  const [workStudyB, setWorkStudyB] = useState(false);
  const [workStudyD, setWorkStudyD] = useState(false);
  const [workStudyOverview, setWorkStudyOverview] = useState(true);
  const [workPaper, setWorkPaper] = useState(false);

  const handleStudyB = () => {
    setWorkStudyB(true);
    setWorkStudyD(false);
    setWorkStudyOverview(false);
    setWorkPaper(false);
  };

  const handleStudyD = () => {
    setWorkStudyB(false);
    setWorkStudyD(true);
    setWorkStudyOverview(false);
    setWorkPaper(false);
  };
  const handleStudyOverwiew = () => {
    setWorkStudyB(false);
    setWorkStudyD(false);
    setWorkStudyOverview(true);
    setWorkPaper(false);
  };
  const handlePaper = () => {
    setWorkStudyB(false);
    setWorkStudyD(false);
    setWorkStudyOverview(false);
    setWorkPaper(true);
  };

  return (
    <section
      id="study"
      className=" max-w-contentContainer mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="研究内容" titleNo="02" />
      <div className=" w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-40 flex flex-col">
          <li
            onClick={handleStudyB}
            className={`border-l-2  bg-transparent hover:bg-[#3c4f6e] py-3 text-sm md:text-xl cursor-pointer duration-300 px-6 font-medium whitespace-nowrap ${
              workStudyB
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            }`}
          >
            研究（学部）
          </li>

          <li
            onClick={handleStudyD}
            className={`border-l-2  bg-transparent hover:bg-[#3c4f6e] py-3 text-sm md:text-xl cursor-pointer duration-300 px-6 font-medium whitespace-nowrap ${
              workStudyD
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            }`}
          >
            研究（修士）
          </li>
          <li
            onClick={handleStudyOverwiew}
            className={`border-l-2  bg-transparent hover:bg-[#3c4f6e] py-3 text-sm md:text-xl cursor-pointer duration-300 px-6 font-medium whitespace-nowrap ${
              workStudyOverview
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            }`}
          >
            研究概要
          </li>
          <li
            onClick={handlePaper}
            className={`border-l-2  bg-transparent hover:bg-[#3c4f6e] py-3 text-sm md:text-xl cursor-pointer duration-300 px-6 font-medium whitespace-nowrap ${
              workPaper
                ? "border-l-textGreen text-textGreen"
                : "border-l-textDark text-textDark"
            }`}
          >
            論文
          </li>
        </ul>
        {workStudyB && <Study_B />}
        {workStudyD && <Study_D />}
        {workStudyOverview && <StudyOverview />}
        {workPaper && <Paper />}
      </div>
    </section>
  );
};

export default Study;
