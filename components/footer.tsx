"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  return (
    <motion.section
      className="text-center leading-8 sm:mb-40 max-w-[50rem] scroll:mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <SectionHeading>Contact</SectionHeading>
      <motion.p
        className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello there! I&#39;m David</span>, a
        <span className="font-bold"> frontend developer </span>
        and an avid <span className="font-bold"> UI designer. </span> I really
        enjoy building, user friendly and awesome interfaces, diving into
        different
        <span className="font-bold"> frameworks and technologies.</span>
      </motion.p>
    </motion.section>
  );
}
