import { motion } from "framer-motion";
import { IoArrowRedo } from "react-icons/io5";

const Study_B = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" w-full"
    >
      <h3 className="flex gap-1  font-semibold text-xl ">
        「テーマ」
        <span className=" text-textGreen tracking-wide mb-3">
          BaTiO3-BaTi2O5 コンポジット薄膜の作成
        </span>
      </h3>
      <div className="flex justify-end">
        <p className=" text-sm mb-3 font-medium text-textDark">
          法政大学　生命科学部　環境応用科学科　明石研究室
        </p>
      </div>
      <ul>
        <li className=" text-base flex gap-2 text-textDark">
          <span className=" text-textGreen mt-1">
            <IoArrowRedo />
          </span>
          AI技術の進展により、制御機器が高温環境下で使用されるようになった。
          この中で、熱に脆弱な強誘電体コンデンサの課題に取り組んでいる。
          本研究では、 常温用誘電体BaTiO3 と 高温用誘電体BaTi2O5
          を組み合わせた強誘電体薄膜を開発し、結晶構造にひずみを加えることで誘電率のピークを高温領域にシフトさせた。
          これは強誘電体コンデンサの使用可能温度範囲を広げる手がかりである。
        </li>
      </ul>
    </motion.div>
  );
};

export default Study_B;
