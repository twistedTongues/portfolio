import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ExperienceCard = (props: {}) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transtition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
        alt="company logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Github</h4>
        <p className="font-bold text-2xl mt-1">Github</p>
        <div className="flex space-x-2 my-2">
          <div className="relative h-10 w-10">
            <Image
              priority
              className="rounded-full object-contain"
              alt="photo"
              fill
              src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            />
          </div>
          <div className="relative h-10 w-10">
            <Image
              priority
              className="rounded-full object-contain"
              alt="photo"
              fill
              src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            />
          </div>
          <div className="relative h-10 w-10">
            <Image
              priority
              className="rounded-full object-contain"
              alt="photo"
              fill
              src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
            />
          </div>
        </div>
        <p className="uppercase py-5">Started Work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            SSummary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary Pointsummary Points
          </li>
          <li>
            Summary PSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary PointsSummary Pointsoints
          </li>
          <li>
            SSummary PointsSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary PointsSummary Pointsummary Points
          </li>
          <li>
            Summary PSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary PointsSummary Pointsoints
          </li>
          <li>
            Summary PSummary PointsSummary PointsSummary PointsSummary
            PointsSummary PointsSummary Pointsoints
          </li>
        </ul>
      </div>
    </article>
  );
};
