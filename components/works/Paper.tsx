import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { studyPaper } from "@/public";

const Paper = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" w-full"
    >
      <h3 className="text-textGreen flex gap-1  font-semibold md:text-xl xs:text-sm">
        「Paper」
        <span className=" text-white  tracking-wide mb-3 whitespace-normal">
          A Computer-Aided-Diagnosis System
          <br /> for Hallux Valgus
        </span>
      </h3>
      <div className="flex justify-end">
        <p className=" xs:text-xs md:text-lgmb-3 font-medium text-textDark mb-3">
          Hosei University, Graduate School of Information Science, Ayumu Kubota
        </p>
      </div>
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat flex flex-col justify-center items-center gap-6">
        <Image src={studyPaper} alt="Louvre" width={200} />
        <button className=" w-24 h-12  text-lg border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ">
          <a href="/img/projects/IEVC2024.pdf" target="_blank">
            Paper
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Paper;
