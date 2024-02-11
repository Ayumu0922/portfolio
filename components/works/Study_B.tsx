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
      <h3 className="text-textGreen flex gap-1  font-semibold md:text-xl xs:text-sm">
        「テーマ」
        <span className=" text-white tracking-wide mb-3">
          BaTiO3-BaTi2O5 コンポジット薄膜の作成
        </span>
      </h3>
      <div className="flex justify-end">
        <p className="xs:text-xs md:text-lgmb-3 font-medium text-textDark mb-3">
          法政大学　生命科学部　環境応用科学科　明石研究室
        </p>
      </div>
      <ul>
        <li className="xs:text-sm md:text-base flex gap-2 text-textDark">
          <span className=" text-textGreen mt-1">
            <IoArrowRedo />
          </span>
          AI技術の進展により、制御機器が高温環境下で使用されるようになってきました。
          この中で、熱に脆弱な強誘電体コンデンサの課題に取り組んでいます。
          本研究では、常温用誘電体のチタン酸バリウム（BaTiO3）と高温用誘電体の二チタン酸バリウム（BaTi2O5）を組み合わせた強誘電体薄膜を開発し、
          結晶構造にひずみを加えることで誘電率のピークを高温領域にシフトさせました。
          これは強誘電体コンデンサの使用可能温度範囲を広げるための重要な手がかりとなります。
        </li>
      </ul>
    </motion.div>
  );
};

export default Study_B;
