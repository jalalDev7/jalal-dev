import React from "react";
import { GridBackgroundDemo } from "./ui/BackgroundGrid";
import MaxWidthWrapper from "./MaxWidthWrapper";
import RandomPicker from "./RandomPicker";
import Link from "next/link";
import { FaGithub, FaReact } from "react-icons/fa";
import { MdBusinessCenter, MdOpenInNew } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBasketDollar } from "react-icons/tb";
import { IoIosArrowDropdown } from "react-icons/io";
import HireMeDialog from "./HireMeDialog";
import Image from "next/image";

const Projects = () => {
  return (
    <GridBackgroundDemo className="flex w-full dark:bg-grid-small-orange-500/[0.5] bg-grid-small-orange-500/[0.5]">
      <MaxWidthWrapper>
        <div className="flex flex-row gap-4 items-center justify-center w-full  my-16">
          <h1 className="text-xl lg:text-6xl font-bold ">
            <span className="border-l-4 border-[#F97316] bg-gradient-to-r from-[#F97316]/50 to-[#FF8D86]/15 p-2 ">
              Explore
            </span>{" "}
            some of my{" "}
            <span className="border-l-4 border-[#F97316] bg-gradient-to-r from-[#F97316]/50 to-[#FF8D86]/15 p-2 ">
              projects.
            </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between relative">
          <div className="flex flex-col inset-0 items-start justify-start mt-8 w-full ">
            <div className="flex flex-row gap-4 items-center lg:mt-16">
              <div className="flex size-10 bg-orange-500 rounded-full border-2 border-black" />
              <h3 className="text-2xl lg:text-4xl font-medium">
                1. My-rabit.com | SAAS
              </h3>
            </div>
            <p className="flex max-w-[750px] text-sm lg:text-lg font-normal px-4 mt-8 text-pretty">
              Introducing our all-in-one SaaS platform designed for content
              creators and influencers! Our website provides a customizable link
              where you can showcase all your social media profiles, making it
              easier for your audience to connect with you. Additionally, you
              can create and promote events directly on your page, allowing you
              to monetize your audience through ticket sales or donations. Plus,
              our platform enables you to schedule appointments with your
              followers, offering another avenue for earning revenue. Simplify
              your online presence and maximize your earning potential with our
              versatile tools!
            </p>
            <div className="flex flex-col lg:flex-row gap-4 mt-12 px-4">
              <Link href="https://my-rabit.com" target="_blank">
                <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-white border border-orange-500 bg-orange-500 rounded-2xl">
                  Visit webiste
                  <MdOpenInNew className="size-10" />
                </div>
              </Link>
              <HireMeDialog>
                <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-orange-500 border border-orange-500 rounded-2xl">
                  More info
                  <IoIosArrowDropdown className="size-10" />
                </div>
              </HireMeDialog>
            </div>
            <div className="flex flex-col w-full mt-4 text-xs px-4">
              <h5 className="font-semibold">Demo account :</h5>
              <h5>
                <span className="font-semibold">Email : </span>
                myrabitdemo@gmail.com |{" "}
                <span className="font-semibold">Passowrd : </span> myrabit2024
              </h5>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center">
              <div className="flex flex-col w-fit h-fit bg-white shadow-lg rounded-2xl text-black mt-8">
                <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                  <svg
                    viewBox="0 0 32 32"
                    className="size-[30px] drop-shadow-xl"
                    fill="none"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stopColor="#B13589"></stop>{" "}
                          <stop offset="0.79309" stopColor="#C62F94"></stop>{" "}
                          <stop offset="1" stopColor="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stopColor="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stopColor="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stopColor="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stopColor="#E2425C"
                            stopOpacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stopColor="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stopColor="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stopColor="#6A45BE"
                            stopOpacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                  <h3>Instagram</h3>
                </div>
                <div className="flex flex-row gap-4 p-4 pr-16">
                  <div className="flex w-fit">
                    <div className="flex size-16 rounded-xl bg-neutral-200" />
                  </div>
                  <div className="flex flex-col w-full justify-center gap-2">
                    <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                    <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center -translate-y-[30px]">
              <div className="rotate-3 flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black">
                <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-[30px] h-[30px] drop-shadow-xl"
                    fill="none"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      {" "}
                      <path
                        d="M8.45095 19.7926C8.60723 18.4987 9.1379 17.7743 10.1379 17.0317C11.5688 16.0259 13.3561 16.5948 13.3561 16.5948V13.2197C13.7907 13.2085 14.2254 13.2343 14.6551 13.2966V17.6401C14.6551 17.6401 12.8683 17.0712 11.4375 18.0775C10.438 18.8196 9.90623 19.5446 9.7505 20.8385C9.74562 21.5411 9.87747 22.4595 10.4847 23.2536C10.3345 23.1766 10.1815 23.0889 10.0256 22.9905C8.68807 22.0923 8.44444 20.7449 8.45095 19.7926ZM22.0352 6.97898C21.0509 5.90039 20.6786 4.81139 20.5441 4.04639H21.7823C21.7823 4.04639 21.5354 6.05224 23.3347 8.02482L23.3597 8.05134C22.8747 7.7463 22.43 7.38624 22.0352 6.97898ZM28 10.0369V14.293C28 14.293 26.42 14.2312 25.2507 13.9337C23.6179 13.5176 22.5685 12.8795 22.5685 12.8795C22.5685 12.8795 21.8436 12.4245 21.785 12.3928V21.1817C21.785 21.6711 21.651 22.8932 21.2424 23.9125C20.709 25.246 19.8859 26.1212 19.7345 26.3001C19.7345 26.3001 18.7334 27.4832 16.9672 28.28C15.3752 28.9987 13.9774 28.9805 13.5596 28.9987C13.5596 28.9987 11.1434 29.0944 8.96915 27.6814C8.49898 27.3699 8.06011 27.0172 7.6582 26.6277L7.66906 26.6355C9.84383 28.0485 12.2595 27.9528 12.2595 27.9528C12.6779 27.9346 14.0756 27.9528 15.6671 27.2341C17.4317 26.4374 18.4344 25.2543 18.4344 25.2543C18.5842 25.0754 19.4111 24.2001 19.9423 22.8662C20.3498 21.8474 20.4849 20.6247 20.4849 20.1354V11.3475C20.5435 11.3797 21.2679 11.8347 21.2679 11.8347C21.2679 11.8347 22.3179 12.4734 23.9506 12.8889C25.1204 13.1864 26.7 13.2483 26.7 13.2483V9.91314C27.2404 10.0343 27.7011 10.0671 28 10.0369Z"
                        fill="#EE1D52"
                      ></path>{" "}
                      <path
                        d="M26.7009 9.91314V13.2472C26.7009 13.2472 25.1213 13.1853 23.9515 12.8879C22.3188 12.4718 21.2688 11.8337 21.2688 11.8337C21.2688 11.8337 20.5444 11.3787 20.4858 11.3464V20.1364C20.4858 20.6258 20.3518 21.8484 19.9432 22.8672C19.4098 24.2012 18.5867 25.0764 18.4353 25.2553C18.4353 25.2553 17.4337 26.4384 15.668 27.2352C14.0765 27.9539 12.6788 27.9357 12.2604 27.9539C12.2604 27.9539 9.84473 28.0496 7.66995 26.6366L7.6591 26.6288C7.42949 26.4064 7.21336 26.1717 7.01177 25.9257C6.31777 25.0795 5.89237 24.0789 5.78547 23.7934C5.78529 23.7922 5.78529 23.791 5.78547 23.7898C5.61347 23.2937 5.25209 22.1022 5.30147 20.9482C5.38883 18.9122 6.10507 17.6625 6.29444 17.3494C6.79597 16.4957 7.44828 15.7318 8.22233 15.0919C8.90538 14.5396 9.6796 14.1002 10.5132 13.7917C11.4144 13.4295 12.3794 13.2353 13.3565 13.2197V16.5948C13.3565 16.5948 11.5691 16.028 10.1388 17.0317C9.13879 17.7743 8.60812 18.4987 8.45185 19.7926C8.44534 20.7449 8.68897 22.0923 10.0254 22.991C10.1813 23.0898 10.3343 23.1775 10.4845 23.2541C10.7179 23.5576 11.0021 23.8221 11.3255 24.0368C12.631 24.8632 13.7249 24.9209 15.1238 24.3842C16.0565 24.0254 16.7586 23.2167 17.0842 22.3206C17.2888 21.7611 17.2861 21.1978 17.2861 20.6154V4.04639H20.5417C20.6763 4.81139 21.0485 5.90039 22.0328 6.97898C22.4276 7.38624 22.8724 7.7463 23.3573 8.05134C23.5006 8.19955 24.2331 8.93231 25.1734 9.38216C25.6596 9.61469 26.1722 9.79285 26.7009 9.91314Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        d="M4.48926 22.7568V22.7594L4.57004 22.9784C4.56076 22.9529 4.53074 22.8754 4.48926 22.7568Z"
                        fill="#69C9D0"
                      ></path>{" "}
                      <path
                        d="M10.5128 13.7916C9.67919 14.1002 8.90498 14.5396 8.22192 15.0918C7.44763 15.7332 6.79548 16.4987 6.29458 17.354C6.10521 17.6661 5.38897 18.9168 5.30161 20.9528C5.25223 22.1068 5.61361 23.2983 5.78561 23.7944C5.78543 23.7956 5.78543 23.7968 5.78561 23.798C5.89413 24.081 6.31791 25.0815 7.01191 25.9303C7.2135 26.1763 7.42963 26.4111 7.65924 26.6334C6.92357 26.1457 6.26746 25.5562 5.71236 24.8839C5.02433 24.0451 4.60001 23.0549 4.48932 22.7626C4.48919 22.7605 4.48919 22.7584 4.48932 22.7564V22.7527C4.31677 22.2571 3.95431 21.0651 4.00477 19.9096C4.09213 17.8736 4.80838 16.6239 4.99775 16.3108C5.4985 15.4553 6.15067 14.6898 6.92509 14.0486C7.608 13.4961 8.38225 13.0567 9.21598 12.7484C9.73602 12.5416 10.2778 12.3891 10.8319 12.2934C11.6669 12.1537 12.5198 12.1415 13.3588 12.2575V13.2196C12.3808 13.2349 11.4148 13.4291 10.5128 13.7916Z"
                        fill="#69C9D0"
                      ></path>{" "}
                      <path
                        d="M20.5438 4.04635H17.2881V20.6159C17.2881 21.1983 17.2881 21.76 17.0863 22.3211C16.7575 23.2167 16.058 24.0253 15.1258 24.3842C13.7265 24.923 12.6326 24.8632 11.3276 24.0368C11.0036 23.823 10.7187 23.5594 10.4844 23.2567C11.5962 23.8251 12.5913 23.8152 13.8241 23.341C14.7558 22.9821 15.4563 22.1734 15.784 21.2774C15.9891 20.7178 15.9864 20.1546 15.9864 19.5726V3H20.4819C20.4819 3 20.4315 3.41188 20.5438 4.04635ZM26.7002 8.99104V9.9131C26.1725 9.79263 25.6609 9.61447 25.1755 9.38213C24.2352 8.93228 23.5026 8.19952 23.3594 8.0513C23.5256 8.1559 23.6981 8.25106 23.8759 8.33629C25.0192 8.88339 26.1451 9.04669 26.7002 8.99104Z"
                        fill="#69C9D0"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h3>Tiktok</h3>
                </div>
                <div className="flex flex-row gap-4 p-4 pr-16">
                  <div className="flex w-fit">
                    <div className="flex size-16 rounded-xl bg-neutral-200" />
                  </div>
                  <div className="flex flex-col w-full justify-center gap-2">
                    <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                    <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center -translate-y-[60px]">
              <div className="-rotate-3 flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black">
                <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                  <svg
                    viewBox="0 0 48 48"
                    className="w-[30px] h-[30px]"
                    fill="none"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      {" "}
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="#FF0000"
                      ></circle>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h3>Youtube</h3>
                </div>
                <div className="flex flex-row gap-4 p-4 pr-16">
                  <div className="flex w-fit">
                    <div className="flex size-16 rounded-xl bg-neutral-200" />
                  </div>
                  <div className="flex flex-col w-full justify-center gap-2">
                    <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                    <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center -translate-y-[90px]">
              <div className="rotate-3 flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black">
                <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    className="w-[30px] h-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="#FFFA37"
                      ></circle>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.0255 8.18551C20.0601 6.96879 18.4673 6 16.0118 6C13.9091 6.02071 9.70378 7.18445 9.70378 11.6738C9.70378 12.3294 9.75568 13.2075 9.80103 13.8541C9.74758 13.8386 9.68188 13.8095 9.57775 13.7596L9.56328 13.7527C9.37915 13.6643 9.09918 13.5298 8.7098 13.5298C8.31645 13.5298 7.93611 13.6839 7.65375 13.9124C7.37309 14.1394 7.13333 14.4885 7.13333 14.9105C7.13333 15.4384 7.43041 15.7888 7.77778 16.0135C8.08632 16.2131 8.47538 16.3406 8.78337 16.4415L8.81382 16.4514C9.14349 16.5596 9.3851 16.642 9.55169 16.7458C9.68136 16.8267 9.70104 16.8778 9.70348 16.9264C9.70179 16.9333 9.69782 16.9482 9.68919 16.9724C9.67141 17.0224 9.64184 17.0899 9.59862 17.1743C9.5124 17.3427 9.38667 17.5498 9.23711 17.7706C8.93539 18.2161 8.56717 18.673 8.29212 18.9376C8.02082 19.1986 7.57562 19.5229 7.11016 19.7811C6.87933 19.9091 6.6536 20.0152 6.45167 20.0881C6.24322 20.1633 6.09047 20.192 5.99608 20.192C5.92136 20.192 5.85669 20.2073 5.82847 20.2144C5.7888 20.2243 5.74774 20.2374 5.70713 20.2527C5.62657 20.2829 5.53056 20.3283 5.43546 20.3923C5.25377 20.5146 5 20.7612 5 21.1502C5 21.3532 5.04766 21.5251 5.13005 21.6742C5.20217 21.8047 5.29487 21.9038 5.34823 21.9608L5.35615 21.9692L5.37091 21.9851C5.66435 22.3008 6.15008 22.5205 6.62162 22.6712C7.02679 22.8007 7.4798 22.8972 7.92122 22.9551C7.92745 22.9836 7.93397 23.0142 7.9411 23.0478L7.9434 23.0587C7.97119 23.1897 8.008 23.3633 8.06221 23.5234C8.11336 23.6744 8.20599 23.8977 8.39564 24.0568C8.63717 24.2593 8.95308 24.2798 9.1592 24.279C9.38047 24.2781 9.63881 24.2469 9.88394 24.2174L9.90481 24.2149C10.2497 24.1733 10.6106 24.1304 10.9843 24.1304C11.6663 24.1304 12.1035 24.4153 12.7894 24.8837L12.794 24.8869C13.0316 25.0492 13.2976 25.2308 13.6 25.4095C14.6122 26.0076 15.4346 26.0025 15.9007 25.9995C15.9315 25.9993 15.9606 25.9992 15.9882 25.9992C16.0158 25.9992 16.0452 25.9993 16.0761 25.9995C16.543 26.0025 17.3873 26.0079 18.4 25.4095C18.7024 25.2308 18.9684 25.0492 19.2059 24.8869L19.2106 24.8837C19.8965 24.4153 20.3337 24.1304 21.0157 24.1304C21.3894 24.1304 21.7503 24.1733 22.0952 24.2149L22.1161 24.2174C22.3612 24.2469 22.6195 24.2781 22.8408 24.279C23.0469 24.2798 23.3628 24.2593 23.6044 24.0568C23.794 23.8977 23.8866 23.6744 23.9378 23.5234C23.992 23.3634 24.0288 23.1898 24.0566 23.0587L24.0589 23.0478C24.066 23.0142 24.0725 22.9836 24.0788 22.9551C24.5202 22.8972 24.9732 22.8007 25.3784 22.6712C25.8499 22.5205 26.3357 22.3007 26.6291 21.985L26.6439 21.9692L26.6517 21.9608C26.7051 21.9038 26.7978 21.8047 26.8699 21.6742C26.9523 21.5251 27 21.3532 27 21.1502C27 20.7612 26.7462 20.5146 26.5645 20.3923C26.4694 20.3283 26.3734 20.2829 26.2929 20.2527C26.2523 20.2374 26.2112 20.2243 26.1715 20.2144C26.1433 20.2073 26.0786 20.192 26.0039 20.192C25.9095 20.192 25.7568 20.1633 25.5483 20.0881C25.3464 20.0152 25.1207 19.9091 24.8898 19.7811C24.4244 19.5229 23.9792 19.1986 23.7079 18.9376C23.4328 18.673 23.0646 18.2161 22.7629 17.7706C22.6133 17.5498 22.4876 17.3427 22.4014 17.1743C22.3582 17.0899 22.3286 17.0224 22.3108 16.9724C22.3022 16.9482 22.2982 16.9333 22.2965 16.9264C22.299 16.8778 22.3186 16.8267 22.4483 16.7458C22.6149 16.642 22.8565 16.5596 23.1862 16.4514L23.2166 16.4415C23.5246 16.3406 23.9137 16.2131 24.2222 16.0135C24.5696 15.7888 24.8667 15.4384 24.8667 14.9105C24.8667 14.4885 24.6269 14.1394 24.3462 13.9124C24.0639 13.6839 23.6835 13.5298 23.2902 13.5298C22.9008 13.5298 22.6209 13.6643 22.4367 13.7527L22.4223 13.7596C22.3181 13.8095 22.2524 13.8386 22.199 13.8541C22.2443 13.2075 22.2962 12.3294 22.2962 11.6738C22.2962 10.7837 21.9726 9.37904 21.0255 8.18551ZM11.7832 8.77274C10.9822 9.77549 10.7077 10.9662 10.7077 11.6738C10.7077 12.3299 10.7633 13.2413 10.8102 13.8949C10.8258 14.1119 10.7813 14.365 10.5917 14.5658C10.3998 14.7691 10.1388 14.8351 9.90561 14.8351C9.56889 14.8351 9.3128 14.7119 9.14898 14.6331L9.12996 14.624C8.94718 14.5363 8.85108 14.4956 8.7098 14.4956C8.58128 14.4956 8.42437 14.5508 8.29994 14.6515C8.17382 14.7535 8.13725 14.8534 8.13725 14.9105C8.13725 15.0269 8.18018 15.1101 8.33794 15.2121C8.52427 15.3326 8.78976 15.4232 9.13779 15.5374L9.16809 15.5473C9.45712 15.642 9.81511 15.7593 10.0976 15.9354C10.4147 16.133 10.7077 16.4507 10.7077 16.9401C10.7077 17.0684 10.6722 17.1919 10.6389 17.2854C10.6028 17.3869 10.554 17.4941 10.4992 17.601C10.3896 17.8152 10.2413 18.0571 10.0783 18.2978C9.75483 18.7754 9.3437 19.2918 9.002 19.6205C8.65655 19.9528 8.13703 20.3263 7.61159 20.6178C7.34696 20.7645 7.07068 20.8961 6.80428 20.9923C6.56581 21.0783 6.3088 21.1457 6.06224 21.1563C6.0561 21.1589 6.04931 21.162 6.0422 21.1655C6.03083 21.1713 6.0202 21.1774 6.01092 21.1837L6.00618 21.187C6.00711 21.1936 6.00817 21.1985 6.00906 21.202C6.01103 21.2097 6.01337 21.2152 6.01652 21.2209C6.02619 21.2384 6.04143 21.2579 6.1031 21.324L6.11928 21.3413C6.23038 21.4609 6.50416 21.616 6.93815 21.7547C7.35148 21.8868 7.84023 21.9822 8.30201 22.026C8.53305 22.0479 8.66621 22.1923 8.72257 22.2701C8.78059 22.3501 8.81377 22.4347 8.83316 22.4908C8.87067 22.5994 8.899 22.7332 8.92135 22.8387L8.92474 22.8547C8.95525 22.9985 8.98194 23.1215 9.01675 23.2242C9.02905 23.2606 9.0404 23.2882 9.05017 23.3085C9.0722 23.3111 9.10599 23.3135 9.15493 23.3133C9.36726 23.3124 9.57984 23.2808 9.79022 23.2554C10.1268 23.2148 10.5433 23.1646 10.9843 23.1646C12.0071 23.1646 12.682 23.6258 13.334 24.0713L13.3706 24.0963C13.6118 24.261 13.8536 24.4259 14.1255 24.5866C14.8917 25.0394 15.4747 25.0361 15.9007 25.0337C15.9306 25.0336 15.9598 25.0334 15.9882 25.0334C16.0164 25.0334 16.0454 25.0336 16.0753 25.0337C16.5059 25.036 17.1085 25.0393 17.8745 24.5866C18.1464 24.4259 18.3882 24.261 18.6294 24.0963L18.666 24.0713C19.318 23.6258 19.9929 23.1646 21.0157 23.1646C21.4567 23.1646 21.8732 23.2148 22.2098 23.2554L22.2199 23.2566C22.4921 23.2894 22.6913 23.3126 22.8451 23.3133C22.894 23.3135 22.9278 23.3111 22.9498 23.3085C22.9596 23.2882 22.9709 23.2606 22.9833 23.2242C23.0181 23.1215 23.0447 22.9985 23.0753 22.8547L23.0787 22.8387C23.101 22.7331 23.1293 22.5994 23.1668 22.4908C23.1862 22.4347 23.2194 22.3501 23.2774 22.2701C23.3338 22.1923 23.467 22.0479 23.698 22.026C24.1598 21.9822 24.6485 21.8868 25.0618 21.7547C25.4958 21.616 25.7696 21.4609 25.8807 21.3414L25.8969 21.324C25.9585 21.2579 25.9738 21.2384 25.9835 21.2209C25.9866 21.2152 25.989 21.2097 25.9909 21.202C25.9918 21.1985 25.9929 21.1936 25.9938 21.187L25.9891 21.1837C25.9798 21.1774 25.9692 21.1713 25.9578 21.1655C25.9507 21.1619 25.9439 21.1589 25.9378 21.1563C25.6912 21.1457 25.4342 21.0783 25.1957 20.9923C24.9293 20.8961 24.653 20.7645 24.3884 20.6178C23.863 20.3263 23.3435 19.9528 22.998 19.6205C22.6563 19.2918 22.2452 18.7754 21.9217 18.2978C21.7587 18.0571 21.6104 17.8152 21.5008 17.601C21.446 17.4941 21.3972 17.3869 21.3611 17.2854C21.3278 17.1919 21.2923 17.0684 21.2923 16.9401C21.2923 16.4507 21.5853 16.133 21.9024 15.9354C22.1849 15.7593 22.5429 15.642 22.8319 15.5473L22.8622 15.5374C23.2102 15.4232 23.4757 15.3326 23.6621 15.2121C23.8198 15.1101 23.8627 15.0269 23.8627 14.9105C23.8627 14.8534 23.8262 14.7535 23.7001 14.6515C23.5756 14.5508 23.4187 14.4956 23.2902 14.4956C23.1489 14.4956 23.0528 14.5363 22.87 14.624L22.851 14.6331C22.6872 14.7119 22.4311 14.8351 22.0944 14.8351C21.8612 14.8351 21.6002 14.7691 21.4083 14.5658C21.2187 14.365 21.1742 14.1119 21.1898 13.8949C21.2367 13.2413 21.2923 12.3299 21.2923 11.6738C21.2923 10.9643 21.0227 9.77352 20.2275 8.77149C19.4508 7.79264 18.1523 6.96575 16.0118 6.96575C13.871 6.96575 12.566 7.79288 11.7832 8.77274Z"
                        fill="#000000"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7829 8.77281C10.9818 9.77556 10.7074 10.9662 10.7074 11.6738C10.7074 12.3299 10.763 13.2414 10.8099 13.895C10.8254 14.112 10.7809 14.365 10.5914 14.5659C10.3995 14.7692 10.1385 14.8352 9.90529 14.8352C9.56858 14.8352 9.31249 14.712 9.14866 14.6332L9.12964 14.624C8.94686 14.5364 8.85077 14.4956 8.70949 14.4956C8.58097 14.4956 8.42405 14.5509 8.29963 14.6515C8.1735 14.7536 8.13694 14.8535 8.13694 14.9106C8.13694 15.027 8.17987 15.1101 8.33763 15.2122C8.52395 15.3327 8.78944 15.4233 9.13748 15.5374L9.16778 15.5474C9.4568 15.6421 9.81479 15.7593 10.0973 15.9354C10.4144 16.1331 10.7074 16.4508 10.7074 16.9402C10.7074 17.0685 10.6719 17.192 10.6386 17.2855C10.6025 17.387 10.5536 17.4942 10.4989 17.6011C10.3893 17.8153 10.241 18.0572 10.0779 18.2979C9.75451 18.7754 9.34339 19.2918 9.00168 19.6206C8.65623 19.9529 8.13672 20.3264 7.61127 20.6178C7.34664 20.7646 7.07037 20.8962 6.80396 20.9923C6.56549 21.0784 6.30848 21.1458 6.06192 21.1563C6.05578 21.1589 6.04899 21.162 6.04188 21.1656C6.03051 21.1713 6.01988 21.1775 6.01061 21.1837L6.00586 21.187C6.00679 21.1937 6.00785 21.1986 6.00874 21.2021C6.01071 21.2098 6.01305 21.2153 6.01621 21.221C6.02587 21.2385 6.04112 21.258 6.10279 21.3241L6.11897 21.3414C6.23006 21.4609 6.50385 21.616 6.93783 21.7548C7.35116 21.8869 7.83992 21.9823 8.30169 22.0261C8.53273 22.048 8.6659 22.1924 8.72226 22.2701C8.78027 22.3502 8.81345 22.4348 8.83284 22.4909C8.87035 22.5995 8.89868 22.7332 8.92103 22.8387L8.92443 22.8548C8.95494 22.9986 8.98162 23.1215 9.01643 23.2243C9.02873 23.2606 9.04009 23.2883 9.04986 23.3086C9.07189 23.3111 9.10567 23.3135 9.15461 23.3133C9.36694 23.3125 9.57952 23.2808 9.7899 23.2555C10.1265 23.2149 10.543 23.1647 10.984 23.1647C12.0068 23.1647 12.6817 23.6259 13.3336 24.0713L13.3702 24.0963C13.6115 24.2611 13.8533 24.426 14.1252 24.5867C14.8914 25.0395 15.4744 25.0362 15.9003 25.0338C15.9303 25.0336 15.9595 25.0335 15.9879 25.0335C16.0161 25.0335 16.0451 25.0336 16.075 25.0338C16.5056 25.0361 17.1081 25.0394 17.8742 24.5867C18.1461 24.426 18.3879 24.2611 18.6291 24.0963L18.6657 24.0713C19.3177 23.6259 19.9926 23.1647 21.0154 23.1647C21.4564 23.1647 21.8729 23.2149 22.2095 23.2555L22.2196 23.2567C22.4918 23.2895 22.691 23.3127 22.8448 23.3133C22.8937 23.3135 22.9275 23.3111 22.9495 23.3086C22.9593 23.2883 22.9706 23.2606 22.9829 23.2243C23.0177 23.1215 23.0444 22.9986 23.0749 22.8548L23.0783 22.8387C23.1007 22.7332 23.129 22.5995 23.1665 22.4909C23.1859 22.4347 23.2191 22.3502 23.2771 22.2701C23.3335 22.1923 23.4666 22.048 23.6977 22.0261C24.1595 21.9823 24.6482 21.8869 25.0615 21.7548C25.4955 21.616 25.7693 21.461 25.8804 21.3414L25.8966 21.3241C25.9582 21.258 25.9735 21.2385 25.9832 21.221C25.9863 21.2153 25.9887 21.2098 25.9906 21.2021C25.9915 21.1986 25.9926 21.1937 25.9935 21.187L25.9888 21.1837C25.9795 21.1775 25.9689 21.1713 25.9575 21.1656C25.9504 21.162 25.9436 21.1589 25.9374 21.1563C25.6909 21.1458 25.4339 21.0784 25.1954 20.9923C24.929 20.8962 24.6527 20.7646 24.3881 20.6178C23.8626 20.3264 23.3431 19.9529 22.9977 19.6206C22.656 19.2918 22.2449 18.7754 21.9214 18.2979C21.7584 18.0572 21.6101 17.8153 21.5004 17.6011C21.4457 17.4942 21.3969 17.387 21.3607 17.2855C21.3275 17.192 21.292 17.0685 21.292 16.9402C21.292 16.4508 21.585 16.1331 21.9021 15.9354C22.1846 15.7593 22.5426 15.6421 22.8316 15.5474L22.8619 15.5374C23.2099 15.4233 23.4754 15.3327 23.6617 15.2122C23.8195 15.1101 23.8624 15.027 23.8624 14.9106C23.8624 14.8535 23.8259 14.7536 23.6997 14.6515C23.5753 14.5509 23.4184 14.4956 23.2899 14.4956C23.1486 14.4956 23.0525 14.5364 22.8697 14.624L22.8507 14.6332C22.6869 14.712 22.4308 14.8352 22.0941 14.8352C21.8609 14.8352 21.5999 14.7692 21.408 14.5659C21.2184 14.365 21.1739 14.112 21.1895 13.895C21.2364 13.2414 21.292 12.3299 21.292 11.6738C21.292 10.9644 21.0224 9.7736 20.2272 8.77157C19.4505 7.79271 18.152 6.96582 16.0114 6.96582C13.8706 6.96582 12.5657 7.79296 11.7829 8.77281Z"
                        fill="white"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h3>Snapchat</h3>
                </div>
                <div className="flex flex-row gap-4 p-4 pr-16">
                  <div className="flex w-fit">
                    <div className="flex size-16 rounded-xl bg-neutral-200" />
                  </div>
                  <div className="flex flex-col w-full justify-center gap-2">
                    <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                    <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-8 lg:flex-row justify-between relative lg:mt-12">
          <div className="flex flex-col w-full items-center justify-center">
            <div
              style={{
                background:
                  "linear-gradient(24deg, rgba(63,129,246,1) 0%, rgba(166,86,247,1) 25%, rgba(166,86,247,1) 75%, rgba(63,129,246,1) 100%)",
              }}
              className="flex flex-col w-full px-2 items-center justify-start gap-8 p-6 text-white  rounded-3xl pb-36 my-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-[80%]  text-black mt-4">
                <div className="flex flex-col w-full  bg-white rounded-2xl shadow-lg">
                  <div className="text-xl pl-4 pt-4 font-semibold">
                    Your traffic
                  </div>

                  <div className="text-sm pl-4 text-neutral-500">
                    Free for ever
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150">
                    <image
                      id="Layer_0"
                      data-name="Layer 0"
                      y="8"
                      width="500"
                      height="100"
                      href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABkCAYAAABwx8J9AAAV40lEQVR4nO3dCVRTd74H8JuwhSULyqayOHEpookCFQXqxiBqC/Xp1NI3WkdrsdVq26nj0nm157R2Oi192FardrRPsQd8RXFpoUotuAIKSpAEFLVGA8gSAoSE3QDv/GjSFxm1oCwJfD/n5HizcO8/9+b4vb///d97We3t7QwAAACYL6lUaoFABwAAMHPe3t5fs7ERAQAAzFdERMSK69evz0KgAwAAmKnNmzf7Jicnb2CxWGPR5Q4AAGCG4uPjnV5++eWM9vb2IVu2bNmMQAcAADAzp06d4sybNy+zpaXFY/HixQfi4uLeQqADAACYEZlMZjFt2rS02tra8SEhIafS0tIiqfUIdAAAADMiFAq/vX379ssikeiMVCqdZWg5BsUBAACYCbFY/DmFuYuLy9Xvv/9+vnGrEegAAABmIDg4+L9kMtmzfD5fnpqaOvsPf/iDxrjVltiIAAAApm327NlrMzMzl9rZ2XGOHz8+WyQSlXZuMCp0AAAAEzZv3rzXU1NT11CYUzd7UFDQjQe1FhU6AACAiZozZ84bJ0+efNPGxsbh8OHD80NDQ688rKUIdAAAABM0c+bM9WfPnn2VwvzYsWPz586de/lRrUSgAwAAmJjAwMD3L168uJi62Y8ePRoRFhYm+b0WItABAABMiL+//8cSieRPXC7XOikp6bkZM2bkd6V1GBQHAABgAm7dusUaO3bsHolE8q5AIGCfPHlydlfDnEGFDgAA0P+ys7OtIiIiDiuVyghnZ+fClJSUOX5+fkXdaRgqdAAAgH6UlJTEDQkJOUdhPmrUqOyMjIzg7oY5g0AHAADoP7t27fJYsGDBxfr6+tEBAQHHMzMzA8eMGVP9OA1CoAMAAPSDVatW/XH16tWpra2tLhEREclZWVnPubi4tD1uS3AMHQAAoI9Nnz590/nz55czDDNk1apVX+/cuXPzk7YAFToAAEAfyc3NtfTy8oo/f/78P62srHi7du1a1RNhzqBCBwAA6BuxsbGub7zxxrGGhoapdPvTxMTERdOmTbvaUwtntbe3Y1MCAAD0ouXLl4fHxsbGUBe7r6/vFbqUq6enZ0NPLhFd7gAAAL2ksLCQLRKJPjeE+bJly2IlEsnsng5zBoEOAADQO+Lj450mT558Nj8//226Jvu+ffuW79u3b31vLQ9d7gAAAD1s8eLFCw8cOPBPqsq9vb0LDx06tGjChAnlvbmeMSgOAACgh5w6dYpD3erFxcW+FOaLFy8+EBcX91ZfrF90uQMAAPSAd955Jyg0NDSvuLg4km6uEh8fv7ivwpxBlzsAAMCToRurvPLKKzEFBQVzqCoPCQk5FRsbu9zDw6PHB749Cip0AACAx7Ru3bqgoKCgKwUFBWs5HI7d1q1b16WlpUX2dZgzqNABAAC6j46VR0VF7ZTL5cFUlQcEBGTv3bt3xfjx43t14NujoEIHAADohldfffVZOlYul8uX0+loMTEx6+jGKv0Z5gwqdAAAgK7Zv3+/64YNG/YolcqnDMfK9+zZEyUUCjWmsApRoQMAADyCVCq1mDZt2qZly5adUyqVETSC/ZtvvomiY+WmEuYMKnQAAICHe/vtt5/ZsWPHDp1OJ2axWKqlS5d+Gx0dvf5J7lveWxDoAAAAnezdu9ftvffe21VWVuZD3etisVi6Y8eON5555plCU11X6HIHAADQS0lJsR8/fvy2FStWnC0rK/sPPp9v+cUXX/w1Ly/vj6Yc5gwqdAAAAIa5evUqe926dStTUlL+yjDMWDabraRLuH700Uebhw0b1mIOqwiBDgAAg9prr702e+/evf9Nx8kZhlHNnTs3hU5F8/HxUZrTekGgAwDAoLR+/fqpO3bs2NbY2DiZgtzHx+cqBfncuXMvm+P6QKADAMCg8uGHH06IiYn5SqPRDKMBbyNGjCh9//33P1i5cuURc14PuH0qAAAMCp999tnY6Ojoz1Uq1WgKcicnJ9XGjRvX/+1vf4sdCN8fFToAAAxoH3/88bitW7d+UVVVNZKC3MHBoe6dd975/IMPPtg2kL43Ah0AAAYk6lr/8ssvY6qrq38L8lWrVu2Kjo6OHojfF4EOAAADyt///nf/nTt3xtTW1nYcI+fxeJo1a9bs+Mc//rF1IG9pBDoAAJi9GzdusGJiYkL379//aXNzsy+NWufz+Zq33nrry4HWtf4wCHQAADBbWVlZVtHR0ZHHjh17t62tjS7TqnJzcyt/8803t7/77ru7B9OWRaADAIDZOXjwoOO2bdtWZ2RkLKUru1GQjx079sa6detizP30s8eFQAcAALPxySefPLVz584PiouLfQ1BPmXKlOwNGzZ8unDhwnODeUsi0AEAwKTJZDKL7du3h8bFxW1pbGzkU5BbWlqWL1y48Ah1rQcHB5v0TVP6CgIdAABMUlxcnNPXX3/9mnG3+tChQ6ujoqL2rF69eqeHh0cDttz/Q6ADAIDJuHnzJmv37t1T9u3b94H+QjAdQS4SifLXrl27PSoqalAeH+8KBDoAAPS7Q4cOOe7evXtJWlramvb29o4Qt7GxaVm0aNHB119//V/oVv99CHQAAOgXOTk5lrGxsdMOHDiwSX81t44gHzNmzC8rV67810C5xnpfQaADAECf+uqrrzz37NnzplQqjTCEOFXjzz///A8U5KGhoVewRboPgQ4AAL0uMTFREBcXtyAlJWVtc3OzvSHI/f39JcuWLdu3Zs2a77AVngwCHQAAesWZM2c4cXFxIYmJiRv011XvCPEhQ4ZU//nPf/4uKirqX2KxuBRrv2cg0AEAoMdIJBLL7777zj8hIeHNoqKip4271CMiIn5YsmRJ/Pz589OxxnseAh0AAJ5IXl6excGDBycdOnTo9Zs3b07XhzjDZrOV06dPP0chvmLFimNYy70LgQ4AAN2Wn5/PTkxMnJCQkPBaYWFhqCHEqRr38/OTvPTSSwmRkZHfeXp64uIvfQSBDgAAXUJ3Njt69OikI0eOrDSuxCnEJ06cKH3xxRcTFi1alDhmzJhqrNG+h0AHAICHSktLsz169OjU77///rWSkhJf4xCfMGFC/gsvvHCYKnFvb28V1mL/QqADAMB94uPjnZKSkv74888/v2J0wReGxWKpAgICshcsWHCUboyCSty0INABAAa53Nxcy+TkZO8TJ04szMrKimxra/PRrxGVpaWlbsaMGecoxOfPn3/M3d29abCvL1OFQAcAGIQOHz4sSElJmZKcnPx6eXm5j3FXurOzsyosLOxkREREUmRkZCp+H+YBgQ4AMAgUFhayf/zxR+Hx48fD09PTl7a0tNgbd6VPmjTpSnh4eNK8efNSAgMDb+A3YX4Q6AAAA9SRI0f4qampT//000+L5XJ5sHEVzuPxNLNnz06dO3fuifDw8GQ3NzcdfgfmDYEOADBAnD59mpOamjo+NTU1IicnZ1Fra6ulcYh7e3sXPvfccz8+++yzx0NCQqTY7gMLAh0AwExduHDB+syZM6POnDkTkp6evqShoWGIcYA7OjqqZ82adSo0NDRtzpw5KUKhUINtPXAh0AEAzIQhwM+ePRuSkZHxUl1dnYtxgNP10oOCgjJDQ0N/Dg0NTQ0ICJBj2w4eCHQAMCnffvut84ULF8RXrlwJlsvlT6tUqlFOTk63hELh5UmTJmUEBgZKly5dWjkYthrdrezcuXOjMzIyZmRmZv5bgNMpZZMnT748c+bM0zNnzjwTFhYm6ecmQz9CoAOASfj000+fSkhIeCU3N3fD77XH19c3OjIycu/GjRuvD6St98MPP3DPnTs3PiMjIywnJ+dP9+7d4zwswOnc8Dlz5lzu5yaDCUGgA0C/OnnypN327dv/Mzk5+ZvutiM8PPzVtWvX/m9YWJjZ3QCEbm6SmZnplpmZ+XRWVtac69evh+r/P/4twO3s7BroymzTp08/HxwcnI4KHB7FEmsHAPpLYmKiYMuWLe9JpdJ1j9ME2gkoKioap9FoPnrhhRfUprwhT5w4YX/x4sXRmZmZ07Oysl7UarXG3edE5eTkpAoKCtprCPCpU6f+0o9NBjODCh0A+gVV5uvXr//wccPcmFgsjvnss8/eN5VKPT093To7O9vj0qVLftnZ2fP054AzxtU3m81u8/HxuUqD2IKCgi5MmTLlIm5wAk8CgQ4A/SIiImLF43SzPwx1vyclJf1PX38XuqVoTk6Om0QiEV26dCmkoKBgXqfzvxlD9U3Hv6dOnXpBPxL9Sl+3FQY2BDoA9DkaALdp06bCnl7uJ5984t2bA+Wo8s7NzR2ek5Mjlkgks65duxai0+k4ncPb3t6+wdfXVxIQEHBp8uTJ2XQcHOeAQ29DoANAn/Pz8/u0K6PZu4tGv0skko1POp9bt26x8vLyeDKZzEsmk4nz8vJmyOXyoLa2tn+rvG1tbZvEYrHU39//sp+fXy4FuFgsLsWvCvoaAh0A+hSdZ/6Xv/xF2VvL3L9/v0t3zlM/f/68jUwmc8nLy/OWSqWB+fn5szud722gcnBwqKObmPj6+ub6+/tL/Pz8JCKRCOENJgGj3AGgT9FFY3pzeTT/pUuXpnV+/dq1a2yZTMbPy8sTymSySVKpNEShUDytf/u+qpvFYjFCoTB74sSJV0QikUwkEuXT9OjRo016JD0Mbgh0AOhTdAW43lyeRCKZdvDgQUlBQYHntWvXfK5duxZw48aNGca3CzWiEggEapFIdEwkEkknTpyYR93nOF0MzBG63AGgT7m6uv6gVCojnnSZTk5OjLOzM8PhcBidTsfU1NQwZWVlTGtr64M+3nGVtTFjxvxiCG6quim8vby86vALgIEAgQ4AfcrCwqKgra3NpyvL5HK5jIuLC2Nvb8+w2WymoaGBqaioYGprax/6N1ZWVuVPPfVUIZ3jPX78+IJx48YVjhs37uqECRPKsaVhIEOgA0Cf6lyhOzo6dlTatra2DB27ptBWqVRMdXX1I5vF5/NpXoydnR1D/49pNBqmpKSE5ne1oqJiPLYqDDY4hg4AvY5GksvlcsEvv/wynO6axuVyIyorKztCmLrK6fEgFNYU2lSpW1hYME1NTUxVVRWjVCo7qvQHVepCoRC3DIVBCYEOAE9ELpezFAqFjUKh4CsUCtc7d+54FhUVjVYoFOLi4uJJDxmM9hsej3dft3pjY2NHhU4PqtZv377drebRaWXYojAYIdAB4JGuXr3KVigUtgqFwrGoqMhVoVB4KRSKcXfu3JlUVlbm84CLrRjruGa5m5ubdNSoUXKqnq2srFrOnj27iSp0tVrdUaXTo6cEBgZewBaFwQiBDjCIXbp0yaq0tNS2uLhYUFZW5lxSUjKitLTU6+7du94lJSVi/R3BmEcFtrW1dYu7u3u2l5dXkZeX1x0vLy/FyJEj73h6etLzolGjRt137nZxcbHd/Pnzn75582ZoT695X1/f1FmzZp3BbxoGIwQ6wABE99ouLy+3KSsrcygtLR1y9+5d15KSkpFlZWUji4uLRRUVFWMfcA3yzjru/MXlcus8PDzOGQLb09OzWB/cRRTcI0aMaOrOGvTw8GiIjIxMyM3N7fFAp/nS/Ht6vgDmAIEOYCZkMplFWVmZTUVFhX1lZSWPKmqlUumiVCqHl5aWjq6srBylVCrHPuBOXw+isrCwaHN1dZWOGDGidPjw4aUeHh4lw4YNu+vu7l5Cz+n1cePG9colWpcsWRKXnp4enJycvKyn5hkeHh5L8+2p+QGYGwQ6QD/Jzc21rKystFapVLZVVVXcqqoqnkqlGlpVVeWkUqncKioqhJWVlSMppH/nOLWxjsuWuri4XHV2dla6ubmVDxs2rHz48OF3KaAprIcNG9YR3t2trHsSLXvt2rXbi4qKPOkSrE86a7FYfIrm15/fCaC/IdABnhB1b9fU1Fip1WprtVrNqampsa+uruZVVVUNValUHeFcWVnpVVVV5V5VVSVsbGzk65fYlYBmDAPLXFxc8p2dnVUUyK6urkpnZ+dKmnZxcVHSg6pq/fst5rBNw8LCJBqNZsuWLVuYJwl1CvPNmzdvofn1bAsBzAsuLAODGp1ypdFo2Fqt1rKurs5Sq9VaUyCr1Wr7mpoanlqtFtTU1AxRq9VOarXauaamZoRarR6uVqvd7927x9Gvu64GM2M4Lm1nZ9fg5OSkGjp0aDVV0vrpKnqun1bRv/rgpkpbN1C308mTJ/22b9++9nG636mbnSpzhDkAw7B8fHy22dra1vH5fCWHw2mwt7fX8ni8Whsbm0YaDOPg4FDP4XBaeDxeg52dXYuNjU2rQCBopuNvfD5fZ2Vl1e7g4NAmFAqxZwC9isK3qamJ1djYyK6trbVsaWmxoACur6+3pumamhpuQ0MDR6vV2tfV1XHVavUQrVbL12q1Q+vq6hy1Wi0F8witVutmFMZMNwPZoCOY6XaadHMPejg6OqqNpmuGDBlSbQhmelD1TM/d3d3RLdzJ3bt3OXFxcUsSEhIiuzJYjkaz0wA4OmaObnaAX7EYhumpIL5h/ITL5SotLS2bBQJBKZvN1gkEgnJLS8sWLpdbRe8LBIKOY320A2Ftbd1sbW2ts7e3r6PXBAJBx0mpDg4OjVZWVjraiaCdCTab3c7n85vpPf30b1WLo6Pjb3dkwM5F76FQpZm3tLSw6uvr2TSt0+lYVOG2t7ez1Gq1Db2mVqttqfdHq9Xa6XQ6i/r6ek5LS4t1Y2OjbVNTk01zc7NtQ0ODvU6ns6LQbW1ttdZoNEMbGhr49B4Fb3NzM6++vn5Ipy/zOOFrTGWYtrGxaaFA5vP5ah6Pp9HvwNZxuVyNPpxrDCHt6OhY3Tm4nZ2d20xs85g9OqXt9OnTMy9cuBB45cqVSXK5XEiHLWiHiM5hp4vG0HnmdGoaRrMD3I91+fLlkbW1tbympiZOfX29g0aj4TU3N1trtVpeXV2dA72u0Wio8rFrbm7mUBdka2srVUiCe/fuUTelA71O7+s/Y91pGU59vM5vPOwNw06G4TmPx6uwsLBoNv4Mj8ertLCwaO30d1W0M2L8moODQ62VldW97jZOIBBUs1is3w2CpqYm28bGRvuuzretrc2itrbWsfPrFJIUlp3m7dDY2OjQ6XOura2tHWFcV1fn3KmCNfakgdpVKuPPUdBSAFP4cjicJltb2yaapnOgKYhpZ5CmqTKm7mxDOFPwUkAbh7VQKOy5q5gAAJiIXj2Gfvv2bV5bWxubdgJ0Oh0dn+wIEXre3t7Orq+vt6OqjR60M0FtofeYX0OFSzsMhp0Fmg/teDC/hlfHDoVhOTU1Nb9NG+bN/BpSPNr5eEQT+3pnw5SpHtY2CkgKU5rWh2lHZUQBam9v3zFNt6aksNT3sHRcSIT+pZ0XLperpffps/Q39Pc0H5onzdvwt3QYhypl/fKaELwAAF03aAfFKRQKh85hr98BuG/kP+2E0M6I8WvUK3Hv3r3OPRG/S7+z0eXPGyrRrn6eRkJT1dr5dQpJCssHzPu+LksEKACAmWIY5v8AKzrwWG5QUqYAAAAASUVORK5CYII="
                    />
                  </svg>
                </div>
                <div className="flex flex-col w-full   bg-white rounded-2xl shadow-lg">
                  <div className="text-xl pl-4 pt-4 font-semibold">
                    New purchase
                  </div>
                  <div className="text-sm pl-4 text-neutral-500">
                    0 Task needed
                  </div>
                  <div className="flex w-full h-full items-end justify-end p-4">
                    <TbBasketDollar className="size-16 justify-end" />
                  </div>
                </div>
                <div className="flex flex-col w-full  bg-white rounded-2xl relative shadow-lg">
                  <div className="text-xl pl-4 pt-4 font-semibold">
                    + Commision
                  </div>
                  <div className="flex flex-row gap-4 p-4">
                    <div className="flex w-fit">
                      <div className="flex size-12 rounded-xl bg-neutral-200" />
                    </div>
                    <div className="flex flex-col w-full justify-center gap-2">
                      <div className="flex h-4 w-[50%] rounded-xl bg-neutral-200" />
                      <div className="flex h-4 w-[75%] rounded-xl bg-neutral-200" />
                    </div>
                  </div>
                  <div className="flex w-full text-blue-500 font-semibold text-sm justify-end pb-4 pr-4">
                    Withdraw
                  </div>
                  <div className="absolute top-2 left-2 flex flex-col w-full  bg-white rounded-2xl shadow-lg">
                    <div className="text-xl pl-4 pt-4 font-semibold">
                      + Commision
                    </div>
                    <div className="flex flex-row gap-4 p-4">
                      <div className="flex w-fit">
                        <div className="flex size-12 rounded-xl bg-neutral-200" />
                      </div>
                      <div className="flex flex-col w-full justify-center gap-2">
                        <div className="flex h-4 w-[50%] rounded-xl bg-neutral-200" />
                        <div className="flex h-4 w-[75%] rounded-xl bg-neutral-200" />
                      </div>
                    </div>
                    <div className="flex w-full text-blue-500 font-semibold text-sm justify-end pb-4 pr-4">
                      Withdraw
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex flex-col w-full  bg-white rounded-2xl shadow-lg">
                    <div className="text-xl pl-4 pt-4 font-semibold">
                      + Commision
                    </div>
                    <div className="flex flex-row gap-4 p-4">
                      <div className="flex w-fit">
                        <div className="flex size-12 rounded-xl bg-neutral-200" />
                      </div>
                      <div className="flex flex-col w-full justify-center gap-2">
                        <div className="flex h-4 w-[50%] rounded-xl bg-neutral-200" />
                        <div className="flex h-4 w-[75%] rounded-xl bg-neutral-200" />
                      </div>
                    </div>
                    <div className="flex w-full text-blue-500 font-semibold text-sm justify-end pb-4 pr-4">
                      Withdraw
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black mt-4 relative pb-16 lg:pb-0">
                <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                  <svg
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 392.533 392.533"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M300.089,153.571H159.741l-10.343,19.329c-9.762,18.295-33.293,26.246-53.075,14.61 c-12.283-7.37-18.941-20.493-18.36-33.939H33.358c-6.4,0-11.572,5.172-11.572,11.572v166.659c0,6.4,5.172,11.572,11.572,11.572 h266.731c6.4,0,11.572-5.172,11.572-11.572V165.143C311.725,158.808,306.554,153.571,300.089,153.571z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#56ACE0" }}
                        d="M264.21,85.628c-3.232,2.909-7.887,3.62-11.895,1.875l-79.644-36.331 c-11.184-5.107-24.63-0.259-30.061,10.925l-41.374,85.851c-3.62,7.564-1.034,16.614,6.271,20.945 c8.857,4.913,19.006,1.099,22.626-6.271l27.152-50.554c9.503-17.002,30.707-19.329,44.154-6.594l26.376,26.246h72.469 c17.002,0,30.966,12.735,33.099,29.22l33.099-33.552l-70.659-70.465L264.21,85.628z"
                      ></path>{" "}
                      <path
                        style={{ fill: "#FFC10D" }}
                        d="M65.422,175.293c0,12.024-9.762,21.786-21.786,21.786v102.594c12.024,0,21.786,9.762,21.786,21.786 h202.667c0-12.024,9.762-21.786,21.786-21.786V197.079c-12.024,0-21.786-9.762-21.786-21.786"
                      ></path>{" "}
                      <g>
                        {" "}
                        <path
                          style={{ fill: "#194F82" }}
                          d="M160.517,220.868h31.677c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925 h-9.762v-3.62c0-6.012-4.848-10.925-10.925-10.925c-6.012,0-10.925,4.848-10.925,10.925v3.62h-0.129 c-16.614,0-30.061,13.511-30.061,30.061c0,16.614,13.511,30.061,30.061,30.061h12.412c4.59,0,8.275,3.685,8.275,8.275 c0,4.59-3.685,8.275-8.275,8.275h-31.677c-6.012,0-10.925,4.849-10.925,10.925s4.848,10.925,10.925,10.925h19.329v3.685 c0,6.012,4.848,10.925,10.925,10.925c6.012,0,10.925-4.848,10.925-10.925v-5.236c11.96-3.943,20.622-15.192,20.622-28.509 c0-16.614-13.511-30.061-30.061-30.061h-12.412c-4.59,0-8.275-3.685-8.275-8.275C152.242,224.553,155.927,220.868,160.517,220.868z "
                        ></path>{" "}
                        <path
                          style={{ fill: "#194F82" }}
                          d="M262.659,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-15.903C273.519,234.38,268.671,229.531,262.659,229.531z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#194F82" }}
                          d="M70.853,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 s10.925-4.848,10.925-10.925v-15.903C81.778,234.38,76.865,229.531,70.853,229.531z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#194F82" }}
                          d="M389.366,119.632l-85.592-85.527c-4.073-4.073-10.731-4.267-15.063-0.388l-33.939,30.901 l-73.115-33.293c-21.915-9.956-48.291-0.453-58.699,21.269l-38.141,79.192H33.358C14.998,131.786,0,146.784,0,165.143v166.659 c0,18.36,14.998,33.358,33.358,33.358h266.731c18.36,0,33.358-14.998,33.358-33.358V191.713l55.855-56.695 C393.632,130.751,393.568,123.899,389.366,119.632z M311.725,331.866c0,6.4-5.172,11.572-11.572,11.572H33.358 c-6.4,0-11.572-5.172-11.572-11.572V165.143c0-6.4,5.172-11.572,11.572-11.572H77.77c-0.517,13.446,6.077,26.57,18.36,33.939 c19.782,11.636,43.378,3.62,53.075-14.61l10.343-19.329h140.477c6.4,0,11.572,5.172,11.572,11.572v166.723H311.725z M171.378,131.786l5.107-9.438c2.65-3.62,5.818-4.073,9.503-1.422l10.925,10.796h-25.535V131.786z M333.188,161.006 c-2.069-16.485-16.097-29.22-33.099-29.22H227.62l-26.376-26.246c-13.446-12.735-34.521-10.537-44.154,6.594l-27.152,50.554 c-3.62,7.24-13.77,11.184-22.626,6.271c-7.176-4.331-9.891-13.382-6.271-20.945l41.438-85.851 c5.301-11.119,18.877-15.968,30.061-10.925l79.644,36.331c3.943,1.745,8.663,1.099,11.895-1.875l31.547-28.768l70.659,70.529 L333.188,161.006z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h3>New purchase</h3>
                </div>
                <div className="flex flex-row gap-4 p-4 pr-16">
                  <div className="flex w-fit">
                    <div className="flex size-16 rounded-xl bg-neutral-200" />
                  </div>
                  <div className="flex flex-col w-full justify-center gap-2">
                    <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                    <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                  </div>
                </div>
                <div className="absolute top-24 lg:top-16 left-4 lg:left-24 rotate-3 flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black">
                  <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                    <svg
                      height="30px"
                      width="30px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 392.533 392.533"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M300.089,153.571H159.741l-10.343,19.329c-9.762,18.295-33.293,26.246-53.075,14.61 c-12.283-7.37-18.941-20.493-18.36-33.939H33.358c-6.4,0-11.572,5.172-11.572,11.572v166.659c0,6.4,5.172,11.572,11.572,11.572 h266.731c6.4,0,11.572-5.172,11.572-11.572V165.143C311.725,158.808,306.554,153.571,300.089,153.571z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#56ACE0" }}
                          d="M264.21,85.628c-3.232,2.909-7.887,3.62-11.895,1.875l-79.644-36.331 c-11.184-5.107-24.63-0.259-30.061,10.925l-41.374,85.851c-3.62,7.564-1.034,16.614,6.271,20.945 c8.857,4.913,19.006,1.099,22.626-6.271l27.152-50.554c9.503-17.002,30.707-19.329,44.154-6.594l26.376,26.246h72.469 c17.002,0,30.966,12.735,33.099,29.22l33.099-33.552l-70.659-70.465L264.21,85.628z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#FFC10D" }}
                          d="M65.422,175.293c0,12.024-9.762,21.786-21.786,21.786v102.594c12.024,0,21.786,9.762,21.786,21.786 h202.667c0-12.024,9.762-21.786,21.786-21.786V197.079c-12.024,0-21.786-9.762-21.786-21.786"
                        ></path>{" "}
                        <g>
                          {" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M160.517,220.868h31.677c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925 h-9.762v-3.62c0-6.012-4.848-10.925-10.925-10.925c-6.012,0-10.925,4.848-10.925,10.925v3.62h-0.129 c-16.614,0-30.061,13.511-30.061,30.061c0,16.614,13.511,30.061,30.061,30.061h12.412c4.59,0,8.275,3.685,8.275,8.275 c0,4.59-3.685,8.275-8.275,8.275h-31.677c-6.012,0-10.925,4.849-10.925,10.925s4.848,10.925,10.925,10.925h19.329v3.685 c0,6.012,4.848,10.925,10.925,10.925c6.012,0,10.925-4.848,10.925-10.925v-5.236c11.96-3.943,20.622-15.192,20.622-28.509 c0-16.614-13.511-30.061-30.061-30.061h-12.412c-4.59,0-8.275-3.685-8.275-8.275C152.242,224.553,155.927,220.868,160.517,220.868z "
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M262.659,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-15.903C273.519,234.38,268.671,229.531,262.659,229.531z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M70.853,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 s10.925-4.848,10.925-10.925v-15.903C81.778,234.38,76.865,229.531,70.853,229.531z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M389.366,119.632l-85.592-85.527c-4.073-4.073-10.731-4.267-15.063-0.388l-33.939,30.901 l-73.115-33.293c-21.915-9.956-48.291-0.453-58.699,21.269l-38.141,79.192H33.358C14.998,131.786,0,146.784,0,165.143v166.659 c0,18.36,14.998,33.358,33.358,33.358h266.731c18.36,0,33.358-14.998,33.358-33.358V191.713l55.855-56.695 C393.632,130.751,393.568,123.899,389.366,119.632z M311.725,331.866c0,6.4-5.172,11.572-11.572,11.572H33.358 c-6.4,0-11.572-5.172-11.572-11.572V165.143c0-6.4,5.172-11.572,11.572-11.572H77.77c-0.517,13.446,6.077,26.57,18.36,33.939 c19.782,11.636,43.378,3.62,53.075-14.61l10.343-19.329h140.477c6.4,0,11.572,5.172,11.572,11.572v166.723H311.725z M171.378,131.786l5.107-9.438c2.65-3.62,5.818-4.073,9.503-1.422l10.925,10.796h-25.535V131.786z M333.188,161.006 c-2.069-16.485-16.097-29.22-33.099-29.22H227.62l-26.376-26.246c-13.446-12.735-34.521-10.537-44.154,6.594l-27.152,50.554 c-3.62,7.24-13.77,11.184-22.626,6.271c-7.176-4.331-9.891-13.382-6.271-20.945l41.438-85.851 c5.301-11.119,18.877-15.968,30.061-10.925l79.644,36.331c3.943,1.745,8.663,1.099,11.895-1.875l31.547-28.768l70.659,70.529 L333.188,161.006z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <h3>New purchase</h3>
                  </div>
                  <div className="flex flex-row gap-4 p-4 pr-16">
                    <div className="flex w-fit">
                      <div className="flex size-16 rounded-xl bg-neutral-200" />
                    </div>
                    <div className="flex flex-col w-full justify-center gap-2">
                      <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                      <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-44 lg:top-24 -left-4 lg:-left-16 -rotate-3 flex flex-col w-fit bg-white shadow-lg rounded-2xl text-black">
                  <div className="flex flex-row w-full bg-neutral-100 rounded-t-2xl text-sm font-semibold items-center gap-2 px-6 py-2">
                    <svg
                      height="30px"
                      width="30px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 392.533 392.533"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M300.089,153.571H159.741l-10.343,19.329c-9.762,18.295-33.293,26.246-53.075,14.61 c-12.283-7.37-18.941-20.493-18.36-33.939H33.358c-6.4,0-11.572,5.172-11.572,11.572v166.659c0,6.4,5.172,11.572,11.572,11.572 h266.731c6.4,0,11.572-5.172,11.572-11.572V165.143C311.725,158.808,306.554,153.571,300.089,153.571z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#56ACE0" }}
                          d="M264.21,85.628c-3.232,2.909-7.887,3.62-11.895,1.875l-79.644-36.331 c-11.184-5.107-24.63-0.259-30.061,10.925l-41.374,85.851c-3.62,7.564-1.034,16.614,6.271,20.945 c8.857,4.913,19.006,1.099,22.626-6.271l27.152-50.554c9.503-17.002,30.707-19.329,44.154-6.594l26.376,26.246h72.469 c17.002,0,30.966,12.735,33.099,29.22l33.099-33.552l-70.659-70.465L264.21,85.628z"
                        ></path>{" "}
                        <path
                          style={{ fill: "#FFC10D" }}
                          d="M65.422,175.293c0,12.024-9.762,21.786-21.786,21.786v102.594c12.024,0,21.786,9.762,21.786,21.786 h202.667c0-12.024,9.762-21.786,21.786-21.786V197.079c-12.024,0-21.786-9.762-21.786-21.786"
                        ></path>{" "}
                        <g>
                          {" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M160.517,220.868h31.677c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925 h-9.762v-3.62c0-6.012-4.848-10.925-10.925-10.925c-6.012,0-10.925,4.848-10.925,10.925v3.62h-0.129 c-16.614,0-30.061,13.511-30.061,30.061c0,16.614,13.511,30.061,30.061,30.061h12.412c4.59,0,8.275,3.685,8.275,8.275 c0,4.59-3.685,8.275-8.275,8.275h-31.677c-6.012,0-10.925,4.849-10.925,10.925s4.848,10.925,10.925,10.925h19.329v3.685 c0,6.012,4.848,10.925,10.925,10.925c6.012,0,10.925-4.848,10.925-10.925v-5.236c11.96-3.943,20.622-15.192,20.622-28.509 c0-16.614-13.511-30.061-30.061-30.061h-12.412c-4.59,0-8.275-3.685-8.275-8.275C152.242,224.553,155.927,220.868,160.517,220.868z "
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M262.659,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 c6.012,0,10.925-4.848,10.925-10.925v-15.903C273.519,234.38,268.671,229.531,262.659,229.531z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M70.853,229.531c-6.012,0-10.925,4.848-10.925,10.925v15.903c0,6.012,4.848,10.925,10.925,10.925 s10.925-4.848,10.925-10.925v-15.903C81.778,234.38,76.865,229.531,70.853,229.531z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#194F82" }}
                            d="M389.366,119.632l-85.592-85.527c-4.073-4.073-10.731-4.267-15.063-0.388l-33.939,30.901 l-73.115-33.293c-21.915-9.956-48.291-0.453-58.699,21.269l-38.141,79.192H33.358C14.998,131.786,0,146.784,0,165.143v166.659 c0,18.36,14.998,33.358,33.358,33.358h266.731c18.36,0,33.358-14.998,33.358-33.358V191.713l55.855-56.695 C393.632,130.751,393.568,123.899,389.366,119.632z M311.725,331.866c0,6.4-5.172,11.572-11.572,11.572H33.358 c-6.4,0-11.572-5.172-11.572-11.572V165.143c0-6.4,5.172-11.572,11.572-11.572H77.77c-0.517,13.446,6.077,26.57,18.36,33.939 c19.782,11.636,43.378,3.62,53.075-14.61l10.343-19.329h140.477c6.4,0,11.572,5.172,11.572,11.572v166.723H311.725z M171.378,131.786l5.107-9.438c2.65-3.62,5.818-4.073,9.503-1.422l10.925,10.796h-25.535V131.786z M333.188,161.006 c-2.069-16.485-16.097-29.22-33.099-29.22H227.62l-26.376-26.246c-13.446-12.735-34.521-10.537-44.154,6.594l-27.152,50.554 c-3.62,7.24-13.77,11.184-22.626,6.271c-7.176-4.331-9.891-13.382-6.271-20.945l41.438-85.851 c5.301-11.119,18.877-15.968,30.061-10.925l79.644,36.331c3.943,1.745,8.663,1.099,11.895-1.875l31.547-28.768l70.659,70.529 L333.188,161.006z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <h3>New purchase</h3>
                  </div>
                  <div className="flex flex-row gap-4 p-4 pr-16">
                    <div className="flex w-fit">
                      <div className="flex size-16 rounded-xl bg-neutral-200" />
                    </div>
                    <div className="flex flex-col w-full justify-center gap-2">
                      <div className="flex h-4 w-[60px] lg:w-[120px] rounded-xl bg-neutral-200" />
                      <div className="flex h-4 w-[150px] lg:w-[300px] rounded-xl bg-neutral-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col inset-0 items-start justify-start lg:px-16 lg:mt-8 w-full ">
            <div className="flex flex-row gap-2 items-center mt-16">
              <h3 className="text-4xl font-medium">Made from scratch with</h3>
            </div>
            <div className="flex flex-row justify-around items-center text-orange-500 mt-16 mb-4 w-full">
              <SiTypescript className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
              <FaReact className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
              <SiNextdotjs className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
              <SiTailwindcss className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
              <SiPrisma className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
              <BiLogoPostgresql className="size-10 lg:size-16 hover:scale-125 duration-500 transition-all ease-in-out" />
            </div>
            <p className="flex max-w-[750px] text-sm lg:text-lg font-normal  mt-8  mb-16 text-pretty ">
              Our SaaS platform was created using cutting-edge technologies for
              optimal performance and user experience. We built it with
              TypeScript, Next.js, and Prisma for efficient and scalable
              development. The UI components are crafted with React, providing a
              dynamic and responsive interface. Our platform features a
              comprehensive dashboard for managing profiles, events,
              appointments, orders, and payments, along with a notification
              system to keep users updated. This robust technology stack ensures
              a seamless and powerful solution for content creators and
              influencers.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between relative mt-16 ">
          <div className="flex flex-col inset-0 items-start justify-start mt-8 w-full ">
            <div className="flex flex-row gap-4 items-center lg:mt-16">
              <div className="flex size-10 bg-orange-500 rounded-full border-2 border-black" />
              <h3 className="text-2xl lg:text-4xl font-medium">
                2. Digital market | Store e-comm
              </h3>
            </div>
            <p className="flex max-w-[750px] text-sm lg:text-lg font-normal px-4 mt-8 text-pretty">
              Im excited to share my latest project: a digital products store
              that anyone can use and deploy with ease—no coding skills
              required! Its free and open-source, with secure admin dashboard,
              and you can find it on my GitHub here:
            </p>
            <div className="flex flex-col lg:flex-row gap-4 mt-12 px-4">
              <Link href="https://digimarket-kappa.vercel.app/" target="_blank">
                <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-white border border-orange-500 bg-orange-500 rounded-2xl">
                  Visit webiste
                  <MdOpenInNew className="size-10" />
                </div>
              </Link>
              <Link
                href="https://github.com/jalalDev7/digimarket"
                target="_blank"
              >
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
              objectFit="cover"
              alt="screenshot"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between relative my-8 lg:my-20">
          <div className="flex flex-col inset-0 items-start justify-start mt-8 w-full ">
            <div className="flex flex-row gap-4 items-center lg:mt-16">
              <div className="flex size-10 bg-orange-500 rounded-full border-2 border-black" />
              <h3 className="text-2xl lg:text-4xl font-medium">
                3. Winner picker | Tool
              </h3>
            </div>
            <p className="flex max-w-[750px] text-sm lg:text-lg font-normal px-4 mt-8 text-pretty">
              I have developed a web application using TypeScript, Next.js, and
              React.js. The purpose of this app is to pick winners from YouTube
              comments via a video link, using the Google API. It is free to use
              and publicly available on GitHub, providing a simple and
              transparent solution for selecting giveaway winners from YouTube
              comments.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 mt-12 px-4">
              <Link
                href="https://random-picker-ten.vercel.app/"
                target="_blank"
              >
                <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-white border border-orange-500 bg-orange-500 rounded-2xl">
                  Visit webiste
                  <MdOpenInNew className="size-10" />
                </div>
              </Link>
              <Link
                href="https://github.com/jalalDev7/random-picker.git"
                target="_blank"
              >
                <div className="flex flex-row gap-4 items-center justify-center px-8 py-3 text-xl font-semibold text-orange-500 border border-orange-500 rounded-2xl">
                  Github repo
                  <FaGithub className="size-10" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              className="size-[550px] "
            >
              <defs>
                <clipPath id="freepik--clip-path--inject-62">
                  <path
                    fill="#F9A948"
                    d="M217.98 192.41L173.71 360.2 223.69 330.21 252.25 372.34 248.68 195.98 217.98 192.41z"
                  ></path>
                </clipPath>
                <clipPath id="freepik--clip-path-2--inject-62">
                  <path
                    fill="#F9A948"
                    d="M278.99 193.69L349.54 352.23 302.95 328.69 273.96 376.78 249.26 202.13 278.99 193.69z"
                  ></path>
                </clipPath>
              </defs>
              <g>
                <path
                  fill="#F9A948"
                  d="M311.62 33.07s-75.94-17-146.28 32.35S63.36 200 35.89 268.6s-5.06 132.46 52.54 156.06 92.64-25.18 170.57-36.45 99.68-2.89 161.77-53.25 67.35-152.82 11.45-221.65-120.6-80.24-120.6-80.24z"
                ></path>
                <path
                  fill="#fff"
                  d="M311.62 33.07s-75.94-17-146.28 32.35S63.36 200 35.89 268.6s-5.06 132.46 52.54 156.06 92.64-25.18 170.57-36.45 99.68-2.89 161.77-53.25 67.35-152.82 11.45-221.65-120.6-80.24-120.6-80.24z"
                  opacity="0.7"
                ></path>
              </g>
              <g>
                <path
                  fill="#F9A948"
                  d="M217.98 192.41L173.71 360.2 223.69 330.21 252.25 372.34 248.68 195.98 217.98 192.41z"
                ></path>
                <g clipPath="url(#freepik--clip-path--inject-62)">
                  <path
                    fill="#fff"
                    d="M225.68 321.19L184.41 345.96 222.98 199.75 242.09 201.97 245.09 349.81 225.68 321.19z"
                  ></path>
                  <path
                    d="M249.5 236.32l-.82-40.32-30.68-3.59-9.47 35.89c3.38 6.81 5.7 15.86 11.63 17.79 8 2.58 18.65-10 27.47-10a10.24 10.24 0 011.87.23z"
                    opacity="0.3"
                  ></path>
                </g>
                <path
                  fill="#F9A948"
                  d="M278.99 193.69L349.54 352.23 302.95 328.69 273.96 376.78 249.26 202.13 278.99 193.69z"
                ></path>
                <g clipPath="url(#freepik--clip-path-2--inject-62)">
                  <path
                    fill="#fff"
                    d="M256.72 206.98L275.23 201.73 335.75 337.75 300.42 319.89 277.96 357.16 256.72 206.98z"
                  ></path>
                  <path
                    d="M279 193.69l-29.73 8.44 4.73 33.34h.44c8.82 0 19.52 12.53 27.48 9.95 6.1-2 8.38-11.53 11.93-18.4z"
                    opacity="0.3"
                  ></path>
                </g>
                <path
                  fill="#F9A948"
                  d="M343.31 150c0 8.82-15.33 15.11-17.92 23.06-2.67 8.25 5.94 22.33.94 29.2s-21.13 3.07-28.06 8.11-8.13 21.52-16.38 24.19c-8 2.59-18.66-10-27.48-10s-19.51 12.54-27.47 10c-8.25-2.67-9.52-19.19-16.38-24.19s-23-1.18-28.07-8.11 3.62-20.95.94-29.19c-2.58-8-17.91-14.25-17.91-23.07s15.33-15.11 17.91-23.06c2.68-8.25-5.93-22.33-.94-29.2s21.13-3.07 28.07-8.11 8.13-21.52 16.38-24.19c8-2.59 18.65 9.95 27.47 9.95s19.52-12.54 27.48-9.95c8.24 2.67 9.51 19.19 16.38 24.19s23 1.18 28.06 8.11-3.61 21-.94 29.19c2.61 7.92 17.92 14.21 17.92 23.07z"
                ></path>
                <path
                  fill="#fff"
                  d="M333.61 150c0 7.86-13.66 13.46-16 20.55-2.39 7.35 5.28 19.89.83 26s-18.82 2.74-25 7.23-7.24 19.17-14.59 21.56c-7.09 2.3-16.62-8.87-24.48-8.87S237 227.6 229.94 225.3c-7.35-2.39-8.48-17.1-14.6-21.56s-20.5-1.05-25-7.23 3.22-18.65.84-26c-2.31-7.09-16-12.69-16-20.55s13.65-13.46 16-20.55c2.38-7.35-5.29-19.89-.84-26s18.83-2.74 25-7.23 7.25-19.17 14.6-21.56c7.08-2.3 16.62 8.87 24.47 8.87s17.39-11.17 24.48-8.87c7.35 2.39 8.48 17.1 14.59 21.56s20.51 1 25 7.23-3.22 18.65-.83 26c2.35 7.09 15.96 12.69 15.96 20.59z"
                  opacity="0.6"
                ></path>
                <path
                  fill="none"
                  d="M343.31 150c0 8.82-15.33 15.11-17.92 23.06-2.67 8.25 5.94 22.33.94 29.2s-21.13 3.07-28.06 8.11-8.13 21.52-16.38 24.19c-8 2.59-18.66-10-27.48-10s-19.51 12.54-27.47 10c-8.25-2.67-9.52-19.19-16.38-24.19s-23-1.18-28.07-8.11 3.62-20.95.94-29.19c-2.58-8-17.91-14.25-17.91-23.07s15.33-15.11 17.91-23.06c2.68-8.25-5.93-22.33-.94-29.2s21.13-3.07 28.07-8.11 8.13-21.52 16.38-24.19c8-2.59 18.65 9.95 27.47 9.95s19.52-12.54 27.48-9.95c8.24 2.67 9.51 19.19 16.38 24.19s23 1.18 28.06 8.11-3.61 21-.94 29.19c2.61 7.92 17.92 14.21 17.92 23.07z"
                ></path>
                <circle cx="254.41" cy="149.96" r="66.04" fill="#fff"></circle>
                <path
                  fill="#263238"
                  d="M222.94 119c7.89-3.88 14.12-6.09 24.23-18.14h24.64v78.36h12.87v18.41h-55.37v-18.37h13.84V127.9l-13.84 6.51z"
                ></path>
              </g>
              <g>
                <ellipse
                  cx="359.21"
                  cy="455.1"
                  opacity="0.2"
                  rx="93.82"
                  ry="18.38"
                ></ellipse>
                <path
                  fill="#F9A948"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M445.94 221.44c-1.47-6.87-2.29-6.54-10.63-9.16a104.38 104.38 0 00-28.3-4.75 60.39 60.39 0 00-18.33 2.13s-10.48 1.31-18 3c-6.45 12.88.83 30.56.83 30.56s9.16 20.12 9.16 30.43-7.86 28.3-8.18 28.79-24.21 42-30.27 56.11-6.21 19.8-2.94 25.36 40.57 56.93 40.57 56.93-10 11.45-14.56 14.4-10.29 3.41-8.29 5.87 15.21 3.43 18.81 2.61 11.78-8 16.52-11.28 9-5.57 7.2-9.66-5.73-7.69-7.36-11-7.53-12.76-10.8-24.54-5.72-18.81-9.49-25.19-6.38-8.83-6.38-8.83 14.07-12.93 21.6-19.47 14.23-11.94 14.23-11.94 25.52-26.18 27.81-31.91 8.51-23.72 13.09-39.42 5.18-42.17 3.71-49.04z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M371.51 243.2s-7.28-17.68-.83-30.56a44.22 44.22 0 00-5.23 1.44c-6.21 2.29-36.48 15-39.59 16.36s-8.83 6.05-7.36 11 3.76 6.38 14.23 6.54 38.78-4.78 38.78-4.78z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M349.26 153.88s9.32 4.74 9.81 5.56-.16 2.61-.82 3.92-4.25 4.42-5.88 5.07-.33-4.25-.33-7-4.75-5.07-5.24-6.38 1.2-1.67 2.46-1.17z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M331.42 246.8l-3.59 1c-3.6 1-9.82 1.47-10.8.16s-4.42-18.65-3.93-28.3 14.89-50.88 16.53-54 15.7-13.25 15.7-13.25 1.8-.49 3.93 1.48 8.18 6.05 7.85 7.68-3.76 6.55-5.24 7.86-3.76 0-3.76 0-1.8 3.1-4.09 4.09-7.69-.17-7.69-.17-4.41 27.49-3.11 38 3.93 22.74 2 28.63"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M344 173.51c2.29-1 4.09-4.09 4.09-4.09s2.29 1.31 3.76 0 4.91-6.22 5.24-7.86-5.73-5.72-7.85-7.68-3.93-1.48-3.93-1.48-14.07 10.15-15.7 13.25c-.4.76-1.55 3.77-3.08 8a20.05 20.05 0 009.21 3.47c.34-2.36.57-3.81.57-3.81s5.42 1.18 7.69.2z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M358.57 163.05s2.29.65 1.64 2.29-3.11 3.43-4.58 3.27-1.8-2.13-.82-3.76 2.94-2.46 3.76-1.8z"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M348.11 169.42s-1.31-1.48-.49-2.62 2.45-.33 2.45-.33l-2.45-3.11"
                ></path>
                <circle
                  cx="367.54"
                  cy="279.58"
                  r="9.26"
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                ></circle>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M365.11 270.5a19 19 0 0111.51-11.32c9.16-3.42 24.08-7 32.71-18.33s5.51-33 5.51-33l6.71.91s-.9 21.66-5.21 33.16-17.44 18-27.86 19.78-19.05 1.61-23.37 8.8z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M365.11 270.5s-1.08-7.37 5.57-15.1 17.44-16.17 19.24-24.08-.18-21.57-.18-21.57l5.75-1.62a52.35 52.35 0 01.18 21.75c-2.52 11.14-8.63 16.54-16.18 22.29s-14.38 18.33-14.38 18.33z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M439.23 215.55a18.57 18.57 0 00-6.7 12.92c-.66 8.51.81 30.92.81 39.76s-6.54 22.08-5.56 28.95 10 15.05 14.89 9.66 8.67-22.74 10.47-45.16.33-37.46-2.45-42-7.37-7.57-11.46-4.13z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M444.63 300.13c-1 5.56-4.09 11-7.36 12.1s-7-3.43-12.27-11.94-8-17.83-10-27.65a265.75 265.75 0 01-3.92-27.15c-.17-3.76 0-4.75 2.12-7s9.82-4.09 9.82-4.09l1.31-2.29c.65-1.14 4.09-1.8 5.72-.81s2.46 6.38 2.46 6.38 4.58 2.61 4.58 5.23-2.95 5.4-6.22 9.82-4.25 2.78-4.58 6.87 2 9.49 6.05 13.25 10 8.34 11.62 15.7"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M426.28 260.46v-.9c.33-4.09 1.31-2.46 4.58-6.87s6.22-7.2 6.22-9.82-4.58-5.23-4.58-5.23-.82-5.4-2.46-6.38-5.07-.33-5.72.81l-1.32 2.29s-7.69 1.8-9.82 4.09-2.29 3.28-2.12 7c.1 2.44.9 9 2 16a24.38 24.38 0 0013.22-.99z"
                ></path>
                <path
                  fill="#787878"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M429.3 309.43c-19.7-6.59-44.11-9.71-55.15-10.87-.91 2.26-1.57 3.72-1.66 3.86-.33.49-24.21 42-30.27 56.11s-6.21 19.8-2.94 25.36 40.57 56.93 40.57 56.93c6-.73 11.35-4.76 13.67-6.75a16.46 16.46 0 01-1.4-2.25c-1.64-3.27-7.53-12.76-10.8-24.54s-5.72-18.81-9.49-25.19-6.38-8.83-6.38-8.83 14.07-12.93 21.6-19.47 14.23-11.94 14.23-11.94 25.52-26.18 27.81-31.91c.07-.16.13-.33.21-.51z"
                ></path>
                <path
                  fill="#F9A948"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M393.52 434.07c-1.88 3.56-9.74 10.35-9.74 10.35s-2-2.13-3.11-3.6c-.87-1.11-1.17-.83-1.27-.62l.45.62s-10 11.45-14.56 14.4-10.29 3.43-8.29 5.89 15.21 3.43 18.81 2.61 11.78-8 16.52-11.28 9-5.57 7.2-9.66c-1.45-3.17-4.12-6.05-6.01-8.71z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M373.14 461.76c-3.39.88-12.46-1-16.5-2a1.21 1.21 0 00.31 1.32c2 2.45 15.21 3.43 18.81 2.61s11.78-8 16.52-11.28 9-5.57 7.2-9.66c-.21-.47-.45-.94-.71-1.4-.85 1.14-1.85 2.42-2.89 3.69-2.94 3.63-18.32 15.57-22.74 16.72z"
                ></path>
                <path
                  fill="#787878"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M419.28 317.63s-14.28-12.76-28.14-17.34-39.76-3.27-46.3-.65-3.76 11-3.6 20.61 6.71 27.48 9.49 37.63 3.76 21.43 4.09 25.35.33 5.4.33 5.4-18.16-.16-22.91-.65-7.52 1-8.34 2.62a4.12 4.12 0 00-.49 2.78s12.27 8 22.9 12.43 20.78 7.2 22.09 6.54 2.61-10.63 2.61-17.5 2.13-39.92 2.13-45.81v-15.21s31.74 16.85 44.34 12.92 11.82-37.32 11.82-37.32l-10.19-3.25"
                ></path>
                <path
                  fill="#F9A948"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M355.15 388.63s-18.16-.16-22.91-.65-7.52 1-8.34 2.62a4.12 4.12 0 00-.49 2.78s12.27 8 22.9 12.43 20.78 7.2 22.09 6.54c1.15-.57 2.3-8.37 2.56-14.92-6.74-5.74-15.81-8.8-15.81-8.8z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M368.4 412.35c.51-.25 1-2 1.46-4.32a59.27 59.27 0 01-16.68-3.69c-9.25-3.49-24.32-10.82-29.46-13.35a4 4 0 00-.31 2.39s12.27 8 22.9 12.43 20.78 7.19 22.09 6.54z"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M373.14 333.83s-.16-14.23-7.36-21.27"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M362 191.9s3.9 12.79 5.62 17.31 1.87 7 7.32 12.16 6.55 9.2 12.16 9.66 7.8-3 7.8-3 .78 5.15 3.74 6.7 9.51 1.87 13.56-6.08 1.56-11.84.16-15.58-3.28-8.42-3.28-8.42a15.79 15.79 0 003-9.67c-.31-5.45-1.87-6.08-3.58-6.55s-6.55 2.65-8.57 1.72 1.4-6.24-4.06-6.7-11.07 7-20.89 7.79-13.34-2.3-12.98.66z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M394.85 228.07l8.88-10c3.9-4.36 3.9-10.91 3.9-10.91"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M377.39 207.18s1.09 5 0 7.48-.16 3.75 1.71 3.9a4.74 4.74 0 002.65-.31"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.934"
                  d="M383.16 207.65s1.09-3.27 6.23-2.34M370.22 208.58s3-1.71 5.14.63"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M367.57 203.6s3.58-3.59 7.79 2M380.35 204.06s1.71-5.76 7-5M385.18 219.81s8.11-1.56 9.67-11.07c0 0 4 6.41 1.23 11.55s-6.53 4.35-6.53 4.35z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M367.25 173.82s4.06-5.61-.46-4.83-12 9.51-11.07 17.77 17.61 10.13 25.72 8.89a24.07 24.07 0 0012.94-6.4s-3 6.4.16 7.17 4.67 0 4.67 0 3 6.71 3.9 4.68-.22-3.62.31-6.23c1.25-6.08 5.77-5.93 5.77-5.93s.78-15.12-4.83-21-20.27-6.55-26.35-3.43-10.76 9.31-10.76 9.31z"
                ></path>
              </g>
              <g>
                <ellipse
                  cx="131.92"
                  cy="455.1"
                  opacity="0.2"
                  rx="93.82"
                  ry="18.38"
                ></ellipse>
                <path
                  fill="#F9A948"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M69.65 434.9s-12.21 6.3-17.09 12 .61 9.56 10.58 6.31 13.63-17.29 13.63-17.29-3.46-2.85-7.12-1.02zM199.25 434.9s12.21 6.3 17.09 12-.61 9.56-10.58 6.31-13.63-17.29-13.63-17.29 3.46-2.85 7.12-1.02z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M122.36 176.91l-.15 10.85a126.27 126.27 0 01-13.41-3.92c-7.23-2.56-9-.3-13.26 3.31S71.14 214 69 215.93s-8.74 12-8.74 17.17 4.07 8.74 12.2 4.37 23.05-16.12 23.05-16.12 7.69 22.9 7.84 26.82-5.28 12.5-8.14 20.34-4.21 29.68-6.15 37.21-6.93 15.37-10.84 35.4-4.22 35.41-5.12 39.32S71 399.28 69.63 411s-2.26 24.7-.75 26.06 5.87 2.26 8 0 17.91-42.3 21.12-51.49 24.56-50.78 26.37-55.45 5.07-11.12 5.07-11.12 11.15 20.79 14.91 31.18 24.41 50.47 30.14 61 15.06 24.55 17.62 25.91 6.69.52 7.14-2.19-3.82-44.36-7-52.2-5.27-12.2-6.17-17.92-9.65-52.58-13.71-61.17-4.67-10.24-4.82-10.7-3-10.54-7.24-20.79-8.88-19.43-8.88-19.43l7.68-21.09s11.3 23.35 16.57 28.32 22.45 26.36 22.45 26.36l5.42-5.42-17.47-30s-3.77-19.43-8.29-31.64-7.83-21.24-13.71-24-18.53-3.47-20.79-4.37-1.51-1.66-1.66-2.11.76-10.54.76-10.54-8.39 2.93-12.39 1.72a63.28 63.28 0 01-7.64-3.01z"
                ></path>
                <path
                  fill="none"
                  stroke="#696969"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M154.81 285.19L137.4 307.76"
                ></path>
                <path
                  fill="none"
                  stroke="#696969"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M99.36 287.13L118.71 307.12"
                ></path>
                <path
                  fill="none"
                  stroke="#696969"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M102.59 298.73L121.93 310.98"
                ></path>
                <path
                  fill="#F9A948"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M151.44 252.69l7.68-21.09s-4.07-28.6-11.82-39.9a24.83 24.83 0 01-4-.78c-2.26-.9-1.51-1.66-1.66-2.11s.76-10.54.76-10.54-8.4 2.86-12.4 1.65a63.28 63.28 0 01-7.68-3l-.15 10.85s-2-.45-5.12-1.31c-3.31 4.25-16.68 21.88-21.55 34.9 0 0 7.69 22.9 7.84 26.82.11 2.84-2.71 8.12-5.36 13.8 4.91 3.29 13.68 7.18 28 7.44 17.19.31 26.41-3.65 30.49-6.16-2.78-6.14-5.03-10.57-5.03-10.57z"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M141.26 203c3-2.92 3.92-7.35 3.87-11.66a9.74 9.74 0 01-1.83-.43c-2.26-.9-1.51-1.66-1.66-2.11s.76-10.54.76-10.54-8.4 2.87-12.4 1.66a63.28 63.28 0 01-7.68-3l-.15 10.85s-.63-.14-1.72-.41c-.83 3.2-2.43 11.81 2.77 16.53 5 4.48 13.37 3.61 18.04-.89z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M116.63 186.25s-.45 11.3-3.31 17.48-5.88 7.08-5.88 7.08a27.64 27.64 0 003.77 2c2.41 1 2.86.6 2.86.6s4.52-2.86 6.63-10.4a49.57 49.57 0 001.51-15.21z"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M125.11 128.51s-.19-5.11 9.09-7.57 17.44 4.92 18.19 9.85-.75 7.58-1.89 8-6.06-4.55-13.45-7-12.89-1-11.94-3.28z"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M115.63 153.34s-1.13-3.41-4-1.33-1.52 8.53-.19 10.42 4 1.9 4.54.57.57-8.91.57-8.91"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M115.26 136.85s-3.23 4.74-1.71 9.48.76 8.14.76 13.64 4 12.88 6.63 17.43 7.94 9.95 13.62 8.25 14-13.56 15.56-19.05.95-6.82 1.89-9.1a32.54 32.54 0 002.28-12.69c0-6.25-7.39-14.59-16.49-17.24s-19.13 0-22.54 9.28z"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M149.74 158.83s1.52-4.55 4.36-3.22 1.7 8.34-.57 10.42-4.74 1.14-4.74-.19"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M128.33 164.89a5.11 5.11 0 007 .19M126.67 169.32s4.59 4 10.91-.09"
                ></path>
                <ellipse
                  cx="125.28"
                  cy="158.06"
                  fill="#263238"
                  rx="1.39"
                  ry="2.25"
                ></ellipse>
                <ellipse
                  cx="138.79"
                  cy="158.06"
                  fill="#263238"
                  rx="1.39"
                  ry="2.25"
                ></ellipse>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M121.47 152.52a6.75 6.75 0 016.84-1.3M135.41 151.74s5.11-2.25 7.88 2.25"
                ></path>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M137.8 127.57c-9.09-2.66-19.13 0-22.54 9.28 0 0-3.23 4.74-1.71 9.48a19.16 19.16 0 01.88 4.64l.26.28a8.47 8.47 0 002.08-4.55c.38-2.84 6.63-10 16.87-9.28s15.15 8 16.1 12.7-1.51 8.14 2.27 7.38a32.54 32.54 0 002.28-12.69c0-6.25-7.39-14.59-16.49-17.24z"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M203.56 280.86l9.79 2a3.39 3.39 0 012 1.22c1.65 2.07 5.35 6.82 5.7 8.22.45 1.81.45 2.26-.15 2.26a14.93 14.93 0 01-2.41-.3c-.76-.15-3.62-4.22-5.88-4.37a33.75 33.75 0 01-6.48-1.66s4.82 3.62 5.88 4.52.9 1.36.15 1.66-1.81-.15-2.86-.6-1.51-.61-5.13-2.11-6-5.43-6-5.43z"
                ></path>
                <path
                  fill="none"
                  stroke="#696969"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M165.15 215.48L159.12 231.6 164.54 221.96"
                ></path>
                <path
                  fill="none"
                  stroke="#696969"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M95.54 203.57L95.54 221.35 92.53 208.4"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M125.37 215.63a6.92 6.92 0 005.43 1.05c3-.75 11.14-6.63 16.12-13.26s7.23-10.42 7.23-10.42l-8-2.41s-4.22 11.45-9.79 16.42-13.86 7.38-13.86 7.38z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M88.16 161.84s35.56 52.88 37.21 53.79a26.61 26.61 0 002.41 1.2s-8.43 0-10.84-2-21.7-37.81-23.36-41.73a86.87 86.87 0 00-4.52-8.73l-1.5-2.87z"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M88.16 161.84s14.77 42.49 16 45.5 5.42 5.43 7.68 5.73l2.26.3s-10.69-17.48-15.36-28-10.58-23.53-10.58-23.53z"
                ></path>
                <circle
                  cx="84.17"
                  cy="154.39"
                  r="9.27"
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                ></circle>
                <path
                  fill="#263238"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M75.51 235.66c-4.82 2.57-14.32 8.59-16.12 5.88s-1.51-18.08 2.86-27.27 12.25-25.62 12.5-28.44-.38-21.51-.12-22.28 8.06-5 8.06-5a2 2 0 012.18.89c.77 1.28 4.23 5 4.1 6s-.26 1.79-.26 1.79 2.05 1.16 1.54 3.08-1.41 7.81-2.56 8.58a4.83 4.83 0 01-3.08.38 11.14 11.14 0 01-1.15 4c-.89 1.41-1.79 2.18-1.92 2.56s-2.87 44.71-4.38 46.22"
                ></path>
                <path
                  fill="#b2b2b2"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M88.71 167.26s.13-.76.26-1.79-3.33-4.74-4.1-6a2 2 0 00-2.18-.89s-7.81 4.22-8.06 5 .26 15.95.18 21a7.5 7.5 0 006.71 1.42v-.17c.13-.38 1-1.15 1.92-2.56a11.14 11.14 0 001.15-4 4.83 4.83 0 003.08-.38c1.15-.77 2-6.66 2.56-8.58s-1.52-3.05-1.52-3.05z"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M88.71 167.26L82.18 164.7"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M81.41 168.29s6.79 1.53 7.43 2.56a4.89 4.89 0 01.64 2.3M81.8 172s5.12 1.15 5.89 1.79.89 3.33.89 3.33"
                ></path>
                <path
                  fill="none"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M84.61 179.3L84.61 177.25 86.02 177.12"
                ></path>
                <path
                  fill="#fff"
                  stroke="#263238"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.967"
                  d="M125.22 270.47l-1.81 24.7 2.87.45s0-26.06-1.06-25.15zM127 271.37l.9 27.42 4.52-.15-4.37-27s-.72-2.53-1.05-.27z"
                ></path>
              </g>
              <g>
                <path
                  fill="#9c9c9c"
                  d="M203.83 51.72L208.97 56.81 211.81 52.3 203.83 51.72z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M139.48 60.27L144.62 65.35 147.46 60.84 139.48 60.27z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M99.02 39.57L104.16 44.66 107 40.14 99.02 39.57z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M261.84 79.1L258.61 85.57 263.78 86.86 261.84 79.1z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M311.13 33.3L307.9 39.77 313.07 41.06 311.13 33.3z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M204.21 89.8L199.18 84.6 196.25 89.05 204.21 89.8z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M174.73 91.73L169.71 86.53 166.77 90.98 174.73 91.73z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M238.24 68.56L244.12 64.35 240.15 60.79 238.24 68.56z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M172.03 47.61L177.91 43.41 173.94 39.84 172.03 47.61z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M284.58 85.09L290.46 80.89 286.49 77.32 284.58 85.09z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M49.19 88.56L45.96 95.02 51.13 96.32 49.19 88.56z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M82.05 93.39L78.82 99.86 83.99 101.15 82.05 93.39z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M64.05 71.22L59.02 66.02 56.08 70.47 64.05 71.22z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M201.91 122.23L207.8 118.03 203.83 114.46 201.91 122.23z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M358.59 71.81L363.73 76.89 366.57 72.38 358.59 71.81z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M416.61 85.01L413.37 91.48 418.55 92.77 416.61 85.01z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M338.32 50.8L335.09 57.27 340.26 58.57 338.32 50.8z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M449.47 89.84L446.23 96.31 451.41 97.61 449.47 89.84z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M465.9 65.2L462.66 71.67 467.84 72.96 465.9 65.2z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M358.98 95.7L353.95 90.5 351.01 94.96 358.98 95.7z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M329.5 97.64L324.47 92.44 321.53 96.89 329.5 97.64z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M392.03 48.5L397.91 44.3 393.94 40.73 392.03 48.5z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M326.8 41.71L332.68 37.5 328.71 33.94 326.8 41.71z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M423.93 56.77L429.81 52.57 425.84 49.01 423.93 56.77z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M356.68 128.14L362.56 123.93 358.59 120.37 356.68 128.14z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M118.04 85.07L123.92 80.87 119.95 77.3 118.04 85.07z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M309.97 162.93L304.83 157.84 301.99 162.35 309.97 162.93z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M359.74 159.54L354.6 154.46 351.76 158.97 359.74 159.54z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M416.37 165.99L411.23 160.9 408.39 165.42 416.37 165.99z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M251.95 149.72L255.19 143.25 250.01 141.96 251.95 149.72z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M219.09 144.89L222.33 138.42 217.15 137.13 219.09 144.89z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M381.59 156.43L386.62 161.63 389.56 157.17 381.59 156.43z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M238.13 146.85L232.25 151.05 236.22 154.61 238.13 146.85z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M241.03 123.65L235.15 127.86 239.12 131.42 241.03 123.65z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M464.61 140.27L467.84 133.8 462.66 132.51 464.61 140.27z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M431.74 135.44L434.98 128.97 429.8 127.68 431.74 135.44z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M450.78 137.4L444.9 141.6 448.87 145.16 450.78 137.4z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M171.82 123.92L166.68 118.83 163.84 123.35 171.82 123.92z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M97.19 143.81L100.42 137.35 95.25 136.05 97.19 143.81z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M64.33 138.98L67.56 132.51 62.39 131.22 64.33 138.98z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M47.9 163.63L51.13 157.16 45.96 155.87 47.9 163.63z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M82.33 161.15L87.36 166.35 90.3 161.9 82.33 161.15z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M187 161.13L181.12 165.34 185.09 168.9 187 161.13z"
                ></path>
                <path fill="#F9A948" d="M77.48 145.15L81.45 148.71"></path>
                <path
                  fill="#F9A948"
                  d="M86.27 117.74L80.38 121.95 84.35 125.51 86.27 117.74z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M386.3 120.13L380.42 124.33 384.39 127.89 386.3 120.13z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M154.05 187.42L159.19 192.51 162.03 188 154.05 187.42z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M97.42 180.98L102.56 186.06 105.4 181.55 97.42 180.98z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M261.84 197.24L258.61 203.71 263.78 205 261.84 197.24z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M107.11 231.01L103.88 237.48 109.05 238.77 107.11 231.01z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M204.21 207.94L199.18 202.74 196.25 207.19 204.21 207.94z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M174.73 209.87L169.71 204.67 166.77 209.12 174.73 209.87z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M132.21 190.54L127.18 185.34 124.24 189.79 132.21 190.54z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M276.7 179.91L271.67 174.71 268.73 179.16 276.7 179.91z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M238.24 186.7L244.12 182.49 240.15 178.93 238.24 186.7z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M275.67 200.12L281.55 195.91 277.58 192.35 275.67 200.12z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M272.77 223.32L278.65 219.11 274.68 215.55 272.77 223.32z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M49.19 206.69L45.96 213.16 51.13 214.46 49.19 206.69z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M82.05 211.53L78.82 218 83.99 219.29 82.05 211.53z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M64.05 189.36L59.02 184.16 56.08 188.61 64.05 189.36z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M63.02 209.57L68.9 205.36 64.93 201.8 63.02 209.57z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M201.91 240.37L207.8 236.16 203.83 232.6 201.91 240.37z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M308.82 193.33L313.96 198.42 316.8 193.9 308.82 193.33z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M416.61 203.15L413.37 209.62 418.55 210.91 416.61 203.15z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M449.47 207.98L446.23 214.45 451.41 215.75 449.47 207.98z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M465.9 183.34L462.66 189.81 467.84 191.1 465.9 183.34z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M329.5 215.78L324.47 210.58 321.53 215.03 329.5 215.78z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M319.75 327.79L314.72 322.59 311.79 327.04 319.75 327.79z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M262.52 36.33L268.4 32.12 264.43 28.56 262.52 36.33z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M356.68 246.28L362.56 242.07 358.59 238.51 356.68 246.28z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M127.49 226.84L133.38 222.63 129.41 219.07 127.49 226.84z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M359.74 277.68L354.6 272.6 351.76 277.11 359.74 277.68z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M251.95 267.86L255.19 261.39 250.01 260.1 251.95 267.86z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M219.09 263.03L222.33 256.56 217.15 255.27 219.09 263.03z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M309.58 257.17L314.61 262.37 317.55 257.92 309.58 257.17z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M339.06 255.24L344.09 260.44 347.03 255.98 339.06 255.24z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M381.59 348.94L386.62 354.14 389.56 349.69 381.59 348.94z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M275.56 278.41L269.68 282.62 273.65 286.18 275.56 278.41z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M241.03 241.79L235.15 246 239.12 249.56 241.03 241.79z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M464.61 332.79L467.84 326.32 462.66 325.03 464.61 332.79z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M431.74 253.58L434.98 247.11 429.8 245.82 431.74 253.58z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M450.78 329.91L444.9 334.12 448.87 337.68 450.78 329.91z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M311.88 224.73L306 228.94 309.97 232.5 311.88 224.73z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M204.98 271.78L199.84 266.69 197 271.2 204.98 271.78z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M97.19 261.95L100.42 255.49 95.25 254.19 97.19 261.95z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M175.48 270.17L178.71 263.7 173.54 262.41 175.48 270.17z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M64.33 257.12L67.56 250.66 62.39 249.36 64.33 257.12z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M47.9 281.77L51.13 275.3 45.96 274.01 47.9 281.77z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M184.3 249.33L189.33 254.53 192.26 250.08 184.3 249.33z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M82.33 279.29L87.36 284.49 90.3 280.04 82.33 279.29z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M120.8 272.5L114.92 276.71 118.89 280.27 120.8 272.5z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M140.43 379.03L134.55 383.24 138.52 386.8 140.43 379.03z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M255.77 331.02L249.89 335.23 253.86 338.79 255.77 331.02z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M386.3 238.26L380.42 242.47 384.39 246.03 386.3 238.26z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M203.83 386.54L208.97 391.63 211.81 387.11 203.83 386.54z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M93.9 340.72L99.04 345.8 101.88 341.29 93.9 340.72z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M261.84 399.74L258.61 406.21 263.78 407.5 261.84 399.74z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M183.56 308.35L180.32 314.82 185.5 316.11 183.56 308.35z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M294.7 404.58L291.47 411.04 296.64 412.34 294.7 404.58z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M311.13 379.93L307.9 386.4 313.07 387.69 311.13 379.93z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M204.21 410.44L199.18 405.24 196.25 409.69 204.21 410.44z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M128.68 350.28L123.66 345.08 120.72 349.53 128.68 350.28z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M238.24 389.2L244.12 384.99 240.15 381.43 238.24 389.2z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M272.77 425.82L278.65 421.61 274.68 418.05 272.77 425.82z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M45.67 366.43L42.43 372.9 47.61 374.19 45.67 366.43z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M78.53 371.26L75.3 377.73 80.47 379.03 78.53 371.26z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M60.52 349.1L55.5 343.9 52.56 348.35 60.52 349.1z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M201.91 449.98L207.8 445.78 203.83 442.21 201.91 449.98z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M358.59 309.27L363.73 314.36 366.57 309.84 358.59 309.27z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M416.61 396.85L413.37 403.32 418.55 404.61 416.61 396.85z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M338.32 314.26L335.09 320.73 340.26 322.02 338.32 314.26z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M449.47 401.68L446.23 408.15 451.41 409.44 449.47 401.68z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M465.9 377.04L462.66 383.5 467.84 384.8 465.9 377.04z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M329.5 418.27L324.47 413.08 321.53 417.53 329.5 418.27z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M431.46 379.51L426.44 374.31 423.5 378.76 431.46 379.51z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M393 386.3L398.88 382.09 394.91 378.53 393 386.3z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M427.53 422.92L433.41 418.71 429.44 415.15 427.53 422.92z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M356.68 455.89L362.56 451.68 358.59 448.12 356.68 455.89z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M104.84 415.44L110.72 411.23 106.75 407.67 104.84 415.44z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M203.83 463.68L208.97 464.77 211.81 463.8 203.83 463.68z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M154.05 443.25L159.19 444.35 162.03 443.38 154.05 443.25z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M97.42 441.87L102.56 442.96 105.4 441.99 97.42 441.87z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M261.84 445.36L258.61 446.75 263.78 447.03 261.84 445.36z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M183.56 443.6L180.32 444.99 185.5 445.27 183.56 443.6z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M294.7 446.4L291.47 447.79 296.64 448.07 294.7 446.4z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M311.13 441.11L307.9 442.5 313.07 442.78 311.13 441.11z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M190.92 460.9L185.9 459.78 182.96 460.74 190.92 460.9z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M174.73 448.07L169.71 446.96 166.77 447.91 174.73 448.07z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M132.21 443.92L127.18 442.81 124.24 443.76 132.21 443.92z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M276.7 441.64L271.67 440.53 268.73 441.48 276.7 441.64z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M238.24 443.1L244.12 442.2 240.15 441.43 238.24 443.1z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M172.03 441.65L177.91 440.74 173.94 439.98 172.03 441.65z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M275.67 445.98L281.55 445.08 277.58 444.31 275.67 445.98z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M272.77 450.96L278.65 450.06 274.68 449.29 272.77 450.96z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M49.19 447.39L45.96 448.78 51.13 449.06 49.19 447.39z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M82.05 448.43L78.82 449.82 83.99 450.1 82.05 448.43z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M51.65 458.96L46.62 457.85 43.68 458.81 51.65 458.96z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M73.92 461.6L79.8 460.7 75.83 459.93 73.92 461.6z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M60.12 452.99L66 452.09 62.03 451.32 60.12 452.99z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M201.91 454.62L207.8 453.72 203.83 452.95 201.91 454.62z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M358.59 443.8L363.73 444.89 366.57 443.92 358.59 443.8z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M308.82 444.52L313.96 445.62 316.8 444.65 308.82 444.52z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M416.61 446.63L413.37 448.02 418.55 448.3 416.61 446.63z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M338.32 444.87L335.09 446.26 340.26 446.53 338.32 444.87z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M449.47 447.67L446.23 449.06 451.41 449.34 449.47 447.67z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M274.1 459.93L270.87 461.32 276.04 461.6 274.1 459.93z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M465.9 442.38L462.66 443.77 467.84 444.05 465.9 442.38z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M358.98 448.93L353.95 447.81 351.01 448.77 358.98 448.93z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M329.5 449.34L324.47 448.23 321.53 449.18 329.5 449.34z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M452.29 461.06L447.27 459.94 444.33 460.9 452.29 461.06z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M431.46 442.91L426.44 441.79 423.5 442.75 431.46 442.91z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M393 444.37L398.88 443.46 394.91 442.7 393 444.37z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M326.8 442.92L332.68 442.01 328.71 441.25 326.8 442.92z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M430.43 447.25L436.31 446.35 432.34 445.58 430.43 447.25z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M427.53 452.23L433.41 451.33 429.44 450.56 427.53 452.23z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M391.74 468.92L388.5 470.31 393.68 470.59 391.74 468.92z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M424.6 469.96L421.37 471.35 426.54 471.63 424.6 469.96z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M406.59 465.2L401.57 464.08 398.63 465.04 406.59 465.2z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M405.56 469.54L411.44 468.64 407.47 467.87 405.56 469.54z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M402.66 474.52L408.54 473.62 404.57 472.85 402.66 474.52z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M307.98 466.44L313.86 465.53 309.89 464.77 307.98 466.44z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M127.49 451.72L133.38 450.81 129.41 450.05 127.49 451.72z"
                ></path>
                <path
                  fill="#9c9c9c"
                  d="M110.4 458.84L115.54 459.93 118.38 458.96 110.4 458.84z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M131.08 463.66L126.06 462.55 123.12 463.5 131.08 463.66z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M88.56 459.51L83.53 458.39 80.59 459.35 88.56 459.51z"
                ></path>
                <path
                  fill="#F9A948"
                  d="M83.84 467.31L89.73 466.4 85.76 465.64 83.84 467.31z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <RandomPicker />
      </MaxWidthWrapper>
    </GridBackgroundDemo>
  );
};

export default Projects;
