import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  //Better use email-js
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:markela02@gmail?subject=${formData.subject}
&body=Hi, my name is${formData.name}. ${formData.message} (${formData.email})`;
    reset();
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-lg md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-secondary/50 underline inline-block hover:-translate-y-0.5">
            Let&apos;s talk
          </span>
        </h4>

        <div className="space-y-4 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center hover:scale-110 ease-in-out duration-200">
            <PhoneIcon className="text-secondary h-7 w-7 animate-pulse" />
            <Link href={`tel:${pageInfo?.phoneNumber}`}>
              <p className="text-2xl">{pageInfo?.phoneNumber}</p>
            </Link>
          </div>

          <div className="flex items-center space-x-5 justify-center hover:scale-110 ease-in-out duration-200">
            <EnvelopeIcon className="text-secondary h-7 w-7 animate-pulse" />
            <Link href={`mailto:${pageInfo?.email}`}>
              <p className="text-2xl">{pageInfo?.email}</p>
            </Link>
          </div>

          <div className="flex items-center space-x-5 justify-center hover:scale-110 ease-in-out duration-200">
            <MapPinIcon className="text-secondary h-7 w-7 animate-pulse" />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...(register("name"), { required: true })}
              placeholder="Name"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-secondary/40 focus:text-secondary/40"
              type="text"
            />
            {errors.name && "Name is required"}
            <input
              {...(register("email"), { required: true })}
              placeholder="Email"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-secondary/40 focus:text-secondary/40"
              type="email"
            />
            {errors.email && "Email is required"}
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-secondary/40 focus:text-secondary/40"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-secondary/40 focus:text-secondary/40"
          />
          <button
            type="submit"
            className="bg-neutral py-5 px-10 rounded-md text-black font-bold text-lg active:shadow-xl hover:bg-secondary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
