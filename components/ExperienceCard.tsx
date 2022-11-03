import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
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
        src={urlFor(experience?.companyImage).url()}
        alt="company logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <div key={technology._id} className="relative h-10 w-10">
              <Image
                priority
                className="rounded-full object-contain"
                alt="photo"
                fill
                src={urlFor(technology?.image).url()}
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul
          className="list-disc space-y-4 ml-5 pr-5 text-lg h-96 max-w-4/5 overflow-scroll 
          scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
          // className="list-disc space-y-4 ml-5 text-lg h-96 overflow-y-scroll
          // scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
        >
          {/* <ul className="list-disc space-y-4 ml-5 text-lg"> */}
          {experience.points.map((point, id) => (
            <li key={id}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
