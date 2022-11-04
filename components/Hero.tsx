import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo?.name}`,
      "Guy-who-loves-tea.ts",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
      text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative mx-auto h-32 w-32">
        <Image
          priority
          className="rounded-full object-contain"
          alt="photo"
          fill
          src={urlFor(pageInfo?.heroImage).url()}
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#3abcca" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-secondary/40 hover:text-secondary/40 hover:-translate-y-0.5 active:-translate-y-[1px]">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-secondary/40 hover:text-secondary/40 hover:-translate-y-0.5 active:-translate-y-[1px]">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-secondary/40 hover:text-secondary/40 hover:-translate-y-0.5 active:-translate-y-[1px]">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-secondary/40 hover:text-secondary/40 hover:-translate-y-0.5 active:-translate-y-[1px]">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
