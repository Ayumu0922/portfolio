import { motion } from "framer-motion";

const Middle = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto  py-5 mdl:py-10 flex flex-col  gap-6 lgl:gap-11 mdl:px-5 xl:px-12 "
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col  items-center justify-center"
      >
        <h3 className="text-2xl lgl:text-4xl font-semibold  mb-2 xl:text-6xl">
          法政大学大学院 情報科学研究科
        </h3>
        <h2 className="text-2xl lgl:text-4xl font-semibold mt-2 xl:text-6xl  xl:mt-4">
          窪田 歩夢
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className=" space-y-6 xl:space-y-11  "
      >
        {/* 各項目の詳細を記述 */}
        <p>
          <strong className="text-lg tracking-wide  lg:text-2xl xl:text-4xl">
            目指している業界：医療業界
          </strong>
        </p>
        <p>
          <strong className="text-lg tracking-wide lg:text-2xl xl:text-4xl">
            目指している職種：システムエンジニア、研究開発
          </strong>
        </p>
        <p>
          <strong className="text-lg tracking-wide lg:text-2xl xl:text-4xl">
            長所：挑戦を恐れず取り組む強い主体性がある
          </strong>
        </p>
        <p>
          <strong className="text-lg tracking-wide lg:text-2xl xl:text-4xl">
            短所：集中が高じて視野が狭くなる
          </strong>
        </p>
      </motion.div>
      <div className="mt-2 flex   justify-end lg:text-2xl">
        <a
          href="履歴書のURL"
          target="_blank"
          className="flex md:text-right group overflow"
        >
          <div className="mt-2 flex justify-end lg:text-2xl z-10">
            <a href="履歴書のURL" target="_blank" className="text-underline">
              詳しく見る
            </a>
          </div>
        </a>
      </div>
      <div className="flex flex-col items-center mt-8">
        <a
          href="https://github.com/Ayumu0922"
          target="_blank"
          className="w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center"
        >
          ポートフォリオを確認
        </a>
      </div>
    </section>
  );
};

export default Middle;
