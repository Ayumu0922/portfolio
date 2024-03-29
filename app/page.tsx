"use client";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Study from "@/components/Study";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayumu Kubota</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />

        <link rel="icon" href="img/projects/logo2.webp" />
      </Head>
      <main className=" w-full h-screen  bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className=" w-full h-[88vh]  items-center gap-20 justify-between"
        >
          <div className=" hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          <div className=" h-[88vh] mx-auto p-4  w-full">
            <Banner />
            <About />
            <Study />
            <Project />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0 "
          >
            <RightSide />
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
