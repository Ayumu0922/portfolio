"use client";

import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });

    e.currentTarget.classList.add("active");
  };

  const staggeredAnimationy = (delay: number) => ({
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.0, delay },
  });
  const staggeredAnimationx = (delay: number) => ({
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.1, delay },
  });
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[8vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div>
          <Image src={logo} alt="logo" className="w-14" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-5 ">
          <ul className="flex text-[13px]  gap-4 lgl:gap-6 xl:gap-8">
            <Link
              onClick={handleScroll}
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimationy(0.3)}>ホーム</motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimationy(0.4)}>
                <span className="  text-textGreen">01.</span> 自己紹介
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#study"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimationy(0.5)}>
                <span className="  text-textGreen">02.</span> 研究内容
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#project"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li {...staggeredAnimationy(0.6)}>
<<<<<<< HEAD
                <span className="  text-textGreen">03.</span> 作品紹介
=======
                <span className="  text-textGreen">03.</span>作品紹介
>>>>>>> 0d0c285 (edit min width)
              </motion.li>
            </Link>
          </ul>
          <a href="履歴書のURL" target="_blank">
            <motion.button
              {...staggeredAnimationy(0.8)}
              className="ml-[20px]  px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300"
            >
              履歴書
            </motion.button>
          </a>
        </div>

        {/* 縮小版のアイコン表示 */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex-col flex justify-between items-center md:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform  group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex  translate-x-3 transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex  translate-x-1 transform group-hover:translate-x-4 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className=" absolute mdl:hidden top-0 right-0  w-full  h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll  bg-[#112240] flex flex-col items-center px-4 py-10 relative hidden-scrollbar"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className=" text-3xl text-textGreen  cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7 justify-center items-centert">
                <ul className="flex flex-col items-center gap-7">
                  <Link
                    onClick={handleScroll}
                    href="#home"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li {...staggeredAnimationx(0.3)}>ホーム</motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#about"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li {...staggeredAnimationx(0.4)}>
                      <span className="  text-textGreen">01.</span> 自己紹介
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#study"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li {...staggeredAnimationx(0.5)}>
                      <span className="  text-textGreen">02.</span> 研究内容
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#project"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li {...staggeredAnimationx(0.6)}>
<<<<<<< HEAD
                      <span className="  text-textGreen">03.</span> 作品紹介
=======
                      <span className="  text-textGreen">03.</span>作品紹介
>>>>>>> 0d0c285 (edit min width)
                    </motion.li>
                  </Link>
                </ul>

                <a href="履歴書のURL" target="_blank">
                  <motion.button
                    {...staggeredAnimationx(0.7)}
                    className="  px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300"
                  >
                    履歴書
                  </motion.button>
                </a>
              </div>

              <div className="flex mt-8 gap-4">
                <motion.a
                  {...staggeredAnimationx(0.8)}
                  href="https://github.com/Ayumu0922"
                  target="_blank"
                >
                  <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen  cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <AiOutlineGithub />
                  </span>
                </motion.a>

                <motion.a
                  {...staggeredAnimationx(0.8)}
                  href="https://www.instagram.com/ayumuu_0922/"
                  target="_blank"
                >
                  <span className=" w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen  cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <AiOutlineInstagram />
                  </span>
                </motion.a>
              </div>

              <motion.a
                {...staggeredAnimationx(0.9)}
                className=" mt-6"
                href="mailto:hosei.kubota.ayumu@gmail.com"
              >
                <p className=" text-textGreen cursor-pointer">
                  hosei.kubota.ayumu@gmail.com
                </p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
