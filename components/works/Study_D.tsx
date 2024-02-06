import React from "react";
import { motion } from "framer-motion";
import { IoArrowRedo } from "react-icons/io5";

const Study_D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className=" w-full"
    >
      <h3 className="text-textGreen flex gap-1  font-semibold text-xl ">
        「テーマ」
        <span className=" text-white tracking-wide mb-3">
          外反母趾コンピュータ診断支援システム
        </span>
      </h3>
      <div className="flex justify-end">
        <p className=" text-sm mb-3 font-medium text-textDark">
          法政大学　情報科学研究科　情報科学科専攻　花泉研究室
        </p>
      </div>
      <ul>
        <li className=" text-base flex gap-2 text-textDark">
          <span className=" text-textGreen mt-1">
            <IoArrowRedo />
          </span>
          大学院では医師と協力し、X線画像から外反母趾を自動検出する医療診断支援システムの開発に取り組んでいます。
          このシステムは、疾病の早期発見と診断の効率化を目的とし、少子高齢化社会における医療費の増加を抑制することを目指しています。
          開発したアルゴリズムは 医師とほぼ同等の精度 を有しながらも
          診断時間を約90%削減 することに成功しました。
          現在は医療現場に導入すべくシステムの開発を視野に入れ、医師が診断に積極的に介在できるようなインタラクティブな機能の搭載を目標にしています。
        </li>
      </ul>
    </motion.div>
  );
};

export default Study_D;
