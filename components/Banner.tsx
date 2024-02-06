import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto  py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:py-4 "
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" text-lg tracking-wide text-textGreen"
      >
        法政大学大学院　情報科学研究科
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className=" text-4xl lgl:text-6xl font-semibold flex flex-col"
      >
        窪田　歩夢
        <span className=" text-textDark mt-2 lgl:mt-4">portfolio web site</span>
      </motion.h1>
    </section>
  );
};

export default Banner;
