"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className=" max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="自己紹介" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className=" w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4"></div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
