import React from "react";
import { motion } from "framer-motion";
import { IoArrowRedo } from "react-icons/io5";
import Image from "next/image";
import { studyOverview } from "@/public";

const StudyOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" w-full"
    >
      <h3 className=" text-textGreen flex gap-1  font-semibold md:text-xl xs:text-xs ">
        「研究概要」
        <span className="  text-white tracking-wide mb-3">
          外反母趾コンピュータ診断支援システム
        </span>
      </h3>
      <div className="flex justify-end">
        <p className="xs:text-xs md:text-lg mb-3 font-medium text-textDark">
          法政大学　情報科学研究科　情報科学科専攻　花泉研究室
        </p>
      </div>
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat flex flex-col md:flex justify-center items-center gap-6 ">
        <Image src={studyOverview} alt="Louvre" width={300} />
        <button className=" w-32 h-12  text-lg border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ">
          <a href="/img/projects/study_overview.pdf" target="_blank">
            研究概要
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default StudyOverview;
