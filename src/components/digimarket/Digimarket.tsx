import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";

const Digimarket = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between relative mt-16 ">
      <div className="flex flex-col inset-0 items-start justify-start mt-8 w-full ">
        <div className="flex flex-row gap-4 items-center lg:mt-16">
          <div className="flex size-10 bg-orange-500 rounded-full border-2 border-black" />
          <h3 className="text-2xl lg:text-4xl font-medium">
            2. Digital market | Store e-comm
          </h3>
        </div>
        <p className="flex max-w-[750px] text-sm lg:text-lg font-normal px-4 mt-8 text-pretty">
          Im excited to share my latest project: a digital products store that
          anyone can use and deploy with ease—no coding skills required! Its
          free and open-source, with secure admin dashboard, and you can find it
          on my GitHub here:
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-12 px-4">
          <Link href="https://digimarket-kappa.vercel.app/" target="_blank">
            <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-white border border-orange-500 bg-orange-500 rounded-2xl">
              Visit webiste
              <MdOpenInNew className="size-10" />
            </div>
          </Link>
          <Link href="https://github.com/jalalDev7/digimarket" target="_blank">
            <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-orange-500 border border-orange-500 rounded-2xl">
              Github repo
              <FaGithub className="size-10" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <Image
          src="/screenshot-digimarket.png"
          height={1538}
          width={862}
          alt="screenshot"
          className="object-cover rounded-xl mt-8 md:mt-0"
        />
      </div>
    </div>
  );
};

export default Digimarket;
