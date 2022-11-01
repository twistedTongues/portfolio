import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import Link from "next/link";

export const Hero = (props: {}) => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
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
          src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
