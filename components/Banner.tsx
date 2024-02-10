import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto  py-10 mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10  items-center "
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className=" text-lg tracking-wide text-textGreen"
      >
        法政大学大学院 情報科学研究科
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className=" text-3xl lgl:text-4xl font-semibold flex flex-col items-center"
      >
        窪田 歩夢
        <span className="text-textDark mt-4 lgl:mt-8 text-4xl animate-glow-slow font-bold  xs:text-2xl">
          This is My Portfolio Website.
        </span>
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        className=" xs:text-sm md:text-xl md:max-w-[650px] text-textDark font-medium"
      >
        ・Next.js 13 ・Tailwind CSS ・Type Script
      </motion.h2>
      <motion.button className=" w-32 h-12  text-lg border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ">
        履歴書
      </motion.button>
    </section>
  );
};

export default Banner;
