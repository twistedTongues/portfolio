import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
      md:flew-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="hidden md:block absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20
        scrollbar-thumb-secondary/80"
      >
        {projects?.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
            justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.div
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-[500px] md:w-[800px] md:h-[900px] xl:w-[1000px] xl:h-[1200px] "
            >
              <Image
                className="object-contain"
                fill
                src={urlFor(project?.image).url()}
                alt="project"
              />
            </motion.div>
            {/* <motion.img */}
            {/*   initial={{ */}
            {/*     y: -300, */}
            {/*     opacity: 0, */}
            {/*   }} */}
            {/*   transition={{ duration: 1.2 }} */}
            {/*   whileInView={{ opacity: 1, y: 0 }} */}
            {/*   viewport={{ once: true }} */}
            {/*   src={urlFor(project?.image).url()} */}
            {/*   alt="project" */}
            {/* /> */}

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-secondary">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10"
                    width={50}
                    height={50}
                    alt="tech-image"
                    src={urlFor(technology?.image).url()}
                  />
                ))}
                {/* <Image */}
                {/*   className="h-10 w-10" */}
                {/*   fill */}
                {/*   alt="tech-image" */}
                {/*   src={urlFor(technology?.image).url()} */}
                {/* /> */}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[500px] -skew-y-[25deg]"></div>
    </motion.div>
  );
};

export default Projects;
