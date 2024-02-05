import React from "react";

const RightSide = () => {
  return (
    <div className=" w-full h-full flex flex-col items-center justify-end gap-6 text-textLight ">
      <a href="mailto:hosei.kubota.ayumu@gmail.com">
        <p className=" text-sm rotate-90 w-72 tracking-wide text-textGreen mb-20">
          hosei.kubota.ayumu@gmail.com
        </p>
      </a>
      <div className=" w-[2px] h-32 bg-textDark "></div>
    </div>
  );
};
export default RightSide;
