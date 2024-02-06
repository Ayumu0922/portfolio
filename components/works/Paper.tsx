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
      <h3 className="flex gap-1  font-semibold text-xl ">
        「Paper」
        <span className=" text-textGreen tracking-wide mb-3 whitespace-normal">
          A Computer-Aided-Diagnosis System
          <br /> for Hallux Valgus
        </span>
      </h3>
      <div className="flex justify-end">
        <p className=" text-sm mb-3 font-medium text-textDark">
          Hosei University, Graduate School of Information Science, Ayumu Kubota
        </p>
      </div>
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat flex justify-center items-center gap-6">
        <Image src={studyPaper} alt="Louvre" width={300} />
        <button className=" w-24 h-12  text-lg border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ">
          Paper
        </button>
      </div>
    </motion.div>
  );
};

export default Paper;
