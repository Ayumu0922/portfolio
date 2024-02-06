"use client";

import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const staggeredAnimation = (delay: number) => ({
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.0, delay },
  });

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[8vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          <Image src={logo} alt="logo" className="w-14" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="flex text-[13px]  gap-6">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimation(0.3)}>ホーム</motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimation(0.4)}>
                <span className="  text-textGreen">01.</span> 自己紹介
              </motion.li>
            </Link>
            <Link
              href="#study"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimation(0.5)}>
                <span className="  text-textGreen">02.</span> 研究内容
              </motion.li>
            </Link>
            <Link
              href="#skillset"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimation(0.6)}>
                <span className="  text-textGreen">03.</span> スキルセット
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimation(0.7)}>
                <span className="  text-textGreen">04.</span>連絡先
              </motion.li>
            </Link>
          </ul>
          <a href="履歴書のURL" target="_blank">
            <motion.button
              {...staggeredAnimation(0.8)}
              className="ml-[20px]  px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300"
            >
              履歴書
            </motion.button>
          </a>
        </div>

        {/* 縮小版のアイコン表示 */}
        <div className="w-6 h-5 flex-col flex justify-between items-center md:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform  group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex  translate-x-3 transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex  translate-x-1 transform group-hover:translate-x-4 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
