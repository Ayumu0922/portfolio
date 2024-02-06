import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto  py-10 mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10  "
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
        className=" text-4xl lgl:text-6xl font-semibold flex flex-col"
      >
        窪田 歩夢
        <span className=" text-textDark mt-2 lgl:mt-4 text-5xl ">
          This is My Portfolio Website with Next.js.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        className=" text-base md:max-w-[650px] text-textDark font-medium"
      >
        幼少期から様々なことに取り組んできました。その中でも現在の私を作り上げているのは、高校時代に和太鼓部の部長を務め、全国大会へ出場した経験です。
        さらに大学院では、大学時代に学んでいた生命科学の分野から情報科学へと分野を変更し、新たな挑戦を続けています。
      </motion.p>
      <motion.button className=" w-40 h-12  text-lg border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 ">
        履歴書
      </motion.button>
    </section>
  );
};

export default Banner;
