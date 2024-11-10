"use client";
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WebDevSection from "@/components/WebDevSection";
import { GridBackgroundDemo } from "@/components/ui/BackgroundGrid";
import { Suspense, useRef } from "react";
import LoadingPage from "@/components/LoadingPage";
import Projects from "@/components/Projects";
import { MdDarkMode, MdOpenInNew } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import HireMeDialog from "@/components/HireMeDialog";
import ClickMeButton from "@/components/ui/ClickMeButton";
import AvatarList from "@/components/ui/AvatarList";
import ProductTemplate from "@/components/ProductTemplate";
import SliderShow from "@/components/SliderShow";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  const startDiv = useRef<HTMLDivElement>(null);
  const workDiv = useRef<HTMLDivElement>(null);
  const workTwotDiv = useRef<HTMLDivElement>(null);
  const { setTheme } = useTheme();
  return (
    <Suspense fallback={<LoadingPage />}>
      <main className="flex min-h-screen flex-col w-full bg-zinc-100 dark:bg-slate-950 snap-y snap-proximity overflow-x-clip text-black dark:text-white relative">
        <div
          className="flex w-full min-h-screen snap-start"
          ref={startDiv}
          id="startSection"
        >
          <div className="absolute z-50 flex top-12 lg:top-4 right-2 lg:right-4 border-2 border-black dark:border-white rounded-full p-2">
            <MdDarkMode
              className="size-4 lg:size-6 dark:opacity-10 cursor-pointer dark:cursor-default"
              onClick={() => setTheme("dark")}
            />
            <IoSunny
              className="size-4 lg:size-6 opacity-10 dark:opacity-100 dark:cursor-pointer "
              onClick={() => setTheme("light")}
            />
          </div>
          <MaxWidthWrapper className="snap-start min-h-screen">
            <div className="z-50 absolute top-0 left-0 inset-0 grid grid-cols-5 h-12 items-center justify-center py-2 text-sm 2xl:text-lg lg:text-lg">
              <div className="group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer">
                <div className="relative py-1">
                  Home
                  <div className=" group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                </div>
              </div>
              <div className="group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer">
                <div
                  className="relative py-1"
                  onClick={() => {
                    workDiv.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  My work
                  <div className=" group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                </div>
              </div>
              <div className="group flex h-full rounded-lg items-center justify-center text-xl 2xl:text-3xl lg:text-3xl font-bold cursor-pointer">
                <div className="relative pb-1">
                  JDev
                  <div className="  opacity-100 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                </div>
              </div>
              <HireMeDialog>
                <div className="group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer">
                  <div className="relative py-1">
                    Hire me
                    <div className=" group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                  </div>
                </div>
              </HireMeDialog>
              <HireMeDialog>
                <div className="group flex w-full h-full rounded-lg items-center justify-center font-semibold cursor-pointer">
                  <div className="relative py-1">
                    Contact
                    <div className=" group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
                  </div>
                </div>
              </HireMeDialog>
            </div>
            <HeroSection />
          </MaxWidthWrapper>
        </div>
        <div
          className="flex w-full min-h-screen  snap-start"
          ref={workDiv}
          id="workSection"
        >
          <GridBackgroundDemo>
            <MaxWidthWrapper>
              <WebDevSection>
                <div className="flex flex-row w-full items-center justify-center gap-2 2xl:gap-8 mt-8">
                  <button
                    className="px-4 2xl:px-8 py-2 dark:bg-white dark:text-black darkborder-white bg-black text-white text-lg 2xl:text-2xl lg:text-2xl border-2 border-black rounded-lg"
                    onClick={() => {
                      workTwotDiv.current?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Explore more
                  </button>
                  <HireMeDialog>
                    <button className="px-4 2xl:px-8 py-2 dark:text-white dark:border-white text-black text-lg 2xl:text-2xl lg:text-2xl border-2 border-black rounded-lg">
                      Hire me
                    </button>
                  </HireMeDialog>
                </div>
              </WebDevSection>
            </MaxWidthWrapper>
          </GridBackgroundDemo>
        </div>

        <div
          className="flex w-full min-h-screen snap-start"
          ref={workTwotDiv}
          id="workThree"
        >
          <Projects />
        </div>
        <GridBackgroundDemo>
          <div
            className="flex flex-col   grid-cols-1 gap-0 w-full min-h-screen items-start justify-start relative dark:text-white snap-start pb-4 mt-8"
            id="componentSection"
          >
            <div className="mt-8 mb-16 flex w-full items-center justify-center -translate-y-12 2xl:-translate-y-6 text-center text-3xl lg:text-5xl 2xl:text-7xl font-semibold pb-8 drop-shadow-[5px_5px_8px_#FFBE00]/50 bg-clip-text text-transparent bg-gradient-to-b from-orange-400 from-10% to-orange-100 to-70% ">
              Custom-Built Interface Elements
            </div>
            <div className="flex w-full -translate-y-8">
              <MaxWidthWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-8 transition-all duration-500 ease-in-out">
                  <div className="flex flex-col w-full items-center justify-center bg-slate-950  p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <div className="group cursor-pointer flex text-2xl font-semibold bg-slate-950 rounded-lg  border-blue-500 border-2 relative hover:shadow-lg hover:shadow-blue-500 transition-all duration-500 ease-in-out">
                      <div className="z-0 absolute flex w-full h-full  bg-blue-500 border-blue-500 border-2  rounded-sm scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out" />
                      <h1 className="px-8 py-2 z-10 text-white">Hover me</h1>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-slate-950 text-white p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <ClickMeButton />
                  </div>
                  <div className="flex flex-col lg:col-span-2 2xl:col-span-1 bg-slate-950 w-full text-2xl items-center justify-center  py-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <AvatarList />
                  </div>
                  <div className="flex flex-col text-2xl lg:col-span-2 2xl:col-span-1 items-center justify-center ">
                    <ProductTemplate />
                  </div>
                  <div className="2xl:col-span-2 bg-slate-950 hidden 2xl:flex flex-col text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <SliderShow />
                  </div>
                </div>
              </MaxWidthWrapper>
            </div>
          </div>
        </GridBackgroundDemo>
        <div className="flex w-full min-h-screen  snap-start">
          <GridBackgroundDemo className={"items-start justify-start"}>
            <MaxWidthWrapper>
              <div className=" mb-8 flex w-full items-center justify-center -translate-y-12 2xl:-translate-y-6 text-center text-3xl lg:text-5xl 2xl:text-7xl font-semibold pb-8 drop-shadow-[5px_5px_8px_#FFBE00]/50 bg-clip-text text-transparent bg-gradient-to-b from-orange-400 from-10% to-orange-100 to-70% ">
                There is always more
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mb-8">
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/alif-thumbnail.jpg"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">
                      ALIF PETS LOVERS PLATFORM
                    </h2>
                    <p className="text-sm font-medium  mt-2">
                      Welcome to our pet-friendly platform, where finding a new
                      pet or giving one a loving home has never been easier.{" "}
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/alif"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://alif-mu.vercel.app/"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/funtime-thumbnail.jpg"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">
                      Discover Events Nearby and Start Hosting Your Own
                    </h2>
                    <p className="text-sm font-medium  mt-2">
                      Easily find or host exciting events around you, tailored
                      to your interests. Join a community that brings people
                      together for memorable activities and unforgettable
                      experiences!
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/funtime"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://funtime-two.vercel.app/"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/chat-thumbnail.png"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">
                      Chat application home page
                    </h2>
                    <p className="text-sm font-medium  mt-2">
                      Our web chat application provides a seamless, real-time
                      communication experience designed to keep users connected.
                      With an intuitive interface and fast message delivery,
                      users can chat individually or in groups, share multimedia
                      files, and engage in meaningful conversations.
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/custom-pages/tree/main/src/app/chat"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://custom-pages-eight.vercel.app/chat"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/newsletter-thumbnail.png"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">
                      Newsletter subscribe template
                    </h2>
                    <p className="text-sm font-medium  mt-2">
                      Our newsletter subscription page template features a
                      clean, modern design with a clear call-to-action,
                      encouraging users to subscribe effortlessly. Its fully
                      customizable to align with your brand and is optimized for
                      all devices, providing a seamless experience across
                      platforms.
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/custom-pages/tree/main/src/app/signup"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://custom-pages-eight.vercel.app/signup"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/multipagesform-thumbnail.png"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">Multi pages form</h2>
                    <p className="text-sm font-medium  mt-2">
                      This multi-page form is designed to streamline the data
                      collection process, guiding users step-by-step through
                      each section. Divided into several easy-to-navigate pages,
                      it ensures users can provide detailed information without
                      feeling overwhelmed. With progress tracking and clear
                      navigation, the form enhances the user experience by
                      allowing them to save their progress and return anytime,
                      making it perfect for comprehensive applications,
                      registrations, or surveys.
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/custom-pages/tree/main/src/app/multipagesform"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://custom-pages-eight.vercel.app/multipagesform"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flew flex-col w-full rounded-lg border-2 border-cyan-500/60 relative p-2 overflow-hidden group">
                  <Image
                    src="/bento.png"
                    width={800}
                    height={800}
                    className="aspect-video object-cover rounded-lg group-hover:brightness-50 transition-all duration-300 ease-in-out"
                    alt="alif thumbnail"
                  />
                  <div className="absolute left-0 bottom-0 flex flex-col w-full p-4 text-white bg-gradient-to-b from-cyan-500/50 to-transparent rounded-lg translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-300 ease-in-out">
                    <h2 className="font-semibold text-xl ">
                      Bento grid design
                    </h2>
                    <p className="text-sm font-medium  mt-2">
                      To grow your audience with a bento grid design, start by
                      defining your target audience and identifying what type of
                      content they enjoy. Next, plan a diverse content mix—use
                      the grid to balance posts that inform, inspire, entertain,
                      and engage. Then, schedule content consistently across
                      days, weeks, and months, keeping a steady stream that
                      aligns with your goals. Use feedback to optimize and
                      adjust your approach, focusing on content that performs
                      best. Lastly, repurpose high-performing content in
                      different formats to keep it fresh and engaging. This
                      approach helps sustain non-stop content while steadily
                      growing your audience.
                    </p>
                    <div className="flex flex-row items-end justify-end gap-4 w-full mt-4">
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://github.com/jalalDev7/custom-pages/tree/main/src/app/bento"
                          target="_blank"
                        >
                          <FaGithub className="size-6 shadow-md" />
                        </Link>
                      </div>
                      <div className="flex flex-row items-center rounded-lg text-white bg-gradient-to-b from-cyan-500/50 to-transparent p-2">
                        <Link
                          href="https://custom-pages-eight.vercel.app/bento"
                          target="_blank"
                        >
                          <MdOpenInNew className="size-6 shadow-md" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </GridBackgroundDemo>
        </div>
      </main>
    </Suspense>
  );
}
